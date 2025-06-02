import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCandidateSchema, insertEmployeeSchema, insertInterviewSchema, insertOfferSchema, insertOnboardingPlanSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Candidates routes
  app.get("/api/candidates", async (req, res) => {
    try {
      const candidates = await storage.getCandidates();
      res.json(candidates);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch candidates" });
    }
  });

  app.get("/api/candidates/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const candidate = await storage.getCandidate(id);
      if (!candidate) {
        return res.status(404).json({ message: "Candidate not found" });
      }
      res.json(candidate);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch candidate" });
    }
  });

  app.post("/api/candidates", async (req, res) => {
    try {
      const validatedData = insertCandidateSchema.parse(req.body);
      const candidate = await storage.createCandidate(validatedData);
      res.status(201).json(candidate);
    } catch (error) {
      res.status(400).json({ message: "Invalid candidate data" });
    }
  });

  app.patch("/api/candidates/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const candidate = await storage.updateCandidate(id, updates);
      if (!candidate) {
        return res.status(404).json({ message: "Candidate not found" });
      }
      res.json(candidate);
    } catch (error) {
      res.status(500).json({ message: "Failed to update candidate" });
    }
  });

  // Employees routes
  app.get("/api/employees", async (req, res) => {
    try {
      const employees = await storage.getEmployees();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch employees" });
    }
  });

  app.get("/api/employees/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const employee = await storage.getEmployee(id);
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }
      res.json(employee);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch employee" });
    }
  });

  app.post("/api/employees", async (req, res) => {
    try {
      const validatedData = insertEmployeeSchema.parse(req.body);
      const employee = await storage.createEmployee(validatedData);
      res.status(201).json(employee);
    } catch (error) {
      res.status(400).json({ message: "Invalid employee data" });
    }
  });

  // Interviews routes
  app.get("/api/interviews", async (req, res) => {
    try {
      const interviews = await storage.getInterviews();
      res.json(interviews);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch interviews" });
    }
  });

  app.get("/api/candidates/:candidateId/interviews", async (req, res) => {
    try {
      const candidateId = parseInt(req.params.candidateId);
      const interviews = await storage.getInterviewsByCandidate(candidateId);
      res.json(interviews);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch interviews" });
    }
  });

  app.post("/api/interviews", async (req, res) => {
    try {
      const validatedData = insertInterviewSchema.parse(req.body);
      const interview = await storage.createInterview(validatedData);
      res.status(201).json(interview);
    } catch (error) {
      res.status(400).json({ message: "Invalid interview data" });
    }
  });

  // Offers routes
  app.get("/api/offers", async (req, res) => {
    try {
      const offers = await storage.getOffers();
      res.json(offers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch offers" });
    }
  });

  app.get("/api/candidates/:candidateId/offers", async (req, res) => {
    try {
      const candidateId = parseInt(req.params.candidateId);
      const offers = await storage.getOffersByCandidate(candidateId);
      res.json(offers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch offers" });
    }
  });

  app.post("/api/offers", async (req, res) => {
    try {
      const validatedData = insertOfferSchema.parse(req.body);
      const offer = await storage.createOffer(validatedData);
      res.status(201).json(offer);
    } catch (error) {
      res.status(400).json({ message: "Invalid offer data" });
    }
  });

  // Onboarding plans routes
  app.get("/api/onboarding-plans", async (req, res) => {
    try {
      const plans = await storage.getOnboardingPlans();
      res.json(plans);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch onboarding plans" });
    }
  });

  app.get("/api/employees/:employeeId/onboarding-plan", async (req, res) => {
    try {
      const employeeId = parseInt(req.params.employeeId);
      const plan = await storage.getOnboardingPlanByEmployee(employeeId);
      if (!plan) {
        return res.status(404).json({ message: "Onboarding plan not found" });
      }
      res.json(plan);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch onboarding plan" });
    }
  });

  app.post("/api/onboarding-plans", async (req, res) => {
    try {
      const validatedData = insertOnboardingPlanSchema.parse(req.body);
      const plan = await storage.createOnboardingPlan(validatedData);
      res.status(201).json(plan);
    } catch (error) {
      res.status(400).json({ message: "Invalid onboarding plan data" });
    }
  });

  // Analytics endpoints
  app.get("/api/analytics/engagement", async (req, res) => {
    try {
      const employees = await storage.getEmployees();
      const totalEmployees = employees.length;
      const avgSatisfaction = employees.reduce((sum, emp) => sum + parseFloat(emp.satisfactionScore || "0"), 0) / totalEmployees;
      const avgProductivity = employees.reduce((sum, emp) => sum + (emp.productivityScore || 0), 0) / totalEmployees;
      const highRiskEmployees = employees.filter(emp => (emp.flightRiskScore || 0) > 50).length;
      const retention90Day = ((totalEmployees - highRiskEmployees) / totalEmployees) * 100;

      res.json({
        overallSatisfaction: avgSatisfaction.toFixed(1),
        engagementScore: Math.round(avgProductivity),
        flightRisk: Math.round((highRiskEmployees / totalEmployees) * 100),
        retention90Day: Math.round(retention90Day),
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch analytics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
