// src/app/not-found.tsx
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="mb-8">
        <div className="mb-4 text-9xl font-extrabold text-yellow-400">404</div>
        <div className="mb-6 flex items-center justify-center space-x-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-400"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-400 delay-150"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-400 delay-300"></div>
        </div>
      </div>

      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Page Not Found</h1>
      <p className="mx-auto mb-8 max-w-lg text-xl text-gray-300">
        We couldn&apos;t find the page you were looking for. It might have been
        moved, deleted, or never existed.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
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
          className="border-white text-black hover:bg-white/20 hover:text-yellow-300"
          asChild
        >
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
