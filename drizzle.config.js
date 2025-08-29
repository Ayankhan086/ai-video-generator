import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/config/Schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_Ztx80kdwRFag@ep-long-field-adj3rc2k-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
});
