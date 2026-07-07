graph TD
    A[auth-screen: Log In / Register using @rsu.ac.th] -->|executeUserLoginSession| B[home-view: Browse Campus Canteens]
    B -->|Category Pills / Search Input| C[home-view: Filter Active Vendors]
    C -->|add-to-cart-action| D[cart-drawer-overlay: Open Basket & Configure Order]
    D -->|checkoutFinalActionBtn| E[orders-view: Track Active Deliveries with Progress Bar]
    E -->|Simulated Route Time Completion| F[profile-view: Verify Student VIP Account Tier Metrics]
