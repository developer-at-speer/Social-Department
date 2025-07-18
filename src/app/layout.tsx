import "~/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "../components/common/Providers";
import { Header } from "~/components/common/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Social Department",
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
          <div className="relative min-h-screen bg-gradient-to-b from-blue-800 to-purple-900 text-white">
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>

            <footer className="mt-10 py-4 text-center text-white/60">
              <p className="text-sm">
                © {new Date().getFullYear()} Social Department. All rights
                reserved.
              </p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
