import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationBar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import MouseFollow from "@/components/effects/mouse";
import { Providers } from "@/components/effects/transition";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

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
            <head>
                <script
                    defer
                    src="https://analytics.okankoca.dev/script.js"
                    data-website-id="e69738d8-34fd-4671-a13d-b05769e24970"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <MouseFollow />
                <ThemeProvider
                    attribute={"class"}
                    defaultTheme={"system"}
                    enableSystem
                    // disableTransitionOnChange
                >
                    <Providers>
                        <div className="flex flex-col min-h-screen">
                            <NavigationBar />
                            <main className="flex-grow z-10">{children}</main>
                        </div>
                        <Toaster />
                    </Providers>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
