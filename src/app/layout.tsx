import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sen } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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

const font = Sen({
  weight: ["500", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "StableMax - Free AI Image Generation",
  description:
    "Transform your ideas into stunning images with StableMax. Create unique AI-generated artwork from text descriptions for free. Fast, easy, and no credit card required.",
  keywords: "AI image generation, text to image, free AI art, StableMax, image generator, AI artwork",
  openGraph: {
    title: "StableMax - Free AI Image Generation",
    description: "Create stunning AI-generated images from text descriptions. No cost, no limits.",
    type: "website",
    siteName: "StableMax",
  },
  twitter: {
    card: "summary_large_image",
    title: "StableMax - Free AI Image Generation",
    description: "Create stunning AI-generated images from text descriptions. No cost, no limits.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body> */}
      <body className={`${font.className}  antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
