import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header/Header";
import { RevealObserver } from "@/components/atoms/RevealObserver/RevealObserver";
import { siteConfig } from "@/config/site.config";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["cyrillic"]
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon/favicon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
    shortcut: ["/favicon/favicon.ico"],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/images/bg/hero-bg.avif",
        width: 2400,
        height: 1600,
        alt: "Автомобиль для трансфера Стимул",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/bg/hero-bg.avif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${rubik.variable}`}>
      <body>
        <Header />
        <RevealObserver />
        <main>
          {children}
        </main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteConfig.url}/#organization`,
                  name: siteConfig.name,
                  url: siteConfig.url,
                  sameAs: siteConfig.sameAs,
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}/#website`,
                  url: siteConfig.url,
                  name: siteConfig.name,
                  description: siteConfig.description,
                  inLanguage: "ru-RU",
                  publisher: {
                    "@id": `${siteConfig.url}/#organization`,
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
