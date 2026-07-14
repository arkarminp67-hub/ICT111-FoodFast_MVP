# Success Metrics & Decision Rules — FoodFast

We measure experiment viability against concrete, observable action thresholds[cite: 2].

| Metric Name | Calculation Method | Target Threshold | Minimum Acceptable Level |
| :--- | :--- | :--- | :--- |
| **Task Completion Rate** | $\frac{\text{Successfully Completed Tasks}}{\text{Total Attempted Tasks}} \times 100$ | $90\%$ of testers | $75\%$ of testers[cite: 2] |
| **Time-to-Complete Checkout**| Average seconds spent from item discovery to transaction submission | $< 45 \text{ seconds}$ | $< 70 \text{ seconds}$[cite: 2] |
| **System State Error Rate** | Count of UI misclicks or input validation errors during checkout | $\le 1 \text{ error per user}$ | $\le 2 \text{ errors per user}$[cite: 2] |
| **Value Rating Score** | Average score from feedback question (Scale 1-5) | $\ge 4.0 / 5.0$ | $\ge 3.5 / 5.0$[cite: 2] |

## Decision Rules
* **PASS:** If metrics meet or exceed Target Thresholds, proceed to full prototype frontend assembly[cite: 2].
* **ITERATE:** If metrics fall below Target Thresholds but stay above the Minimum Acceptable Level, modify current wireframe states based on feedback[cite: 2].
* **PIVOT:** If Task Completion falls below $75\%$, suspend further coding and schedule an immediate user flow redesign session[cite: 2].
