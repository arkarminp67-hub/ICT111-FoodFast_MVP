# Lab 04: System Requirements Document - FoodFast

## 1. Functional Requirements (FR)
[cite_start]Functional requirements define what the web application's interface and database operations must explicitly execute[cite: 85].

| Req ID | Requirement Description | Priority | Traceable Lab 03 Problem Source |
| :--- | :--- | :--- | :--- |
| **FR-01** | The system shall allow students to browse active vendor menus and real-time meal availability status. | **Must** | Prevents item running-out frustrations (Selected by 15% of users). |
| **FR-02** | The system shall process pre-orders and output a simulated digital receipt token. | **Must** | Replaces slow physical line bottlenecks (Selected by 57.5% of users). |
| **FR-03** | The system shall display live progress updates of orders (Pending -> Preparing -> Ready for Pickup). | **Must** | Eliminates confusion caused by manual paper tickets and lost orders. |
| **FR-04** | The system shall prioritize digital wallet (QR code) checkout simulation paths. | **Should** | Aligns with the 77.5% digital transaction customer preference trend. |

---

## 2. Non-Functional Requirements (NFR)
[cite_start]Non-functional requirements dictate the platform's operational constraints and qualities[cite: 85].

| Req ID | Requirement Description | Priority | Implementation Strategy (No IoT / Basic Security) |
| :--- | :--- | :--- | :--- |
| **NFR-01** | **Feasibility & Simplicity:** The software architecture must operate entirely as a client-side web prototype without external hardware. | **Must** | Uses simple Airtable / local storage tables instead of physical buzzers. |
| **NFR-02** | **Usability:** Responsive layout optimized for mobile browsers. | **Must** | Built with lightweight mobile-first HTML/CSS or Figma components. |
| **NFR-03** | **Security Constraints:** The platform will use simulated sandbox checkouts. | **Must** | No real financial gateways or advanced penetration compliance required. |
