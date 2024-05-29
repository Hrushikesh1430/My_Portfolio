import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DataContextProvider } from "./context/Datacontext";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const Jsonld = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hrushikesh Tawde",
  jobTitle: "Full Stack Developer",
  url: "https://hrushikeshtawde.vercel.app/",
  sameAs: ["https://www.linkedin.com/in/hrushitawde", "https://github.com/Hrushikesh1430", "https://twitter.com/TawdeHrushikesh"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hrushikeshtawde.vercel.app/"),
  title: "Hrushikesh Tawde",
  description:
    "Passionate web developer specializing in HTML5, CSS3,Javascript and  React. Check out my portfolio for innovative solutions and creative projects.",
  keywords: ["Hrushikesh Tawde", "Hrushikesh", "Frontend developer", "web developer", "JavaScript", "React", "Node.js", "HTML", "CSS"],
  creator: "Hrushikesh Tawde",
  publisher: "Hrushikesh Tawde",
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
    apple: "apple-icon.png",
    other: {
      rel: "favicon.ico",
      url: "favicon.ico",
    },
  },
  openGraph: {
    title: "Hrushikesh Tawde",
    description:
      "Namaskar, my name is hrushikesh tawde and I am a full stack web developer specializing in HTML5, CSS3,Javascript and React. Do check out my portfolio for innovative solutions and creative projects.",
    siteName: "Hrushikesh Tawde",
    locale: "en_US",
    type: "website",
    url: "https://hrushikeshtawde.vercel.app/",
    images: "https://hrushikeshtawde.vercel.app/_next/image?url=%2Fprofile_1.jpeg&w=1200&q=75",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth scrollbar">
      <head>
        <meta name="google-site-verification" content="25J2RSU0nIRQMNowzL8CgQGJcjpfm_i-LN-VL_lUuFM" />
      </head>
      <GoogleTagManager gtmId="GTM-PKLRVD37" />
      <body className={`${inter.className} bg-dark `}>
        <DataContextProvider>{children}</DataContextProvider>
        <Script
          id="app-ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Jsonld, null, "\t"),
          }}
        />
      </body>
      <GoogleAnalytics gaId="GTM-PKLRVD37" />
    </html>
  );
}
