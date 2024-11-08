import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationBar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Okan Koca",
	description: "Software Engineer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute={"class"}
					defaultTheme={"system"}
					enableSystem
					// disableTransitionOnChange
				>
					<div className="flex flex-col min-h-screen">
						<NavigationBar />
						<main className="flex-grow flex">{children}</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
