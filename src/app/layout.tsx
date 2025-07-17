import "~/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "../components/common/Providers";
import { Header } from "~/components/landing-page/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "T3 SaaS Boilerplate",
  description:
    "A modern, production-ready SaaS boilerplate with Next.js, TypeScript, tRPC, Clerk auth, and more",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${inter.variable}`}>
        <Providers>
          <div className="min-h-screen bg-gradient-to-b from-blue-800 to-purple-900 text-white">
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
