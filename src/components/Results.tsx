import QRcode from "./QRcode";
import ShortLink from "./ShortLink";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface Props {
	shortUrl: string | undefined;
	originalUrl: string;
}

export default function Results({ shortUrl, originalUrl }: Props) {
	if (!shortUrl || !originalUrl) return null;

	return (
		<Card className="m-3 h-full p-3">
			<CardHeader className="mb-3 p-2">
				<ShortLink shortUrl={shortUrl} />
			</CardHeader>
			<CardContent className="p-2">
				<QRcode url={originalUrl} />
			</CardContent>
		</Card>
	);
}
