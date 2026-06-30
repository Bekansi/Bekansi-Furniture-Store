/* ==========================================================================
   Bekansi Furniture & Interior Design — script.js
   Vanilla JS. No frameworks, no build step.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     0. PRODUCT DATA
  --------------------------------------------------------------------- */
  const PRODUCTS = [
    { id: "sf-001", name: "Milano Tufted Sofa Set", category: "Sofas", icon: "icon-sofa", price: 84500, oldPrice: 96000, rating: 4.8, reviews: 42, badge: "Best Seller", grad: "linear-gradient(135deg,#E8D9C1,#D4A24C33)", desc: "A 3-seater plus 2 single-seater set finished in premium beige fabric with deep button-tufted backrests and solid hardwood legs. Built for everyday comfort and long-lasting support.", specs: { "Material": "Hardwood frame, premium fabric", "Seating": "3+1+1 (5 seater)", "Color Options": "Beige, Grey, Brown", "Warranty": "2 Years" } },
    { id: "sf-002", name: "Addis L-Shape Sectional", category: "Sofas", icon: "icon-sofa", price: 112000, oldPrice: null, rating: 4.9, reviews: 31, badge: "New", grad: "linear-gradient(135deg,#F3E9DA,#9C7A2D33)", desc: "Spacious L-shaped sectional sofa designed for modern living rooms. Reversible chaise, high-density foam cushions and durable leatherette upholstery.", specs: { "Material": "Engineered wood, leatherette", "Seating": "6 seater", "Color Options": "Tan, Charcoal", "Warranty": "2 Years" } },
    { id: "sf-003", name: "Lalibela Lounge Loveseat", category: "Sofas", icon: "icon-sofa", price: 38500, oldPrice: 43000, rating: 4.6, reviews: 18, badge: null, grad: "linear-gradient(135deg,#E8D9C1,#3B241733)", desc: "Compact 2-seater loveseat perfect for small living rooms, offices or reading corners. Sturdy frame with elegant rolled arms.", specs: { "Material": "Solid wood, cotton-blend fabric", "Seating": "2 seater", "Color Options": "Mustard, Beige", "Warranty": "18 Months" } },

    { id: "bd-001", name: "Harar King Size Bed Frame", category: "Beds", icon: "icon-bed", price: 56000, oldPrice: null, rating: 4.7, reviews: 27, badge: "Best Seller", grad: "linear-gradient(135deg,#E8D9C1,#D4A24C33)", desc: "Elegant king-size bed frame with an upholstered headboard and reinforced slats for maximum durability. Includes under-bed storage drawers.", specs: { "Size": "King (180x200cm)", "Material": "Solid wood, velvet headboard", "Storage": "2 Drawers", "Warranty": "3 Years" } },
    { id: "bd-002", name: "Gondar Queen Platform Bed", category: "Beds", icon: "icon-bed", price: 42000, oldPrice: 47500, rating: 4.5, reviews: 22, badge: "Sale", grad: "linear-gradient(135deg,#F3E9DA,#9C7A2D33)", desc: "Minimalist queen-size platform bed with a clean silhouette, perfect for modern bedrooms. No box spring required.", specs: { "Size": "Queen (150x200cm)", "Material": "Engineered wood", "Storage": "None", "Warranty": "2 Years" } },
    { id: "bd-003", name: "Axum Kids Single Bed", category: "Beds", icon: "icon-bed", price: 21000, oldPrice: null, rating: 4.8, reviews: 15, badge: "New", grad: "linear-gradient(135deg,#E8D9C1,#3B241733)", desc: "Safe and sturdy single bed designed for children's rooms, with rounded edges and a built-in guard rail.", specs: { "Size": "Single (100x190cm)", "Material": "Solid pine wood", "Guard Rail": "Included", "Warranty": "2 Years" } },

    { id: "wd-001", name: "Bahir Dar 4-Door Wardrobe", category: "Wardrobes", icon: "icon-wardrobe", price: 64000, oldPrice: 72000, rating: 4.7, reviews: 33, badge: "Sale", grad: "linear-gradient(135deg,#E8D9C1,#D4A24C33)", desc: "Spacious 4-door wardrobe with hanging rails, shelves and drawers — designed to maximize storage in any bedroom.", specs: { "Doors": "4", "Material": "Melamine-faced board", "Shelves": "6", "Warranty": "2 Years" } },
    { id: "wd-002", name: "Mekelle Sliding Door Wardrobe", category: "Wardrobes", icon: "icon-wardrobe", price: 71000, oldPrice: null, rating: 4.9, reviews: 19, badge: "New", grad: "linear-gradient(135deg,#F3E9DA,#9C7A2D33)", desc: "Modern sliding-door wardrobe with mirrored panel — space-saving design ideal for smaller bedrooms.", specs: { "Doors": "2 Sliding", "Material": "MDF with mirror panel", "Shelves": "5", "Warranty": "2 Years" } },
    { id: "wd-003", name: "Adama Compact Wardrobe", category: "Wardrobes", icon: "icon-wardrobe", price: 35000, oldPrice: null, rating: 4.4, reviews: 11, badge: null, grad: "linear-gradient(135deg,#E8D9C1,#3B241733)", desc: "Compact 2-door wardrobe for small rooms, dorms or guest bedrooms, with internal shelving for organized storage.", specs: { "Doors": "2", "Material": "Particle board", "Shelves": "3", "Warranty": "1 Year" } },

    { id: "kc-001", name: "Modern L-Shape Kitchen Cabinet Set", category: "Kitchen Cabinets", icon: "icon-cabinet", price: 145000, oldPrice: 165000, rating: 4.9, reviews: 24, badge: "Best Seller", grad: "linear-gradient(135deg,#E8D9C1,#D4A24C33)", desc: "Full L-shaped kitchen cabinetry with upper and lower units, soft-close hinges and a durable laminate finish — custom-fit to your kitchen.", specs: { "Layout": "L-Shape", "Material": "Plywood + laminate", "Hinges": "Soft-close", "Installation": "Included" } },
    { id: "kc-002", name: "Classic Straight Kitchen Cabinets", category: "Kitchen Cabinets", icon: "icon-cabinet", price: 98000, oldPrice: null, rating: 4.6, reviews: 17, badge: null, grad: "linear-gradient(135deg,#F3E9DA,#9C7A2D33)", desc: "Single-wall kitchen cabinet run ideal for compact kitchens and studio apartments, with ample storage and a clean finish.", specs: { "Layout": "Straight", "Material": "MDF + laminate", "Hinges": "Standard", "Installation": "Included" } },
    { id: "kc-003", name: "Premium U-Shape Kitchen Cabinet Set", category: "Kitchen Cabinets", icon: "icon-cabinet", price: 198000, oldPrice: 220000, rating: 5.0, reviews: 9, badge: "Sale", grad: "linear-gradient(135deg,#E8D9C1,#3B241733)", desc: "Full U-shaped custom kitchen build with island-ready cabinetry, premium hardware and granite-ready countertops.", specs: { "Layout": "U-Shape", "Material": "Plywood + premium laminate", "Hinges": "Soft-close, hydraulic", "Installation": "Included" } },

    { id: "tv-001", name: "Sidamo Modern TV Stand", category: "TV Stands", icon: "icon-tvstand", price: 26500, oldPrice: null, rating: 4.6, reviews: 28, badge: "New", grad: "linear-gradient(135deg,#E8D9C1,#D4A24C33)", desc: "Sleek floating-style TV stand with cable management and ample storage, suitable for screens up to 65 inches.", specs: { "Max TV Size": "65 inch", "Material": "Engineered wood", "Storage": "2 Cabinets + 1 Open Shelf", "Warranty": "1 Year" } },
    { id: "tv-002", name: "Jimma Wall-Mounted Media Console", category: "TV Stands", icon: "icon-tvstand", price: 31000, oldPrice: 35000, rating: 4.7, reviews: 14, badge: "Sale", grad: "linear-gradient(135deg,#F3E9DA,#9C7A2D33)", desc: "Wall-mounted media console that creates a clean, floating look while saving floor space — great for modern living rooms.", specs: { "Max TV Size": "55 inch", "Material": "MDF + matte finish", "Mounting": "Wall-mounted", "Warranty": "1 Year" } },

    { id: "ds-001", name: "Wollo 6-Seater Dining Set", category: "Dining Sets", icon: "icon-dining", price: 68500, oldPrice: 75000, rating: 4.8, reviews: 36, badge: "Best Seller", grad: "linear-gradient(135deg,#E8D9C1,#D4A24C33)", desc: "Elegant 6-seater dining set with a solid wood table and upholstered chairs — the centerpiece for family gatherings.", specs: { "Seats": "6", "Material": "Solid wood, fabric chairs", "Table Shape": "Rectangular", "Warranty": "2 Years" } },
    { id: "ds-002", name: "Arba Minch 4-Seater Dining Set", category: "Dining Sets", icon: "icon-dining", price: 41500, oldPrice: null, rating: 4.5, reviews: 20, badge: null, grad: "linear-gradient(135deg,#F3E9DA,#9C7A2D33)", desc: "Compact 4-seater dining set ideal for small families and apartments, combining function with refined style.", specs: { "Seats": "4", "Material": "Engineered wood", "Table Shape": "Round", "Warranty": "18 Months" } },

    { id: "of-001", name: "Executive Office Desk & Chair Set", category: "Office Furniture", icon: "icon-office", price: 47500, oldPrice: 52000, rating: 4.7, reviews: 23, badge: "Sale", grad: "linear-gradient(135deg,#E8D9C1,#D4A24C33)", desc: "Professional executive desk paired with an ergonomic high-back chair — built for productivity and long work hours.", specs: { "Desk Size": "150x70cm", "Material": "MDF + metal frame", "Chair": "Ergonomic high-back", "Warranty": "2 Years" } },
    { id: "of-002", name: "Modular Office Workstation", category: "Office Furniture", icon: "icon-office", price: 39000, oldPrice: null, rating: 4.6, reviews: 12, badge: "New", grad: "linear-gradient(135deg,#F3E9DA,#9C7A2D33)", desc: "Space-efficient modular workstation for shared offices, with built-in cable management and storage drawer.", specs: { "Desk Size": "120x60cm", "Material": "Laminate board", "Drawer": "1", "Warranty": "1 Year" } },
    { id: "of-003", name: "Conference Table — 8 Seater", category: "Office Furniture", icon: "icon-office", price: 89000, oldPrice: null, rating: 4.9, reviews: 8, badge: null, grad: "linear-gradient(135deg,#E8D9C1,#3B241733)", desc: "Large 8-seater conference table with a premium veneer finish, suitable for boardrooms and meeting spaces.", specs: { "Seats": "8", "Material": "Veneer + metal legs", "Shape": "Rectangular", "Warranty": "2 Years" } },

    { id: "cf-001", name: "Custom-Made Furniture (Your Design)", category: "Custom Furniture", icon: "icon-custom", price: 0, oldPrice: null, rating: 5.0, reviews: 52, badge: "Made to Order", grad: "linear-gradient(135deg,#E8D9C1,#D4A24C33)", desc: "Bring us your sketch, photo or idea — our craftsmen will build bespoke furniture to your exact dimensions, material and finish preferences. Price quoted after consultation.", specs: { "Lead Time": "2–4 Weeks", "Material": "Your choice", "Sizing": "Fully custom", "Consultation": "Free" } },
  ];

  const GALLERY = [
    { icon: "icon-sofa", title: "Modern Living Room, Bole", grad: "linear-gradient(135deg,#E8D9C1,#D4A24C33)" },
    { icon: "icon-bed", title: "Master Bedroom Suite, CMC", grad: "linear-gradient(135deg,#F3E9DA,#9C7A2D33)" },
    { icon: "icon-cabinet", title: "Custom Kitchen, Old Airport", grad: "linear-gradient(135deg,#E8D9C1,#3B241733)" },
    { icon: "icon-office", title: "Executive Office, Kazanchis", grad: "linear-gradient(135deg,#E8D9C1,#D4A24C33)" },
    { icon: "icon-dining", title: "Family Dining Room, Sarbet", grad: "linear-gradient(135deg,#F3E9DA,#9C7A2D33)" },
    { icon: "icon-wardrobe", title: "Walk-in Closet, Ayat", grad: "linear-gradient(135deg,#E8D9C1,#3B241733)" },
    { icon: "icon-tvstand", title: "Entertainment Lounge, Bole", grad: "linear-gradient(135deg,#E8D9C1,#D4A24C33)" },
    { icon: "icon-custom", title: "Boutique Hotel Lobby, Piassa", grad: "linear-gradient(135deg,#F3E9DA,#9C7A2D33)" },
    { icon: "icon-sofa", title: "Penthouse Living Room, CMC", grad: "linear-gradient(135deg,#E8D9C1,#3B241733)" },
  ];

  const TESTIMONIALS = [
    { name: "Hanna Tesfaye", role: "Homeowner, Bole", text: "Bekansi furnished our entire living room and the quality is outstanding. The sofa set still looks brand new after two years.", rating: 5 },
    { name: "Dawit Alemu", role: "Hotel Manager, Piassa", text: "We hired Bekansi for our boutique hotel's interior design. Professional, on time, and the result exceeded our expectations.", rating: 5 },
    { name: "Selam Girma", role: "Homeowner, CMC", text: "Our custom kitchen cabinets were built exactly to our measurements. Great communication throughout the whole process.", rating: 4.5 },
    { name: "Yonas Bekele", role: "Office Manager, Kazanchis", text: "Ordered office furniture for 30 employees. Delivery was fast and the furniture is sturdy and comfortable.", rating: 5 },
    { name: "Liya Mekonnen", role: "Homeowner, Ayat", text: "From the free consultation to final delivery, Bekansi made furnishing our new home stress-free and elegant.", rating: 4.5 },
    { name: "Abel Wondimu", role: "Restaurant Owner, Sarbet", text: "Their custom dining furniture transformed our restaurant's atmosphere. Highly recommend their design team.", rating: 5 },
  ];

  const WHATSAPP_NUMBER = "251988828861";
  const CURRENCY = "ETB";

  /* ---------------------------------------------------------------------
     1. UTILITIES
  --------------------------------------------------------------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const fmtPrice = (n) => (n === 0 ? "Quote on Request" : `${CURRENCY} ${n.toLocaleString("en-US")}`);
  const escapeHtml = (str) => String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function starsMarkup(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let out = "";
    for (let i = 0; i < full; i++) out += `<svg width="14" height="14"><use href="#icon-star"></use></svg>`;
    if (half) out += `<svg width="14" height="14" style="opacity:.5"><use href="#icon-star"></use></svg>`;
    return out;
  }

  function showToast(msg) {
    const toast = $("#toast");
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  /* ---------------------------------------------------------------------
     2. LOADER
  --------------------------------------------------------------------- */
  window.addEventListener("load", () => {
    const loader = $("#loader");
    setTimeout(() => loader && loader.classList.add("is-hidden"), 350);
  });
  // Fallback in case load event already fired or is slow
  setTimeout(() => { const l = $("#loader"); if (l) l.classList.add("is-hidden"); }, 2500);

  /* ---------------------------------------------------------------------
     3. THEME (Dark / Light Mode)
  --------------------------------------------------------------------- */
  const THEME_KEY = "bekansi_theme";
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const icon = $("#theme-icon use");
    if (icon) icon.setAttribute("href", theme === "dark" ? "#icon-sun" : "#icon-moon");
    const toggleBtn = $("#theme-toggle");
    if (toggleBtn) toggleBtn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    localStorage.setItem(THEME_KEY, theme);
  }
  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));
  }
  $("#theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  /* ---------------------------------------------------------------------
     4. MOBILE NAV
  --------------------------------------------------------------------- */
  const navToggle = $("#nav-toggle");
  const mainNav = $("#main-nav");
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
  $$(".main-nav__list a").forEach((a) => a.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }));

  /* ---------------------------------------------------------------------
     5. STICKY HEADER SHADOW
  --------------------------------------------------------------------- */
  const header = $("#site-header");
  window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 10 ? "var(--shadow-sm)" : "none";
  }, { passive: true });

  /* ---------------------------------------------------------------------
     6. SEARCH PANEL
  --------------------------------------------------------------------- */
  const searchToggle = $("#search-toggle");
  const searchPanel = $("#search-panel");
  const searchClose = $("#search-close");
  const searchInput = $("#search-input");
  const searchResults = $("#search-results");

  function openSearch() {
    searchPanel.hidden = false;
    searchToggle.setAttribute("aria-expanded", "true");
    setTimeout(() => searchInput.focus(), 50);
  }
  function closeSearch() {
    searchPanel.hidden = true;
    searchToggle.setAttribute("aria-expanded", "false");
    searchInput.value = "";
    searchResults.hidden = true;
  }
  searchToggle.addEventListener("click", () => (searchPanel.hidden ? openSearch() : closeSearch()));
  searchClose.addEventListener("click", closeSearch);

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { searchResults.hidden = true; searchResults.innerHTML = ""; return; }
    const matches = PRODUCTS.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 8);
    searchResults.hidden = false;
    searchResults.innerHTML = matches.length
      ? matches.map((p) => `
        <div class="search-result-item" data-id="${p.id}" role="button" tabindex="0">
          <div class="thumb" style="background:${p.grad}"></div>
          <div class="info"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.category)} • ${fmtPrice(p.price)}</span></div>
        </div>`).join("")
      : `<p class="no-results">No products found for "${escapeHtml(q)}".</p>`;
  });
  searchResults.addEventListener("click", (e) => {
    const item = e.target.closest(".search-result-item");
    if (!item) return;
    closeSearch();
    openProductModal(item.dataset.id);
  });

  /* ---------------------------------------------------------------------
     7. SCROLL ANIMATIONS
  --------------------------------------------------------------------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  function observeFadeUps(root = document) {
    $$(".fade-up", root).forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------------------
     8. BACK TO TOP
  --------------------------------------------------------------------- */
  const backToTop = $("#back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) { backToTop.hidden = false; backToTop.classList.add("is-visible"); }
    else { backToTop.classList.remove("is-visible"); }
  }, { passive: true });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------------------------------------------------------------------
     9. ACCORDION (FAQ)
  --------------------------------------------------------------------- */
  $$(".accordion__trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      // close others
      $$(".accordion__trigger").forEach((other) => {
        if (other !== btn) {
          other.setAttribute("aria-expanded", "false");
          other.nextElementSibling.style.maxHeight = null;
        }
      });
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      panel.style.maxHeight = expanded ? null : panel.scrollHeight + "px";
    });
  });

  /* ---------------------------------------------------------------------
     10. MODAL / DRAWER HELPERS
  --------------------------------------------------------------------- */
  function openModal(modal) {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal(modal) {
    modal.hidden = true;
    document.body.style.overflow = "";
  }
  $$("[data-close-modal]").forEach((el) => el.addEventListener("click", () => {
    closeModal(el.closest(".modal"));
  }));
  $$("[data-close-drawer]").forEach((el) => el.addEventListener("click", () => {
    closeModal(el.closest(".drawer"));
  }));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      $$(".modal:not([hidden])").forEach(closeModal);
      $$(".drawer:not([hidden])").forEach(closeModal);
      closeSearch();
    }
  });

  /* ---------------------------------------------------------------------
     11. CART (localStorage)
  --------------------------------------------------------------------- */
  const CART_KEY = "bekansi_cart";
  const WISHLIST_KEY = "bekansi_wishlist";

  function getCart() { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
  function saveCart(cart) { localStorage.setItem(CART_KEY, JSON.stringify(cart)); renderCart(); updateBadges(); }
  function getWishlist() { return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]"); }
  function saveWishlist(list) { localStorage.setItem(WISHLIST_KEY, JSON.stringify(list)); renderWishlist(); updateBadges(); renderProducts(); }

  function addToCart(id, qty = 1) {
    const cart = getCart();
    const existing = cart.find((i) => i.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id, qty });
    saveCart(cart);
    const p = PRODUCTS.find((p) => p.id === id);
    showToast(`${p ? p.name : "Item"} added to cart`);
  }
  function removeFromCart(id) { saveCart(getCart().filter((i) => i.id !== id)); }
  function setCartQty(id, qty) {
    const cart = getCart();
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
  function clearCart() { saveCart([]); }

  function toggleWishlist(id) {
    const list = getWishlist();
    const idx = list.indexOf(id);
    if (idx > -1) { list.splice(idx, 1); showToast("Removed from wishlist"); }
    else { list.push(id); showToast("Added to wishlist"); }
    saveWishlist(list);
  }

  function updateBadges() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    $("#cart-count").textContent = totalQty;
    $("#wishlist-count").textContent = getWishlist().length;
  }

  function cartItemMarkup(item) {
    const p = PRODUCTS.find((p) => p.id === item.id);
    if (!p) return "";
    return `
      <div class="cart-item" data-id="${p.id}">
        <div class="cart-item__media" style="background:${p.grad}"><svg width="28" height="28"><use href="#${p.icon}"></use></svg></div>
        <div class="cart-item__info">
          <strong>${escapeHtml(p.name)}</strong>
          <span>${fmtPrice(p.price)}</span>
          <div class="cart-item__controls">
            <div class="qty-stepper">
              <button type="button" data-action="dec" aria-label="Decrease quantity"><svg width="14" height="14"><use href="#icon-minus"></use></svg></button>
              <span>${item.qty}</span>
              <button type="button" data-action="inc" aria-label="Increase quantity"><svg width="14" height="14"><use href="#icon-plus"></use></svg></button>
            </div>
          </div>
        </div>
        <button class="cart-item__remove" data-action="remove" aria-label="Remove ${escapeHtml(p.name)} from cart"><svg width="18" height="18"><use href="#icon-trash"></use></svg></button>
      </div>`;
  }

  function renderCart() {
    const cart = getCart();
    const container = $("#cart-items");
    if (!cart.length) {
      container.innerHTML = `<p class="empty-state">Your cart is empty.<br>Browse our <a href="#catalog" style="color:var(--color-gold);text-decoration:underline">product catalog</a> to get started.</p>`;
    } else {
      container.innerHTML = cart.map(cartItemMarkup).join("");
    }
    const total = cart.reduce((sum, i) => {
      const p = PRODUCTS.find((p) => p.id === i.id);
      return sum + (p ? p.price * i.qty : 0);
    }, 0);
    $("#cart-total").textContent = fmtPrice(total);
  }

  $("#cart-items").addEventListener("click", (e) => {
    const itemEl = e.target.closest(".cart-item");
    if (!itemEl) return;
    const id = itemEl.dataset.id;
    const action = e.target.closest("button")?.dataset.action;
    const cart = getCart();
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    if (action === "inc") setCartQty(id, item.qty + 1);
    if (action === "dec") item.qty > 1 ? setCartQty(id, item.qty - 1) : removeFromCart(id);
    if (action === "remove") removeFromCart(id);
  });

  function wishlistItemMarkup(id) {
    const p = PRODUCTS.find((p) => p.id === id);
    if (!p) return "";
    return `
      <div class="wishlist-item" data-id="${p.id}">
        <div class="wishlist-item__media" style="background:${p.grad}"><svg width="26" height="26"><use href="#${p.icon}"></use></svg></div>
        <div class="wishlist-item__info">
          <strong>${escapeHtml(p.name)}</strong>
          <span>${fmtPrice(p.price)}</span>
        </div>
        <div class="wishlist-item__actions">
          <button class="btn btn--sm btn--primary" data-action="add-cart">Add to Cart</button>
          <button class="wishlist-item__remove" data-action="remove" aria-label="Remove from wishlist"><svg width="16" height="16"><use href="#icon-trash"></use></svg></button>
        </div>
      </div>`;
  }
  function renderWishlist() {
    const list = getWishlist();
    const container = $("#wishlist-items");
    container.innerHTML = list.length
      ? list.map(wishlistItemMarkup).join("")
      : `<p class="empty-state">Your wishlist is empty.<br>Tap the heart icon on any product to save it here.</p>`;
  }
  $("#wishlist-items").addEventListener("click", (e) => {
    const itemEl = e.target.closest(".wishlist-item");
    if (!itemEl) return;
    const id = itemEl.dataset.id;
    const action = e.target.closest("button")?.dataset.action;
    if (action === "add-cart") addToCart(id);
    if (action === "remove") toggleWishlist(id);
  });

  $("#cart-toggle").addEventListener("click", () => openModal($("#cart-drawer")));
  $("#wishlist-toggle").addEventListener("click", () => openModal($("#wishlist-drawer")));
  $("#clear-cart").addEventListener("click", () => {
    if (getCart().length && confirm("Remove all items from your cart?")) clearCart();
  });

  /* ---------------------------------------------------------------------
     12. WHATSAPP CHECKOUT
  --------------------------------------------------------------------- */
  $("#checkout-whatsapp").addEventListener("click", () => {
    const cart = getCart();
    if (!cart.length) { showToast("Your cart is empty"); return; }
    let msg = "Hello Bekansi, I would like to order the following items:\n\n";
    let total = 0;
    cart.forEach((item) => {
      const p = PRODUCTS.find((p) => p.id === item.id);
      if (!p) return;
      const lineTotal = p.price * item.qty;
      total += lineTotal;
      msg += `• ${p.name} (x${item.qty}) — ${fmtPrice(lineTotal)}\n`;
    });
    msg += `\nEstimated Total: ${fmtPrice(total)}\n\nPlease confirm availability and delivery details. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  });

  /* ---------------------------------------------------------------------
     13. PRODUCT CARD / GRID RENDERING + FILTER + SORT
  --------------------------------------------------------------------- */
  const grid = $("#product-grid");
  const noResults = $("#no-results");
  let activeFilter = "All";
  let activeSort = "default";
  let activeQueryFromChip = "";

  function productCardMarkup(p) {
    const isWished = getWishlist().includes(p.id);
    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-card__media" style="--p-grad:${p.grad}">
          ${p.badge ? `<span class="product-card__badge">${escapeHtml(p.badge)}</span>` : ""}
          <button class="product-card__wishlist ${isWished ? "is-active" : ""}" data-action="wishlist" aria-label="${isWished ? "Remove from wishlist" : "Add to wishlist"}" aria-pressed="${isWished}">
            <svg width="18" height="18"><use href="#icon-heart"></use></svg>
          </button>
          <svg><use href="#${p.icon}"></use></svg>
        </div>
        <div class="product-card__body">
          <span class="product-card__cat">${escapeHtml(p.category)}</span>
          <h3 class="product-card__name" data-action="view">${escapeHtml(p.name)}</h3>
          <div class="product-card__rating">${starsMarkup(p.rating)} <span>${p.rating.toFixed(1)} (${p.reviews})</span></div>
          <div class="product-card__footer">
            <span class="product-card__price">${fmtPrice(p.price)}${p.oldPrice ? `<small>${fmtPrice(p.oldPrice)}</small>` : ""}</span>
            <button class="add-to-cart" data-action="add-cart">
              <svg width="14" height="14"><use href="#icon-cart"></use></svg> Add
            </button>
          </div>
        </div>
      </article>`;
  }

  function getFilteredSortedProducts() {
    let list = PRODUCTS.slice();
    if (activeFilter !== "All") list = list.filter((p) => p.category === activeFilter);
    if (activeQueryFromChip) {
      const q = activeQueryFromChip.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    }
    switch (activeSort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "name-asc": list.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "rating-desc": list.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return list;
  }

  function renderProducts() {
    const list = getFilteredSortedProducts();
    grid.innerHTML = list.map(productCardMarkup).join("");
    noResults.hidden = list.length !== 0;
    observeFadeUps(grid);
  }

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;
    const id = card.dataset.id;
    const action = e.target.closest("[data-action]")?.dataset.action;
    if (action === "wishlist") { toggleWishlist(id); return; }
    if (action === "add-cart") { addToCart(id); return; }
    if (action === "view" || (!action && e.target.closest(".product-card__media"))) { openProductModal(id); }
  });

  // Category filter chips
  $("#filter-buttons").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    $$(".chip", $("#filter-buttons")).forEach((c) => c.classList.remove("is-active"));
    btn.classList.add("is-active");
    activeFilter = btn.dataset.filter;
    renderProducts();
  });

  $("#sort-select").addEventListener("change", (e) => {
    activeSort = e.target.value;
    renderProducts();
  });

  // Category section cards -> jump to catalog filtered
  $$(".cat-card").forEach((card) => {
    card.addEventListener("click", () => {
      const cat = card.dataset.category;
      setActiveCategoryFilter(cat);
      $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  // Footer category links
  $$('.footer__col a[data-category]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveCategoryFilter(link.dataset.category);
      $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  function setActiveCategoryFilter(cat) {
    activeFilter = cat;
    $$(".chip", $("#filter-buttons")).forEach((c) => c.classList.toggle("is-active", c.dataset.filter === cat));
    renderProducts();
  }

  /* ---------------------------------------------------------------------
     14. PRODUCT DETAIL MODAL
  --------------------------------------------------------------------- */
  const productModal = $("#product-modal");
  let modalQty = 1;

  function openProductModal(id) {
    const p = PRODUCTS.find((p) => p.id === id);
    if (!p) return;
    modalQty = 1;
    const isWished = getWishlist().includes(p.id);
    $("#product-detail-content").innerHTML = `
      <div class="product-detail__media" style="--p-grad:${p.grad}"><svg><use href="#${p.icon}"></use></svg></div>
      <div class="product-detail__info">
        <span class="product-card__cat">${escapeHtml(p.category)}</span>
        <h2 id="modal-title">${escapeHtml(p.name)}</h2>
        <div class="product-detail__rating">${starsMarkup(p.rating)} <span>${p.rating.toFixed(1)} out of 5 (${p.reviews} reviews)</span></div>
        <div class="product-detail__price">${fmtPrice(p.price)}${p.oldPrice ? `<small style="font-size:.9rem;font-weight:400;color:var(--text-muted);text-decoration:line-through;margin-left:8px">${fmtPrice(p.oldPrice)}</small>` : ""}</div>
        <p class="product-detail__desc">${escapeHtml(p.desc)}</p>
        <ul class="product-detail__specs">
          ${Object.entries(p.specs).map(([k, v]) => `<li><span>${escapeHtml(k)}</span><span>${escapeHtml(v)}</span></li>`).join("")}
        </ul>
        <div class="product-detail__actions">
          <div class="qty-stepper" id="modal-qty-stepper">
            <button type="button" data-modal-qty="dec" aria-label="Decrease quantity"><svg width="14" height="14"><use href="#icon-minus"></use></svg></button>
            <span id="modal-qty-value">1</span>
            <button type="button" data-modal-qty="inc" aria-label="Increase quantity"><svg width="14" height="14"><use href="#icon-plus"></use></svg></button>
          </div>
          <button class="btn btn--primary" id="modal-add-cart"><svg width="16" height="16"><use href="#icon-cart"></use></svg> Add to Cart</button>
          <button class="btn btn--outline" id="modal-wishlist" aria-pressed="${isWished}">${isWished ? "♥ Wishlisted" : "♡ Wishlist"}</button>
          <a class="btn btn--ghost" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Bekansi, I'm interested in the "${p.name}" (${fmtPrice(p.price)}). Could you share more details?`)}">
            <svg width="16" height="16"><use href="#icon-whatsapp"></use></svg> Ask on WhatsApp
          </a>
        </div>
      </div>`;
    $("#modal-qty-stepper").addEventListener("click", (e) => {
      const action = e.target.closest("button")?.dataset.modalQty;
      if (action === "inc") modalQty++;
      if (action === "dec") modalQty = Math.max(1, modalQty - 1);
      $("#modal-qty-value").textContent = modalQty;
    });
    $("#modal-add-cart").addEventListener("click", () => { addToCart(p.id, modalQty); });
    $("#modal-wishlist").addEventListener("click", () => {
      toggleWishlist(p.id);
      const wished = getWishlist().includes(p.id);
      const btn = $("#modal-wishlist");
      btn.textContent = wished ? "♥ Wishlisted" : "♡ Wishlist";
      btn.setAttribute("aria-pressed", wished);
    });
    openModal(productModal);
  }

  /* ---------------------------------------------------------------------
     15. GALLERY + LIGHTBOX
  --------------------------------------------------------------------- */
  const galleryGrid = $("#gallery-grid");
  galleryGrid.innerHTML = GALLERY.map((g, i) => `
    <div class="gallery-item fade-up" style="--p-grad:${g.grad}" data-index="${i}" role="button" tabindex="0" aria-label="View ${escapeHtml(g.title)}">
      <svg><use href="#${g.icon}"></use></svg>
      <span>${escapeHtml(g.title)}</span>
    </div>`).join("");

  const lightbox = $("#lightbox");
  const lightboxMedia = $("#lightbox-media");
  const lightboxCaption = $("#lightbox-caption");
  let lightboxIndex = 0;

  function showLightbox(index) {
    lightboxIndex = (index + GALLERY.length) % GALLERY.length;
    const g = GALLERY[lightboxIndex];
    lightboxMedia.style.background = g.grad;
    lightboxMedia.innerHTML = `<svg width="120" height="120"><use href="#${g.icon}"></use></svg>`;
    lightboxCaption.textContent = g.title;
    openModal(lightbox);
  }
  galleryGrid.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item) showLightbox(Number(item.dataset.index));
  });
  galleryGrid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const item = e.target.closest(".gallery-item");
      if (item) { e.preventDefault(); showLightbox(Number(item.dataset.index)); }
    }
  });
  $("#lightbox-prev").addEventListener("click", () => showLightbox(lightboxIndex - 1));
  $("#lightbox-next").addEventListener("click", () => showLightbox(lightboxIndex + 1));

  /* ---------------------------------------------------------------------
     16. TESTIMONIALS CAROUSEL
  --------------------------------------------------------------------- */
  const track = $("#testimonial-track");
  const dotsContainer = $("#testimonial-dots");
  track.innerHTML = TESTIMONIALS.map((t) => `
    <div class="testimonial-card fade-up">
      <svg class="quote-icon"><use href="#icon-quote"></use></svg>
      <div class="testimonial-card__stars">${starsMarkup(t.rating)}</div>
      <p>"${escapeHtml(t.text)}"</p>
      <div class="testimonial-card__person">
        <div class="testimonial-card__avatar">${escapeHtml(t.name.split(" ").map((w) => w[0]).join(""))}</div>
        <div><strong>${escapeHtml(t.name)}</strong><span>${escapeHtml(t.role)}</span></div>
      </div>
    </div>`).join("");

  function getCardsPerView() {
    const w = window.innerWidth;
    if (w >= 1100) return 3;
    if (w >= 860) return 2;
    return 1;
  }
  function getSlideCount() { return Math.max(1, TESTIMONIALS.length - getCardsPerView() + 1); }
  let testimonialSlide = 0;
  function buildDots() {
    const count = getSlideCount();
    dotsContainer.innerHTML = Array.from({ length: count }, (_, i) => `<button type="button" aria-label="Go to slide ${i + 1}" data-slide="${i}"></button>`).join("");
    updateDots();
  }
  function updateDots() {
    $$("button", dotsContainer).forEach((d, i) => d.classList.toggle("is-active", i === testimonialSlide));
  }
  function goToSlide(i) {
    const count = getSlideCount();
    testimonialSlide = Math.max(0, Math.min(i, count - 1));
    const card = track.children[0];
    const cardWidth = card ? card.getBoundingClientRect().width + 22 : 0;
    track.scrollTo({ left: testimonialSlide * cardWidth, behavior: "smooth" });
    updateDots();
  }
  dotsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn) goToSlide(Number(btn.dataset.slide));
  });
  let autoSlideTimer = setInterval(() => {
    const count = getSlideCount();
    goToSlide((testimonialSlide + 1) % count);
  }, 6000);
  track.addEventListener("mouseenter", () => clearInterval(autoSlideTimer));
  track.addEventListener("touchstart", () => clearInterval(autoSlideTimer), { passive: true });
  window.addEventListener("resize", () => { buildDots(); }, { passive: true });
  buildDots();

  /* ---------------------------------------------------------------------
     17. QUOTE REQUEST FORM -> WHATSAPP
  --------------------------------------------------------------------- */
  $("#quote-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const category = form.category.value;
    const message = form.message.value.trim();
    const note = $("#qf-note");

    if (!name || !phone || !category || !message) {
      note.textContent = "Please fill in all fields before submitting.";
      note.style.color = "#C0392B";
      return;
    }
    const text = `Hello Bekansi, I would like to request a quote.\n\nName: ${name}\nPhone: ${phone}\nCategory: ${category}\nDetails: ${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    note.style.color = "var(--color-gold-dark)";
    note.textContent = "Redirecting you to WhatsApp to complete your request…";
    form.reset();
  });

  /* ---------------------------------------------------------------------
     18. FOOTER YEAR
  --------------------------------------------------------------------- */
  $("#year").textContent = new Date().getFullYear();

  /* ---------------------------------------------------------------------
     19. INIT
  --------------------------------------------------------------------- */
  function init() {
    initTheme();
    renderProducts();
    renderCart();
    renderWishlist();
    updateBadges();
    observeFadeUps(document);
  }
  init();
})();
