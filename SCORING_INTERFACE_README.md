# Live Scoring Interface for IFBB Argentina

## Overview

This is a comprehensive live scoring interface for judges at bodybuilding competitions. It features real-time scoring, category management, competitor rankings, and persistent storage.

## Location

**Main Page:** `/app/admin/eventos/[id]/puntuacion/page.tsx`

**Access URL:** `/admin/eventos/1/puntuacion` (replace `1` with actual event ID)

## Features

### 1. Category Management
- 6 predefined categories:
  - Men's Physique Clase A
  - Men's Physique Clase B
  - Bikini
  - Wellness
  - Figure
  - Body Fitness
- Click to switch between categories
- Visual indicators for category status (Active/Locked)

### 2. Competitor Grid
- Displays 12 competitors per category (72 total)
- Tablet-optimized responsive layout
- Large touch targets for easy interaction
- Shows competitor number, name, and photo placeholder

### 3. Scoring System
- Score input range: 1-100 points
- Real-time ranking calculation as scores are entered
- Automatic total score computation
- Multiple competitors can be scored simultaneously

### 4. Visual Indicators
- **Gray**: Not scored
- **Green**: Has been scored
- **Blue**: Category locked (finalized)
- Ranking badges show placement (1st, 2nd, 3rd, etc.)

### 5. Category Finalization
- "Finalizar Categoría" button locks the category
- Prevents editing once locked
- Shows locked status visually
- Clear "Borrar Todo" button to reset all scores

### 6. Persistent Storage
- All scores saved to browser localStorage
- Automatic save on each score update
- Data persists across page reloads
- Separate storage for each event ID

## Files Created

### Page Component
- `/app/admin/eventos/[id]/puntuacion/page.tsx` - Main page (841 bytes)

### Components
- `/components/scoring/scoring-interface.tsx` - Main interface (5.0K)
- `/components/scoring/category-selector.tsx` - Category selector (1.8K)
- `/components/scoring/competitor-grid.tsx` - Grid layout (2.1K)
- `/components/scoring/competitor-card.tsx` - Competitor card (5.1K)
- `/components/scoring/scoring-header.tsx` - Header component (1.7K)

### State Management
- `/hooks/useScorngState.ts` - Scoring state hook (4.6K)

### Types
- `/types/scoring.ts` - TypeScript definitions (537 bytes)

## Key Features

### Real-time Scoring
- Enter scores from 1-100
- Auto-calculate totals
- Real-time ranking updates
- Visual status indicators

### Category Management
- Select from 6 categories
- Lock categories when complete
- Prevent editing of locked categories
- Clear all scores option

### Persistent Storage
- localStorage keeps scores across sessions
- Auto-save on every score change
- Separate storage per event ID

### Tablet Optimization
- Large touch targets (48px minimum)
- Landscape-oriented layout
- Sidebar + main content grid
- Responsive 2-5 column grid

## Usage

Access at: `/admin/eventos/1/puntuacion`

1. Select category from sidebar
2. Click "Ingresar Puntaje" on competitor card
3. Enter score (1-100)
4. Press Enter
5. Score saves automatically
6. Repeat for all competitors
7. Click "Finalizar Categoría" when done

## Styling

Uses project's glass-card design system:
- Gold gradient accents (#B78B1E)
- Amethyst secondary color (#8B5CF6)
- Semi-transparent cards with backdrop blur
- Large, readable typography

## Mock Data

System generates:
- 72 competitors (12 per category)
- Random Spanish names
- Unsplash photo placeholders
- Sequential competitor numbers (1-72)

## Future Enhancements

1. Judge assignment
2. Score history/audit trail
3. PDF/Excel export
4. Real-time backend sync
5. Mobile optimization
6. Time tracking per category
7. Score validation rules
8. Multi-user support
