# Lab 11 - Prototype Testing Notes

## Main User Flow Tested
Tested the complete student-to-vendor ordering journey:
1. **Homepage & Search:** Browsed campus canteen vendors on `index.html`, searched for "Holy Basil", and filtered by `Thai Dishes`.
2. **Basket Submission:** Added items to cart, opened the slide-over basket drawer, and confirmed the order with automated subtotal calculation.
3. **Status Tracking:** Viewed active delivery status progress bar under the "Active Deliveries" tab (`Preparing meal...`).
4. **Student Profile:** Navigated to "Student Profile" to verify account details and FoodFast VIP tier.
5. **Vendor Operations Portal:** Used the sidebar mode switcher to toggle to "Vendor Admin View" to observe incoming live kitchen queues, runner dispatch matrices, and masked PII student numbers (`081-XXX-XX89`).

## Problems Found
1. Basket drawer did not automatically open when a student clicked "Add ฿55", causing confusion on whether the item was added.
2. Searching for a food item did not clear previous category pill selections (e.g., searching while "Beverages" pill was active returned empty results).
3. Vendor kitchen dispatch table lacked an explicit countdown timer for meal preparation cycle times.

## Improvement for Final Prototype
| Problem | Requirement ID | Fix Before Final Prototype |
|---|---|---|
| Cart feedback missing on click | FR-03, FR-11 | Trigger slide-over basket drawer auto-open and animate cart count badge upon clicking "Add". |
| Search/Filter state conflict | FR-06 | Reset category pill selection to "All Canteens" whenever text is typed into the search input. |
| Missing prep cycle countdown | FR-08, FR-12 | Add a dynamic countdown timer column (`12 mins remaining`) on the Vendor Kitchen Operations Portal table. |
