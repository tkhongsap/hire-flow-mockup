import { Candidate, Employee, Interview, Offer, OnboardingPlan } from "@shared/schema";

export const mockCandidates: Candidate[] = [
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

export const mockEmployees: Employee[] = [
  {
    id: 1,
    candidateId: 1,
    name: "Siriporn Rattanakul",
    role: "Senior Digital Marketing Manager",
    tenure: 45,
    satisfactionScore: "9.2",
    productivityScore: 94,
    integrationScore: 88,
    flightRiskScore: 15,
    status: "active",
    tags: ["High Performer", "Chang Campaign Success"],
    createdAt: new Date('2024-01-01'),
  },
  {
    id: 2,
    candidateId: 2,
    name: "Nattapong Jirawat",
    role: "Sales Territory Manager",
    tenure: 78,
    satisfactionScore: "6.8",
    productivityScore: 76,
    integrationScore: 62,
    flightRiskScore: 45,
    status: "active",
    tags: ["Territory Challenges", "Needs Mentoring"],
    createdAt: new Date('2023-11-15'),
  },
  {
    id: 3,
    candidateId: null,
    name: "Kanya Suthipong",
    role: "IT Support Specialist",
    tenure: 23,
    satisfactionScore: "8.5",
    productivityScore: 89,
    integrationScore: 91,
    flightRiskScore: 22,
    status: "active",
    tags: ["Tech Star", "Quick Learner"],
    createdAt: new Date('2024-01-20'),
  },
  {
    id: 4,
    candidateId: 4,
    name: "Somchai Pattanakit",
    role: "HR Business Partner",
    tenure: 62,
    satisfactionScore: "8.9",
    productivityScore: 87,
    integrationScore: 94,
    flightRiskScore: 18,
    status: "active",
    tags: ["Cultural Bridge", "Policy Expert"],
    createdAt: new Date('2023-12-01'),
  },
];

export const mockInterviews: Interview[] = [
  {
    id: 1,
    candidateId: 1,
    interviewerName: "Brand Director",
    currentQuestion: 3,
    totalQuestions: 8,
    technicalAccuracy: 88,
    communicationClarity: 92,
    problemSolvingApproach: 85,
    overallRating: "4.3",
    status: "in_progress",
    createdAt: new Date('2024-01-18'),
  },
];

export const mockOffers: Offer[] = [
  {
    id: 1,
    candidateId: 1,
    baseSalary: 1200000,
    bonus: 180000,
    equity: "0.15",
    signingBonus: 50000,
    benefits: ["ประกันสุขภาพเบี้ยแพง", "ค่าน้ำมันรถยนต์", "โบนัสผลงาน", "สิทธิ์สินค้าเบียร์ช้าง"],
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
      "เข้าร่วมการปฐมนิเทศและการฝึกอบรมด้านความปลอดภัย",
      "พบปะทีมการตลาดและผู้จัดการแบรนด์",
      "ศึกษาแนวทางแบรนด์เบียร์ช้างและประวัติแคมเปญ"
    ],
    week3to6Tasks: [
      "ติดตามผู้จัดการแบรนด์อาวุโสในแคมเปญปัจจุบัน",
      "วิเคราะห์การวิจัยตลาดและข้อมูลเชิงลึกผู้บริโภค",
      "เข้าร่วมการประชุมกลยุทธ์การตลาดค้าส่ง"
    ],
    week7to12Tasks: [
      "นำแคมเปญการตลาดดิจิทัลสำหรับโปรโมชั่นตามฤดูกาล",
      "ประสานงานกับเอเจนซี่และพันธมิตรสื่อ",
      "นำเสนอการวิเคราะห์ผลงานแคมเปญต่อผู้บริหาร"
    ],
    setupCompletion: 95,
    teamIntegration: "4.8",
    featuresDelivered: 3,
    mentorshipSessions: 2,
    createdAt: new Date('2024-01-01'),
  },
];

export const interviewQuestions = [
  "คุณสามารถอธิบายแนวทางในการพัฒนาแคมเปญการตลาดแบบบูรณาการสำหรับแบรนด์เครื่องดื่มได้หรือไม่?",
  "คุณจะใช้ช่องทางดิจิทัลอย่างไรเพื่อเข้าถึงผู้บริโภคไทยรุ่นใหม่สำหรับเบียร์ช้าง?",
  "ประสบการณ์ของคุณในการตลาดค้าส่งและการจัดการความสัมพันธ์กับผู้จัดจำหน่ายเป็นอย่างไร?",
  "คุณสามารถยกตัวอย่างแคมเปญแบรนด์ที่ประสบความสำเร็จที่คุณเคยดูแลได้หรือไม่?",
  "คุณวัดประสิทธิผลของแคมเปญและ ROI ในอุตสาหกรรมอาหารและเครื่องดื่มอย่างไร?",
  "ความเข้าใจของคุณเกี่ยวกับภูมิทัศน์ตลาดเครื่องดื่มไทยเป็นอย่างไร?",
  "คุณจะจัดการกับความท้าทายด้านการตลาดตามฤดูกาลสำหรับเครื่องดื่มแอลกอฮอล์อย่างไร?",
  "แนวทางของคุณในการทำงานร่วมกับเอเจนซี่ครีเอทีฟและพันธมิตรสื่อเป็นอย่างไร?"
];

export const followUpQuestions = [
  "คุณจะปรับกลยุทธ์นั้นให้เข้ากับตลาดไทยโดยเฉพาะอย่างไร?",
  "KPI ใดบ้างที่คุณจะติดตามเพื่อวัดความสำเร็จ?",
  "คุณสามารถยกตัวอย่างจากประสบการณ์แคมเปญเบียร์ช้างของคุณได้หรือไม่?",
];

export const engagementFactors = [
  { name: "สมดุลชีวิตการทำงาน", score: 87, color: "green" },
  { name: "การเติบโตในอาชีพ", score: 79, color: "blue" },
  { name: "การทำงานเป็นทีม", score: 82, color: "purple" },
  { name: "การสนับสนุนจากผู้จัดการ", score: 68, color: "yellow" },
];
