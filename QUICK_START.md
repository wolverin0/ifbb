# Smart Category Recommendations - Quick Start Guide

## What Was Built

Smart AI-driven category recommendations for the event registration form that suggest the best competition category based on:
- User's height
- User's age
- Sport category (Men's Physique, Women's Bikini, etc.)

## Where to Find It

**File**: `/app/eventos/[id]/inscripcion/page.tsx`
- Step 1 (Category Selection)
- Look for "Recomendado para Ti" section

## How It Works

### For Users
1. Enter personal info (height, birth date)
2. Go to Step 1 (Category Selection)
3. See "Recomendado para Ti" section
4. First matching category is auto-selected
5. Can accept or choose different category

### For Developers
```typescript
// User data
height: 175cm
birthDate: "1990-05-15"

// Algorithm runs
const age = calculateAgeInYears(birthDate)  // 34 years
const recs = getRecommendations(175, 34)    // {recommendedCategoryIds: ['mp-b'], ...}

// UI displays
"Recomendado para Ti"
"Men's Physique - Clase B"
"Based on your height: 175cm"
```

## Key Features

### Visible Elements
- Gold "Sparkles" icon in header
- "Recomendado para Ti" section (gold background)
- "Recomendado" badge on recommended categories
- Info (i) tooltip with category criteria
- Auto-selected checkbox for recommendation

### Hidden Logic
- Age calculation from birth date
- Height-to-category matching
- Age-based category suggestions (Masters 40+, 50+)
- Auto-selection of first recommendation

## Classification Rules

### Men's Physique
| Class | Height Range |
|-------|--------------|
| A | 168-171.9cm |
| B | 172-175.9cm |
| C | 176-179.9cm |
| D | 180+cm |

### Women's Bikini
| Class | Height Range |
|-------|--------------|
| A | <160cm |
| B | 160-163.9cm |
| C | 164-167.9cm |
| D | 168+cm |

### Age Categories
- Masters 40+: Age >= 40 years
- Masters 50+: Age >= 50 years

## Testing with Mock Data

Pre-configured user for testing:
- **Name**: Juan Pérez
- **Height**: 175cm ← Men's Physique Class B
- **Birth Date**: 1990-05-15 ← Age 34 (no Masters)
- **Expected Recommendation**: Men's Physique Class B

## Documentation Files

- **SMART_RECOMMENDATIONS_SUMMARY.md** - Full feature overview
- **FEATURE_DEMO.md** - User experience details
- **CODE_CHANGES_REFERENCE.md** - Technical implementation
- **IMPLEMENTATION_COMPLETE.md** - Project summary

---

**Status**: Ready to Deploy
**Last Updated**: 2025-10-23
**Version**: 1.0
