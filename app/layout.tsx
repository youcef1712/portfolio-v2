import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Preloader } from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youcef Bendra — Développeur Full Stack",
  description:
    "Portfolio de Youcef Bendra, développeur Full Stack passionné. Angular, Spring Boot, Java, JavaScript et plus.",
  keywords: [
    "Youcef Bendra",
    "développeur",
    "full stack",
    "portfolio",
    "Angular",
    "Spring Boot",
    "Lyon",
  ],
  authors: [{ name: "Youcef Bendra" }],
  openGraph: {
    title: "Youcef Bendra — Développeur Full Stack",
    description:
      "Portfolio de Youcef Bendra, développeur Full Stack passionné basé à Lyon.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Preloader />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
