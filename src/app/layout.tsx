import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import CartSlide from "@/components/cart-slide";
;

const font = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pure Essence Creations",
  description: "Its a ecommerce store built with nextjs 15",
  icons: {
    icon: [
      { url: "/leaflogo.png", type: "image/png" },
    ],
    shortcut: ["/leaflogo.png"],
    apple: [
      { url: "/leaflogo.png", type: "image/png" }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#FCFAEF] ` }
      >
        <ModalProvider />
        <ToastProvider/>
        <Navbar />
        <CartSlide />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
