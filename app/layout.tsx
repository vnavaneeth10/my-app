import "./globals.css";
import Link from "next/link";
import Image from 'next/image'
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import printForge from "@/public/printforge-logo.svg";
import printForgeLogo from "@/public/printforge-logo-icon.svg";
import type { RootLayoutProps } from "@/app/types"


const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})



export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href="/">
            <div className="relative">
              {/* Desktop logo */}
              <Image
                src={printForge}
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
                width={350}
              />
              {/* Mobile logo */}
              <Image
                src={printForgeLogo}
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
                width={350}
              />
            </div>
            </Link>

            <ul className="flex items-center gap-2.5">
              <li className="text-sm uppercase cursor-pointer">
                <Link href="/3d-models">3D Models</Link>
              </li>
              <li className="text-sm uppercase cursor-pointer">
                <Link href="/about">About</Link>
              </li>
            </ul>


          </nav>
        </header>

        {children}
        <footer>Footer content here</footer>
      </body>
    </html>
  );
}
