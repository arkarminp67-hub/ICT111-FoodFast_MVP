// Mock Campus Vendor Database
const vendorData = [
    {
        id: 1,
        name: "P'Noi Holy Basil (กะเพราอาคาร 6)",
        category: "thai",
        location: "Building 6 Canteen",
        badge: "Popular",
        badgeStyle: "pink-bg",
        tagClass: "popular",
        desc: "Spicy Basil Rice • Cooked-to-Order • Fast Delivery",
        rating: "★ 4.9",
        time: "⏱️ 12 min",
        item: "Kra Pao Moo Grob",
        price: 55
    },
    {
        id: 2,
        name: "RSU Cyber Cafe & Boba Tea",
        category: "beverages",
        location: "Building 11 Lobby",
        badge: "Student Deal",
        badgeStyle: "purple-bg",
        tagClass: "deal",
        desc: "Iced Espresso • Taiwanese Milk Tea",
        rating: "★ 4.7",
        time: "⏱️ 8 min",
        item: "Signature Bubble Tea",
        price: 45
    }
];

let cart = [];
let currentMode = 'student'; // 'student' or 'vendor'

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
    renderVendors(vendorData);
});

// Render Vendor Cards
function renderVendors(items) {
    const grid = document.getElementById("vendorGrid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = `<p class="empty-msg">No vendor matching your search criteria.</p>`;
        return;
    }

    items.forEach(v => {
        const card = document.createElement("div");
        card.className = "vendor-card";
        card.innerHTML = `
            <div class="card-top ${v.badgeStyle}">
                <span class="badge-tag ${v.tagClass}">${v.badge}</span>
                <span class="badge-building">${v.location}</span>
            </div>
            <div class="card-body">
                <h4>${v.name}</h4>
                <p>${v.desc}</p>
                <div class="card-footer">
                    <span class="rating-time">${v.rating} &nbsp;&nbsp; ${v.time}</span>
                    <button class="btn-add" onclick="addToCart('${v.item}', ${v.price})">Add ฿${v.price}</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Search Handler
function handleSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = vendorData.filter(v =>
        v.name.toLowerCase().includes(query) || v.desc.toLowerCase().includes(query)
    );
    renderVendors(filtered);
}

// Filter Category
function filterCategory(cat) {
    document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    event.target.classList.add("active");

    if (cat === 'all') {
        renderVendors(vendorData);
    } else {
        const filtered = vendorData.filter(v => v.category === cat);
        renderVendors(filtered);
    }
}

// Add to Basket
function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCartUI();
    toggleCartDrawer(true);
}

// Update Cart Display
function updateCartUI() {
    document.getElementById("cartCount").innerText = cart.length;
    const list = document.getElementById("cartItemsList");

    if (cart.length === 0) {
        list.innerHTML = `<p class="empty-msg">Your basket is empty. Add items from the menu!</p>`;
        document.getElementById("cartSubtotal").innerText = "฿0.00";
        document.getElementById("cartTotal").innerText = "฿0.00";
        return;
    }

    list.innerHTML = "";
    let total = 0;
    cart.forEach((item, idx) => {
        total += item.price;
        list.innerHTML += `
            <div class="summary-line">
                <span>${item.name} (Vol: 1)</span>
                <strong>฿${item.price}</strong>
            </div>
        `;
    });

    document.getElementById("cartSubtotal").innerText = `฿${total.toFixed(2)}`;
    document.getElementById("cartTotal").innerText = `฿${total.toFixed(2)}`;
}

// Toggle Cart Overlay
function toggleCartDrawer(forceOpen = false) {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");

    if (forceOpen) {
        drawer.classList.add("open");
        overlay.classList.add("open");
    } else {
        drawer.classList.toggle("open");
        overlay.classList.toggle("open");
    }
}

// Checkout Logic
function checkoutOrder() {
    if (cart.length === 0) {
        alert("Your basket is empty!");
        return;
    }

    alert("Order Confirmed! Your order has been dispatched to the kitchen.");

    // Simulate updating Vendor Portal
    const vendorQueue = document.getElementById("vendorQueue");
    vendorQueue.innerHTML = `
        <div style="background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid #e91e63;">
            <p><strong>Order #ORD-8821</strong></p>
            <p style="font-size:12px; color:#64748b;">Target: Building 11 Hub</p>
            <span style="font-size:10px; background:#e0e7ff; color:#3730a3; padding:2px 6px; border-radius:4px;">Preparing</span>
        </div>
    `;

    document.getElementById("activeOrderMetric").innerText = "1";
    document.getElementById("dispatchTableBody").innerHTML = `
        <tr>
            <td>#ORD-8821</td>
            <td>Building 11 (Digital Media Hub)</td>
            <td>12 mins remaining</td>
            <td>Somchai (Runner #2)</td>
            <td><span style="color:#16a34a; font-weight:700;">In Transit</span></td>
        </tr>
    `;

    cart = [];
    updateCartUI();
    toggleCartDrawer(false);
    switchTab('deliveries');
}

// Tab Switcher
function switchTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(t => t.classList.add("hidden"));
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));

    document.getElementById(`tab-${tabId}`).classList.remove("hidden");
    if (event) event.currentTarget.classList.add("active");
}

// Toggle Mode Switcher (Student vs Vendor Admin)
function toggleViewMode() {
    const badge = document.getElementById("currentModeBadge");
    const btn = document.getElementById("toggleModeBtn");
    const studentNav = document.getElementById("studentNav");
    const vendorNav = document.getElementById("vendorNav");

    if (currentMode === 'student') {
        currentMode = 'vendor';
        badge.innerText = "Vendor Admin Mode";
        btn.innerText = "Switch to Student View";
        studentNav.classList.add("hidden");
        vendorNav.classList.remove("hidden");
        switchTab('vendor-dashboard');
    } else {
        currentMode = 'student';
        badge.innerText = "Student Mode";
        btn.innerText = "Switch to Vendor Admin";
        vendorNav.classList.add("hidden");
        studentNav.classList.remove("hidden");
        switchTab('kitchens');
    }
}