import { useQRCode } from "next-qrcode"
import { createElement } from "react"

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
      <div className="flex flex-col items-center md:flex-row">
        <div className="grow">
          <SVG
            text={url}
            options={{
              type: "image/jpeg",
              margin: 1,
            }}
          />
        </div>
        <div className="flex h-full items-center justify-between rounded-r-md border p-2 md:flex-col">
          <p className="text-l font-semibold uppercase">Download</p>
          <p>600x600</p>
          <p>400x400</p>
          <p>200x200</p>
        </div>
      </div>
    </>
  )
}
