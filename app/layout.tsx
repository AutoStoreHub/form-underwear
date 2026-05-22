import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SocialProofToast } from "@/components/SocialProofToast";
import { SpinToWin } from "@/components/SpinToWin";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FORM — Healthy Underwear",
  description:
    "OEKO-TEX certified, bamboo and organic cotton underwear from HUHA, Boody, TBô, and Q for Quinn. Breathable, antimicrobial, and chemical-free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas text-ink">
        <CartProvider>
          <AnnouncementBar />
          {children}
          <CartDrawer />
          <SocialProofToast />
          <SpinToWin />
        </CartProvider>
      </body>
    </html>
  );
}
