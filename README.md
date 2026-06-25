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
