import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "~/env";
import * as schema from "./schema";

// ⬇️ MODIFICATION START ⬇️

// Declare the client variable which could be a drizzle instance or null
let dbClient;

// Only try to connect if the DATABASE_URL is provided
if (env.DATABASE_URL) {
  const client = postgres(env.DATABASE_URL, { prepare: false });
  dbClient = drizzle(client, { schema });
} else {
  // If no DATABASE_URL is set, we'll log a warning.
  // The app will run, but any database queries will fail.
  console.warn("⚠️ DATABASE_URL is not set. Running in no-database mode.");
  dbClient = null;
}

// Export the client. It might be null.
export const db = dbClient;

// ⬆️ MODIFICATION END ⬆️
