# Security Risk Audit — FoodFast

## 1. Threat Surface Assessment
* **Authentication Security:** Ensuring non-student users cannot place unauthorized pre-orders.
* **Vendor Boundary Isolation:** Preventing one food stall vendor from viewing or modifying another vendor's order dashboard.
* **Input Injection Vulnerabilities:** Sanitizing custom order note fields against Cross-Site Scripting (XSS).

## 2. Technical Safeguards
* **Role-Based Access Control (RBAC):** Distinct authorization permissions separate "Student" consumer views from "Staff/Vendor" admin controls.
* **Session Management:** Auth tokens are passed via secure, HTTP-only cookies to prevent unauthorized session hijacking.
* **Payload Sanitation:** Form fields enforce strict regex validation before submitting orders to the database.
