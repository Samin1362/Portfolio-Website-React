![Banner](https://i.postimg.cc/fWcbKCMm/temp-Image9hy-UOE.avif)

# Samin Israk — React Portfolio Website

A modern, animated personal portfolio built with **React 19 + Vite**, featuring a protected admin dashboard, live contact form, and dynamic project showcase.

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | React 19, Vite 7 |
| **Styling** | Tailwind CSS 3, custom CSS animations |
| **Animation** | Framer Motion 12, GSAP 3 |
| **3D / WebGL** | OGL (ChromaGrid) |
| **Routing** | React Router DOM v7 |
| **Auth** | Firebase Auth (email/password) |
| **Email** | EmailJS |
| **HTTP** | Axios |
| **Icons** | Lucide React, React Icons |

---

## Routes

| Path | Component | Access |
|------|-----------|--------|
| `/` | `App` — full portfolio single-page | Public |
| `/login` | `Login` | Public |
| `/register` | `Register` | Public |
| `/dashboard` | `DashboardHome` — stats overview | Private |
| `/dashboard/projects` | `ProjectList` — manage projects | Private |
| `/dashboard/projects/add` | `ProjectForm` — add project | Private |
| `/dashboard/projects/edit/:id` | `ProjectForm` — edit project | Private |

---

## Portfolio Sections (`/`)

### Splash Screen
- Animated loading overlay with a smooth progress bar (2.6 s total)
- Rotating conic-gradient monogram ring ("SI")
- 20 deterministic floating particles + 3 ambient blurred orbs (purple, blue, green)
- Framer Motion exit transition (scale + fade) triggers GSAP entrance of main content

### Navbar
- Top navigation bar with scroll-to-section refs

### Floating Navbar
- Fixed bottom-right button styled as an iOS-style AssistiveTouch widget
- Expands into a 5-item menu: Home, Skills, Projects, Education, Contact
- Each item has a colored gradient icon badge and a chevron indicator
- Closes on outside click/tap; debounced mobile breakpoint detection

### Banner (Hero)
- Two-column layout: animated profile image (left) + intro content (right)
- Profile image: rotating gradient border, pulsing outer glow, dashed/dotted decorative rings, glassmorphic frame, hover scale + spotlight effect, corner accents
- Floating badges: "⚡ Available" and "🚀 Hire Me" with looping vertical bob animations; rotating Code2 and Sparkles icon widgets
- Action buttons: **Download CV**, **GitHub**, **LinkedIn**, **Intro Video** — all with Framer Motion hover/tap micro-interactions
- Tech pill row: React, Next.js, Node.js, MongoDB, Tailwind CSS
- Full section entrance via GSAP scale + fade after splash completes

### Tech Logo Bar
- Horizontally scrolling logo marquee (lazy loaded)

### Skills
- 4 categories: **Frontend Development** · **Backend Development** · **AI & Developer Tools** · **Version Control & Deployment**
- 25 total skills with colored brand icons
- Each card wrapped in `GlareHover` — a mouse-tracking glare/sheen effect
- Category sections revealed with `AnimatedContent` scroll-triggered GSAP animations

### Projects
- **API-first** — fetches from `VITE_API_URL/api/projects`; falls back to static `projectsData.js` on failure
- **ChromaGrid** — WebGL-powered card grid built on OGL with mouse parallax and color effects
- **Filter bar** — type-based filter buttons with per-category counts
- **Pagination** — configurable items per page (4 / 8 / 12 / 16 / All), smart ellipsis page numbers, previous/next buttons
- **Project modal** — clicking a card opens a detail overlay (`ProjectModal`)
- GSAP stagger animation replays on every page/filter change

### Education
- Academic timeline (lazy loaded)

### Contact
- **EmailJS** integration — sends email directly from the browser without a backend
- Client-side validation: name (letters/spaces/hyphens/apostrophes, min 2 chars), email (regex), message (min 10 chars)
- Inline animated error messages via Framer Motion
- Loading spinner on the submit button during send
- Auto-dismissing success toast after 5 seconds
- Right-column `AnimatedEnvelope` SVG illustration reacts to the `sending` state
- All fields revealed with `AnimatedContent` scroll/stagger entrance

### Footer
- Site-wide footer with social links (lazy loaded)

---

## Admin Dashboard (`/dashboard`)

Protected by `PrivateRoute` — redirects unauthenticated users to `/login`.

### Dashboard Home
- Personalized welcome using Firebase `displayName`
- Live project stats fetched from the backend API (total count + per-type breakdown)
- Skeleton loading cards while fetching
- Quick-action buttons: **Add Project** and **View Portfolio** (opens in new tab)

### Project List (`/dashboard/projects`)
- Full CRUD list of portfolio projects pulled from the backend

### Project Form (`/dashboard/projects/add` & `…/edit/:id`)
- Shared add/edit form; edit mode pre-fills fields via `:id` param

---

## Authentication

Powered by **Firebase Auth** with a React Context (`AuthContext`):

| Method | Behaviour |
|--------|-----------|
| `login(email, password)` | Firebase `signInWithEmailAndPassword` |
| `register(email, password, displayName)` | Creates Firebase user → sets `displayName` → syncs to backend (`POST /api/auth/register` with Bearer token) |
| `logout()` | Firebase `signOut` |
| `getIdToken()` | Returns current user's Firebase ID token for API calls |

Auth state is observed via `onAuthStateChanged`; `loading` flag prevents flash of unauthenticated content.

---

## Performance Notes

- All sections below the fold are **lazy-loaded** via `React.lazy` + `Suspense`
- Projects API call is fire-and-forget — static data renders immediately while the request resolves
- GSAP and Framer Motion animations are scoped to avoid layout thrash

---

## Environment Variables

Create a `.env` file in this directory:

```
VITE_API_URL=http://localhost:5001
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

---

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
```

---

## Connect

- **Portfolio**: [samin-israk.netlify.app](https://samin-israk.netlify.app)
- **GitHub**: [@Samin1362](https://github.com/Samin1362)
- **LinkedIn**: [in/samin-israk](https://linkedin.com/in/samin-israk-157800141)
- **Facebook**: [samin.israk1991](https://facebook.com/samin.israk1991)
- **Instagram**: [@samin.israk1991](https://instagram.com/samin.israk1991)
