import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Original users table (kept for reference)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Visitor counter table
export const visitorCounter = pgTable("visitor_counter", {
  id: serial("id").primaryKey(),
  count: integer("count").notNull().default(0),
  lastUpdated: timestamp("last_updated").notNull().defaultNow(),
});

export const visitorCounterSchema = createInsertSchema(visitorCounter);
export type VisitorCounter = typeof visitorCounter.$inferSelect;

// Referrals table
export const referrals = pgTable("referrals", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company").notNull(),
  position: text("position").notNull(),
  jobLink: text("job_link"),
  message: text("message"),
  resumeLink: text("resume_link").notNull(),
  submittedAt: timestamp("submitted_at").notNull().defaultNow(),
  processed: boolean("processed").notNull().default(false),
});

export const insertReferralSchema = createInsertSchema(referrals).omit({
  id: true,
  processed: true,
});

export type InsertReferral = z.infer<typeof insertReferralSchema>;
export type Referral = typeof referrals.$inferSelect;
