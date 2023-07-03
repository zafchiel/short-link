import { useQRCode } from "next-qrcode"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu"

export default function QRcode({ url }: { url: string }) {
  const { SVG, Canvas } = useQRCode()

  //   const downloadQRcode = async (size: number) => {
  //     const svg = document.getElementsByTagName("svg")[1]
  //     console.log(svg)

  //     const svgString = new XMLSerializer().serializeToString(svg)
  //     const canvas = document.createElement("canvas")
  //     const ctx = canvas.getContext("2d")
  //     const DOMURL = self.URL || self.webkitURL || self
  //     const img = new Image()
  //     const svgBlob = new Blob([svgString], {
  //       type: "image/svg+xml;charset=utf-8",
  //     })

  //     const url = DOMURL.createObjectURL(svgBlob)
  //     img.onload = () => {
  //       ctx?.drawImage(img, 0, 0)
  //       const dataUrl = canvas.toDataURL("image/png")
  //       DOMURL.revokeObjectURL(dataUrl)
  //       const link = document.createElement("a")
  //       link.download = "qr"
  //       link.href = dataUrl
  //       link.dataset.downloadurl = ["image/png", link.download, link.href].join(
  //         ":"
  //       )
  //       document.body.appendChild(link)
  //       link.click()
  //       document.body.removeChild(link)
  //     }
  //     img.src = url
  //   }

  const downloadCanva = () => {
    const canva = document.getElementsByTagName("canvas")[0]
    const link = document.createElement("a")
    link.download = "filename.png"
    link.href = canva.toDataURL()
    link.click()
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="min-h-[200px] w-full ">
          <SVG
            text={url}
            options={{
              type: "image/jpeg",
              margin: 1,
            }}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <Button
              variant="outline"
              className="w-full rounded-t-none font-semibold uppercase"
            >
              download
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex w-80 items-center justify-around">
            <DropdownMenuItem>800x800</DropdownMenuItem>
            <DropdownMenuItem>600x600</DropdownMenuItem>
            <DropdownMenuItem>400x400</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
