import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Amatic_SC } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Nav/NavBar";
import TopNav from "./components/Nav/TopNav";
import Footer from "./components/Footer/Footer";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";

const mont = Montserrat({ subsets: ["latin"] });

const amatic = Amatic_SC({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-amatic' });

export const metadata: Metadata = {
  title: "Galerie Marzouk",
  description: "Generated by create next app",
};

type props = {
  links: string[]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <div className="bg-orange-50">
        <CartProvider>
          <TopNav/>
          <Navbar/>
          <ShoppingCartModal />
              {children}
          <Footer/>
        </CartProvider>
        </div>
        </body>
    </html>
  );
}
