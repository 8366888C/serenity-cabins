import type { Metadata } from "next";
import "./globals.css";
import { Petit_Formal_Script } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const petit = Petit_Formal_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-petit",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Serenity Cabins",
    default: "Serenity Cabins",
  },
  description:
    "Luxurious cabin hotels, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${petit.variable} no-scrollbar scroll-smooth`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
