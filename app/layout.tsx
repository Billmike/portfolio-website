import type { Metadata } from "next";
import { Geist, Geist_Mono, Jura } from "next/font/google";
import { Winky_Rough } from "next/font/google";
import "./globals.css";
import { MobileNavigation } from "./components";

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const winkyRough = Winky_Rough({
  variable: "--font-winky-rough",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: 'Kayode – Full Stack Engineer',
  description: 'Portfolio of Kayode, a full stack software engineer focused on building elegant, performant web solutions.',
  metadataBase: new URL('https://stacklessdev.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' }
    ],
    apple: '/icon.png',
    shortcut: '/favicon.ico'
  },
  openGraph: {
    title: 'Kayode – Full Stack Engineer',
    description: 'Showcasing the work and experience of Kayode, senior full stack engineer.',
    url: 'https://stacklessdev.com',
    siteName: 'Kayode Portfolio',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jura.variable} ${geistSans.variable} antialiased leading-relaxed text-white font-sans`}
      >
        <MobileNavigation />
        {children}
      </body>
    </html>
  );
}
