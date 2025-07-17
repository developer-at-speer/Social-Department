// src/app/not-found.tsx
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Header } from "~/components/landing-page/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-purple-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <div className="text-9xl font-extrabold text-yellow-400 mb-4">404</div>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse delay-150"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse delay-300"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-300 max-w-lg mx-auto mb-8">
          We couldn&apos;t find the page you were looking for. It might have been moved, deleted, or never existed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-500"
            asChild
          >
            <Link href="/">Go Home</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white hover:bg-white/20 text-black hover:text-yellow-300"
            asChild
          >
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </main>
      
      <footer className="absolute bottom-0 left-0 right-0 py-4 text-center text-gray-400">
        <p className="text-sm">
          © {new Date().getFullYear()} T3 SaaS Boilerplate. All rights reserved.
        </p>
      </footer>
    </div>
  );
}