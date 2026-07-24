import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteUrl } from "./site-url";

const golosText = localFont({
  src: "./fonts/GolosText-wght.ttf",
  variable: "--font-golos",
  display: "swap",
});

const name = "Валерий Сафронов";
const title = "Валерий Сафронов — Technical Educator по frontend-разработке";
const description =
  "Портфолио Валерия Сафронова — технического эксперта по обучению frontend-разработке.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle: "Technical Educator",
  description,
  url: siteUrl.toString(),
  image: new URL("/hero-portrait.png", siteUrl).toString(),
  sameAs: ["https://github.com/safronman", "https://t.me/safronman"],
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  applicationName: "Валерий Сафронов — Technical Educator",
  authors: [{ name, url: siteUrl }],
  creator: name,
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
    siteName: "Валерий Сафронов — Technical Educator",
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
      <body>
        <script
          type="application/ld+json"
          /* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is static and escapes angle brackets. */
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
