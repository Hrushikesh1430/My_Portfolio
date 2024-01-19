import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DataContextProvider } from "./context/Datacontext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hrushikesh Tawde",
  description: "Frontend developer Hrushikesh Tawde",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark `}>
        <DataContextProvider>{children}</DataContextProvider>
      </body>
    </html>
  );
}
