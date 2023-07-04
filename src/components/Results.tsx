import QRcode from "./QRcode"
import { Card, CardContent, CardHeader } from "./ui/card"
import ShortLink from "./ShortLink"
import { Skeleton } from "./ui/skeleton"

interface Props {
  shortUrl: string | undefined
  originalUrl: string
  isLoading: boolean
}

export default function Results({ shortUrl, originalUrl, isLoading }: Props) {
  if (!shortUrl || !originalUrl) return null

  if (isLoading) {
    return <Skeleton className="h-100% m-2 h-full" />
  }

  return (
    <Card className="m-3 h-full p-3">
      <CardHeader className="mb-3 p-2">
        <ShortLink shortUrl={shortUrl} />
      </CardHeader>
      <CardContent className="p-2">
        <QRcode url={originalUrl} />
      </CardContent>
    </Card>
  )
}
