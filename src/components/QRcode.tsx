import { useQRCode } from "next-qrcode"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu"
import { useCallback, useRef } from "react"
import { downloadBlob } from "@/lib/downloadBlob"

export default function QRcode({ url }: { url: string }) {
  const { SVG } = useQRCode()
  const svgRef = useRef<HTMLDivElement | null>(null)

  // const downloadCanva = () => {
  //   const canva = document.getElementsByTagName("canvas")[0]
  //   const link = document.createElement("a")
  //   link.download = "filename.png"
  //   link.href = canva.toDataURL()
  //   link.click()
  // }

  const downloadSVG = useCallback(() => {
    if (svgRef === null) return

    const svg = svgRef.current?.innerHTML
    const blob = new Blob([svg as string], { type: "image/svg+xml" })
    downloadBlob(blob, `QRcode.svg`)
  }, [])

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
        <Button
          onClick={downloadSVG}
          variant="outline"
          className="w-full rounded-t-none font-semibold uppercase"
        >
          download
        </Button>
        {/* <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <Button
              variant="outline"
              className="w-full rounded-t-none font-semibold uppercase"
            >
              download
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex w-80 items-center justify-around">
            <DropdownMenuItem onClick={downloadSVG} className="cursor-pointer">
              800x800
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              600x600
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              400x400
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </>
  )
}
