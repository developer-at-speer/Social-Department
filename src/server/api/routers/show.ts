import z from "zod";
import {
  authenticatedProcedure,
  createTRPCRouter,
  publicProcedure,
} from "../trpc";
import { shows } from "~/server/db/schema";
import { TRPCError } from "@trpc/server";

export const showRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const shows = await ctx.db?.query.shows.findMany();

    if (!shows) {
      return {
        shows: [],
      };
    }

    return {
      shows,
    };
  }),

  create: authenticatedProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const show = await ctx.db
        ?.insert(shows)
        .values({
          name: input.name,
          createdBy: ctx.user.id,
        })
        .returning();

      if (!show) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          cause: "Failed to create show",
        });
      }

      return {
        show: show[0],
      };
    }),
});
