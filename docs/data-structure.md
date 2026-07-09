# Data Structure — FoodFast

Our prototype manages three primary logical data entities to run the application logic.

## 1. Users / Customers Entity (`users`)
* **`user_id`** (String/UUID, Primary Key): Unique identifier for the account.
* **`full_name`** (String): Customer's name. Validation: Cannot be empty.
* **`student_id`** (String): University registration ID.
* **`phone_number`** (String): Required for delivery drops.
* *Sample Record:* `("USR001", "Alex Smith", "STU12345", "0812345678")`

## 2. Menu Items Entity (`menu_items`)
* **`item_id`** (String/UUID, Primary Key): Unique item code.
* **`vendor_name`** (String): Name of the canteen stall.
* **`item_name`** (String): Name of the dish.
* **`price`** (Decimal): Price in local currency. Validation: Must be greater than 0.00.
* **`availability`** (Boolean): True = In stock, False = Sold out.
* *Sample Record:* `("ITEM99", "Canteen Stall A", "Spicy Basil Chicken Rice", 4.50, true)`

## 3. Orders Entity (`orders`)
* **`order_id`** (String/UUID, Primary Key): Unique system order number.
* **`user_id`** (String, Foreign Key -> `users.user_id`): Customer placing order.
* **`items_ordered`** (JSON/String): Array of item IDs and quantities.
* **`total_amount`** (Decimal): Summary checkout cost.
* **`order_status`** (String): Current status. Allowed Values: `Pending`, `Preparing`, `Ready for Pickup`, `Completed`.
* **`timestamp`** (DateTime): Date and time of checkout.
* *Sample Record:* `("ORD-552", "USR001", "[{'item_id': 'ITEM99', 'qty': 1}]", 4.50, "Preparing", "2026-07-09 12:30:00")`
