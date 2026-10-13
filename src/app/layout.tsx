import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import { Header } from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = { title: "Jonasch Herbstmarkt · Menü", description: "Das digitale Menü vom Jonasch Herbstmarkt." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body><Header />{children}<footer><span>Jonasch Herbstmarkt</span><span>Regional. Handgemacht. Herbstlich.</span><a className="footer-credit" href="https://www.geenie-media.ch/ueber-uns" target="_blank" rel="noreferrer" aria-label="Website gestaltet von Genie Media"><span>Gestaltet von</span><Image src="/geenie-signatur.png" alt="Genie Media" width={72} height={30} /></a><span>© 2026</span></footer><Analytics /></body></html>;
}
