# Demo Mode - Quick Reference

## Demo Access URLs

### Try Athlete Portal
- **Link:** `/dashboard?demo=true`
- **Username:** `demo@atleta.com`
- **Password:** `demo123`

### Try Admin Panel
- **Link:** `/admin?demo=true`
- **Username:** `demo@admin.com`
- **Password:** `admin123`

## What's Been Added

### 1. Homepage Section
- New "Explorá la Plataforma" section between CTA and Instagram feed
- Two side-by-side demo cards (athlete and admin)
- Trust indicators below cards
- Call-to-action to create account or contact sales

### 2. Demo Banner
- Shows on dashboard and admin when `?demo=true` is in URL
- Orange warning bar at top of page
- Dismissible (stays dismissed for current session only)
- Informs users that demo changes won't be saved

### 3. Features Highlighted
**Athlete Portal:**
- Event registration
- Photo management
- Results history
- Personalized dashboard

**Admin Panel:**
- Event management
- Registration control
- Scoring system
- Reports and statistics

## File Locations

```
/components/
  ├── demo-access-section.tsx (Homepage section)
  └── demo-banner.tsx (Warning banner)

/app/
  ├── page.tsx (Updated - added demo section)
  ├── dashboard/layout.tsx (Updated - added demo banner)
  └── admin/layout.tsx (Updated - added demo banner)
```

## Demo Flow

```
Homepage
  ↓
"Explorá la Plataforma" Section
  ↓
User chooses Athlete or Admin
  ↓
Redirects to /dashboard?demo=true or /admin?demo=true
  ↓
Orange "MODO DEMO" banner appears
  ↓
User can explore features
  ↓
"¿Listo para comenzar?" CTA
  ↓
User creates account or contacts sales
```

## Colors Used

| Element | Color | Hex Code |
|---------|-------|----------|
| Athlete Demo | Gold | #B78B1E |
| Admin Demo | Amethyst | #8B5CF6 |
| Demo Banner | Warning Orange | #F59E0B |
| Section Background | Dark | #0B0B0F |

## Testing Quick Steps

### 1. Homepage
Visit homepage, scroll down past CTA section

### 2. Athlete Demo
1. Click "Acceder como Atleta" button
2. Should go to `/dashboard?demo=true`
3. Orange banner appears at top
4. Close button works
5. Returns to normal without banner after dismissal

### 3. Admin Demo
1. Click "Acceder como Admin" button
2. Should go to `/admin?demo=true`
3. Orange banner appears at top
4. Close button works
5. Returns to normal without banner after dismissal

### 4. Responsive Check
1. Open on mobile device
2. Demo cards should stack vertically
3. Buttons should be full width
4. Banner should be readable
5. All text should be properly sized

## Banner Behavior

- **Shows when:** URL contains `?demo=true` AND not previously dismissed in this session
- **Dismissal:** Uses sessionStorage (cleared when tab closes)
- **Exit Demo:** Click "Salir del Demo" button or close X button

## Design System

All components use:
- Existing UI components (Button, Badge)
- Lucide React icons
- Tailwind CSS classes
- Glass-card design pattern
- Consistent spacing and typography
- Hover animations

## Notes

- Demo credentials are hardcoded for display only
- URL parameter `?demo=true` is the only demo mode trigger
- Banner automatically hides if parameter is not present
- Demo mode doesn't require backend changes
- All styling matches existing design system

---

**Quick Links:**
- [Full Implementation Details](./DEMO_MODE_IMPLEMENTATION.md)
- [Component Reference](./COMPONENT_CODE_REFERENCE.md)
- [Demo Access Section Code](./components/demo-access-section.tsx)
- [Demo Banner Code](./components/demo-banner.tsx)
