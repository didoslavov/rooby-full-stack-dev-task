import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rooody | Full Stack DEV",
  description: "Rooody - powefull tools for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <main className="m-auto grid max-w-[1440px] grid-cols-12 gap-x-[30px] bg-main-grey-100">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
