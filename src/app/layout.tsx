import "./globals.css";
import GlobalProviders from "@/components/GlobalProviders";
import localFont from "next/font/local";

const nohemi = localFont({
	src: "../../fonts/Nohemi-VF.ttf",
	display: "swap",
});

export const metadata = {
	title: "ShrtLink",
	description: "Fast app generating short links, running on edge",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${nohemi.className}`}>
				<GlobalProviders>{children}</GlobalProviders>
			</body>
		</html>
	);
}
