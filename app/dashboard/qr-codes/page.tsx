"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ExternalLink, RefreshCw, Wifi } from "lucide-react"
import Image from "next/image"

export default function QRCodesPage() {
  const [menuUrl, setMenuUrl] = useState("https://foodtree.app/menu/delicious-bistro")
  const [wifiSsid, setWifiSsid] = useState("Bistro_Guest")
  const [wifiPassword, setWifiPassword] = useState("")
  const [qrColor, setQrColor] = useState("000000")

  // Helper to generate QR code URL using a public API
  const getQrCodeUrl = (data: string, color = "000000") => {
    const encodedData = encodeURIComponent(data)
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedData}&color=${color}&bgcolor=ffffff&margin=10`
  }

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = blobUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error downloading QR code:", error)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">QR Codes</h2>
        <p className="text-muted-foreground">Generate and manage QR codes for your menu, tables, and WiFi.</p>
      </div>

      <Tabs defaultValue="menu" className="space-y-4">
        <TabsList>
          <TabsTrigger value="menu">Menu QR</TabsTrigger>
          <TabsTrigger value="tables">Table QRs</TabsTrigger>
          <TabsTrigger value="wifi">WiFi QR</TabsTrigger>
        </TabsList>

        <TabsContent value="menu" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Menu QR Code</CardTitle>
                <CardDescription>
                  This QR code directs customers to your digital menu. Place it at the entrance or on tables.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="menu-url">Menu URL</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="menu-url"
                      value={menuUrl}
                      onChange={(e) => setMenuUrl(e.target.value)}
                      placeholder="https://your-restaurant.com/menu"
                    />
                    <Button variant="outline" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Customization</Label>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className={`w-8 h-8 p-0 rounded-full border-2 ${qrColor === "000000" ? "border-primary" : "border-transparent"}`}
                      style={{ backgroundColor: "#000000" }}
                      onClick={() => setQrColor("000000")}
                    />
                    <Button
                      variant="outline"
                      className={`w-8 h-8 p-0 rounded-full border-2 ${qrColor === "2563eb" ? "border-primary" : "border-transparent"}`}
                      style={{ backgroundColor: "#2563eb" }}
                      onClick={() => setQrColor("2563eb")}
                    />
                    <Button
                      variant="outline"
                      className={`w-8 h-8 p-0 rounded-full border-2 ${qrColor === "16a34a" ? "border-primary" : "border-transparent"}`}
                      style={{ backgroundColor: "#16a34a" }}
                      onClick={() => setQrColor("16a34a")}
                    />
                    <Button
                      variant="outline"
                      className={`w-8 h-8 p-0 rounded-full border-2 ${qrColor === "dc2626" ? "border-primary" : "border-transparent"}`}
                      style={{ backgroundColor: "#dc2626" }}
                      onClick={() => setQrColor("dc2626")}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setMenuUrl("https://foodtree.app/menu/delicious-bistro")}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset to Default
                </Button>
                <Button onClick={() => handleDownload(getQrCodeUrl(menuUrl, qrColor), "menu-qr.png")}>
                  <Download className="mr-2 h-4 w-4" />
                  Download PNG
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-3 flex flex-col items-center justify-center bg-muted/50">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <Image
                    src={getQrCodeUrl(menuUrl, qrColor) || "/placeholder.svg"}
                    alt="Menu QR Code"
                    width={200}
                    height={200}
                    className="rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-medium">Scan to view menu</p>
                  <p className="text-sm text-muted-foreground">{menuUrl}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tables" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Table QR Codes</CardTitle>
              <CardDescription>Generate unique QR codes for each table to track orders.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((tableNum) => (
                  <Card key={tableNum} className="overflow-hidden">
                    <div className="p-4 bg-muted/50 flex justify-center">
                      <div className="bg-white p-2 rounded-lg">
                        <Image
                          src={getQrCodeUrl(`${menuUrl || "/placeholder.svg"}?table=${tableNum}`, "000000")}
                          alt={`Table ${tableNum} QR`}
                          width={120}
                          height={120}
                          unoptimized
                        />
                      </div>
                    </div>
                    <div className="p-3 border-t flex items-center justify-between">
                      <span className="font-medium">Table {tableNum}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download All Table QRs (ZIP)
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="wifi" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>WiFi QR Code</CardTitle>
                <CardDescription>Allow customers to connect to your WiFi by scanning a code.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="wifi-ssid">Network Name (SSID)</Label>
                  <Input
                    id="wifi-ssid"
                    value={wifiSsid}
                    onChange={(e) => setWifiSsid(e.target.value)}
                    placeholder="Restaurant_Guest"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wifi-password">Password</Label>
                  <Input
                    id="wifi-password"
                    type="password"
                    value={wifiPassword}
                    onChange={(e) => setWifiPassword(e.target.value)}
                    placeholder="Leave empty if open network"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Encryption</Label>
                  <div className="flex gap-2">
                    <Badge variant="secondary">WPA/WPA2</Badge>
                    <Badge variant="outline">WEP</Badge>
                    <Badge variant="outline">None</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() =>
                    handleDownload(getQrCodeUrl(`WIFI:S:${wifiSsid};T:WPA;P:${wifiPassword};;`), "wifi-qr.png")
                  }
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download WiFi QR
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-3 flex flex-col items-center justify-center bg-muted/50">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <Image
                    src={getQrCodeUrl(`WIFI:S:${wifiSsid || "/placeholder.svg"};T:WPA;P:${wifiPassword};;`)}
                    alt="WiFi QR Code"
                    width={200}
                    height={200}
                    className="rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Wifi className="h-4 w-4" />
                    <p className="font-medium">{wifiSsid}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Scan to connect</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
