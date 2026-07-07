# Wireframe Specification: FoodFast

## Required Wireframe Screens
All screens are generated as exact visual states from our working single-page application and exported as PNGs.

| Wireframe File | Purpose | Minimum Elements to Show | Related Requirements |
|---|---|---|---|
| /wireframes/homepage.png | Entry point of the system | FoodFast RSU branding, student login form, email validation, password field, action buttons | FR-01, FR-02 |
| /wireframes/input-form.png | User data submission | Sliding basket overlay drawer, item counters, custom instruction labels, campus drop-off point dropdown, error/confirmation area | FR-03, FR-10, FR-11 |
| /wireframes/record-list.png | List existing records | Category pills (Thai, Beverage, Bakery), interactive campus kitchen card grids, real-time search query inputs, dynamic match indicators | FR-05, FR-06, FR-08 |
| /wireframes/detail-view.png | Show selected record | Active order progress bars, dispatch states, dynamic pickup time estimations, delivery milestone steps | FR-07, FR-08 |
| /wireframes/dashboard.png | Summary/analytics view | Student profile metrics card, verified RSU badge, loyalty achievement tiers, lifetime delivery analytics counter | FR-12 |
| /wireframes/admin-view.png | Admin/manager function | Route radius modification filters, canteen status toggle simulator, estimated time adjustment inputs | FR-09, FR-08 |

## Wireframe Quality Rules
- **Consistency:** All screens maintain the `--rsu-pink` and `--rsu-blue` branding layout and bottom navigation panel logic defined in `style.css`.
- **No Placeholders:** Avoid decorative-only screens; all wireframe captures utilize realistic data instead of blank blocks.
- **Prototype Alignment:** Every component maps straight to DOM configurations in `index.html`.
