import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LITHO Fotografie | Portraits & Hochzeiten in Köln",
  description:
    "Zeitlose Portrait-, Paar- und Hochzeitsfotografie in Köln und NRW. Ruhig, ehrlich und nahbar erzählt.",
  keywords: [
    "Fotograf Köln",
    "Hochzeitsfotograf Köln",
    "Portraitfotografie Köln",
    "Paarshooting Köln",
  ],
  openGraph: {
    title: "LITHO Fotografie",
    description: "Quiet moments, honestly told.",
    type: "website",
    locale: "de_DE",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
