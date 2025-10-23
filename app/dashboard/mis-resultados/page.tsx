'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Eye, FileText } from 'lucide-react';
import { CertificateModal } from '@/components/certificate-modal';
import { useToast } from '@/components/ui/use-toast';

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

export default function MisResultadosPage() {
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
      placingText: '1er Puesto',
      score: '94.5 points',
      athleteName: 'Juan García',
    },
    {
      id: '2',
      event: 'Torneo de Verano',
      date: '10/01/2025',
      category: "Men's Physique - Open",
      placing: 3,
      placingText: '3er Puesto',
      score: '88.2 points',
      athleteName: 'Juan García',
    },
    {
      id: '3',
      event: 'Campeonato Argentino 2024',
      date: '15/03/2024',
      category: "Men's Physique - Class A",
      placing: 5,
      placingText: '5to Puesto',
      score: '82.7 points',
      athleteName: 'Juan García',
    },
    {
      id: '4',
      event: 'Torneo Nacional Metropolitano',
      date: '08/12/2024',
      category: "Men's Physique - Class B",
      placing: 2,
      placingText: '2do Puesto',
      score: '91.3 points',
      athleteName: 'Juan García',
    },
    {
      id: '5',
      event: 'Copa de Oro Buenos Aires',
      date: '15/10/2024',
      category: "Men's Physique - Open",
      placing: 8,
      placingText: '8vo Puesto',
      score: '78.5 points',
      athleteName: 'Juan García',
    },
  ];

  const handleViewCertificate = (result: Result) => {
    if (result.placing <= 3) {
      setSelectedResult(result);
      setIsModalOpen(true);
    } else {
      toast({
        title: 'Certificate Not Available',
        description: 'Certificates are only available for top 3 placements (1st, 2nd, 3rd).',
        duration: 3000,
      });
    }
  };

  const handleDownloadScoreSheet = async (result: Result) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      const fileName = `ScoreSheet_${result.athleteName}_${result.event}.pdf`;
      toast({
        title: 'Score Sheet Downloaded!',
        description: `${fileName} has been saved to your downloads folder.`,
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: 'Download Error',
        description: 'There was an error downloading the score sheet.',
        variant: 'destructive',
        duration: 3000,
      });
    }
  };

  const getMedalBadge = (placing: number) => {
    if (placing === 1) return <Badge className="bg-yellow-600 hover:bg-yellow-700">🥇 {placing}st Place</Badge>;
    if (placing === 2) return <Badge className="bg-slate-500 hover:bg-slate-600">🥈 {placing}nd Place</Badge>;
    if (placing === 3) return <Badge className="bg-orange-700 hover:bg-orange-800">🥉 {placing}rd Place</Badge>;
    return <Badge variant="outline">{placing}th Place</Badge>;
  };

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Mis Resultados</h1>
        <p className="text-muted-foreground">Tu historial completo de competencias y certificados.</p>
      </header>

      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Historial de Competencias</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Evento</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Puesto</TableHead>
                  <TableHead className="text-center">Puntuación</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result) => (
                  <TableRow key={result.id}>
                    <TableCell className="font-medium">{result.event}</TableCell>
                    <TableCell className="text-sm">{result.date}</TableCell>
                    <TableCell className="text-sm">{result.category}</TableCell>
                    <TableCell>{getMedalBadge(result.placing)}</TableCell>
                    <TableCell className="text-center font-semibold text-primary">{result.score}</TableCell>
                    <TableCell className="text-right space-x-2 flex justify-end gap-2">
                      {result.placing <= 3 && (
                        <Button variant="outline" size="sm" onClick={() => handleViewCertificate(result)} title="View certificate preview" className="gap-1">
                          <Eye className="h-4 w-4" />
                          <span className="hidden sm:inline">Ver</span>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" onClick={() => handleDownloadScoreSheet(result)} title="Download score sheet" className="gap-1">
                        <FileText className="h-4 w-4" />
                        <span className="hidden sm:inline">Puntajes</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Certificados de Logro</h3>
                <p className="text-muted-foreground">Los certificados están disponibles para los tres primeros puestos (1°, 2° y 3°) en cada competencia. Descárgalos en PDF o como imagen.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Planillas de Puntajes</h3>
                <p className="text-muted-foreground">Accede a los detalles completos de las puntuaciones de los jueces para cada competencia donde participaste.</p>
              </div>
            </div>
          </div>
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
