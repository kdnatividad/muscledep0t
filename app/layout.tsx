import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const drukText = localFont({
  src: "../public/fonts/DrukWide-Medium-Trial.otf",
  variable: "--font-druktext",
  weight: "500",
});

export const metadata: Metadata = {
  title: "MuscleDepot",
  description: "Your local training ground for real progress.",
  icons: {
    icon: "/md-orange.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${drukText.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
