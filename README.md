# ICT111-FoodFast-MVP

## Course Information
* **Course Code:** ICT111
* **Course Name:** Fundamental Technology Entrepreneurship
* **Instructor:** Dr. Herison Surbakti
* **Project Type:** 14-Labs Continuous IT Startup MVP Development

## Team Name
FoodFast

## Team Members and Roles
| Name | Role | Responsibility |
|---|---|---|
| Thant Zin | Product Lead / Validation Lead | Managing the project scope, coordinating the team's deadlines, and testing the web app. |
| Mi Su Zin Swar | Documentation Lead | Responsible for writing, organizing, and submitting all project reports, meeting notes, and presentation slides. |
| Arkar Min Paing | Technical Lead / UXUI Lead | Designing a clean, mobile-friendly interface for students and vendors and writing the frontend and backend code to make the ordering system fully functional. |

## Initial Problem Area
Students often face long queues and wait times at campus food stalls during short lecture breaks, leading to skipped meals or lateness to class. Concurrently, campus vendors struggle to manage peak-hour crowds and track orders efficiently using manual paper tickets.

## Target Users
The primary users are university students and campus faculty staff with tight schedules, as well as local campus food stall vendors and cafeteria operators.

## Initial IT Venture Direction
A mobile-optimized web application that allows students to view live vendor menus, pre-order meals, pay digitally, and receive real-time notifications when their food is ready for pickup.

## Technology Possibility
Possible technologies:
- Web application
- Mobile application
- Dashboard
- Cloud-based system
- Marketplace or digital platform

## Repository Structure
* **docs:** Stores core project documentation including reports, team competency matrices, initial idea logs, and weekly logbooks.
* **prototype:** Holds the source code, wireframes, or clickable UI prototype files developed across the labs.
* **data:** Contains survey responses, customer validation data, and project metrics.
* **finance:** Contains financial assumptions, cost sheets, and monetization models.
* **diagrams:** Stores user flows, system architecture layout plans, and technical wireframe diagrams.
* **screenshots:** Provides visual evidence of prototype advancement and repository growth.
* **pitch:** Houses the investor pitch deck and final MVP video demonstration files.

## Weekly Progress Log
| Week | Main Activity | Output | Status |
|---|---|---|---|
| Lab 1 | Lab setup and idea log | Repository, team profile, initial idea log | Completed |

## Current Status
During Lab 1, team FoodFast successfully initialized the GitHub repository using the mandatory seven-folder structural architecture. We extracted and documented our core competency matrix and technical skill sets, and formalized our official 5-rule team working agreement. Additionally, we formulated three distinct tech venture concepts within our documentation, selecting the campus pre-ordering system as our primary baseline MVP focus.

## Next Step
In Lab 2, our team will move into opportunity scanning, deeper problem selection, and initial target user verification to refine the FoodFast business model.
## Selected IT Venture Direction
Our team selected a campus food pre-ordering application named FoodFast. The target users are university students and faculty who lose valuable time waiting in peak cafeteria queues, currently forcing them to skip meals or arrive late to class. We selected this direction because it scored strongly on our NUF framework as a useful, highly achievable software platform that requires absolutely no physical IoT hardware deployment or complex cybersecurity implementation to prototype successfully.

## Current Status
In Lab 02, our team reviewed our initial concepts, observed and mapped six real-world IT opportunities, mapped out technology tools, and calculated matrix rankings using NUF parameters in our spreadsheet. We formally selected FoodFast as our semester project and configured our active project management issues tracker on GitHub.

### Lab 03 Status (Current Week)
In Lab 03, our team executed our active customer problem discovery phase. We designed an objective, non-leading 7-stage questionnaire and successfully gathered data patterns from **40 target campus profiles** (32 students and 8 faculty staff members). 

We compiled these findings inside `/data/raw-responses.xlsx`, building a dynamic analytics model with uppercase Excel formulas and validation charts. The empirical results clearly proved our core problem statement:
* **The Queue Bottleneck:** **80%** of respondents spend more than 10 minutes waiting in line during peak hours.
* **The Academic Problem Multiplier:** **72.5%** of surveyed campus users have actively skipped meals or arrived late to class due to these lines.
* **UI/UX Direction Lock-in:** An overwhelming **77.5%** preference for digital QR-code wallets over cash or credit cards has redirected our engineering focus to prioritize mobile-first QR checkout screens.
* **Market Fit:** The app achieved an average adoption interest score of **4.55 / 5.00**.

---

## Next Step
In Lab 04, our team will take these verified customer pain points and process them directly into a detailed **Value Proposition Canvas (VPC)** to map our MVP's specific functional modules against our validated user constraints.
---

## Lab 04: User Persona, Requirements, and User Stories

### Primary Target User
Our primary user base consists of time-constrained university students and busy faculty members who experience critical scheduling conflicts during lunch rush windows.

### Persona Summary
* **Persona Name:** Min Khant
* **User Type:** Time-Constrained Student
* **Main Goal:** Purchase food inside a strict 20-minute lecture interval.
* **Main Pain Point:** Spending 15+ minutes caught in physical lines.
* **Current Workaround:** Skipping lunch entirely or using the inefficient peer "Line Scout" system.

### Key Requirements Matrix
| Req ID | Requirement Specification | Priority | Related Lab 03 Evidence Reference |
|---|---|---|---|
| **FR-01** | Display interactive vendor menu dashboards. | Must | Avoids item depletion anxiety (15% of survey data). |
| **FR-02** | Process form pre-orders and issue digital receipts. | Must | Bypasses 10+ minute line locks (80% of survey data). |
| **FR-03** | Display real-time status updates (Pending/Ready). | Must | Solves paper ticket loss/mix-up confusion. |
| **NFR-01** | Mobile-responsive client-side web interface setup. | Must | Users require on-the-go browsing during lecture transitions. |

### MVP Feature Scope
| Feature | Priority | Included in Final Prototype? |
|---|---|---|
| Digital Menu Interface Components | Must | **Yes** |
| Simulated Order Form Submission Routing | Must | **Yes** |
| Dynamic Live Status Notification Tracker | Must | **Yes** |
| Physical Pickup Counter Locker Integration | Won't | **No (IoT Constraint Excluded)** |

### Diagram Links
* 📊 [User Flow Chart Document](diagrams/user-flow.png)
* 📊 [System Use Case Diagram](diagrams/use-case-diagram.png)

### GitHub Contribution Evidence
All group members have contributed equally to this repository milestone documentation through direct architectural design, file commits, issues tracking, and data synthesis.

## Lab 05: Product Concept and UI/UX Wireframe

### What We Completed
1. Formulated a targeted product concept statement explicitly outlining FoodFast boundaries, university user parameters, and MVP restrictions tailored to the RSU campus ecosystem.
2. Built a complete Feature-Requirement Mapping Matrix matching functional view states directly to Lab 04 system requirement IDs (`FR-01` through `FR-12`) to guarantee absolute traceability.
3. Drafted a comprehensive Wireframe Specification outlining interface layouts, strict component consistency rules, and essential functional view properties.
4. Modeled systematic navigation pathways through an interactive user flow mapping diagram generated via Mermaid logic loops to trace state transitions.
5. Captured six comprehensive, high-fidelity UI/UX wireframe screenshots directly from our live single-page web interface draft—utilizing realistic Rangsit University vendor datasets rather than empty placeholder shapes.

### Member Contribution Logs
* **Thant Zin:** Product concept profile drafting (`product-concept.md`), wireframe asset screen captures, and terminal operations sync.
* **Arkar:** Feature-to-requirement matrix compilation (`feature-requirement-mapping.md`) and user flow diagram assembly (`user-flow.mmd`).
* **Mi Su Zin:** Wireframe specification documentation (`wireframe-specification.md`), weekly contribution logbook compilation (`weekly-logbook.md`), and master repository documentation merges.

### Plan for Lab 06
We will transform our validated wireframe baseline blueprints into interactive frontend code blocks, mapping state handlers directly to live mock data structures.

## Lab 06: Business Model and Technical Architecture

### What We Completed
1. Formulated a highly targeted campus Business Model Canvas explicitly mapping value streams, user parameters, and structural sustainability structures tailored specifically to the FoodFast ecosystem.
2. Built a comprehensive Feature-Value Mapping Matrix matching critical functional view states directly to system requirement IDs and user story parameters to guarantee absolute technical traceability.
3. Formulated a definitive Technical Architecture specification framework justifying a database-backed application approach and detailing structural component boundaries alongside clear payment and tracking simulation rules.
4. Modeled systematic application data structures by establishing normalized schema outlines across three logical entities—defining explicit field types, strict validation properties, and population baselines.
5. Rendered systematic system flow properties by generating highly descriptive architectural distribution graphs and sequencing data-flow loops directly via clean Mermaid diagram logic files.
6. Populated an exhaustive mock dataset in a clean comma-separated formatting structure to handle system state transitions and provide functional testing baselines for our prototype.
7. Consolidated all systemic system documentation architectures to update the core repository README.md summary structures.

### Member Contribution Logs
* **Thant Zin:** Business Model Canvas composition (`business-model-canvas.md`), feature-to-value mapping matrix layout (`feature-value-mapping.md`), and technical architecture framework documentation (`technical-architecture.md`).
* **Arkar:** System architecture diagram modeling (`system-architecture.mmd`) and operational sequential data-flow diagram rendering (`data-flow.mmd`).
* **Mi Su Zin:** Core data structure schema definition (`data-structure.md`), CSV testing database population (`sample-records.csv`), weekly contribution logbook compilation (`weekly-logbook.md`), and master documentation merges.

### Plan for Lab 07
We will transform these validated architectural layout schemes and logical table parameters into direct frontend code behaviors, binding live event listeners straight to our mock data repositories.

## Lab 07: MVP Experiment Design

### What We Completed
1. Formulated a highly targeted campus Business Model validation strategy by cataloging critical assumptions by risk and current evidence parameters[cite: 2].
2. Built a comprehensive MVP Experiment Plan containing defined traceability mappings to Lab 04 system requirements and target student user cohorts[cite: 2].
3. Formulated a definitive Technical Architecture testing workflow, complete with a rigorous step-by-step experiment script and neutral user questionnaires[cite: 2].
4. Modeled systematic success evaluation indicators using mathematical metrics, target thresholds, and strict operational decision rules[cite: 2].
5. Rendered systematic system flow properties to direct feedback testing scenarios for our active FoodFast layout mockup[cite: 2].
6. Populated an exhaustive collection of mock testing protocols to validate user interface paths[cite: 2].
7. Consolidated all systemic system documentation architectures to update the core repository README.md summary structures[cite: 2].

### Member Contribution Logs
* **Thant Zin:** Risk assessment documentation (`critical-assumptions.md`), experiment planning specification (`mvp-experiment-plan.md`), and requirement tracing.
* **Arkar:** Test task orchestration and tester walkthrough sequencing (`experiment-script.md`).
* **Mi Su Zin:** Usability metric formulas (`success-metrics.md`), exit-interview drafting (`feedback-form.md`), weekly contribution logbook compilation (`weekly-logbook.md`), and master repository documentation updates.

### Plan for Lab 08
We will execute our structured experiment scripts with university student testers, collect quantitative metrics, and synthesize our findings to optimize user experience.

## Lab 08: Customer Validation and Analytics Sheet

### What We Completed
* Formulated a structured campus validation dataset to catalog real user feedback from our MVP testing runs, standardizing transaction metrics across target student and staff cohorts[cite: 5].
* Built a comprehensive validation tracking matrix in `/data/validation-results.csv`, mapping user profiles, completion times, and task completion statuses to explicit functional requirements[cite: 5].
* Formulated a customer validation overview within `/docs/customer-validation-summary.md` highlighting target user profiles, test execution frameworks, and main functional workflow tasks[cite: 5].
* Modeled systematic performance evaluation insights in `/docs/analytics-insights.md` interpreting key quantitative indicators such as a calculated 80% task success rate, average interest, and average satisfaction ratings[cite: 5].
* Rendered an embedded Power BI active validation dashboard screenshot capturing real-time metrics, regional user rating breakdowns, and critical visual statistics[cite: 5].
* Populated a definitive strategic decision paper in `/docs/mvp-decision.md` detailing the analytical evidence, key user friction metrics, and our structured "Revise and Persevere" business pathway[cite: 5].
* Consolidated all systemic system documentation architectures to update the core repository README.md and weekly progress structures[cite: 5].

### Member Contribution Logs
* **Thant Zin**: Cleaned the raw user validation feedback dataset, structured the `/data/validation-results.csv` data repository, and wrote the structural logistics summary in `/docs/customer-validation-summary.md`[cite: 5].
* **Arkar**: Formulated quantitative metrics inside `/docs/analytics-insights.md`, designed the Power BI analytics visualization, and extracted user frustration trends linked to requirements[cite: 5].
* **Mi Su Zin**: Compiled the final strategic roadmap in `/docs/mvp-decision.md`, formulated structural improvement issues on GitHub, and updated team progress logbooks and master repository headers[cite: 5].

### Plan for Lab 09
* We will implement targeted user interface revisions to resolve the discovered checkout input overload and simplify state transitions in preparation for the final deployable prototype phase.
## Lab 09: Legal, Ethical, Security, and Risk Assessment

### What We Completed
* Created a comprehensive PII data inventory in [`/data/data-inventory.csv`](./data/data-inventory.csv).
* Modeled operational and technical system threats in [`/data/risk-register.csv`](./data/risk-register.csv).
* Cataloged open-source software packages and media licensing in [`/data/third-party-assets-register.csv`](./data/third-party-assets-register.csv).
* Published core compliance documentation including [`/docs/privacy-and-data-protection.md`](./docs/privacy-and-data-protection.md), [`/docs/security-risk-check.md`](./docs/security-risk-check.md), and [`/docs/legal-ethical-checklist.md`](./docs/legal-ethical-checklist.md).
* Updated system functional and non-functional baseline requirements in [`/docs/updated-requirements-note.md`](./docs/updated-requirements-note.md).
