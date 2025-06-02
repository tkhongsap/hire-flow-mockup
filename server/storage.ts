import { 
  candidates, 
  interviews, 
  offers, 
  employees, 
  onboardingPlans,
  type Candidate, 
  type Interview, 
  type Offer, 
  type Employee, 
  type OnboardingPlan,
  type InsertCandidate, 
  type InsertInterview, 
  type InsertOffer, 
  type InsertEmployee, 
  type InsertOnboardingPlan
} from "@shared/schema";

export interface IStorage {
  // Candidates
  getCandidates(): Promise<Candidate[]>;
  getCandidate(id: number): Promise<Candidate | undefined>;
  createCandidate(candidate: InsertCandidate): Promise<Candidate>;
  updateCandidate(id: number, updates: Partial<InsertCandidate>): Promise<Candidate | undefined>;
  
  // Interviews
  getInterviews(): Promise<Interview[]>;
  getInterview(id: number): Promise<Interview | undefined>;
  getInterviewsByCandidate(candidateId: number): Promise<Interview[]>;
  createInterview(interview: InsertInterview): Promise<Interview>;
  updateInterview(id: number, updates: Partial<InsertInterview>): Promise<Interview | undefined>;
  
  // Offers
  getOffers(): Promise<Offer[]>;
  getOffer(id: number): Promise<Offer | undefined>;
  getOffersByCandidate(candidateId: number): Promise<Offer[]>;
  createOffer(offer: InsertOffer): Promise<Offer>;
  updateOffer(id: number, updates: Partial<InsertOffer>): Promise<Offer | undefined>;
  
  // Employees
  getEmployees(): Promise<Employee[]>;
  getEmployee(id: number): Promise<Employee | undefined>;
  createEmployee(employee: InsertEmployee): Promise<Employee>;
  updateEmployee(id: number, updates: Partial<InsertEmployee>): Promise<Employee | undefined>;
  
  // Onboarding Plans
  getOnboardingPlans(): Promise<OnboardingPlan[]>;
  getOnboardingPlan(id: number): Promise<OnboardingPlan | undefined>;
  getOnboardingPlanByEmployee(employeeId: number): Promise<OnboardingPlan | undefined>;
  createOnboardingPlan(plan: InsertOnboardingPlan): Promise<OnboardingPlan>;
  updateOnboardingPlan(id: number, updates: Partial<InsertOnboardingPlan>): Promise<OnboardingPlan | undefined>;
}

export class MemStorage implements IStorage {
  private candidates: Map<number, Candidate> = new Map();
  private interviews: Map<number, Interview> = new Map();
  private offers: Map<number, Offer> = new Map();
  private employees: Map<number, Employee> = new Map();
  private onboardingPlans: Map<number, OnboardingPlan> = new Map();
  private currentIds = {
    candidates: 1,
    interviews: 1,
    offers: 1,
    employees: 1,
    onboardingPlans: 1,
  };

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed candidates
    const candidatesData: Candidate[] = [
      {
        id: 1,
        name: "Siriporn Rattanakul",
        email: "siriporn.r@email.com",
        title: "Senior Digital Marketing Manager",
        experience: 7,
        skills: ["Digital Strategy", "Brand Management", "Social Media", "Analytics", "Campaign Management"],
        resumeScore: 94,
        technicalScore: 88,
        experienceScore: 92,
        cultureFitScore: 96,
        overallScore: 94,
        status: "interview",
        notes: "Strong beverage marketing background with Chang Beer campaigns",
        createdAt: new Date('2024-01-15'),
      },
      {
        id: 2,
        name: "Nattapong Jirawat",
        email: "nattapong.j@email.com",
        title: "Sales Territory Manager",
        experience: 5,
        skills: ["Key Account Management", "Route-to-Market", "Trade Marketing", "Relationship Building", "Territory Planning"],
        resumeScore: 87,
        technicalScore: 85,
        experienceScore: 89,
        cultureFitScore: 91,
        overallScore: 87,
        status: "decision",
        notes: "Proven track record in FMCG sales with Coca-Cola Thailand",
        createdAt: new Date('2024-01-16'),
      },
      {
        id: 3,
        name: "Arisa Tanaka",
        email: "arisa.t@email.com",
        title: "IT Systems Analyst",
        experience: 4,
        skills: ["SAP", "Data Analysis", "Process Optimization", "SQL", "Project Management"],
        resumeScore: 78,
        technicalScore: 82,
        experienceScore: 75,
        cultureFitScore: 85,
        overallScore: 78,
        status: "screening",
        notes: "Strong ERP experience but needs industry-specific knowledge",
        createdAt: new Date('2024-01-17'),
      },
      {
        id: 4,
        name: "Somchai Pattanakit",
        email: "somchai.p@email.com",
        title: "HR Business Partner",
        experience: 6,
        skills: ["Employee Relations", "Talent Development", "Performance Management", "HR Analytics", "Change Management"],
        resumeScore: 85,
        technicalScore: 80,
        experienceScore: 88,
        cultureFitScore: 92,
        overallScore: 85,
        status: "interview",
        notes: "Excellent cultural fit with experience in Thai corporate environment",
        createdAt: new Date('2024-01-18'),
      },
    ];

    candidatesData.forEach(candidate => {
      this.candidates.set(candidate.id, candidate);
      this.currentIds.candidates = Math.max(this.currentIds.candidates, candidate.id + 1);
    });

    // Seed other data...
    const employeesData: Employee[] = [
      {
        id: 1,
        candidateId: 1,
        name: "Sarah Chen",
        role: "Senior Frontend Developer",
        tenure: 45,
        satisfactionScore: "9.2",
        productivityScore: 94,
        integrationScore: 88,
        flightRiskScore: 15,
        status: "active",
        tags: ["On Track", "High Performer"],
        createdAt: new Date('2024-01-01'),
      },
      {
        id: 2,
        candidateId: 2,
        name: "Marcus Rodriguez",
        role: "Full Stack Developer",
        tenure: 78,
        satisfactionScore: "6.8",
        productivityScore: 76,
        integrationScore: 62,
        flightRiskScore: 45,
        status: "active",
        tags: ["Needs Support", "Integration Issues"],
        createdAt: new Date('2023-11-15'),
      },
      {
        id: 3,
        candidateId: null,
        name: "Lisa Park",
        role: "UX Designer",
        tenure: 23,
        satisfactionScore: "8.5",
        productivityScore: 89,
        integrationScore: 91,
        flightRiskScore: 22,
        status: "active",
        tags: ["Excellent Start", "Team Favorite"],
        createdAt: new Date('2024-01-20'),
      },
    ];

    employeesData.forEach(employee => {
      this.employees.set(employee.id, employee);
      this.currentIds.employees = Math.max(this.currentIds.employees, employee.id + 1);
    });
  }

  // Candidates
  async getCandidates(): Promise<Candidate[]> {
    return Array.from(this.candidates.values());
  }

  async getCandidate(id: number): Promise<Candidate | undefined> {
    return this.candidates.get(id);
  }

  async createCandidate(candidateData: InsertCandidate): Promise<Candidate> {
    const id = this.currentIds.candidates++;
    const candidate: Candidate = {
      ...candidateData,
      id,
      createdAt: new Date(),
    };
    this.candidates.set(id, candidate);
    return candidate;
  }

  async updateCandidate(id: number, updates: Partial<InsertCandidate>): Promise<Candidate | undefined> {
    const candidate = this.candidates.get(id);
    if (!candidate) return undefined;
    
    const updated = { ...candidate, ...updates };
    this.candidates.set(id, updated);
    return updated;
  }

  // Interviews
  async getInterviews(): Promise<Interview[]> {
    return Array.from(this.interviews.values());
  }

  async getInterview(id: number): Promise<Interview | undefined> {
    return this.interviews.get(id);
  }

  async getInterviewsByCandidate(candidateId: number): Promise<Interview[]> {
    return Array.from(this.interviews.values()).filter(i => i.candidateId === candidateId);
  }

  async createInterview(interviewData: InsertInterview): Promise<Interview> {
    const id = this.currentIds.interviews++;
    const interview: Interview = {
      ...interviewData,
      id,
      createdAt: new Date(),
    };
    this.interviews.set(id, interview);
    return interview;
  }

  async updateInterview(id: number, updates: Partial<InsertInterview>): Promise<Interview | undefined> {
    const interview = this.interviews.get(id);
    if (!interview) return undefined;
    
    const updated = { ...interview, ...updates };
    this.interviews.set(id, updated);
    return updated;
  }

  // Offers
  async getOffers(): Promise<Offer[]> {
    return Array.from(this.offers.values());
  }

  async getOffer(id: number): Promise<Offer | undefined> {
    return this.offers.get(id);
  }

  async getOffersByCandidate(candidateId: number): Promise<Offer[]> {
    return Array.from(this.offers.values()).filter(o => o.candidateId === candidateId);
  }

  async createOffer(offerData: InsertOffer): Promise<Offer> {
    const id = this.currentIds.offers++;
    const offer: Offer = {
      ...offerData,
      id,
      createdAt: new Date(),
    };
    this.offers.set(id, offer);
    return offer;
  }

  async updateOffer(id: number, updates: Partial<InsertOffer>): Promise<Offer | undefined> {
    const offer = this.offers.get(id);
    if (!offer) return undefined;
    
    const updated = { ...offer, ...updates };
    this.offers.set(id, updated);
    return updated;
  }

  // Employees
  async getEmployees(): Promise<Employee[]> {
    return Array.from(this.employees.values());
  }

  async getEmployee(id: number): Promise<Employee | undefined> {
    return this.employees.get(id);
  }

  async createEmployee(employeeData: InsertEmployee): Promise<Employee> {
    const id = this.currentIds.employees++;
    const employee: Employee = {
      ...employeeData,
      id,
      createdAt: new Date(),
    };
    this.employees.set(id, employee);
    return employee;
  }

  async updateEmployee(id: number, updates: Partial<InsertEmployee>): Promise<Employee | undefined> {
    const employee = this.employees.get(id);
    if (!employee) return undefined;
    
    const updated = { ...employee, ...updates };
    this.employees.set(id, updated);
    return updated;
  }

  // Onboarding Plans
  async getOnboardingPlans(): Promise<OnboardingPlan[]> {
    return Array.from(this.onboardingPlans.values());
  }

  async getOnboardingPlan(id: number): Promise<OnboardingPlan | undefined> {
    return this.onboardingPlans.get(id);
  }

  async getOnboardingPlanByEmployee(employeeId: number): Promise<OnboardingPlan | undefined> {
    return Array.from(this.onboardingPlans.values()).find(p => p.employeeId === employeeId);
  }

  async createOnboardingPlan(planData: InsertOnboardingPlan): Promise<OnboardingPlan> {
    const id = this.currentIds.onboardingPlans++;
    const plan: OnboardingPlan = {
      ...planData,
      id,
      createdAt: new Date(),
    };
    this.onboardingPlans.set(id, plan);
    return plan;
  }

  async updateOnboardingPlan(id: number, updates: Partial<InsertOnboardingPlan>): Promise<OnboardingPlan | undefined> {
    const plan = this.onboardingPlans.get(id);
    if (!plan) return undefined;
    
    const updated = { ...plan, ...updates };
    this.onboardingPlans.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
