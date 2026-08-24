import { Cinzel, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "ÆTHEL — Kinetic Haute Horology",
  description: "Interactive scrollytelling web experience showcasing a micro-mechanical timepiece.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cinzel.variable} ${spaceMono.variable} ${inter.variable} bg-basalt text-sandstone font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
