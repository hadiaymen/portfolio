import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hadi Aymen | AI & Full Stack Developer",
  description:
    "Hadi Aymen — Computer Science Student at CUSAT School of Engineering. Building intelligent software, AI-powered products, and modern digital experiences. Specializing in AI, Full-Stack Development, and UI/UX Design.",
  keywords: [
    "Hadi Aymen",
    "AI Developer",
    "Full Stack Developer",
    "Software Engineer",
    "UI/UX Designer",
    "CUSAT",
    "Portfolio",
    "Next.js",
    "React",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Hadi Aymen" }],
  openGraph: {
    title: "Hadi Aymen | AI & Full Stack Developer",
    description:
      "Building intelligent software, AI-powered products, and modern digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadi Aymen | AI & Full Stack Developer",
    description:
      "Building intelligent software, AI-powered products, and modern digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8f9fa] text-[#191c1d]">
        {children}
      </body>
    </html>
  );
}
