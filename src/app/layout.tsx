import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import AOSProvider from "./providers/aos";
import { Providers } from "./providers/Tanstack";
import Footer from "@/components/footer/page";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-google-sans",
  display: "swap",
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: "Fjordsmaken",
  description: "Landing Page Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSansFlex.variable} antialiased bg-[#eeede4]`}>
        <AOSProvider />
        <Providers>
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
