import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteUrl } from "./site-url";

const golosText = localFont({
  src: "./fonts/GolosText-wght.ttf",
  variable: "--font-golos",
  display: "swap",
});

const title = "Technical Educator — Frontend-направление";
const description = "Портфолио технического эксперта по обучению.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  applicationName: "Technical Educator",
  keywords: [
    "технический преподаватель",
    "frontend",
    "обучение разработке",
    "портфолио",
  ],
  category: "education",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Technical Educator",
    title,
    description,
    images: [
      {
        url: "/hero-portrait.png",
        alt: "Technical Educator за рабочим столом в студии",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/hero-portrait.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f7fa",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={golosText.variable}>
      <body>{children}</body>
    </html>
  );
}
