graph TD
    User[Student/Customer Frontend Web UI] -->|Reads Menu / Submits Orders| DB[(System Database)]
    Vendor[Vendor Admin Dashboard View] -->|Updates Status / Edits Menu| DB
    DB -->|Pushes Real-Time State Updates| User
    DB -->|Aggregates Stats| Dashboard[Admin Analytics Dashboard Widget]
