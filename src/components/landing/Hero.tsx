import Link from "next/link";
import { Button } from "~/components/ui/button"; 

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* UPDATED: Headline changed for boilerplate branding */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-indigo-400 leading-tight">
            The Ultimate T3 Stack SaaS Boilerplate
          </h1>
          {/* UPDATED: Paragraph changed for boilerplate branding */}
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl">
            Launch your next project in minutes with a production-ready, typesafe boilerplate featuring Next.js, Drizzle, Clerk, and shadcn/ui.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
              <Link href="/sign-up" className="text-black">Get Started for Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/20" asChild>
              <Link href="https://github.com/developer-at-speer/T3-boilerplate" target="_blank" className="text-black">View on GitHub</Link>
            </Button>
          </div>

          <div className="mt-16 w-full max-w-2xl bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-purple-500/20">
            <div className="h-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600"></div>
            <div className="p-5">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="bg-black/70 text-left text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                <code>{`// YourNextSaaS.com
// Built with the T3 Boilerplate by SocialDept.AI

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const appRouter = createTRPCRouter({
  greeting: publicProcedure
    .query(() => {
      return 'Hello from your new SaaS!';
    }),
});

// Launch your app today!
startProductionServer();`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
