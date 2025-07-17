import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

export function Hero() {
  return (
    <section className="pt-12 pb-8 md:pt-20 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Company branding badge */}
          <Badge
            variant="outline"
            className="mb-6 border-purple-400/30 bg-purple-900/40 px-3 py-1 text-sm font-semibold text-yellow-300"
          >
            By SocialDept.AI
          </Badge>

          {/* Main headline with T3 boilerplate branding */}
          <h1 className="mb-6 bg-gradient-to-r from-white via-purple-300 to-indigo-400 bg-clip-text text-4xl leading-tight font-extrabold text-transparent md:text-5xl lg:text-6xl">
            The Ultimate T3 Stack SaaS Boilerplate
          </h1>

          {/* Description with enhanced styling */}
          <p className="mb-8 max-w-2xl bg-gradient-to-r from-purple-100/80 via-indigo-100/80 to-purple-100/80 bg-clip-text text-lg leading-relaxed font-medium text-transparent md:text-xl">
            Launch your next project in minutes with a production-ready,
            typesafe boilerplate featuring Next.js, Drizzle, Clerk, and
            shadcn/ui.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
              asChild
            >
              <Link href="/sign-up">Get Started for Free</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/20 hover:text-yellow-300"
              asChild
            >
              <Link
                href="https://github.com/developer-at-speer/T3-boilerplate"
                target="_blank"
              >
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Code example with both brandngs */}
          <div className="mt-16 w-full max-w-2xl overflow-hidden rounded-xl border border-purple-500/20 bg-gray-900/50 shadow-2xl backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600"></div>
            <div className="p-5">
              <div className="mb-4 flex items-center">
                <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-gray-400">app.ts</span>
              </div>
              <pre className="overflow-x-auto rounded-md bg-black/70 p-4 text-left text-sm text-gray-100">
                <code>{`// YourNextSaaS.com
// Built with the T3 Boilerplate by SocialDept.AI

import { createApp } from 't3-saas';

const app = createApp({
  name: 'YourCompanyName',
  features: {
    authentication: true,
    payments: true,
    dashboard: true,
    api: true,
  },
  theme: 'socialdept'
});

// Launch your SaaS product faster!
app.launch();`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
