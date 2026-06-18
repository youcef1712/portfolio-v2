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
    "Portfolio de Youcef Bendra, développeur Full Stack passionné. Angular, Spring Boot, Java, JavaScript, TypeScript et plus.",
  keywords: [
    "Youcef Bendra",
    "développeur",
    "full stack",
    "portfolio",
    "Angular",
    "Spring Boot",
    "Java",
    "TypeScript",
    "Lyon",
    "Grenoble",
    "développeur web",
  ],
  authors: [{ name: "Youcef Bendra" }],
  creator: "Youcef Bendra",
  metadataBase: new URL("https://youcefbendra.dev"),
  manifest: "/manifest.json",
  openGraph: {
    title: "Youcef Bendra — Développeur Full Stack",
    description:
      "Portfolio de Youcef Bendra, développeur Full Stack passionné basé à Lyon. Angular, Spring Boot, Java, TypeScript.",
    type: "website",
    locale: "fr_FR",
    siteName: "Youcef Bendra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youcef Bendra — Développeur Full Stack",
    description:
      "Développeur Full Stack passionné basé à Lyon. Angular, Spring Boot, Java, TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Youcef Bendra",
              jobTitle: "Développeur Full Stack",
              url: "https://youcefbendra.dev",
              sameAs: [
                "https://github.com/youcef1712",
                "https://www.linkedin.com/in/youcef-bendra-006aa5314/",
              ],
              email: "proetuyoucef@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lyon",
                addressCountry: "FR",
              },
              knowsAbout: [
                "Angular",
                "Spring Boot",
                "Java",
                "TypeScript",
                "JavaScript",
                "Docker",
                "Git",
              ],
            }),
          }}
        />
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
