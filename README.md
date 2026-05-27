# Crepe Coop — Demo Online Ordering Page

A branded, mobile-first online ordering demo for **Crepe Coop**, a food truck in Keo / Little Rock, AR.

Built as a white-label showcase using the Systack ordering platform.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main order page (generic, reads config + menu data) |
| `config.js` | Brand-specific values (name, colors, phone, hours) |
| `menu-data.js` | Menu items, modifiers, prices |
| `images/logo.png` | Brand logo (placeholder — replace with real logo) |
| `images/crepe_*.jpg` | Product photos (placeholders) |

## How to Preview Locally

```bash
cd crepe-coop-order
python3 -m http.server 8000
# Open http://localhost:8000
```

Or simply open `index.html` in any browser.

## How to Deploy (GitHub Pages)

1. Push this folder to a new GitHub repo
2. Go to Settings → Pages → Source: main, Folder: / (root)
3. Add a `CNAME` file with your domain (e.g. `order.crepecoop.com`)
4. Add DNS CNAME at your registrar → `your-username.github.io`
5. Wait 5–15 min for HTTPS

## What Was Built

- **Warm food-truck palette** — crepe golden, farm green, warm red accent
- **Savory + Sweet sections** — 5 savory crepes + 5 sweet crepes, $7–9 pricing
- **Realistic modifiers** — extra protein, sauce choices, toppings, drizzles
- **Mobile-first** — sticky header, collapsible cart, touch-friendly targets
- **Demo-ready** — looks like it was built specifically for Crepe Coop

## Mapping to the Pitch

This page demonstrates how quickly the white-label platform can be rebranded:

| Step | Time | What Happens |
|------|------|-------------|
| Fork base repo | 5 min | Same code, new folder |
| Edit `config.js` | 10 min | Name, colors, contact, hours |
| Edit `menu-data.js` | 20 min | Build realistic menu with modifiers |
| Replace images | 15 min | Logo + product photos |
| Deploy | 10 min | GitHub Pages or Netlify |
| **Total** | **~1 hour** | Fully branded order page live |

## Pitch Notes

- **Speed to market**: A live demo can be ready in under an hour
- **Real transactions**: Connects to Square for payment links
- **Backend included**: n8n webhook handles order emails + payment generation
- **Mobile-first**: 80%+ of food truck orders come from phones
- **Low maintenance**: Hosted on GitHub Pages (free, HTTPS, CDN)
