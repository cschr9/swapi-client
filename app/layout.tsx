import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { FavouriteProvider } from "@/store/favourite-context";
import FavouriteInterface from "@/components/favourite-interface";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWAPI Challenge | Christian Schröder ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <FavouriteProvider>
        <body className={cn(inter.className, "bg-neutral-800 p-8 md:p-32")}>
          <>{children}</>
          <FavouriteInterface />
        </body>
      </FavouriteProvider>
    </html>
  );
}
