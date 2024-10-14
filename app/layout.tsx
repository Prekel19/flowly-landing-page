import type { Metadata } from "next";
import { Noto_Sans, STIX_Two_Text } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

const stixTwoText = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-stix",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowly",
  description:
    "Strona startowa aplikacji, która pomaga w zarządzaniu zadaniami o nazwie Flowly",
  generator: "Next.js",
  applicationName: "Flowly",
  openGraph: {
    title: "Flowly",
    description:
      "Strona startowa aplikacji, która pomaga w zarządzaniu zadaniami o nazwie Flowly",
    url: "https://flowly-site.vercel.app",
    siteName: "Flowly",
    images: "./assets/og-image.png",
    locale: "pl",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${stixTwoText.variable} ${notoSans.variable} antialiased relative`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
