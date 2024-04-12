import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import { MusicPlayer } from "@/components/layout/musicPlayer/MusicPlayer";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beat Hub",
  description: "Tu tienda de Beats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} relative bg-terciario overflow-x-hidden`}
      >
        <Providers>
          <div id="app">
            <Header />
            <Toaster />
            <main className="[grid-area:main] mt-[3rem]">{children}</main>
            <MusicPlayer />
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
