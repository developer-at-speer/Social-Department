# Submission for Social Department

This repository contains a full-stack, type-safe web application built as a submission for the Social Department's take-home assessment. The project is bootstrapped with the modern T3 Stack and adheres to the specifications provided, utilizing Next.js 15 with the App Router, server-side logic with Server Actions, and a complete authentication flow.

The core of this application demonstrates best practices in modern web development, including strict TypeScript, environment variable management, and a clean, component-based architecture.

## Features

*   **Full-Stack Type Safety**: End-to-end type safety from the database to the front-end, with a strict `noImplicitAny` policy.
*   **User Authentication**: Secure sign-up, sign-in, and user management powered by [Clerk](https://clerk.com/).
*   **Type-Safe Server Actions**: Data mutations and queries are handled by Next.js Server Actions, validated with [Zod](https://zod.dev/), and managed with the `next-safe-action` library for robust error handling and type inference.
*   **Modern UI**: A clean and responsive user interface built with [Shadcn/ui](https://ui.shadcn.com/) and styled with [Tailwind CSS](https://tailwindcss.com/).
*   **Scalable Database ORM**: SQL database interactions are managed by a modern ORM ([Drizzle](https://orm.drizzle.team/) or [Prisma](https://prisma.io/)) for efficient and type-safe queries.

#All requirements mentioned in the doc were met. 
