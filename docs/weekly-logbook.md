# Weekly Venture Logbook
## Lab 1: Lab Setup and IT Venture Repository

### What We Completed
1. Created the GitHub repository and set up the required folder structure.
2. Completed README.md with project overview, team roles, and initial direction.
3. Prepared team profile with roles, skills, and working agreement.
4. Documented three initial IT venture ideas in idea-log.md.

### What We Learned
1. How to organize a professional GitHub repository for a long-term project.
2. How to use Markdown to create structured and readable documentation.
3. The importance of clear role distribution and teamwork planning.

### Problems or Difficulties
1. Initially struggled with creating folders correctly in GitHub.
2. Had difficulty choosing the most suitable idea among the three concepts.

### Evidence of Work
- GitHub repository link: https://github.com/arkarminp67-hub/ICT111-FoodFast_MVP.git  
- Files created: README.md, team-profile.md, idea-log.md, weekly-logbook.md  
- Commits: Repository initialization, folder setup, documentation files added  

### Decision Made This Week
The team decided to focus more on the FoodFast idea as the main direction because it is practical, relevant to student life, and feasible to develop as an MVP.

### Plan for Next Week
In Lab 2, we will perform opportunity scanning, validate the selected idea with target users, and refine the problem and solution based on feedback.

## Lab 02: IT Opportunity Scanning

### What We Completed
1. Reviewed Lab 1 startup concepts and built out a 6-idea real-world opportunity matrix.
2. Formulated an explicit NUF ranking sheet using Excel formulas to determine our optimal MVP focus.
3. Generated our selected-opportunity master statement and launched 5 active GitHub tracking issues.

### Selected Opportunity
FoodFast: Smart Vendor Pre-Ordering Application

### Why We Selected It
FoodFast proved highly feasible for our team because it allows our team to focus entirely on clean, responsive web interface design and database logic without requiring physical hardware constraints or complex cybersecurity setups.

### What We Rejected
We rejected Idea 2 (Cafe Inventory Web App) because it relies heavily on constant, painstaking manual tracking updates by vendors, lowering its operational usability compared to an automated customer order queue dashboard.

### What We Learned
1. Real business value comes from tracking concrete, validated customer pain points rather than chasing advanced technology buzzwords.
2. How to use SUM and RANK functions inside an analytical NUF matrix to mathematically filter project risks.
3. Documenting decisions cleanly via Markdown layouts to maintain a professional codebase ecosystem.

### Evidence of Work
- Opportunity scan file: `/docs/opportunity-scan.md`
- NUF scoring file: `/data/opportunity-scoring.xlsx`
- Selected opportunity file: `/docs/selected-opportunity.md`
- GitHub issue screenshot: Captured on workspace dashboard page.
## Lab 03: Active Customer Problem Discovery

### What We Completed
* Formulated a 7-stage customer validation questionnaire covering campus roles, queue delays, meal-skipping frequencies, and platform adoption willingness.
* Gathered and compiled survey response data for 40 individual target users (32 students and 8 faculty staff members) to analyze our problem space.
* Built out a multi-tab analytical file (`raw_data.xlsx`) using Excel calculation formulas (`COUNTIF`, `AVERAGE`, `COUNTA`) to dynamically evaluate user friction points.
* Generated embedded data visualizations including automated charts analyzing campus frustrations and peak wait times.

### What We Learned
* **Data Over Assumptions:** Validating with real numbers proved our problem is severe—knowing that 80% of users wait over 10 minutes provides a quantitative baseline for our MVP.
* **Dynamic Excel Modeling:** Learned how to transform raw user text responses into clean, visual percentages using formal uppercase Excel logical functions.
* **Data-Driven Engineering:** Learned how data analysis guides user-interface design; recognizing high preferences for certain payment options shifts our core technical focus early on.

### Problems or Difficulties
* Finding a way to format the raw database structure cleanly so text strings could easily be parsed into dynamic dashboard summaries.
* Ensuring the question matrix remained highly relevant to both tightly scheduled faculty staff and high-volume student groups.

### Evidence of Work
* Customer validation data file: `/data/raw_data.xlsx`
* Logbook progression file: `/docs/weekly-logbook.md`
* Internal team data allocation notes: Appended to project workspace docs.

### Decision Made This Week
Based on our validation analysis showing a massive 77.5% preference for mobile payments, **Arkar Min Paing** decided to prioritize UI design mockups for digital QR-code wallets over standard credit cards. Additionally, because 72.5% of respondents explicitly stated they have skipped campus meals due to queues, **Thant Zin** locked down the app's primary value metric: eliminating peak line wait-times completely through remote pre-ordering. **Mi Su Zin Swar** consolidated these core metrics into our validation tracker to build our presentation slides.
