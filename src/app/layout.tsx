import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sazzad Hossen",
  description:
    "Full-stack developer focused on building production-ready web applications using Next.js, React, and Node.js. Experienced in developing scalable systems including e-commerce platforms, booking systems, and real-time applications with secure authentication and payment integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      theme-data="light"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
