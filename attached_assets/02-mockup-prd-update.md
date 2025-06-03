## Product Requirements Document — **HireFlow 5 for ThaiBev**

*Version 0.8 — “Panel Copilot” refresh · 3 Jun 2025*

---

### 1 — Why ThaiBev Needs This

Time-to-hire, offer declines, and early attrition currently cost **≈ THB 87 M/yr**. HireFlow 5 injects AI into every step while **plugging straight into SAP SuccessFactors via REST APIs**—no re-platforming.

---

### 2 — Pilot Success Targets

| Goal              | KPI                 | Target                  |
| ----------------- | ------------------- | ----------------------- |
| Faster hiring     | Time-to-hire        | 35 → 20 days            |
| Better retention  | ≤ 6-month attrition | 7-10 % → ≤ 5 %          |
| Exec “wow”        | Post-demo survey    | ≥ 90 % “very impressed” |
| Integration trust | Swagger sign-off    | ITS approval            |

---

### 3 — Key Personas

* **Khun Piyawan** — EVP HR (MacBook/iPad)
* **Khun Sam** — Plant Recruiter (80 % mobile)
* **Khun Arun** — Brewery Manager (desktop)

All screens bilingual **TH / EN**.

---

### 4 — Feature Scope (Five Micro-Apps)

| Stage                | Micro-App                                 | Core Endpoints                                                                                  | Demo Action                                    |
| -------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1 Discover & Screen  | **Resume-Fit Scorer**                     | `POST /screen`                                                                                  | Upload CV → fit score & gaps                   |
| 2 Assess & Interview | **Panel Copilot**<br>(*Recruiter-facing*) | `POST /panelcopilot/prepare`<br>`POST /panelcopilot/live-notes`<br>`POST /panelcopilot/summary` | Prepare deck → live tag → instant STAR summary |
| 3 Decide & Select    | Decision Assistant                        | `POST /decision/package`                                                                        | View ranked slate & rationale                  |
| 4 Offer & Onboard    | OfferCraft + 90-Day Accelerator           | `POST /offercraft/suggest`<br>`POST /accelerator/plan`                                          | Craft Thai offer & onboarding kit              |
| 5 Early Engagement   | Pulse + Flight-Risk                       | `POST /pulse`<br>`GET /risk/:id`                                                                | Submit pulse → mentor recommendation           |

---

### 5 — Landing Page (“Recruitment Rail”)

| ID   | Requirement                                                                       |                  |
| ---- | --------------------------------------------------------------------------------- | ---------------- |
| LP-1 | Hero = **Chang bottling-line video** fading to five glowing stations.             |                  |
| LP-2 | ThaiBev tokens: Chang green `#006341`, gold `#C6A664`; Inter font.                |                  |
| LP-3 | Station-2 label: “**Panel Copilot** – smart questions, live notes, STAR summary.” |                  |
| LP-4 | Animated value ticker: “-15 days hire • +10 % quality hire • –3 % attrition.”     |                  |
| LP-5 | Dual CTA: *Enter Demo*                                                            | *View API Spec*. |

---

### 6 — Panel Copilot Detailed Spec (Stage 2)

| Phase                          | What Copilot Does                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| **Prepare** (`/prepare`)       | Returns agenda + Thai/Eng question set matched to role & SPIRIT values; flags off-limit queries.                                |
| **Live Notes** (`/live-notes`) | Web-socket stream: real-time transcript, one-click *Tag Strength* / *Tag Concern*, prompts follow-up when answer is thin.       |
| **Summary** (`/summary`)       | Instantly outputs STAR bullets, competency heat-map, “Proceed / Hold” recommendation, risk flags (e.g., night-shift readiness). |

Widget floats bottom-right; respects `prefers-reduced-motion`. All data stored under candidate ID for Decision Assistant.

---

### 7 — Visual & UX Guidelines

| Area       | Spec                                                   |
| ---------- | ------------------------------------------------------ |
| Accent use | ThaiBev gold for CTAs; Chang green for active elements |
| Motion     | ≤ 300 ms, reduced-motion friendly                      |
| Mobile     | Rail stacks vertical; touch ≥ 44 px                    |
| A11y       | WCAG 2.1 AA, bilingual alt-text                        |

---

### 8 — Non-Functional

Performance ≤ 2 s FCP (4 G) · Bundle < 150 kB · Mock data only · JWT stub · PDPA ready.

---

### 9 — Tech Stack & Integration

| Layer         | Tech                                    |
| ------------- | --------------------------------------- |
| Frontend      | React 18, Vite, Tailwind, Framer Motion |
| API Mock      | FastAPI + Swagger (`/api/*`)            |
| Design Tokens | ThaiBev design-system repo              |
| Hosting       | Vercel previews                         |
| Docs          | OpenAPI 3.1 for all endpoints           |

*Demo UI hits the same REST APIs SuccessFactors middleware will consume.*

---

### 10 — Timeline (Prototype)

| Week | Milestone                                        |
| ---- | ------------------------------------------------ |
| 1    | Wireframes w/ ThaiBev palette approved           |
| 2    | Hero rail + Resume-Fit demo live                 |
| 3    | Panel Copilot & other demos wired; Swagger ready |
| 4    | Mobile QA, Lighthouse ≥ 95                       |
| 5    | Exec rehearsal & feedback                        |

---

### 11 — Risks & Mitigations

| Risk                    | Mitigation                      |
| ----------------------- | ------------------------------- |
| Hero video weight       | Serve 720 p, lazy-load post-LCP |
| Brand compliance delays | Early check-in with Corp Comms  |
| Scope creep             | Freeze scope; Phase 2 backlog   |

---

**HireFlow 5** delivers a **ThaiBev-branded, world-class, API-ready** hiring experience—from Chang bottle line to onboarding buddy—ready to demo to top management and plug into production tomorrow.
