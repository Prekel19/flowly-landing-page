import type { Metadata } from "next";
import { Inter, Noto_Sans, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const stixTwoText = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-stix",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowly",
  description: "Landing page of flowly task manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${stixTwoText.variable} ${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
