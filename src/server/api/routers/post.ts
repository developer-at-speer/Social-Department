import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

/*
  This is the example router for fictitious "posts", like blog posts.
*/

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      console.log("Mock create post:", input.name);
      // Return a dummy result
      return {
        id: Math.floor(Math.random() * 1000),
        name: input.name,
        createdAt: new Date(),
        createdById: "mock_user_id",
      };
    }),

  // ⬇️ THIS IS THE FIX ⬇️
  getLatest: publicProcedure.query(() => {
    // Return dummy data that matches the structure the frontend expects,
    // including the nested 'createdBy' object.
    return {
      id: 1,
      name: "My First Mock Post",
      createdAt: new Date(),
      createdById: "mock_user_id",
      // Add the nested object the frontend page needs
      createdBy: {
        id: "mock_user_id",
        firstName: "Mock",
        lastName: "User",
        profileImageUrl: "", // Can be empty
      },
    };
  }),
});
