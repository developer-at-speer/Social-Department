import {
  createTRPCRouter,
  publicProcedure,
  authenticatedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    const exampleMessageCount = 10;

    const messages = Array.from(
      { length: exampleMessageCount },
      (_, index) => ({
        id: index + 1,
        text: `Example message ${index + 1}`,
      }),
    );

    return {
      messages,
    };
  }),

  listSecret: authenticatedProcedure.query(({ ctx }) => {
    const exampleMessageCount = 10;

    const messages = Array.from(
      { length: exampleMessageCount },
      (_, index) => ({
        id: index + 1,
        text: `Secret message ${index + 1}`,
      }),
    );

    return {
      messages,
    };
  }),
});
