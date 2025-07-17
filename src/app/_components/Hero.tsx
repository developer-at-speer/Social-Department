import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Launch Your SaaS Faster with T3 Stack
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-lg">
              A modern, production-ready SaaS boilerplate with Next.js, TypeScript, tRPC, Clerk auth, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/sign-up"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/demo"
                className="px-6 py-3 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-white/10">
              <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                  <code>{`// Your SaaS application is ready!
import { createSaaS } from 't3-saas';

const app = createSaaS({
  authentication: true,
  payments: true,
  dashboard: true,
  api: true,
});

// Start building!
app.launch();`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}