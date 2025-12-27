import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Enrique Chagollán | Endodoncista Certificado en Piedras Negras",
  description:
    "Especialista en endodoncia con más de X años de experiencia. Tratamientos de conducto, retratamientos y atención dental de emergencia en Piedras Negras, Coahuila.",
  keywords:
    "endodoncia, endodoncista, tratamiento de conducto, Piedras Negras, dolor dental, especialista dental",
  authors: [{ name: "Dr. Enrique Chagollán" }],
  openGraph: {
    title: "Dr. Enrique Chagollán - Endodoncista",
    description:
      "Especialista en endodoncia - Tratamientos de conducto profesionales",
    type: "website",
    locale: "es_MX",
  },
};

export default async function RootLayout({
  children,
  params: { lang }
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  // Obtener los mensajes de traducción
  const messages = await getMessages();

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}