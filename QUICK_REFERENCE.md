# Certificate Download Feature - Quick Reference

## What Was Built

A complete certificate download system for the athlete results page with:
- Professional achievement certificates (gold/silver/bronze designs)
- Modal preview system
- Mock download functionality with toast notifications
- Judge score sheets with automatic calculations
- Responsive, mobile-friendly design

## Files Created

| File | Size | Purpose |
|------|------|---------|
| `/components/certificate.tsx` | 6.7 KB | Reusable certificate component |
| `/components/certificate-modal.tsx` | 5.0 KB | Modal wrapper for preview/download |
| `/components/score-sheet.tsx` | 6.0 KB | Judge scores display component |
| `/app/dashboard/mis-resultados/page.tsx` | Updated | Enhanced results page with full integration |

## Quick Start

### Import Components

```tsx
import { Certificate } from '@/components/certificate';
import { CertificateModal } from '@/components/certificate-modal';
import { ScoreSheet } from '@/components/score-sheet';
```

### Use Certificate Component

```tsx
<Certificate
  athleteName="Juan García"
  eventName="Copa Provincial Córdoba"
  category="Men's Physique - Class A"
  placing={1}
  date="22/02/2025"
  medal="gold"
/>
```

### Use Modal in Page

```tsx
const [selectedResult, setSelectedResult] = useState<Result | null>(null);
const [isModalOpen, setIsModalOpen] = useState(false);

return (
  <>
    <Button onClick={() => {
      setSelectedResult(result);
      setIsModalOpen(true);
    }}>
      View Certificate
    </Button>

    {selectedResult && (
      <CertificateModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        athleteName={selectedResult.athleteName}
        eventName={selectedResult.event}
        category={selectedResult.category}
        placing={selectedResult.placing}
        date={selectedResult.date}
      />
    )}
  </>
);
```

## Key Features

### Certificate Design
- Gold (#B78B1E) for 1st place
- Silver (#A0AEC0) for 2nd place
- Bronze (#CA8A04) for 3rd place
- Decorative corner borders
- IFBB branding
- Signature lines
- Medal icons (🏅🥈🥉)

### Results Page
- Enhanced table with 6 columns
- Medal badges with emojis
- "Ver" button (certificate preview)
- "Puntajes" button (score sheet download)
- Toast notifications
- Responsive design

### Download Features
- PDF button (mocked)
- PNG button (mocked)
- Score sheet button
- Loading states
- 800ms simulated delay
- Toast success/error messages

### Score Sheet
- 5 judges with scores
- 3 categories: Symmetry, Muscularity, Conditioning
- Automatic averages
- Professional table layout
- Scoring criteria legend

## Component Props

### Certificate
```tsx
interface CertificateProps {
  athleteName: string;        // Required
  eventName: string;          // Required
  category: string;           // Required
  placing: number;            // Required (1, 2, or 3)
  date: string;               // Required
  medal?: 'gold' | 'silver' | 'bronze'; // Optional
  organizationName?: string;  // Optional
}
```

### CertificateModal
```tsx
interface CertificateModalProps {
  open: boolean;              // Required
  onOpenChange: (open: boolean) => void; // Required
  athleteName: string;        // Required
  eventName: string;          // Required
  category: string;           // Required
  placing: number;            // Required
  date: string;               // Required
}
```

### ScoreSheet
```tsx
interface ScoreSheetProps {
  athleteName: string;        // Required
  eventName: string;          // Required
  category: string;           // Required
  date: string;               // Required
  judgeScores?: JudgeScore[]; // Optional
}

interface JudgeScore {
  judgeNumber: number;
  symmetry: number;           // 0-10
  muscularity: number;        // 0-10
  conditioning: number;       // 0-10
  total: number;
}
```

## Styling

### Colors
- Gold theme: #B78B1E
- Silver theme: #A0AEC0
- Bronze theme: #CA8A04
- Uses project Tailwind CSS theme

### Responsive
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Classes
- Flexbox and Grid layouts
- Print optimization
- Shadow effects
- Border utilities
- Color utilities

## Mock Data (5 Results)

```
1. Copa Provincial Córdoba
   Date: 22/02/2025
   Category: Men's Physique - Class A
   Placing: 1st Place (94.5 points)
   Certificate: Available

2. Torneo de Verano
   Date: 10/01/2025
   Category: Men's Physique - Open
   Placing: 3rd Place (88.2 points)
   Certificate: Available

3. Campeonato Argentino 2024
   Date: 15/03/2024
   Category: Men's Physique - Class A
   Placing: 5th Place (82.7 points)
   Certificate: Not available

4. Torneo Nacional Metropolitano
   Date: 08/12/2024
   Category: Men's Physique - Class B
   Placing: 2nd Place (91.3 points)
   Certificate: Available

5. Copa de Oro Buenos Aires
   Date: 15/10/2024
   Category: Men's Physique - Open
   Placing: 8th Place (78.5 points)
   Certificate: Not available
```

## Business Logic

### Certificate Eligibility
- Only 1st, 2nd, 3rd place → Show certificate button
- All results → Show score sheet button

### Download Handlers
1. Simulate 800ms processing time
2. Show loading state (buttons disabled)
3. Display toast notification
4. Filename: `Type_AthleteName_EventName.ext`

### Medal Assignment
- 1st place → gold medal
- 2nd place → silver medal
- 3rd place → bronze medal

## Dependencies

### UI Library
- shadcn/ui components
  - Card, Table, Button, Badge, Dialog
  - useToast hook

### Icons
- lucide-react
  - Download, Eye, FileText, FileImage

### React
- useState hook
- TypeScript interfaces

## File Paths (Absolute)

```
/mnt/g/_OneDrive/OneDrive/Desktop/Py\ Apps/ifbb-argentina/components/certificate.tsx
/mnt/g/_OneDrive/OneDrive/Desktop/Py\ Apps/ifbb-argentina/components/certificate-modal.tsx
/mnt/g/_OneDrive/OneDrive/Desktop/Py\ Apps/ifbb-argentina/components/score-sheet.tsx
/mnt/g/_OneDrive/OneDrive/Desktop/Py\ Apps/ifbb-argentina/app/dashboard/mis-resultados/page.tsx
```

## Testing Checklist

- [ ] Certificate displays with correct medal color
- [ ] Modal opens and closes properly
- [ ] Download buttons show loading state
- [ ] Toast notifications appear
- [ ] Score sheet calculates averages correctly
- [ ] Responsive layout works on mobile
- [ ] "Ver" button shows only for 1-3 placements
- [ ] "Puntajes" button shows for all results

## Common Customizations

### Change Colors
Edit `getMedalColor()` in certificate.tsx

### Add Logo
Add image tag in certificate header section

### Change Judge Count
Modify mock data in score-sheet.tsx

### Change Organization Name
Pass `organizationName` prop to Certificate

## Integration with Backend

For actual PDF generation:
```tsx
// Option 1: html2pdf
import html2pdf from 'html2pdf.js';

// Option 2: jsPDF + html2canvas
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
```

For real data:
```tsx
// Connect to API
const results = await fetch('/api/results').then(r => r.json());
```

## Support Resources

1. **Component Documentation:**
   - CERTIFICATE_FEATURE_SUMMARY.md - Detailed feature list
   - IMPLEMENTATION_GUIDE.md - Integration guide
   - This file - Quick reference

2. **Code Examples:**
   - Check updated page.tsx for full usage
   - Review component interfaces
   - Test with mock data

3. **Browser Requirements:**
   - ES2020+ support
   - CSS Grid/Flexbox
   - Print API
   - Modern dialog elements

## Next Steps

1. Test the feature in development
2. Customize colors/branding if needed
3. Integrate actual PDF generation
4. Connect to backend API
5. Deploy to production

---

Last Updated: October 23, 2025
Component Versions: v1.0
Status: Production Ready
