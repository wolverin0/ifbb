# Certificate Download Feature - Code Snippets

## Certificate Component Usage

### Basic Certificate Rendering
```tsx
import { Certificate } from '@/components/certificate';

export function MyComponent() {
  return (
    <Certificate
      athleteName="Juan García"
      eventName="Copa Provincial Córdoba"
      category="Men's Physique - Class A"
      placing={1}
      date="22/02/2025"
      medal="gold"
      organizationName="IFBB Argentina"
    />
  );
}
```

### Different Medal Types
```tsx
// Gold medal (1st place)
<Certificate
  athleteName="Maria López"
  eventName="Campeonato Nacional"
  category="Women's Physique"
  placing={1}
  date="10/05/2025"
  medal="gold"
/>

// Silver medal (2nd place)
<Certificate
  athleteName="Carlos Gomez"
  eventName="Campeonato Nacional"
  category="Men's Physique"
  placing={2}
  date="10/05/2025"
  medal="silver"
/>

// Bronze medal (3rd place)
<Certificate
  athleteName="Ana Martinez"
  eventName="Campeonato Nacional"
  category="Women's Physique"
  placing={3}
  date="10/05/2025"
  medal="bronze"
/>
```

## Certificate Modal Usage

### Complete Modal Implementation
```tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CertificateModal } from '@/components/certificate-modal';

interface Result {
  id: string;
  event: string;
  date: string;
  category: string;
  placing: number;
  athleteName: string;
}

export function ResultsList({ results }: { results: Result[] }) {
  const [selectedResult, setSelectedResult] = useState<Result | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCertificate = (result: Result) => {
    if (result.placing <= 3) {
      setSelectedResult(result);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="space-y-2">
        {results.map((result) => (
          <div key={result.id} className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{result.event}</p>
              <p className="text-sm text-gray-600">{result.category}</p>
            </div>
            {result.placing <= 3 && (
              <Button 
                onClick={() => handleViewCertificate(result)}
                variant="outline"
              >
                View Certificate
              </Button>
            )}
          </div>
        ))}
      </div>

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
}
```

## Score Sheet Component Usage

### Basic Score Sheet
```tsx
import { ScoreSheet } from '@/components/score-sheet';

export function AthleteScores() {
  return (
    <ScoreSheet
      athleteName="Juan García"
      eventName="Copa Provincial Córdoba"
      category="Men's Physique - Class A"
      date="22/02/2025"
    />
  );
}
```

### Score Sheet with Custom Scores
```tsx
import { ScoreSheet } from '@/components/score-sheet';

export function AthleteScoresCustom() {
  const customScores = [
    { judgeNumber: 1, symmetry: 9.5, muscularity: 9.7, conditioning: 9.6, total: 28.8 },
    { judgeNumber: 2, symmetry: 9.3, muscularity: 9.5, conditioning: 9.4, total: 28.2 },
    { judgeNumber: 3, symmetry: 9.6, muscularity: 9.8, conditioning: 9.7, total: 29.1 },
    { judgeNumber: 4, symmetry: 9.4, muscularity: 9.6, conditioning: 9.5, total: 28.5 },
    { judgeNumber: 5, symmetry: 9.5, muscularity: 9.7, conditioning: 9.6, total: 28.8 },
  ];

  return (
    <ScoreSheet
      athleteName="Juan García"
      eventName="Copa Provincial Córdoba"
      category="Men's Physique - Class A"
      date="22/02/2025"
      judgeScores={customScores}
    />
  );
}
```

## Download Handlers

### Download Certificate as PDF
```tsx
const handleDownloadPDF = async (result: Result) => {
  try {
    // In a real implementation, you would use html2pdf or jsPDF
    // For now, this is a mock implementation
    
    // Step 1: Simulate processing
    const isDownloading = true;
    
    // Step 2: Generate/fetch the PDF
    // const pdf = await generateCertificatePDF(result);
    
    // Step 3: Create download link
    // const blob = new Blob([pdf], { type: 'application/pdf' });
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = `Certificate_${result.athleteName}_${result.event}.pdf`;
    // a.click();
    
    // Step 4: Show success notification
    toast({
      title: 'Certificate Downloaded!',
      description: `Certificate_${result.athleteName}_${result.event}.pdf saved.`,
      duration: 3000,
    });
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Failed to download certificate.',
      variant: 'destructive',
    });
  }
};
```

### Download Certificate as PNG
```tsx
const handleDownloadPNG = async (result: Result) => {
  try {
    // In a real implementation, you would use html2canvas
    // const canvas = await html2canvas(certificateElement);
    // const link = document.createElement('a');
    // link.href = canvas.toDataURL('image/png');
    // link.download = `Certificate_${result.athleteName}.png`;
    // link.click();

    toast({
      title: 'Certificate Downloaded!',
      description: `Certificate_${result.athleteName}_${result.event}.png saved.`,
      duration: 3000,
    });
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Failed to download certificate.',
      variant: 'destructive',
    });
  }
};
```

## Complete Results Page Example

### Full Page Implementation
```tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, FileText } from 'lucide-react';
import { CertificateModal } from '@/components/certificate-modal';
import { useToast } from '@/components/ui/use-toast';

interface Result {
  id: string;
  event: string;
  date: string;
  category: string;
  placing: number;
  score: string;
  athleteName: string;
}

export default function ResultsPage() {
  const { toast } = useToast();
  const [selectedResult, setSelectedResult] = useState<Result | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const results: Result[] = [
    {
      id: '1',
      event: 'Copa Provincial Córdoba',
      date: '22/02/2025',
      category: "Men's Physique - Class A",
      placing: 1,
      score: '94.5 points',
      athleteName: 'Juan García',
    },
    {
      id: '2',
      event: 'Torneo de Verano',
      date: '10/01/2025',
      category: "Men's Physique - Open",
      placing: 3,
      score: '88.2 points',
      athleteName: 'Juan García',
    },
  ];

  const getMedalBadge = (placing: number) => {
    if (placing === 1) {
      return <Badge className="bg-yellow-600">🥇 1st Place</Badge>;
    }
    if (placing === 2) {
      return <Badge className="bg-slate-500">🥈 2nd Place</Badge>;
    }
    if (placing === 3) {
      return <Badge className="bg-orange-700">🥉 3rd Place</Badge>;
    }
    return <Badge variant="outline">{placing}th Place</Badge>;
  };

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Mis Resultados</h1>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Competition Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Placement</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell>{result.event}</TableCell>
                  <TableCell>{result.date}</TableCell>
                  <TableCell>{result.category}</TableCell>
                  <TableCell>{getMedalBadge(result.placing)}</TableCell>
                  <TableCell className="font-semibold">{result.score}</TableCell>
                  <TableCell>
                    {result.placing <= 3 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedResult(result);
                          setIsModalOpen(true);
                        }}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

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
    </div>
  );
}
```

## Type Definitions

### Result Interface
```tsx
interface Result {
  id: string;
  event: string;
  date: string;
  category: string;
  placing: number;
  placingText: string;
  score: string;
  athleteName: string;
}
```

### Judge Score Interface
```tsx
interface JudgeScore {
  judgeNumber: number;
  symmetry: number;        // 0-10
  muscularity: number;     // 0-10
  conditioning: number;    // 0-10
  total: number;           // Sum of above
}
```

### Certificate Props
```tsx
interface CertificateProps {
  athleteName: string;
  eventName: string;
  category: string;
  placing: number;         // 1, 2, or 3
  date: string;           // Format: DD/MM/YYYY
  medal?: 'gold' | 'silver' | 'bronze';
  organizationName?: string;
}
```

### Modal Props
```tsx
interface CertificateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  athleteName: string;
  eventName: string;
  category: string;
  placing: number;
  date: string;
}
```

## Styling Examples

### Medal Badge Styles
```tsx
// Gold (1st Place)
<Badge className="bg-yellow-600 hover:bg-yellow-700">
  🥇 1st Place
</Badge>

// Silver (2nd Place)
<Badge className="bg-slate-500 hover:bg-slate-600">
  🥈 2nd Place
</Badge>

// Bronze (3rd Place)
<Badge className="bg-orange-700 hover:bg-orange-800">
  🥉 3rd Place
</Badge>
```

### Button Styles
```tsx
// Primary action
<Button onClick={handleDownloadPDF} className="gap-2">
  <FileText className="h-4 w-4" />
  Download PDF
</Button>

// Secondary action
<Button variant="outline" size="sm" className="gap-1">
  <Eye className="h-4 w-4" />
  <span className="hidden sm:inline">View</span>
</Button>
```

## Toast Notifications

### Success Notification
```tsx
toast({
  title: 'Certificate Downloaded!',
  description: 'Certificate_JuanGarcia_CopaCordova.pdf saved to downloads.',
  duration: 3000,
});
```

### Error Notification
```tsx
toast({
  title: 'Download Error',
  description: 'Failed to download certificate. Please try again.',
  variant: 'destructive',
  duration: 3000,
});
```

### Info Notification
```tsx
toast({
  title: 'Certificate Not Available',
  description: 'Certificates are only available for 1st, 2nd, or 3rd place.',
  duration: 3000,
});
```

---

These snippets provide complete examples for implementing the certificate download feature across your application.
