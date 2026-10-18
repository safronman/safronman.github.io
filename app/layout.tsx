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
const jobTitle =
  "Senior Frontend Developer, преподаватель и руководитель обучения";
const title = `${name} — ${jobTitle}`;
const description =
  "Валерий Сафронов — Senior Frontend Developer, преподаватель и руководитель обучения. Опыт разработки веб-платформ, менторство и авторские учебные материалы.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle,
  description,
  url: siteUrl.toString(),
  image: new URL("/hero-portrait.png", siteUrl).toString(),
  sameAs: ["https://github.com/safronman", "https://t.me/safronman"],
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  applicationName: title,
  authors: [{ name, url: siteUrl }],
  creator: name,
  keywords: [
    "Senior Frontend Developer",
    "frontend-разработчик",
    "технический преподаватель",
    "руководитель обучения",
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
    siteName: title,
    title,
    description,
    images: [
      {
        url: "/hero-portrait.png",
        alt: "Валерий Сафронов за рабочим столом в студии",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [
      {
        url: "/hero-portrait.png",
        alt: "Валерий Сафронов за рабочим столом в студии",
      },
    ],
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
