import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollObserver from "./components/ScrollObserver";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pastor Jay · Sowers Ministry International",
    default: "Pastor Jay | Sowers Ministry International",
  },
  description:
    "Rev. Jayakumar Babu Salluri — Reaching the Unreached. Planting churches, training pastors, caring for orphans and widows across India since 2001.",
  icons: {
    icon: '/jay.png',
    apple: '/jay.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body>
        <ScrollObserver />
        <Nav />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
