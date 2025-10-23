# Code Changes Reference - Smart Category Recommendations

## File Location
`/app/eventos/[id]/inscripcion/page.tsx`

## Changes Summary
- Total lines added: ~150 lines
- New imports: 2 icon imports, 4 tooltip component imports
- New functions: 2 (calculateAgeInYears, getRecommendations)
- New interface: 1 (RecommendationResult)
- New state: 1 (recommendations)
- New useEffect hook: 1
- UI sections enhanced: 1 major section added, 1 section refactored

---

## 1. New Imports (Lines 16-21, 43-50)

### UI Component Imports
```typescript
// Added Tooltip components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
```

### Icon Imports
```typescript
// Added to existing lucide-react import
Sparkles,  // For recommendation section header
Info,      // For category criteria tooltip
```

---

## 2. New Algorithm Functions (Lines 55-135)

### Interface Definition
```typescript
interface RecommendationResult {
  recommendedCategoryIds: string[]
  reason: string
  details: string
}
```

### Age Calculation Function
```typescript
function calculateAgeInYears(birthDate: string): number {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}
```

### Main Recommendation Engine
```typescript
function getRecommendations(
  height: number,
  age: number,
  gender: 'male' | 'female' = 'male'
): RecommendationResult {
  const recommendations: string[] = []
  let reason = ''
  let details = ''

  // Men's Physique height-based logic
  if (gender === 'male') {
    if (height >= 168 && height <= 171.9) {
      recommendations.push('mp-a')
      reason = "Men's Physique Class A"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 172 && height <= 175.9) {
      recommendations.push('mp-b')
      reason = "Men's Physique Class B"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 176 && height <= 179.9) {
      recommendations.push('mp-c')
      reason = "Men's Physique Class C"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 180) {
      recommendations.push('mp-d')
      reason = "Men's Physique (180cm+)"
      details = 'Based on your height: ' + height + 'cm'
    }
  } else {
    // Women's Bikini height-based logic
    if (height < 160) {
      recommendations.push('wb-bikini-a')
      reason = "Women's Bikini Class A"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 160 && height <= 163.9) {
      recommendations.push('wb-bikini-b')
      reason = "Women's Bikini Class B"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 164 && height <= 167.9) {
      recommendations.push('wb-bikini-c')
      reason = "Women's Bikini Class C"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 168) {
      recommendations.push('wb-bikini-d')
      reason = "Women's Bikini Class D"
      details = 'Based on your height: ' + height + 'cm'
    }
  }

  // Age-based logic
  if (age >= 50) {
    recommendations.push('masters-50')
    reason += (reason ? ' + ' : '') + 'Masters 50+'
    details += (details ? ' | ' : '') + 'Based on your age: ' + age + ' years old'
  } else if (age >= 40) {
    recommendations.push('masters-40')
    reason += (reason ? ' + ' : '') + 'Masters 40+'
    details += (details ? ' | ' : '') + 'Based on your age: ' + age + ' years old'
  }

  return {
    recommendedCategoryIds: recommendations,
    reason: reason || 'General Category',
    details: details || 'Please select a category'
  }
}
```

---

## 3. State Addition (Line 191)

```typescript
const [recommendations, setRecommendations] = useState<RecommendationResult | null>(null)
```

---

## 4. useEffect Hook for Recommendations (Lines 230-243)

```typescript
useEffect(() => {
  if (currentStep === 1) {
    const age = calculateAgeInYears(data.birthDate)
    const recs = getRecommendations(data.height, age)
    setRecommendations(recs)

    // Auto-select first recommendation if not already selected
    if (recs.recommendedCategoryIds.length > 0 && data.selectedCategories.length === 0) {
      setData(prev => ({
        ...prev,
        selectedCategories: [recs.recommendedCategoryIds[0]]
      }))
    }
  }
}, [currentStep, data.height, data.birthDate])
```

---

## 5. "Recomendado para Ti" Section (Lines 585-640)

This is a new Card component inserted before the "All Categories" section:

```typescript
{recommendations && recommendations.recommendedCategoryIds.length > 0 && (
  <Card className="bg-gradient-to-r from-[#B78B1E]/20 to-[#FFD700]/10 border-[#B78B1E] mb-8">
    <CardHeader>
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-[#B78B1E]" />
        <CardTitle className="text-foreground">Recomendado para Ti</CardTitle>
      </div>
      <CardDescription className="text-muted-foreground">
        {recommendations.details}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {event.categories
          .filter(cat => recommendations.recommendedCategoryIds.includes(cat.id))
          .map((category) => (
            <div
              key={category.id}
              className={cn(
                'p-4 rounded-lg border-2 transition-all cursor-pointer relative overflow-hidden',
                data.selectedCategories.includes(category.id)
                  ? 'bg-[#B78B1E]/20 border-[#B78B1E] shadow-lg shadow-[#B78B1E]/30'
                  : 'bg-[#B78B1E]/10 border-[#B78B1E] hover:shadow-md hover:shadow-[#B78B1E]/20'
              )}
              onClick={() => handleCategoryToggle(category.id)}
            >
              <div className="absolute top-2 right-2">
                <Badge className="bg-gradient-to-r from-[#B78B1E] to-[#FFD700] text-[#0B0B0F] font-semibold">
                  Recomendado
                </Badge>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={data.selectedCategories.includes(category.id)}
                  onCheckedChange={() => handleCategoryToggle(category.id)}
                  className="mt-1"
                />
                <div className="flex-1 pr-32">
                  <div className="font-semibold text-foreground">
                    {category.name} - {category.description}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Altura: {category.height} | Peso: {category.weight}
                  </p>
                </div>
                <Badge className="ml-2 bg-[#B78B1E] text-[#0B0B0F] font-semibold whitespace-nowrap">
                  ${category.price}
                </Badge>
              </div>
            </div>
          ))}
      </div>
    </CardContent>
  </Card>
)}
```

---

## 6. Enhanced Category Header (Lines 642-685)

The header of the "All Categories" card was refactored to include:

### Before
```typescript
<CardHeader>
  <CardTitle className="text-foreground">Selecciona tu Categoría</CardTitle>
  <CardDescription className="text-muted-foreground">
    Puedes seleccionar múltiples categorías. El precio se calcula automáticamente.
  </CardDescription>
</CardHeader>
```

### After
```typescript
<CardHeader>
  <div className="flex items-center justify-between">
    <div>
      <CardTitle className="text-foreground">Todas las Categorías</CardTitle>
      <CardDescription className="text-muted-foreground">
        Puedes seleccionar múltiples categorías. El precio se calcula automáticamente.
      </CardDescription>
    </div>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#B78B1E] hover:bg-[#B78B1E]/10"
          >
            <Info className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs bg-[#2a2a2f] border-[#B78B1E]">
          <p className="text-foreground font-semibold mb-2">Criterios de Categorías:</p>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Men's Physique:</p>
            <ul className="ml-2 space-y-1">
              <li>Class A: 168-171.9cm</li>
              <li>Class B: 172-175.9cm</li>
              <li>Class C: 176-179.9cm</li>
              <li>Class D: 180+cm</li>
            </ul>
            <p className="mt-2">Women's Bikini:</p>
            <ul className="ml-2 space-y-1">
              <li>Class A: Menos 160cm</li>
              <li>Class B: 160-163.9cm</li>
              <li>Class C: 164-167.9cm</li>
              <li>Class D: 168+cm</li>
            </ul>
            <p className="mt-2">Edad: Masters 40+, Masters 50+</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</CardHeader>
```

---

## 7. Category List Styling Enhancement (Lines 689-727)

Enhanced the category mapping to check if category is recommended:

```typescript
{event.categories.map((category) => {
  const isRecommended = recommendations?.recommendedCategoryIds.includes(category.id)
  return (
    <div
      key={category.id}
      className={cn(
        'p-4 rounded-lg border-2 transition-all cursor-pointer',
        isRecommended && data.selectedCategories.includes(category.id)
          ? 'bg-[#B78B1E]/10 border-[#B78B1E] shadow-lg shadow-[#B78B1E]/30'
          : data.selectedCategories.includes(category.id)
          ? 'bg-[#0B0B0F]/80 border-[#B78B1E] opacity-80'
          : 'bg-[#0B0B0F] border-[#2a2a2f] hover:border-[#B78B1E]/50'
      )}
      onClick={() => handleCategoryToggle(category.id)}
    >
      {/* Category content remains the same */}
    </div>
  )
})}
```

---

## Styling Classes Used

### Gold Theme Colors
```css
Primary:        #B78B1E
Accent:         #FFD700
Overlay 20%:    #B78B1E/20
Overlay 10%:    #B78B1E/10
Shadow 30%:     #B78B1E/30
Shadow 20%:     #B78B1E/20
```

### Background & Border Colors
```css
Card Background:      #1a1a1f
Content Background:   #0B0B0F
Border:              #2a2a2f
Text Primary:        foreground (white/light)
Text Secondary:      muted-foreground (gray)
```

---

## Testing the Implementation

### To test with mock data (175cm, age 28):
1. Navigate to `/app/eventos/[event-id]/inscripcion`
2. User data is pre-populated:
   - Height: 175cm
   - Birth Date: 1990-05-15
3. Click to Step 1 (Category Selection)
4. Observe:
   - "Recomendado para Ti" section appears
   - "Men's Physique - Clase B (175-180cm)" is highlighted
   - Category is automatically selected (checkbox checked)
   - Info tooltip shows all category criteria

### To test with different heights:
1. Change the height slider in Step 2 (Personal Information)
2. Go back to Step 1
3. Recommendations update automatically
4. Try heights: 150, 170, 175, 180, 190

### To test age-based recommendations:
1. Modify birthDate to create age >= 40 or >= 50
2. Return to Step 1
3. Both height and age recommendations should appear

---

## Performance Considerations

- Algorithm complexity: O(1) for height matching
- Algorithm complexity: O(1) for age matching
- useEffect triggers: Only on currentStep, height, or birthDate changes
- No unnecessary re-renders due to proper dependency array
- Recommendation calculation happens only when on Step 1

---

## Browser Compatibility

- Uses ES6+ features (arrow functions, template literals)
- Requires React 18+ (hooks support)
- All Tailwind CSS classes are standard
- Tooltip component compatible with all modern browsers

---

## Future Enhancement Ideas

1. **Gender Selection**: Add UI for gender toggle to recommend Women's Bikini
2. **Dynamic Updates**: Real-time recommendations as user adjusts sliders
3. **Category Combinations**: Suggest beneficial category pairings
4. **Historical Data**: Remember user's previous category choices
5. **Admin Customization**: Allow changing classification criteria in dashboard
6. **Multiple Languages**: Translate recommendations to ES/PT
7. **Analytics**: Track recommendation acceptance rates
