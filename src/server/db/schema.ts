// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import type { PgColumnsBuilders } from "drizzle-orm/pg-core/columns/all";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `t3-boilerplate_${name}`);

function idHelper(d: PgColumnsBuilders) {
  return d.integer().primaryKey().generatedByDefaultAsIdentity();
}

function createdAtHelper(d: PgColumnsBuilders) {
  return d
    .timestamp({ withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull();
}

function updatedAtHelper(d: PgColumnsBuilders) {
  return createdAtHelper(d).$onUpdate(() => new Date());
}

function referenceUserHelper(d: PgColumnsBuilders) {
  return d.integer().references(() => users.id);
}

export const users = createTable("user", (d) => ({
  id: idHelper(d),
  clerkId: d.varchar({ length: 255 }).notNull().unique(), // Clerk user ID
  email: d.varchar({ length: 255 }),
  firstName: d.varchar({ length: 255 }),
  lastName: d.varchar({ length: 255 }),
  createdAt: createdAtHelper(d),
  updatedAt: updatedAtHelper(d),
}));

export const shows = createTable(
  "show",
  (d) => ({
    id: idHelper(d),
    name: d.varchar({ length: 256 }).notNull(),
    createdAt: createdAtHelper(d),
    updatedAt: updatedAtHelper(d),

    createdBy: referenceUserHelper(d),
  }),
  (t) => [index("name_idx").on(t.name)],
);

export const showEpisodes = createTable(
  "show_episode",
  (d) => ({
    id: idHelper(d),

    season: d.integer().notNull(),
    episode: d.integer().notNull(),
    title: d.varchar({ length: 256 }).notNull(),

    createdAt: createdAtHelper(d),
    updatedAt: updatedAtHelper(d),

    showId: d.integer().references(() => shows.id),
    createdBy: referenceUserHelper(d),
  }),
  (t) => [index("title_idx").on(t.title)],
);

export const teams = createTable(
  "team",
  (d) => ({
    id: idHelper(d),
    name: d.varchar({ length: 256 }).notNull(),

    createdAt: createdAtHelper(d),
    updatedAt: updatedAtHelper(d),

    createdBy: referenceUserHelper(d),
  }),
  (t) => [index("name_idx").on(t.name)],
);

export const campaigns = createTable(
  "campaign",
  (d) => ({
    id: idHelper(d),
    name: d.varchar({ length: 256 }).notNull(),

    businessObjective: d.varchar({ length: 512 }),
    kpis: d.varchar({ length: 512 }),
    valueProposition: d.varchar({ length: 1024 }),

    scheduleStart: d.timestamp({ withTimezone: true }),
    scheduleEnd: d.timestamp({ withTimezone: true }),

    createdAt: createdAtHelper(d),
    updatedAt: updatedAtHelper(d),

    showId: d.integer().references(() => shows.id),
    teamId: d.integer().references(() => teams.id),

    createdBy: referenceUserHelper(d),
  }),
  (t) => [index("show_id_idx").on(t.showId), index("team_id_idx").on(t.teamId)],
);

export const campaignClips = createTable("campaign_clip", (d) => ({
  id: idHelper(d),

  startSeconds: d.integer().notNull(),
  endSeconds: d.integer().notNull(),

  createdAt: createdAtHelper(d),
  updatedAt: updatedAtHelper(d),

  campaignId: d.integer().references(() => campaigns.id),
  createdBy: referenceUserHelper(d),
}));

/**
 * Relationships
 *
 * These provide convenient access to associated data.
 */

export const usersRelations = relations(users, ({ many }) => ({
  teams: many(teams),
  campaigns: many(campaigns),
}));

export const teamsRelations = relations(teams, ({ many }) => ({
  campaigns: many(campaigns),
  users: many(users),
}));

export const campaignRelations = relations(campaigns, ({ one, many }) => ({
  show: one(shows, { fields: [campaigns.showId], references: [shows.id] }),
  team: one(teams, { fields: [campaigns.teamId], references: [teams.id] }),
  clips: many(campaignClips),
}));

export const showRelations = relations(shows, ({ many }) => ({
  episodes: many(showEpisodes),
  campaigns: many(campaigns),
}));
