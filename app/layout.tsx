import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Valmir — Landing Pages que Vendem | Desenvolvedor Web",
  description:
    "Crio landing pages rápidas e que convertem pra pequenos negócios. Stack moderna, entrega em até 7 dias.",
  openGraph: {
    title: "Valmir — Landing Pages que Vendem",
    description:
      "Páginas rápidas, responsivas e prontas pra rodar tráfego. Entrega em até 7 dias.",
    images: ["/og-image.png"],
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valmir — Landing Pages que Vendem",
    description: "Páginas rápidas, responsivas e prontas pra rodar tráfego.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
