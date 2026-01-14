import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import AOSProvider from "./providers/aos";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-google-sans",
  display: "swap",
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: "Restaurant",
  description: "Landing Page Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSansFlex.variable} antialiased bg-[#eeede4] overflow-hidden`}>
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
