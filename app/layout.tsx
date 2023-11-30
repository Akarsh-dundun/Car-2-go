import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car-2-go",
  description: "Discover a wide range of cars in the world. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
