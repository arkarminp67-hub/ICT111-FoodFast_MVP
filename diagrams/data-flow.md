sequenceDiagram
    autonumber
    actor Student
    actor Vendor
    participant DB as System Database
    
    Student->>Student: Browses Menu Items
    Student->>DB: Submits Order (Status: Pending, Items, Total)
    DB-->>Vendor: Notifies Vendor Portal of New Incoming Order
    Vendor->>DB: Accepts Order & Changes Status to "Preparing"
    DB-->>Student: Displays Live Order Track (Preparing)
    Vendor->>DB: Updates Status to "Ready for Pickup"
    DB-->>Student: Updates Order Track (Ready for Pickup)
    Student->>Vendor: Collects Meal
    Vendor->>DB: Finalizes Order (Status: Completed)
