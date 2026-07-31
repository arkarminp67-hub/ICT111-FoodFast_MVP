# Sales & Usage Scenario — FoodFast RSU

## 1. Context & User Profile
* **Target User:** Nong Earth, a 2nd-year Digital Media student at Rangsit University (RSU).
* **Location Path:** Building 11 Computer Lab $\rightarrow$ Building 6 Canteen.
* **Timing & Friction:** It is 11:45 AM. Earth has a 15-minute class transition before his next lecture in Building 6 at 12:00 PM. During peak lunch hours, waiting in line at canteen stalls takes 20–25 minutes, forcing students to skip meals or arrive late to class[cite: 1, 2].

---

## 2. Trigger Event
Earth sees a FoodFast RSU QR poster attached to his classroom exit door with the headline: *"Skip the 20-minute canteen line. Pre-order lunch now in 2 clicks."*[cite: 2]

---

## 3. End-to-End Product Scenario Walkthrough

### Step 1: Scan & Landing Page Access
Earth scans the QR code with his smartphone and is immediately directed to the promotional landing page (`/landing-page/index.html`)[cite: 2]. He taps the primary Call-To-Action button, **"Pre-Order Your Meal Now"**, which routes him directly to the active web app prototype (`FR-01`, `FR-02`)[cite: 1].

### Step 2: Dish Discovery & Selection
On the main menu page, Earth types "Holy Basil" into the search bar, filtering down the options instantly (`FR-06`)[cite: 1]. He selects *Holy Basil Pork Rice with Fried Egg* (฿55) to view dish details, preparation time estimate (12 mins), and spice level options (`FR-07`)[cite: 1].

### Step 3: Customization & Cart Checkout
He selects "Medium Spicy", taps **"Add to Basket"**, and opens the slide-over basket drawer (`FR-03`)[cite: 1]. The system automatically calculates the ฿55 meal cost plus a ฿5 campus transaction fee, bringing the subtotal to ฿60 (`FR-11`)[cite: 1]. Earth enters his mobile number, which is validated by the system before he taps **"Confirm Order"** (`FR-10`). The order details persist dynamically in local storage (`FR-04`).

### Step 4: Real-Time Preparation & Order Tracking
While walking across campus from Building 11 to Building 6, Earth monitors his live order status on his phone (`FR-08`)[cite: 1]. The progress bar advances from **"Received"** to **"Preparing in Kitchen"**.

### Step 5: Kitchen Operations & Privacy Protection
At the food stall, P'Noi (the canteen vendor) views incoming orders on her kitchen operational tablet (`FR-05`, `FR-09`)[cite: 1]. Earth's contact number is automatically masked (`081-XXX-XX89`) on the public vendor screen to safeguard student PII privacy compliance (`FR-15`)[cite: 1]. P'Noi updates the status to **"Ready for Pickup"** when the order is packaged.

### Step 6: Zero-Queue Pickup
Earth arrives at Building 6 canteen at 11:57 AM, walks straight to the FoodFast pickup counter, shows his 4-digit order code (`ORD-101`), collects his hot meal, and arrives at his Building 6 lecture hall on time at 12:00 PM[cite: 1].

---

## 4. Value Realized

| Stakeholder | Before FoodFast RSU | With FoodFast RSU |
| :--- | :--- | :--- |
| **Student (Earth)** | 20–25 minute line wait time; missed meals or class tardiness[cite: 1, 2]. | **0 minutes waiting in line**; guaranteed 12-minute meal delivery[cite: 1]. |
| **Vendor (P'Noi)** | Rush-hour kitchen chaos; lost revenue from students walking away from long queues. | Streamlined pre-orders, predictable prep cycles, and protected customer PII[cite: 1]. |
