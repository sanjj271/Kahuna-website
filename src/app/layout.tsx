import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroller } from "@/components/layout/SmoothScroller";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kahuna | Cinematic Resort & Sanctuary",
  description: "Escape to a cinematic paradise hidden on the edge of the world. Welcome to Kahuna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-grain selection:bg-primary/30 selection:text-primary">
        <SmoothScroller>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
