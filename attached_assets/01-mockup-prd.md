## Product Requirements Document (PRD)

**Project:** AI-Powered Recruitment Suite – “HireFlow 5”
**Audience:** HR Leadership & TA Team
**Author:** \[Your name]
**Date:** 2 Jun 2025

---

### 1 — Executive Summary

HireFlow 5 is a **mobile-first, API-centric web suite** that visualises the entire recruitment life-cycle and lets HR jump straight into five AI micro-apps:

1. **Resume-Fit Scorer** → Discover & Screen
2. **Interview Copilot** → Assess & Interview
3. **Decision Assistant** → Decide & Select
4. **OfferCraft + 90-Day Accelerator** → Offer & Onboard
5. **Pulse + Flight-Risk** → Early-Tenure Engagement

The landing page presents a clean life-cycle “subway map,” highlights business benefits at each stop, and provides one-click navigation into live demos (mock data). The overall look is **minimalist, modern, and world-class**—dark-on-light, generous whitespace, sleek micro-animations.

---

### 2 — Goals & Success Metrics

| Goal                        | KPI (mock target for pilot)                          |
| --------------------------- | ---------------------------------------------------- |
| Wow HR stakeholders in demo | ≥ 90 % “very impressed” in post-meeting survey       |
| Show clear value per stage  | All five stages can be explained in ≤ 2 minutes each |
| Seamless mobile experience  | Lighthouse mobile UX ≥ 95                            |
| Tech credibility            | ≤ 2 sec FCP on 4G; all APIs documented in Swagger    |

---

### 3 — Personas & Scenarios

| Persona                 | Device habits            | What they need from demo                     |
| ----------------------- | ------------------------ | -------------------------------------------- |
| **HR Director** Piyawan | Laptop (Chrome) & iPad   | High-level value & risk mitigation           |
| **Recruiter** Sam       | Phone 70 %, desktop 30 % | See how each app removes manual grunt work   |
| **Hiring Manager** Arun | Desktop dual-monitor     | Understand transparency & decision rationale |

---

### 4 — User Flows

```
Landing ▸ Select Stage ▸ Micro-App Demo (mock data) ▸ Back
```

*Quick-switch* dropdown lets users hop directly to any stage.

---

### 5 — Functional Requirements

#### 5.1 Landing Page – “Recruitment Rail”

| ID  | Requirement                                                                                                                                               |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L-1 | Display a horizontal (scroll-snap) timeline with five stations; each station card shows: stage name, icon, 1-sentence pain point, 1-sentence AI solution. |
| L-2 | Hover / tap reveals **“Benefits fly-out”**: three bullet benefits + “Enter Demo” CTA.                                                                     |
| L-3 | Persistent top-right **value bar**: “50 % faster fill • +15 % quality-hire • –5 % early attrition” (animates numbers).                                    |
| L-4 | Globe-style dark header with logo, light footer with contact & API docs link.                                                                             |

#### 5.2 Micro-App Demo Pages (x5)

Common template components:

| Section                     | Details (mocked)                                                             |
| --------------------------- | ---------------------------------------------------------------------------- |
| **Hero strip**              | Stage icon, name (“Assess & Interview”), 1-line purpose.                     |
| **Try it**                  | JSON input panel (pre-filled), “Run Demo” button → prettified JSON response. |
| **What you’ll get in prod** | Card deck: “API Endpoint,” “Sample Integration,” “Security & Audit.”         |
| **Business value**          | Mini KPI dial (mock) + quote (“Cut interview scheduling time to 0.5 days”).  |
| **Back to rail**            | CTA footer.                                                                  |

---

### 6 — Wireframe Snapshot 🎨 (text-only)

```
┌──────────────────────────────────┐
│          HireFlow 5              │
│  <50% faster> <15% quality> ...  │
└─┬───────┬─────────┬─────────┬────┘
  │       │         │         │
  ●──●──●──●──●──●  horizontal scroll
  │   │   │   │   │
  ▼ fly-out on hover/tap
┌─────────────┐
│Benefits …   │
│• …          │
│Enter Demo ▸ │
└─────────────┘
```

---

### 7 — Visual & UX Requirements

| Theme              | Spec                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| **Style**          | Neutral palette (#F7F8F9 bg, #1E1E1E text), single accent (#3B82F6). |
| **Typography**     | Inter 16 / 24 / 36 px, 1.4 line-height.                              |
| **Animation**      | Framer-Motion fade-in cards, subtle station “pulse” on hover.        |
| **Responsiveness** | CSS Grid; rail collapses to vertical scroll on ≤ 640 px.             |
| **Accessibility**  | WCAG 2.1 AA: alt text, focus outlines, ARIA roles.                   |

---

### 8 — Non-Functional

| Area          | Requirement                                                     |
| ------------- | --------------------------------------------------------------- |
| Performance   | FCP ≤ 2 s on mobile 4 G; bundle < 150 kB gzipped.               |
| Security      | Demo uses mock data only; production pattern: JWT, HTTPS, GDPR. |
| Observability | Console logs → simple mock Grafana chart.                       |

---

### 9 — Tech Stack (prototype)

| Layer        | Tech                                                |
| ------------ | --------------------------------------------------- |
| **Frontend** | React 18 + Vite, TailwindCSS, Framer Motion         |
| **API mock** | FastAPI + Swagger UI, served via /api/\*            |
| **Hosting**  | Vercel (auto-preview URLs for PRs)                  |
| **CI/CD**    | GitHub Actions – ESLint, Playwright mobile snapshot |

---

### 10 — Mock-Data Strategy

| App        | Sample data (# records)            |
| ---------- | ---------------------------------- |
| Resume-Fit | 10 candidate PDFs (anonymised)     |
| Interview  | 3 recorded transcripts (60 s each) |
| Decision   | Aggregated JSON score sheet        |
| OfferCraft | 2 offer templates (TH/EN)          |
| Pulse      | 30 fake survey rows                |

Randomised names & emails via Faker to avoid PII.

---

### 11 — Roll-Out Milestones (prototype)

| Week | Deliverable                                    |
| ---- | ---------------------------------------------- |
| 1    | Wireframes & style guide approved              |
| 2    | Landing rail + station cards interactive       |
| 3    | Micro-app template & Resume-Fit demo live      |
| 4    | Remaining four demos wired + mobile QA         |
| 5    | Final polish, lighthouse > 95, pitch rehearsal |

---

---

**End of PRD** – ready for design & engineering kickoff.