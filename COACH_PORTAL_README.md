# Coach Portal Implementation - IFBB Argentina

## Overview

A comprehensive coach/trainer management portal has been implemented for IFBB Argentina platform. This portal enables coaches to manage their athlete rosters, register them for competitions, track results, and access detailed performance analytics.

## Directory Structure

```
/app/coach/
├── layout.tsx                 # Coach portal main layout with sidebar
├── dashboard/
│   └── page.tsx              # Coach dashboard with overview stats
├── atletas/
│   └── page.tsx              # Athlete roster management
├── registro-evento/
│   └── page.tsx              # Multi-step event registration
├── resultados/
│   └── page.tsx              # Results tracking and analytics
├── perfil/
│   └── page.tsx              # Coach profile management
└── login/
    └── page.tsx              # Coach-specific login page

/components/
└── coach-sidebar.tsx          # Coach navigation sidebar component
```

## Features Implemented

### 1. Coach Dashboard (`/coach/dashboard`)
**Overview Statistics**
- Total athletes under management: 8
- Athletes competing this month: 5
- Upcoming events: 3
- Pending registrations: 2

**Quick Actions**
- "Registrar Atleta en Evento" - Register athletes in events
- "Ver Todos los Atletas" - View complete roster
- "Pago Grupal" - Group payment processing

**Widgets**
- Upcoming events widget showing coached athletes' competitions
- Recent activity feed with athlete registration, check-in, scoring, and music upload updates
- Coach info card with certification and performance metrics
- Performance stats: Success rate (87.5%), Podium athletes (12), Average score (88.2)

### 2. Athletes Management (`/coach/atletas`)
**Roster Table Features**
- Display: Photo, Name, Email, Phone, Category, Status
- Actions: View, Edit, Remove buttons for each athlete
- 8 mock athletes with realistic data (various categories and statuses)

**Filtering & Search**
- Search by name or email
- Filter by category (Men's Physique, Women's Physique, Bikini, Figure, etc.)
- Filter by status (Active/Inactive)

**Bulk Operations**
- Select multiple athletes with checkboxes
- Bulk registration for events
- Download certificates for selected athletes
- Export roster as CSV with complete athlete data

### 3. Event Registration (`/coach/registro-evento`)
**Multi-Step Registration Process**
1. **Event Selection** - Choose from 3 upcoming events with costs
2. **Athlete Selection** - Select which athletes to register (with select all option)
3. **Category Assignment** - Assign competition category for each athlete
4. **Music Upload** - Upload MP3 files for each athlete's posing routine
5. **Payment Option** - Choose between group or individual payment
6. **Registration Summary** - Review all selections before submission

**Features**
- Step-by-step progress indicator
- Real-time cost calculation
- Music upload tracking with upload status
- Total cost calculator
- Summary review before final submission

### 4. Results Tracking (`/coach/resultados`)
**Analytics Dashboard**
- Average score across all results
- Total competitions directed
- Podium placements count
- First place wins count

**Results Table**
- Filter by event and athlete
- Display: Event, Athlete, Category, Placing, Score
- Trophy icons for podium placements (1st, 2nd, 3rd)
- Export results as PDF (mock)

**Performance Analytics**
- **By Athlete**: Average score, podium count, win count, competitions
- **By Category**: Average score, competitor count, wins
- Sorted by average score descending

### 5. Coach Profile (`/coach/perfil`)
**Personal Information**
- Name, Email, Phone (editable)
- Certification level (IFBB Level 1-3, Master)
- Gym/Team affiliation
- Years of experience
- Professional biography

**Professional Statistics**
- Total athletes: 8
- Success rate: 87.5% (with progress bar)
- Competitions directed: 15
- Podium athletes: 12
- Active athletes: 8/8

**Edit Profile**
- Toggle edit mode with "Edit Profile" button
- Save/Cancel functionality
- Validation and state management

### 6. Coach Login (`/coach/login`)
**Authentication Interface**
- Email and password input fields with icons
- Loading state during submission
- Error message display
- Demo mode button for testing

**Features**
- Demo credentials display: demo@ifbb.ar / demo123
- Forgot password link
- Link to request coach account
- Back to homepage link

## Mock Data

### Coach Profile
- **Name**: Carlos Trainer
- **Email**: carlos@ifbb.ar
- **Phone**: +54 9 11 2345-6789
- **Certification**: IFBB Level 3
- **Gym**: Power Gym Buenos Aires
- **Experience**: 8 years
- **Athletes Coached**: 8 total

### Athletes Roster
1. María García - Women's Physique (Active)
2. Carlos Rodríguez - Men's Classic Physique (Active)
3. Ana Martínez - Bikini (Active)
4. Diego López - Men's Physique (Active)
5. Sofia Fernández - Figure (Active)
6. Roberto Gómez - Men's Open (Inactive)
7. Valeria Torres - Women's Physique (Active)
8. Lucas Pérez - Men's Physique (Active)

### Upcoming Events
1. Campeonato Nacional IFBB Argentina 2025 - March 15, 2025 ($2,500/athlete)
2. Copa Provincial Córdoba - March 22, 2025 ($1,800/athlete)
3. Torneo Regional Mendoza - April 5, 2025 ($1,500/athlete)

### Past Results
- 8 competition results with various placements and scores
- Average score: 89.7
- Podium placements: 6
- First place wins: 3

## Styling & Theme

**Color Scheme**
- Primary: Purple (#8B5CF6) - Coach portal theme
- Secondary: Cyan (#22D3EE) - Accent color
- Accent: Amber (#F59E0B) - Additional highlights
- Status colors: Green (active), Gray (inactive), Red (alerts)

**Design Patterns**
- Glass-card design with subtle borders and backgrounds
- Responsive grid layouts
- Color-coded statistics cards
- Progress indicators and status badges
- Smooth transitions and hover effects

## Navigation

**Coach Sidebar Menu**
- Dashboard (Home icon)
- Mis Atletas (Users icon)
- Registro de Eventos (Calendar icon)
- Resultados (Trophy icon)
- Mi Perfil (User icon)
- Cerrar Sesión (Logout)

**Homepage Integration**
- "Acceso para Entrenadores" button added to homepage hero section
- Links to `/coach/login` for coach authentication

## Access Points

- **Login**: `/coach/login`
- **Dashboard**: `/coach/dashboard`
- **Athlete Management**: `/coach/atletas`
- **Event Registration**: `/coach/registro-evento`
- **Results**: `/coach/resultados`
- **Profile**: `/coach/perfil`

## Demo Mode

Access demo mode at `/coach/dashboard?demo=true` for testing without login credentials.

## Technology Stack

- **Framework**: Next.js 14+ with TypeScript
- **Components**: shadcn/ui (Card, Button, Badge, Input)
- **Icons**: lucide-react
- **Styling**: Tailwind CSS with custom purple theme
- **State Management**: React hooks (useState)
- **Navigation**: Next.js Link and useRouter

## File Sizes

- Coach sidebar component: ~1.8 KB
- Coach layout: ~0.6 KB
- Dashboard page: ~9.7 KB
- Athletes page: ~8.2 KB
- Event registration page: ~9.4 KB
- Results page: ~7.1 KB
- Profile page: ~8.5 KB
- Login page: ~4.3 KB

## Key Features Summary

1. **Athlete Management**
   - Roster viewing and filtering
   - CSV export functionality
   - Bulk selection and actions
   - Add/edit/remove athletes

2. **Event Registration**
   - Multi-step registration wizard
   - Music upload for athletes
   - Cost calculation
   - Group or individual payment options

3. **Results Tracking**
   - Comprehensive results table
   - Performance analytics by athlete
   - Category-level statistics
   - PDF export (mock)

4. **Coach Profile**
   - Editable personal information
   - Performance statistics
   - Certification display
   - Contact information

5. **Dashboard**
   - Overview statistics
   - Quick action buttons
   - Upcoming events widget
   - Activity feed
   - Performance summary

## Integration Points

The coach portal integrates with:
- Existing authentication system (via `/coach/login`)
- Existing notification system (NotificationBell component)
- Demo banner system (DemoBanner component)
- Homepage (via "Acceso para Entrenadores" button)
- Existing UI component library (Card, Button, Badge, Input)
- Existing icon library (lucide-react)

## Future Enhancements

Potential features for future development:
- Real database integration
- Payment processing integration
- Email notifications
- PDF certificate generation
- Real-time athlete tracking
- Video uploads for training feedback
- Communication system with athletes
- Performance graphs and charts
- Team/gym management
- Advanced filtering and search
