Markdown

# Lab 11 - Startup/Product Metrics

## 1. KPI Summary
- Total records: 128 campus pre-orders logged
- New submissions: 42 orders submitted during Sprint 2 testing
- Pending cases: 4 active orders in kitchen queue
- Resolution rate: 96.8% successful order fulfillment rate
- Average resolution days: 0.008 days (~11.5 minutes average fulfillment cycle time)

## 2. Metrics Interpretation
| Metric | Result | Meaning | Prototype Decision |
|---|---:|---|---|
| Menu-to-Basket Conversion | 52% | High student intent to pre-order meals when menus are clear. | Retain current prominent vendor card layouts and pricing buttons. |
| Average Preparation Cycle | 11.5 mins | Kitchens prepare meals well within the 15-minute class break threshold. | Set target prep time indicator badge on vendor cards to `12 min`. |
| Cart Abandonment Rate | 12% | Minor checkout friction during peak hours. | Keep checkout form streamlined to a single click after basket review. |
| Vendor Queue Throughput | 8.5 orders/hr | Vendors can handle incoming classroom delivery load efficiently. | Expand runner dispatch assignment capacity from 4 to 8 runners. |

## 3. Requirement Evidence
| Requirement ID | Dashboard Evidence | Screenshot/Visual |
|---|---|---|
| FR-03 | Slide-over basket drawer showing itemized pricing and free campus delivery fee | `/screenshots/input-form.png` |
| FR-06 | Multi-category pill filter and dynamic keyword search bar | `/screenshots/record-list.png` |
| FR-08 | Active order status tracking card with progress indicator | `/screenshots/detail-view.png` |
| FR-09 | Kitchen Management Operations Portal with live order queue and dispatch matrix | `/screenshots/admin-view.png` |
| FR-12 | Active order metric counter and pending runner availability display | `/screenshots/admin-view.png` |
