import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const golosText = localFont({
  src: "./fonts/GolosText-wght.ttf",
  variable: "--font-golos",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Technical Educator — Frontend-направление",
  description: "Портфолио технического эксперта по обучению.",
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
