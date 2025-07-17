import "~/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "T3 SaaS Boilerplate",
  description: "A modern, production-ready SaaS boilerplate with Next.js, TypeScript, tRPC, Clerk auth, and more",
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
        {children}
      </body>
    </html>
  );
}