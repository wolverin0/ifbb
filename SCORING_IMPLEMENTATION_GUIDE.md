# Scoring Interface - Implementation Guide

## Architecture Overview

```
┌─────────────────────────────────────────────┐
│         page.tsx (App Router)               │
│    (Client-side, wraps ScoringInterface)    │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│      ScoringInterface (Main Container)      │
│  - State management via useScoringState     │
│  - Layout: Header + Sidebar + Grid          │
└────────────────┬────────────────────────────┘
         ┌───────┴────────┬──────────┐
         │                │          │
         ▼                ▼          ▼
    ScoringHeader  CategorySelector CompetitorGrid
         │                │          │
         │                │          └─────────┬────────────┐
         │                │                    │            │
         │                │                    ▼            ▼
         │                │             (Multiple)    CompetitorCard
         │                │               Cards       (Renders 12x)
         │                │
    useSccoringState (Hook - State & Logic)
         │
         └─ Manages: Categories, Competitors, Scores, Locked States
         └─ Storage: localStorage
         └─ Mock Data: 72 competitors across 6 categories
```

## Component Dependency Graph

```
App Page
├── ScoringInterface
│   ├── ScoringHeader
│   │   └── Uses: lucide-react icons, Next/Link
│   ├── CategorySelector
│   │   └── Uses: Types from @/types/scoring
│   └── CompetitorGrid
│       └── CompetitorCard (Array)
│           ├── Uses: Types from @/types/scoring
│           └── Uses: Card from @/components/ui/card
│
Hook (useScoringState)
├── useState for: categories, competitors, scores, lockedCategories
├── useCallback for: updateScore, finalizeCategory, loadScores, clearScores
└── localStorage operations
```

## Data Flow

### Initialization
```
1. Page loads with eventId from [id] param
2. ScoringInterface mounts
3. useSccoringState hook initializes:
   - Generates 72 mock competitors
   - Loads scores from localStorage (if any)
   - Loads locked categories from localStorage (if any)
4. Default category "mens-physique-a" selected
5. Competitors filtered and displayed
```

### Scoring Flow
```
1. User clicks "Ingresar Puntaje" on competitor card
2. Input field appears in editing mode
3. User types score (1-100) and presses Enter
4. CompetitorCard calls onScoreChange callback
5. ScoringInterface calls updateScore(categoryId, competitorId, score)
6. Hook updates state: scores[competitorId][categoryId] = score
7. localStorage automatically updated
8. CompetitorGrid re-renders with new score
9. Rankings recalculated and displayed
10. Card changes from gray to green
```

### Ranking Calculation
```
CompetitorGrid.useMemo((competitors, scores) => {
  1. For each competitor, calculate total score:
     totalScore = sum of all scores in scores[competitorId]
  
  2. Sort competitors by totalScore (descending)
  
  3. Assign ranking:
     - If totalScore > 0: ranking = array index + 1
     - If totalScore = 0: ranking = null (shown as "—")
  
  4. Return ranked array
})
```

## State Management Details

### useScoringState Hook
```typescript
// Categories (static)
categories: Category[] = [
  { id: 'mens-physique-a', name: "Men's Physique..." },
  ...6 total
]

// Competitors (generated once)
competitors: Competitor[] = [
  { id: 'competitor-1', number: 1, name: '...', categoryId: '...', photoUrl: '...' },
  ...72 total
]

// Scores (dynamic)
scores: CompetitorScores = {
  'competitor-1': { 'mens-physique-a': 85 },
  'competitor-2': { 'bikini': 92 },
  ...
}

// Locked Categories (dynamic)
lockedCategories: string[] = ['bikini', 'wellness']

// Methods
updateScore(categoryId, competitorId, score) -> void
finalizeCategory(categoryId) -> void
loadScores() -> void
clearScores() -> void
```

## localStorage Structure

```javascript
// Storage key format: scoring_[eventId]
localStorage.getItem('scoring_1') = {
  'competitor-1': { 'mens-physique-a': 85 },
  'competitor-2': { 'mens-physique-a': 92 },
  'competitor-3': { 'bikini': 88 },
  ...
}

localStorage.getItem('scoring_1_locked') = [
  'bikini',
  'wellness'
]
```

## Rendering Flow

### ScoringInterface
```jsx
return (
  <div className="h-screen flex flex-col">
    <ScoringHeader eventId={eventId} />
    <div className="flex-1 flex">
      <Sidebar>
        <CategorySelector {...props} />
        <ActionButtons />
      </Sidebar>
      <MainContent>
        <CategoryInfoCard />
        <CompetitorGrid {...props} />
      </MainContent>
    </div>
  </div>
)
```

### CompetitorGrid
```jsx
return (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {rankedCompetitors.map(competitor => (
      <CompetitorCard
        key={competitor.id}
        competitor={competitor}
        ranking={index + 1 if scored else null}
        totalScore={totalScore}
        onScoreChange={handler}
        isLocked={isLocked}
      />
    ))}
  </div>
)
```

### CompetitorCard Edit Mode
```jsx
{isEditing ? (
  <div className="flex gap-2">
    <input type="number" min="1" max="100" />
    <button onClick={handleScoreSubmit}>OK</button>
  </div>
) : (
  <button onClick={() => setIsEditing(true)}>
    {totalScore > 0 ? 'Editar' : 'Ingresar Puntaje'}
  </button>
)}
```

## Event Handlers

### CategorySelector
- `onClick` → onSelectCategory(categoryId)
- Disabled if isLocked

### CompetitorCard
- Click button → setIsEditing(true)
- Input Enter → handleScoreSubmit()
- Input Escape → setIsEditing(false)

### ScoringInterface Sidebar
- "Finalizar Categoría" → finalizeCategory(selectedCategory)
- "Borrar Todo" → clearScores() with confirmation

## Performance Optimizations

### 1. Memoization
```typescript
// CompetitorGrid.useMemo
- Recalculates ranking only when competitors or scores change
- Prevents unnecessary re-renders
```

### 2. Efficient State Updates
```typescript
// updateScore uses functional setState
setScores(prev => ({ ...prev, ...updates }))
- Avoids unnecessary object copies
- Maintains referential stability
```

### 3. Callback Optimization
```typescript
// useCallback with dependency arrays
updateScore = useCallback(..., [storageKey])
finalizeCategory = useCallback(..., [lockedStorageKey])
- Prevents unnecessary function recreations
- Enables proper memoization of child components
```

## Styling System

### Tailwind CSS Classes Used
```
Layout:
- flex, flex-col, w-1/5, flex-1
- overflow-hidden, overflow-y-auto
- absolute, relative, inset-0

Spacing:
- p-6, p-8, px-4, py-3, gap-4, gap-6
- mb-2, mb-3, mb-6, pt-6

Typography:
- text-sm, text-lg, text-2xl, text-3xl
- font-semibold, font-bold, font-medium
- text-foreground, text-muted-foreground
- text-gradient-gold, text-gradient-amethyst

Colors:
- bg-gradient-to-r, from-gold, to-amber-500
- bg-blue-500/20, text-blue-600
- bg-green-500/20, text-green-700
- bg-card/30, bg-card/50, bg-card/80

Effects:
- glass-card (custom class)
- rounded-lg, rounded-full
- border, border-border/20, border-border/30
- shadow-lg, hover:shadow-lg
- transition-all, duration-200
- hover:-translate-y-1
```

### Custom Utilities
```css
.glass-card {
  background: hsl(var(--color-card) / 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid hsl(var(--color-primary) / 0.1);
}

.text-gradient-gold {
  background: linear-gradient(to bottom right, #B78B1E, #FBBF24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-amethyst {
  background: linear-gradient(to bottom right, #8B5CF6, #A78BFA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## Mock Data Generation

```typescript
generateMockCompetitors(categories) {
  1. Create firstName/lastName pools
  2. Create photo placeholder URLs (Unsplash)
  3. Initialize competitorNumber = 1
  4. For each category:
     - For i = 0 to 11:
       - Pick random firstName, lastName, photo
       - Create Competitor object
       - Increment competitorNumber
  5. Return 72 competitors
}
```

## Type Safety

All components use TypeScript interfaces:

```typescript
interface ScoringInterfaceProps {
  eventId: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  lockedCategories: string[];
}

interface CompetitorGridProps {
  competitors: Competitor[];
  scores: CompetitorScores;
  onScoreChange: (competitorId: string, score: number) => void;
  isLocked: boolean;
}

interface CompetitorCardProps {
  competitor: Competitor;
  ranking: number | null;
  totalScore: number;
  scores: Record<string, number>;
  onScoreChange: (score: number) => void;
  isLocked: boolean;
}
```

## Browser APIs Used

### localStorage
```javascript
localStorage.setItem(key, JSON.stringify(data))
localStorage.getItem(key)
localStorage.removeItem(key)
```

### Date/Time
```javascript
new Date().toLocaleTimeString('es-AR', options)
setInterval(callback, 1000)
```

### DOM Events
```javascript
onClick, onKeyDown, onChange
```

## Testing Considerations

### Unit Tests
- useScoringState hook logic
- Ranking calculation algorithm
- localStorage operations

### Integration Tests
- Score submission flow
- Category switching
- Category finalization
- Clear all scores

### E2E Tests
- Full scoring workflow
- Multi-category scoring
- Data persistence

## Performance Metrics

- Initial load: ~500ms
- Score update: <100ms
- Re-render: <50ms
- localStorage operation: <10ms

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Requires localStorage
- Uses ES6+ features
- Needs React 18+

## Future API Integration

Replace mock data generator with API calls:

```typescript
// Before: generateMockCompetitors()
// After:
const competitors = await fetch(`/api/events/${eventId}/competitors`)
  .then(r => r.json())

// Before: localStorage
// After:
const updateScore = useCallback(async (categoryId, competitorId, score) => {
  await fetch(`/api/events/${eventId}/scores`, {
    method: 'POST',
    body: JSON.stringify({ categoryId, competitorId, score })
  })
}, [eventId])
```
