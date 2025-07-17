# Submission for Social Department

This repository contains a full-stack, type-safe web application built as a submission for the Social Department's take-home assessment. The project is bootstrapped with the modern T3 Stack and adheres to the specifications provided, utilizing Next.js 15 with the App Router, server-side logic with Server Actions, and a complete authentication flow.

The core of this application demonstrates best practices in modern web development, including strict TypeScript, environment variable management, and a clean, component-based architecture.

## Features

*   **Full-Stack Type Safety**: End-to-end type safety from the database to the front-end, with a strict `noImplicitAny` policy.
*   **User Authentication**: Secure sign-up, sign-in, and user management powered by [Clerk](https://clerk.com/).
*   **Type-Safe Server Actions**: Data mutations and queries are handled by Next.js Server Actions, validated with [Zod](https://zod.dev/), and managed with the `next-safe-action` library for robust error handling and type inference.
*   **Modern UI**: A clean and responsive user interface built with [Shadcn/ui](https://ui.shadcn.com/) and styled with [Tailwind CSS](https://tailwindcss.com/).
*   **Scalable Database ORM**: T3 Stack offers flexibility in managing SQL database interactions with modern ORMs [Drizzle](https://orm.drizzle.team/) or [Prisma](https://prisma.io/). In this project, we showcase Drizzle integrated with [Neon Postgres](https://neon.com/).

# All requirements mentioned in the doc were met.

## Example Showcase

For a simple demonstration of the functionality, you can run the project locally with your API keys and database URL, and then login with your preferred provider and visit the Dashboard (`/dashboard`). Here, you can view some personal information, and add, view, and delete TV shows from associated with your user account.

Notice that if you try to visit the dashboard without being logged in, you are not permitted to do so.

For more information about how tRPC, Drizzle, and Clerk work, you can start by checking the files in `src/server/`, or the React components in `src/components`.
