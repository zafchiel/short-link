import { useQRCode } from "next-qrcode"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu"
import { useRef } from "react"
import { Canvg } from "canvg"

export default function QRcode({ url }: { url: string }) {
  const { SVG } = useQRCode()
  const svgRef = useRef<HTMLDivElement | null>(null)

  const handleDownload = async (size: number) => {
    const svg = svgRef.current?.innerHTML
      .replace("<div>", "")
      .replace("</div>", "") as string

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

    const cvg = Canvg.fromString(ctx, svg)
    cvg.resize(size, size)
    await cvg.render()

    const link = document.createElement("a")
    link.download = "qrCode.png"
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div ref={svgRef} className="min-h-[200px] w-full">
          <SVG
            text={url}
            options={{
              type: "image/jpeg",
              margin: 1,
            }}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full" asChild>
            <Button
              variant="outline"
              className="w-full rounded-t-none font-semibold uppercase"
            >
              download
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex w-80 items-center justify-around">
            <DropdownMenuItem
              onClick={() => handleDownload(600)}
              className="cursor-pointer"
            >
              600x600
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleDownload(400)}
              className="cursor-pointer"
            >
              400x400
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleDownload(200)}
              className="cursor-pointer"
            >
              200x200
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
