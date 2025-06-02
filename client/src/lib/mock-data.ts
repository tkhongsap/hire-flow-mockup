import { Candidate, Employee, Interview, Offer, OnboardingPlan } from "@shared/schema";

export const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    title: "Senior Frontend Developer",
    experience: 6,
    skills: ["React", "TypeScript", "Node.js", "Team Leadership"],
    resumeScore: 94,
    technicalScore: 95,
    experienceScore: 88,
    cultureFitScore: 92,
    overallScore: 94,
    status: "interview",
    notes: "Exceptional React expertise and leadership experience",
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    email: "marcus.rodriguez@email.com",
    title: "Full Stack Developer",
    experience: 4,
    skills: ["React", "Node.js", "Python", "AWS"],
    resumeScore: 87,
    technicalScore: 82,
    experienceScore: 90,
    cultureFitScore: 89,
    overallScore: 87,
    status: "decision",
    notes: "Strong backend skills, some TypeScript gaps",
    createdAt: new Date('2024-01-16'),
  },
  {
    id: 3,
    name: "Emily Foster",
    email: "emily.foster@email.com",
    title: "React Developer",
    experience: 3,
    skills: ["React", "JavaScript", "CSS", "Git"],
    resumeScore: 72,
    technicalScore: 75,
    experienceScore: 65,
    cultureFitScore: 85,
    overallScore: 72,
    status: "screening",
    notes: "Good foundation but needs TypeScript experience",
    createdAt: new Date('2024-01-17'),
  },
];

export const mockEmployees: Employee[] = [
  {
    id: 1,
    candidateId: 1,
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    tenure: 45,
    satisfactionScore: 9.2,
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
    satisfactionScore: 6.8,
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
    satisfactionScore: 8.5,
    productivityScore: 89,
    integrationScore: 91,
    flightRiskScore: 22,
    status: "active",
    tags: ["Excellent Start", "Team Favorite"],
    createdAt: new Date('2024-01-20'),
  },
];

export const mockInterviews: Interview[] = [
  {
    id: 1,
    candidateId: 1,
    interviewerName: "Tech Lead",
    currentQuestion: 3,
    totalQuestions: 8,
    technicalAccuracy: 85,
    communicationClarity: 78,
    problemSolvingApproach: 92,
    overallRating: "4.2",
    status: "in_progress",
    createdAt: new Date('2024-01-18'),
  },
];

export const mockOffers: Offer[] = [
  {
    id: 1,
    candidateId: 1,
    baseSalary: 125000,
    bonus: 15000,
    equity: "0.25",
    signingBonus: 8000,
    benefits: ["Premium Health Coverage", "Remote-First Culture", "Learning & Development"],
    startDate: new Date('2024-02-15'),
    status: "draft",
    createdAt: new Date('2024-01-19'),
  },
];

export const mockOnboardingPlans: OnboardingPlan[] = [
  {
    id: 1,
    employeeId: 1,
    week1Tasks: [
      "Complete IT setup and security training",
      "Meet key team members and stakeholders",
      "Review codebase and architecture docs"
    ],
    week3to6Tasks: [
      "Complete first code contributions",
      "Join sprint planning and retrospectives",
      "Shadow senior developers on complex tasks"
    ],
    week7to12Tasks: [
      "Lead first feature development project",
      "Mentor junior team members",
      "Contribute to technical decisions"
    ],
    setupCompletion: 95,
    teamIntegration: "4.8",
    featuresDelivered: 3,
    mentorshipSessions: 2,
    createdAt: new Date('2024-01-01'),
  },
];

export const interviewQuestions = [
  "Can you walk me through how you'd handle state management in a large React application?",
  "How would you compare Redux vs Context API for this scenario?",
  "What performance considerations would you keep in mind?",
  "Can you give an example from your previous experience?",
  "How do you approach testing in React applications?",
  "What's your experience with TypeScript?",
  "How do you handle error boundaries in React?",
  "What's your approach to component architecture?"
];

export const followUpQuestions = [
  "How would you compare Redux vs Context API for this scenario?",
  "What performance considerations would you keep in mind?",
  "Can you give an example from your previous experience?",
];

export const engagementFactors = [
  { name: "Work-Life Balance", score: 87, color: "green" },
  { name: "Career Growth", score: 79, color: "blue" },
  { name: "Team Collaboration", score: 82, color: "purple" },
  { name: "Manager Support", score: 68, color: "yellow" },
];
