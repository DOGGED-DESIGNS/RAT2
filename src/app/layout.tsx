import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Maxwidthwrapper from "@/components/Maxwidthwrapper";
import { constructMetadata } from "@/lib/utils";
import Watsapp from "@/components/Watsapp";
import Telegram from "@/components/Telegram";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className=" ">
          <Watsapp />

          <Telegram />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
