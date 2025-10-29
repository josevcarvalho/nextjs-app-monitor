import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monitor",
  description: "Monitor de pedidos e clientes novos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${merriweatherSans.className} ${merriweatherSans.variable} antialiased `}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
