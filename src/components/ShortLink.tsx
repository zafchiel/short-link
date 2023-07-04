import { useEffect, useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip"
import Link from "next/link"

export default function ShortLink({ shortUrl }: { shortUrl: string }) {
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
    </TooltipProvider>
  )
}
