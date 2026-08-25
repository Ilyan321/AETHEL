import { Cinzel, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import MobileBlocker from "@/components/MobileBlocker";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://ilyan321.github.io/AETHEL/"),
  title: "ÆTHEL — Kinetic Haute Horlogerie",
  description: "Interactive scrollytelling web experience showcasing a micro-mechanical timepiece.",
  openGraph: {
    title: "ÆTHEL — Haute Horlogerie",
    description: "An ultra-luxury cinematic 3D web experience showcasing a micro-mechanical timepiece.",
    url: "https://ilyan321.github.io/AETHEL/",
    siteName: "ÆTHEL",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cinzel.variable} ${spaceMono.variable} ${inter.variable} bg-basalt text-sandstone font-sans antialiased overflow-x-hidden`}>
        <MobileBlocker />
        {children}
      </body>
    </html>
  );
}
