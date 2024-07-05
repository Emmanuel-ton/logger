import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import BottomAppBar from "@/components/BottomAppBar";


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logger",
  description: "A modern app for taking event logs",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-backg font-play">
        <NavBar/>
        <BottomAppBar/>
        {children}     
      </body>
    </html>
  );
}
