import type { Metadata } from "next";
import {Inter, Calistoga} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awais | Portfolio",
  description: "My portfolio website built with Next.js",
};


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  style: "normal",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-calistoga",
  style: "normal",
 weight: ["400"],
  display: "swap",
 
});

export default function RootLayout({
  children,
}: Readonly<{   
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.variable}  ${calistoga.variable} bg-gray-900 text-white antialiased font-sans`}>
        {children}
        </body>
    </html>
  );
}
