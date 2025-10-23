# Smart Category Recommendations - Feature Demo

## User Scenario

A user named Juan Pérez is registering for the "Campeonato Nacional IFBB Argentina 2025":
- **Height**: 175cm
- **Birth Date**: 1990-05-15 (Age: 33 years)
- **Gender**: Male (default)

## Step 1: Category Selection - Enhanced Flow

### What the User Sees

#### Section 1: "Recomendado para Ti" (Recommended for You)
**Visual Appearance:**
- Gold gradient background (from pale gold to soft yellow)
- Header with sparkles icon and "Recomendado para Ti" title
- Subtitle explaining the recommendation

**Content:**
```
✨ Recomendado para Ti

Based on your height: 175cm

[Men's Physique - Clase B (175-180cm)]  $1500
✓ Recomendado (gold badge)
```

**Why This Recommendation?**
- User height is 175cm, which falls in the range 172-175.9cm
- This range corresponds to Men's Physique Class B
- The category card is highlighted with:
  - Gold border (#B78B1E)
  - Subtle gold background overlay
  - Hover effect showing shadow glow

**Auto-selection:**
- "Men's Physique - Clase B" checkbox is automatically checked
- User can uncheck if they prefer a different category

#### Section 2: Info Tooltip
**Location:** Header of "All Categories" section
**Icon:** Info (i) button in top-right corner
**Tooltip Content on Hover:**

```
Criterios de Categorías:

Men's Physique:
  • Class A: 168-171.9cm
  • Class B: 172-175.9cm
  • Class C: 176-179.9cm
  • Class D: 180+cm

Women's Bikini:
  • Class A: Menos 160cm
  • Class B: 160-163.9cm
  • Class C: 164-167.9cm
  • Class D: 168+cm

Edad: Masters 40+, Masters 50+
```

#### Section 3: "Todas las Categorías" (All Categories)
**Display:** Full list of available categories
**Styling for Recommended Categories:**
- Gold border highlight
- Shows it's recommended when selected
- Distinguishable from non-recommended selections

**Categories Available:**
- Men's Physique (Class A, B, C)
- Bodybuilding (Weight classes)
- Women Bikini
- Women Wellness
- Masters 40+
- Masters 50+
- Junior

#### Section 4: Cost Summary
**Updated Based on Selection:**
```
Resumen de Costos

Men's Physique: $1500
_______________
Arancel de Inscripción: $2000
═══════════════════════
Total: $3500
```

---

## Scenario 2: User with Age-Based Recommendation

**User Profile:**
- **Height**: 172cm
- **Birth Date**: 1975-03-20 (Age: 48 years)
- **Gender**: Male

### Recommendations Generated
1. **Height-based**: Men's Physique Class B (172-175.9cm)
2. **Age-based**: Masters 40+ (age >= 40)

### UI Display
```
✨ Recomendado para Ti

Based on your height: 172cm | Based on your age: 48 years old

[Men's Physique - Clase B]  $1500 ✓
[Masters 40+]  $2000
```

Both categories appear in the recommendation section with:
- Gold highlighting
- Auto-selection of first recommendation (Men's Physique Class B)
- Option to add Masters 40+ category manually
- Price automatically updates when second category is selected

---

## Scenario 3: Women's Bikini Athlete

**User Profile:**
- **Height**: 163cm
- **Birth Date**: 2000-08-14 (Age: 23 years)
- **Gender**: Female

### Expected Behavior
The algorithm would recommend:
- Women's Bikini Class B (160-163.9cm range)

**Note:** Current implementation defaults to male gender. For full support:
```typescript
// Future enhancement:
const recs = getRecommendations(height, age, userSelectedGender)
```

---

## Algorithm Flow

### Step 1: User Enters Category Selection Step
```
currentStep = 1
trigger useEffect dependency
```

### Step 2: Calculate Age
```typescript
birth date: "1990-05-15"
today: 2024-10-23

age = 34 years (if we're in 2024)
```

### Step 3: Get Recommendations
```typescript
getRecommendations(height: 175, age: 34, gender: 'male')

// Height check
175 >= 172 && 175 <= 175.9
→ Push 'mp-b' (Men's Physique Class B)
→ reason = "Men's Physique Class B"

// Age check
age < 40 (34 < 40)
→ No age-based recommendation

// Return
{
  recommendedCategoryIds: ['mp-b'],
  reason: "Men's Physique Class B",
  details: "Based on your height: 175cm"
}
```

### Step 4: Display Recommendations
- Filter event.categories to find matching IDs
- Display in special "Recomendado para Ti" section
- Auto-select first recommendation

### Step 5: User Interaction
User can:
1. Keep auto-selected recommendation (checkbox already checked)
2. Uncheck and select different category
3. Add additional categories from "All Categories"
4. Select multiple categories if desired

---

## Key Features Summary

### Automatic Intelligence
- No user configuration needed
- Recommendations appear instantly on Step 1
- Based on data entered in personal information step

### Clear Communication
- Why it's recommended (height/age based)
- Visual distinction with gold highlighting
- Tooltip explains all category criteria

### Flexibility
- Auto-selection is just a suggestion
- Users can override any recommendation
- All categories remain accessible

### Performance
- Calculated once per page load
- Re-calculated only when height or birthDate changes
- Lightweight algorithm (O(1) complexity)

### Accessibility
- Clear visual hierarchy
- Tooltip explains all options
- High contrast gold highlighting
- Keyboard navigable

---

## Visual Color Reference

```css
Primary Gold:       #B78B1E
Accent Gold:        #FFD700
Gold Background:    #B78B1E/20 (with opacity)
Dark Background:    #1a1a1f
Border Color:       #2a2a2f
Text Primary:       foreground (white/light)
Text Secondary:     muted-foreground (gray)
```

---

## Edge Cases Handled

### No Height Data
- If user hasn't entered height, recommendations won't show
- User must fill personal info before moving to Step 2+

### Multiple Matching Categories
- All matching categories are displayed
- Only first one is auto-selected
- User can add others manually

### Age-Only Match
- User might qualify only for Masters category
- Combined with height-based recommendation if applicable
- Multiple badges can appear

### No Matching Category
- If height/age don't match any category criteria
- Recommendations section doesn't display
- User can still manually select from all categories

---

## Implementation Status

- ✓ Algorithm implemented
- ✓ UI components created
- ✓ Auto-selection logic
- ✓ Tooltip with criteria
- ✓ Gold highlighting
- ✓ Age calculation
- ✓ Mock data with 175cm user
- ✓ Responsive design
- ✓ Accessibility features

## Testing Checklist

- [ ] Load Step 1 with 175cm user → Men's Physique Class B recommended
- [ ] Load Step 1 with 50+ year old → Masters 50+ option visible
- [ ] Hover info icon → Tooltip displays with criteria
- [ ] Select recommended category → Auto-checked
- [ ] Uncheck recommendation → Can select other category
- [ ] Add multiple categories → Price updates correctly
- [ ] Change height slider → Recommendations update
- [ ] Resize to mobile → Layout adapts correctly
- [ ] Tab navigation → All interactive elements accessible
