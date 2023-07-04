import { useEffect, useState } from "react"
import QRcode from "./QRcode"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "./ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip"

interface Props {
  shortUrl: string
  originalUrl: string
}

export default function Results({ shortUrl, originalUrl }: Props) {
  const [isTooltipOpen, setisTooltipOpen] = useState(true)

  useEffect(() => {
    const copyShortLink = async () => {
      try {
        await navigator.clipboard.writeText(shortUrl)
      } catch (error) {
        console.log(error)
      } finally {
        setTimeout(() => {
          setisTooltipOpen(false)
        }, 2000)
      }
    }
    copyShortLink()
  }, [shortUrl])
  return (
    <TooltipProvider>
      <Card className="m-3 p-3">
        <CardHeader className="mb-3 p-2">
          <Tooltip defaultOpen={true} open={isTooltipOpen}>
            <TooltipTrigger>
              <Link href={shortUrl} passHref>
                <h3 className="cursor-pointer break-all text-sm font-bold underline sm:text-xl">
                  {shortUrl}
                </h3>
              </Link>
              <TooltipContent className="p-2">
                <p>Copied to clipboard</p>
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>
        </CardHeader>
        <CardContent className="p-2">
          <QRcode url={originalUrl} />
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}
