import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import AOSProvider from "./providers/aos";
import { Providers } from "./providers/Tanstack";
import Footer from "@/components/footer/page";
import { Toaster } from 'react-hot-toast';

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
      <body className={`${googleSansFlex.variable} antialiased bg-[#eeede4] overflow-x-hidden max-width-[100vw]`}>
        <AOSProvider />
        <Providers>
        {children}
        <Footer />
        </Providers>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
