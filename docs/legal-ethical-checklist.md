Markdown

# Legal and Ethical Compliance Checklist — FoodFast

This document acts as a compliance audit verifying that FoodFast adheres to essential legal, ethical, and campus software standards.

| Check Category | Compliance Requirement | Status | Verification Notes |
| :--- | :--- | :--- | :--- |
| **Privacy & PII** | Obtains explicit consent prior to collecting Student ID and phone number. | Compliant | Handled via modal consent during checkout registration. |
| **Data Protection** | Enforces data minimization and avoids storing raw financial payment details. | Compliant | All payment flows use tokenized third-party processing gateways. |
| **Intellectual Property** | Uses strictly open-source packages or royalty-free UI components. | Compliant | Verified across all libraries used in `/data/third-party-assets-register.csv`. |
| **Ethical AI / Analytics** | Ensures user ordering behavior analytics are anonymized. | Compliant | Order metrics are stripped of personal Student IDs before aggregate analysis. |
| **Security Risk** | Restricts administrative functions (vendor menu editing) using RBAC. | Compliant | Protected with secure session token checks on backend endpoints. |
