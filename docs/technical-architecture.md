# Technical Architecture — FoodFast

## 1. Chosen Architecture Option
We have selected a **Database-backed Web Application Stack** utilizing **Frontend web languages (HTML5, CSS3, JavaScript)** interacting with a **Firebase/Supabase** or alternative light backend database infrastructure. 
* **Justification:** This approach matches our team's skill progression timeline while fully delivering dynamic data management needed for live order routing, system state changes, and dashboard updates.

## 2. Component Breakdown
* **Frontend UI Platform:** Responsive, mobile-first Web Application built using HTML, CSS, and modern JavaScript.
* **Storage & Database:** Relational tables (or equivalent Document structures) to process active data for vendors, menus, orders, and users.
* **Admin Mechanism:** Dedicated vendor layout routing allowing merchants to toggle menu availability, view open order queues, and mark orders as "Ready".
* **Dashboard Method:** Simplified analytic summary widget showing daily total sales volume, completed transaction counts, and popular items.

## 3. Simulation Boundaries
* **Payment Gateways:** Simulated via a fake checkout confirmation toggle ("Simulate Successful Payment"). No live banking API integration will be implemented due to semester time-constraints.
* **Rider GPS Tracking:** Simulated using step-by-step mock status updates (e.g., interval state-changes: Order Placed -> Preparing -> Out for Delivery -> Arrived) rather than live geo-tracking.
