# Scoring Interface - Files Index

## Quick Reference

Access the scoring interface at: **`/admin/eventos/1/puntuacion`**

Replace `1` with the actual event ID.

---

## Files Overview

### Application Layer

#### `/app/admin/eventos/[id]/puntuacion/page.tsx` (841 bytes)
Main page component that renders the scoring interface.

**Imports:**
- `ScoringInterface` from `@/components/scoring/scoring-interface`
- `Card` from `@/components/ui/card`

**Features:**
- Handles event ID from URL params
- Wraps ScoringInterface component
- Client-side rendering ('use client')

**Key Code:**
```typescript
export default function PuntuacionPage({
  params,
}: {
  params: { id: string };
}) {
  // Renders ScoringInterface with eventId
}
```

---

### Components Layer

#### `/components/scoring/scoring-interface.tsx` (5.0K)
Main scoring interface container and orchestrator.

**Responsibilities:**
- Manages selected category state
- Handles score updates via hook
- Controls category finalization
- Renders layout (Header, Sidebar, Grid)

**Props:**
```typescript
interface ScoringInterfaceProps {
  eventId: string;
}
```

**Key Methods:**
- `updateScore(categoryId, competitorId, score)`
- `finalizeCategory(selectedCategory)`
- `clearScores()`

---

#### `/components/scoring/category-selector.tsx` (1.8K)
Category selection component with lock indicators.

**Responsibilities:**
- Display list of categories
- Handle category selection
- Show locked status
- Prevent selection of locked categories

**Props:**
```typescript
interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  lockedCategories: string[];
}
```

**Visual States:**
- Selected: Gold gradient background
- Locked: Blue tinted, disabled
- Unselected: Light background

---

#### `/components/scoring/competitor-grid.tsx` (2.1K)
Responsive grid layout for competitors.

**Responsibilities:**
- Calculate real-time rankings
- Sort competitors by total score
- Render CompetitorCard components
- Handle responsive layout

**Props:**
```typescript
interface CompetitorGridProps {
  competitors: Competitor[];
  scores: CompetitorScores;
  onScoreChange: (competitorId: string, score: number) => void;
  isLocked: boolean;
}
```

**Grid Layout:**
- 2 columns (mobile)
- 3 columns (tablet small)
- 4 columns (tablet medium)
- 5 columns (tablet large)

---

#### `/components/scoring/competitor-card.tsx` (5.1K)
Individual competitor card with scoring interface.

**Responsibilities:**
- Display competitor info (number, name, photo)
- Handle score input
- Show ranking badge
- Display status indicator
- Toggle edit mode

**Props:**
```typescript
interface CompetitorCardProps {
  competitor: Competitor;
  ranking: number | null;
  totalScore: number;
  scores: Record<string, number>;
  onScoreChange: (score: number) => void;
  isLocked: boolean;
}
```

**Features:**
- Edit/viewing mode toggle
- Score input with validation (1-100)
- Keyboard shortcuts (Enter, Escape)
- Status colors (Gray/Green/Blue)
- Ranking display

---

#### `/components/scoring/scoring-header.tsx` (1.7K)
Header with navigation and live clock.

**Responsibilities:**
- Display page title and description
- Show event ID
- Display live clock (updates every second)
- Provide navigation back button

**Props:**
```typescript
interface ScoringHeaderProps {
  eventId: string;
}
```

**Features:**
- Back button to events list
- Live time display (Spanish format)
- Gold gradient styling

---

### State Management Layer

#### `/hooks/useScorngState.ts` (4.6K)
Custom React hook for scoring state and logic.

**Responsibilities:**
- Initialize mock data (72 competitors, 6 categories)
- Manage scores state
- Manage locked categories state
- Handle localStorage persistence
- Calculate totals

**Returns:**
```typescript
{
  categories: Category[];
  competitors: Competitor[];
  scores: CompetitorScores;
  lockedCategories: string[];
  updateScore: (categoryId, competitorId, score) => void;
  finalizeCategory: (categoryId) => void;
  loadScores: () => void;
  clearScores: () => void;
}
```

**Mock Data Structure:**
- 6 categories
- 12 competitors per category = 72 total
- Random Spanish names
- Unsplash photo placeholders
- Sequential numbers (1-72)

**Storage Structure:**
```javascript
localStorage.getItem('scoring_1') // Scores for event 1
localStorage.getItem('scoring_1_locked') // Locked categories for event 1
```

---

### Types Layer

#### `/types/scoring.ts` (537 bytes)
TypeScript interface definitions.

**Interfaces:**

```typescript
interface Category {
  id: string;
  name: string;
}

interface Competitor {
  id: string;
  number: number;
  name: string;
  categoryId: string;
  photoUrl?: string;
}

interface CompetitorScores {
  [competitorId: string]: {
    [categoryId: string]: number;
  };
}

interface Judge {
  id: string;
  name: string;
  number: number;
}

interface ScoringSession {
  eventId: string;
  judges: Judge[];
  scores: CompetitorScores;
  lockedCategories: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

---

## Documentation Files

### `/SCORING_INTERFACE_README.md`
Feature overview, architecture, and usage guide.

**Contains:**
- Feature list
- File structure overview
- Component descriptions
- Design system details
- Mock data information
- Type definitions
- Troubleshooting guide

**Sections:**
- Overview
- Location & Access
- Features
- File Structure
- Component Details
- Design System
- Mock Data
- Storage Keys
- Browser Support
- Future Enhancements

---

### `/SCORING_IMPLEMENTATION_GUIDE.md`
Detailed architecture and implementation guide.

**Contains:**
- Architecture diagrams
- Component dependency graph
- Data flow explanations
- State management details
- Rendering flow
- Event handlers
- Performance optimizations
- Styling system
- Mock data generation
- Type safety

**Sections:**
- Architecture Overview
- Component Dependencies
- Data Flow
- State Management
- localStorage Structure
- Rendering Flow
- Event Handlers
- Performance Optimizations
- Styling System
- Browser APIs
- Testing Considerations

---

### `/SCORING_DEPLOYMENT_CHECKLIST.md`
Pre-deployment and deployment procedures.

**Contains:**
- Pre-deployment verification
- File verification checklist
- Import verification
- Build testing
- Manual testing procedures
- Browser compatibility checklist
- Performance checklist
- Deployment steps
- Post-deployment monitoring
- Troubleshooting guide
- Rollback plan

**Sections:**
- Pre-Deployment Verification
- Deployment Steps
- File Verification
- Build Test
- Manual Testing
- Browser Compatibility
- Performance Checklist
- Deployment Process
- Post-Deployment
- Support

---

## Directory Structure

```
/app/admin/eventos/[id]/puntuacion/
├── page.tsx

/components/scoring/
├── scoring-interface.tsx
├── category-selector.tsx
├── competitor-grid.tsx
├── competitor-card.tsx
└── scoring-header.tsx

/hooks/
├── useScorngState.ts
└── (other hooks)

/types/
├── scoring.ts
└── (other types)

/Documentation/
├── SCORING_INTERFACE_README.md
├── SCORING_IMPLEMENTATION_GUIDE.md
├── SCORING_DEPLOYMENT_CHECKLIST.md
└── SCORING_FILES_INDEX.md
```

---

## Getting Started

### 1. Access the Interface
Navigate to: `/admin/eventos/1/puntuacion`

### 2. Select Category
Click a category in the left sidebar

### 3. Score Competitors
Click "Ingresar Puntaje" and enter score (1-100)

### 4. Finalize
Click "Finalizar Categoría" when done

### 5. Switch Category
Click another category to score next

---

## Key Dependencies

- React 18+
- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons
- localStorage API

---

## Color Reference

From project theme variables:
- Gold: `#B78B1E` - Primary actions, rankings
- Amethyst: `#8B5CF6` - Secondary interactions
- Ink: `#0B0B0F` - Dark text
- Slate: `#111827` - Background

---

## Component Props Summary

| Component | Props |
|-----------|-------|
| ScoringInterface | eventId |
| CategorySelector | categories, selectedCategory, onSelectCategory, lockedCategories |
| CompetitorGrid | competitors, scores, onScoreChange, isLocked |
| CompetitorCard | competitor, ranking, totalScore, scores, onScoreChange, isLocked |
| ScoringHeader | eventId |

---

## Storage Keys

- `scoring_[eventId]` - Main scores data
- `scoring_[eventId]_locked` - Locked categories array

Example for event ID 1:
- `scoring_1` - Scores
- `scoring_1_locked` - Locked categories

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Enter | Submit score |
| Escape | Cancel edit |
| Tab | Navigate fields |

---

## Testing Checklist

- [ ] Load page at correct URL
- [ ] All categories display
- [ ] Score a competitor
- [ ] Verify ranking updates
- [ ] Switch categories
- [ ] Finalize a category
- [ ] Refresh page (verify persistence)
- [ ] Clear all scores
- [ ] Test on tablet device

---

## Common Issues

**Score not saving?**
- Check localStorage enabled
- Check browser console

**Can't edit locked category?**
- Category is finalized
- Switch to different category

**Grid layout broken?**
- Check Tailwind CSS loaded
- Verify viewport 1024x768+

---

## Support Resources

1. Read SCORING_INTERFACE_README.md
2. Check SCORING_IMPLEMENTATION_GUIDE.md
3. Follow SCORING_DEPLOYMENT_CHECKLIST.md
4. Review this file (SCORING_FILES_INDEX.md)

---

## Version History

- v1.0 (2024-10-23) - Initial release
  - Core scoring interface
  - 6 categories, 72 competitors
  - localStorage persistence
  - Tablet optimization

---

## Contact & Support

For issues or questions, review documentation first,
then contact the development team.

---

**Last Updated:** 2024-10-23
**Status:** Production Ready
**Access URL:** `/admin/eventos/1/puntuacion`
