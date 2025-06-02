import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const candidates = pgTable("candidates", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  title: text("title").notNull(),
  experience: integer("experience").notNull(), // years
  skills: text("skills").array().notNull(),
  resumeScore: integer("resume_score"), // 0-100
  technicalScore: integer("technical_score"), // 0-100
  experienceScore: integer("experience_score"), // 0-100
  cultureFitScore: integer("culture_fit_score"), // 0-100
  overallScore: integer("overall_score"), // 0-100
  status: text("status").notNull().default("screening"), // screening, interview, decision, offer, hired, rejected
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const interviews = pgTable("interviews", {
  id: serial("id").primaryKey(),
  candidateId: integer("candidate_id").references(() => candidates.id).notNull(),
  interviewerName: text("interviewer_name").notNull(),
  currentQuestion: integer("current_question").default(1),
  totalQuestions: integer("total_questions").default(8),
  technicalAccuracy: integer("technical_accuracy"), // 0-100
  communicationClarity: integer("communication_clarity"), // 0-100
  problemSolvingApproach: integer("problem_solving_approach"), // 0-100
  overallRating: decimal("overall_rating", { precision: 2, scale: 1 }), // 0.0-5.0
  status: text("status").default("in_progress"), // in_progress, completed
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const offers = pgTable("offers", {
  id: serial("id").primaryKey(),
  candidateId: integer("candidate_id").references(() => candidates.id).notNull(),
  baseSalary: integer("base_salary").notNull(),
  bonus: integer("bonus").default(0),
  equity: decimal("equity", { precision: 4, scale: 2 }), // percentage
  signingBonus: integer("signing_bonus").default(0),
  benefits: text("benefits").array().notNull(),
  startDate: timestamp("start_date"),
  status: text("status").default("draft"), // draft, sent, accepted, rejected
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const employees = pgTable("employees", {
  id: serial("id").primaryKey(),
  candidateId: integer("candidate_id").references(() => candidates.id),
  name: text("name").notNull(),
  role: text("role").notNull(),
  tenure: integer("tenure").notNull(), // days since start
  satisfactionScore: decimal("satisfaction_score", { precision: 2, scale: 1 }), // 0.0-10.0
  productivityScore: integer("productivity_score"), // 0-100
  integrationScore: integer("integration_score"), // 0-100
  flightRiskScore: integer("flight_risk_score"), // 0-100
  status: text("status").default("active"), // active, on_leave, terminated
  tags: text("tags").array().default([]),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const onboardingPlans = pgTable("onboarding_plans", {
  id: serial("id").primaryKey(),
  employeeId: integer("employee_id").references(() => employees.id).notNull(),
  week1Tasks: text("week1_tasks").array().notNull(),
  week3to6Tasks: text("week3to6_tasks").array().notNull(),
  week7to12Tasks: text("week7to12_tasks").array().notNull(),
  setupCompletion: integer("setup_completion").default(0), // 0-100
  teamIntegration: decimal("team_integration", { precision: 2, scale: 1 }).default("0.0"), // 0.0-5.0
  featuresDelivered: integer("features_delivered").default(0),
  mentorshipSessions: integer("mentorship_sessions").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Insert schemas
export const insertCandidateSchema = createInsertSchema(candidates).omit({
  id: true,
  createdAt: true,
});

export const insertInterviewSchema = createInsertSchema(interviews).omit({
  id: true,
  createdAt: true,
});

export const insertOfferSchema = createInsertSchema(offers).omit({
  id: true,
  createdAt: true,
});

export const insertEmployeeSchema = createInsertSchema(employees).omit({
  id: true,
  createdAt: true,
});

export const insertOnboardingPlanSchema = createInsertSchema(onboardingPlans).omit({
  id: true,
  createdAt: true,
});

// Types
export type Candidate = typeof candidates.$inferSelect;
export type InsertCandidate = z.infer<typeof insertCandidateSchema>;
export type Interview = typeof interviews.$inferSelect;
export type InsertInterview = z.infer<typeof insertInterviewSchema>;
export type Offer = typeof offers.$inferSelect;
export type InsertOffer = z.infer<typeof insertOfferSchema>;
export type Employee = typeof employees.$inferSelect;
export type InsertEmployee = z.infer<typeof insertEmployeeSchema>;
export type OnboardingPlan = typeof onboardingPlans.$inferSelect;
export type InsertOnboardingPlan = z.infer<typeof insertOnboardingPlanSchema>;
