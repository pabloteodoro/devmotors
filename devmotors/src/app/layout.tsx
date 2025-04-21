import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oficina do seu Zé - Sua Oficina Especializada!",
  description: "Oficina em São Paulo, especializada em serviços automotivos de qualidade.",
  keywords: ["oficina", "ofiicina carros", "carros", "manutenção de carros"],
  openGraph: {
    title: "Oficina do seu Zé - Sua Oficina Especializada!",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        <p style={{ textAlign: "center", marginTop: 54 }}>
        Todos os Direitos Reservados por Pablo Teodoro @ {`${new Date().getFullYear()}`} -  Oficina do seu Zé
      </p>
      </body>
    </html>
  );
}
