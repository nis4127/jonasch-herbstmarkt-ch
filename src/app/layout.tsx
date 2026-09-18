import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = { title: "Jonasch Herbstmarkt · Menü", description: "Das digitale Menü vom Jonasch Herbstmarkt." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="de"><body><Header />{children}<footer><span>Jonasch Herbstmarkt</span><span>Regional. Handgemacht. Herbstlich.</span><span>© 2026</span></footer></body></html>; }
