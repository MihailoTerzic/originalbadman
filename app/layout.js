import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import TrackGrid from "./components/tracklist";
import CreditsSection from "./components/credits";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ORIGINAL BADMAN",
  description: "Corona - Original Badman by KDM Exclusive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <TrackGrid/>
        
        <Footer/>
        <Analytics/>
      </body>
    </html>
  );
}
