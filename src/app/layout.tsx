import type { Metadata } from "next";
import { Caudex, Eczar, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const eczar = Eczar({ subsets: ['latin'], display: 'swap',})
const caudex = Caudex({subsets: ['latin'], display: 'swap', weight: "400" })

export const metadata: Metadata = {
  title: "ZUMICO",
  description: "Zumikon Concert Orchestra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
