import QRcode from "./QRcode"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "./ui/card"

interface Props {
  shortUrl: string
  originalUrl: string
}

export default function Results({ shortUrl, originalUrl }: Props) {
  return (
    <Card className="m-3 p-3">
      <CardHeader className="mb-3 p-2">
        <Link href={shortUrl} passHref>
          <h3 className="cursor-pointer text-xl font-bold underline">
            {shortUrl}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="p-2">
        <QRcode url={originalUrl} />
      </CardContent>
    </Card>
  )
}
