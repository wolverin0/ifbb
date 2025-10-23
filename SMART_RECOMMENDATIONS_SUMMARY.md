# Smart Category Recommendations Enhancement

## Overview
Enhanced the event registration flow with intelligent category recommendations based on user height and age.

## File Modified
- **Location**: `/app/eventos/[id]/inscripcion/page.tsx`
- **Component**: Step 1 (Category Selection) in event registration form

## Features Implemented

### 1. Smart Recommendation Algorithm
Added intelligent recommendation logic based on:

#### Men's Physique Classifications
- **Class A**: Height 168-171.9cm
- **Class B**: Height 172-175.9cm
- **Class C**: Height 176-179.9cm
- **Class D**: Height 180+cm

#### Women's Bikini Classifications
- **Class A**: Height <160cm
- **Class B**: Height 160-163.9cm
- **Class C**: Height 164-167.9cm
- **Class D**: Height 168+cm

#### Age-Based Divisions
- **Masters 40+**: Age >= 40 years
- **Masters 50+**: Age >= 50 years

### 2. UI Components

#### "Recommended for You" Section
- **Location**: Above "All Categories" section
- **Visual Style**: Gold gradient background (from-[#B78B1E]/20 to-[#FFD700]/10)
- **Key Elements**:
  - Sparkles icon indicating recommendation
  - Title: "Recomendado para Ti"
  - Explanation text showing the reason (e.g., "Based on your height: 175cm")
  - Recommended category cards with golden highlight
  - "Recomendado" (Recommended) badge in top-right corner
  - Auto-selection of first recommendation

#### Category Criteria Tooltip
- **Icon**: Info icon in header of "All Categories" section
- **Content**: Displays all classification criteria
- **Styling**: Gold border, dark background for readability

#### Enhanced Category List
- Recommended categories are highlighted with gold border
- Selected recommended categories show enhanced shadow effect
- Maintains full category list below recommendations

### 3. Implementation Details

#### New Functions
```typescript
function calculateAgeInYears(birthDate: string): number
- Calculates exact age from birth date string
- Used for age-based category recommendations

function getRecommendations(height: number, age: number, gender?: 'male' | 'female'): RecommendationResult
- Main recommendation engine
- Returns array of recommended category IDs and explanation text
- Supports both height and age-based rules
```

#### New Interface
```typescript
interface RecommendationResult {
  recommendedCategoryIds: string[]
  reason: string
  details: string
}
```

#### State Management
- Added `recommendations` state to track recommendation data
- useEffect hook calculates recommendations when:
  - User enters Step 1 (Category Selection)
  - User changes height
  - User changes birth date
- Auto-selects first recommendation if none are selected

### 4. Mock User Data
- **Height**: 175cm (triggers Men's Physique Class B recommendation)
- **Age**: 28 years (calculated from birthDate: '1990-05-15')
- **Expected Recommendation**: Men's Physique Class B

### 5. Styling Features

#### Color Scheme
- **Gold Highlight**: #B78B1E (primary recommendation color)
- **Light Gold**: #FFD700 (accent color)
- **Gold Overlay**: Used for recommended section background
- **Shadow Effect**: Gold shadow (shadow-[#B78B1E]/30) for selected recommendations

#### Icons
- **Sparkles**: For recommendation header (sparkles icon)
- **Info**: For category criteria tooltip (info icon)

### 6. User Experience Improvements

#### Smart Pre-selection
- First matching recommendation is automatically selected
- User can still manually choose other categories
- All categories remain available below recommendations

#### Visual Hierarchy
- Recommended section appears at top with eye-catching gradient
- Gold "Recommended" badge distinguishes suggested options
- Tooltip provides educational context about category criteria

#### Responsive Design
- Works on mobile and desktop
- Scrollable category list maintains usability
- Tooltip adapts to screen size

## Technical Implementation

### Imports Added
```typescript
import { Sparkles, Info } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
```

### Hook Dependencies
```typescript
useEffect(() => {
  if (currentStep === 1) {
    const age = calculateAgeInYears(data.birthDate)
    const recs = getRecommendations(data.height, age)
    setRecommendations(recs)
  }
}, [currentStep, data.height, data.birthDate])
```

## Testing

The implementation includes:
- Age calculation based on birth date
- Height-based category matching
- Recommendation display logic
- Auto-selection mechanism
- Fallback for users without recommendations

## Compatibility

- **Framework**: Next.js (React 19.2.0)
- **Components**: Uses existing Shadcn UI components
- **Styling**: Tailwind CSS with custom gold theme
- **Browser**: All modern browsers with ES6+ support

## Future Enhancements

Potential improvements:
1. Add gender selection UI for Women's Bikini recommendations
2. Dynamic recommendation updates as user changes height/age
3. Analytics tracking for recommendation acceptance rates
4. Personalization based on previous competitions
5. Admin panel to customize category criteria
6. Machine learning for predicting best category based on metrics

## Files Changed Summary

**Modified**: `/app/eventos/[id]/inscripcion/page.tsx`
- Lines 16-21: Added Tooltip imports
- Lines 43-50: Added Sparkles and Info icon imports
- Lines 55-135: Added recommendation algorithm
- Lines 191: Added recommendations state
- Lines 230-243: Added useEffect for recommendations
- Lines 585-640: Added recommendations UI section
- Lines 652-684: Added tooltip with category criteria
- Lines 689-727: Enhanced category list with recommendation styling
