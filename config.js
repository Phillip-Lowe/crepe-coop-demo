// ===================== BRAND CONFIGURATION =====================
// Crepe Coop — White-label online ordering page
// All brand-specific values are isolated here.
// ==============================================================

const BRAND = {
  // Identity
  name:          "Crepe Coop",
  tagline:       "Fresh. Local. Folded with love.",
  shortName:     "Crepe Coop",
  location:      "Keo / Little Rock, AR",

  // Contact
  phone:         "(501) 555-0123",
  email:         "order@crepecoop.com",
  instagram:     "@crepecooplr",
  website:       "https://crepecoop.com",
  streetAddress: "Little Rock, AR 72201",

  // Visual Identity — warm food-truck palette
  colors: {
    primary:       "#8B3A1F",   // Warm amber-brown
    primaryLight:  "#A84E2F",   // Lighter amber
    accent:        "#D64045",   // Fresh tomato red
    accentHover:   "#E55A5E",   // Brighter red
    secondary:     "#3D6B4F",   // Farm green
    gold:          "#F2C94C",   // Crepe golden
    goldLight:     "#FFF5D6",   // Soft golden cream
  },

  // Assets
  logo:          "images/logo.png",
  favicon:       "images/logo.png",
  heroImage:     null,

  // Hours (CST/Chicago)
  hours: {
    timezone:    "America/Chicago",
    openDays:    [1,2,3,4,5,6],  // Mon–Sat
    openTime:    { hour: 7, minute: 0 },
    closeTime:   { hour: 14, minute: 0 },
    closedMessage: "Currently Closed · Opens Mon–Sat 7:00 AM",
    openMessage:   "Open Now · Mon–Sat 7:00 AM – 2:00 PM",
  },

  // Checkout / Payment
  checkout: {
    endpoint:    "https://n8n.crepecoop.com/webhook/crepe-coop-order-v1",
    squareDomain: "square.link",
    currency:    "USD",
    currencySymbol: "$",
  },

  // Legal
  copyrightYear: 2026,
};

// ==============================================================
//  WHITE-LABEL CHECKLIST
// ==============================================================
//  1. Replace BRAND.name, .tagline, .location
//  2. Update BRAND.phone and BRAND.email
//  3. Replace logo.png in images/ folder
//  4. Replace product photos in images/ folder
//  5. Update menu-data.js with your menu items
//  6. Update BRAND.checkout.endpoint to your server/webhook
//  7. Update BRAND.hours to your schedule
//  8. Update CNAME file to your custom domain
//  9. Update DNS CNAME record at your registrar
// ==============================================================
