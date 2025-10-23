'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Users,
  CheckCircle,
  Clock,
  XCircle,
  Search,
  Smartphone,
  Download,
  Music,
  FileText,
  IdCard,
  Image as ImageIcon,
  Printer,
  Check,
  X,
  AlertCircle,
} from 'lucide-react';

interface Athlete {
  id: string;
  registrationId: string;
  name: string;
  email: string;
  category: string;
  photo: string;
  musicFile: string | null;
  paymentStatus: 'paid' | 'pending' | 'unpaid';
  checkInStatus: 'checked-in' | 'pending' | 'no-show';
  checkedInAt?: string;
  competitorNumber?: number;
  checklist: {
    musicVerified: boolean;
    photoVerified: boolean;
    idVerified: boolean;
    waiverSigned: boolean;
  };
}

interface EventStats {
  total: number;
  checkedIn: number;
  pending: number;
  noShow: number;
}

const generateMockAthletes = (): Athlete[] => {
  const baseAthletes: Athlete[] = [
    {
      id: '1',
      registrationId: 'REG001',
      name: 'Juan Pérez',
      email: 'juan.perez@email.com',
      category: "Men's Physique",
      photo: '👨',
      musicFile: 'track1.mp3',
      paymentStatus: 'paid',
      checkInStatus: 'checked-in',
      checkedInAt: '2024-10-23 09:30',
      competitorNumber: 1,
      checklist: { musicVerified: true, photoVerified: true, idVerified: true, waiverSigned: true },
    },
    {
      id: '2',
      registrationId: 'REG002',
      name: 'María García',
      email: 'maria.garcia@email.com',
      category: 'Bikini',
      photo: '👩',
      musicFile: 'track2.mp3',
      paymentStatus: 'paid',
      checkInStatus: 'checked-in',
      checkedInAt: '2024-10-23 09:45',
      competitorNumber: 2,
      checklist: { musicVerified: true, photoVerified: true, idVerified: true, waiverSigned: true },
    },
    {
      id: '3',
      registrationId: 'REG003',
      name: 'Carlos López',
      email: 'carlos.lopez@email.com',
      category: 'Bodybuilding',
      photo: '👨‍🦳',
      musicFile: null,
      paymentStatus: 'paid',
      checkInStatus: 'checked-in',
      checkedInAt: '2024-10-23 10:15',
      competitorNumber: 3,
      checklist: { musicVerified: false, photoVerified: true, idVerified: true, waiverSigned: true },
    },
    {
      id: '4',
      registrationId: 'REG004',
      name: 'Ana Martínez',
      email: 'ana.martinez@email.com',
      category: 'Figure',
      photo: '👩',
      musicFile: 'track4.mp3',
      paymentStatus: 'paid',
      checkInStatus: 'pending',
      checklist: { musicVerified: false, photoVerified: false, idVerified: false, waiverSigned: false },
    },
    {
      id: '5',
      registrationId: 'REG005',
      name: 'Roberto Silva',
      email: 'roberto.silva@email.com',
      category: 'Classic Physique',
      photo: '👨',
      musicFile: 'track5.mp3',
      paymentStatus: 'pending',
      checkInStatus: 'pending',
      checklist: { musicVerified: false, photoVerified: true, idVerified: false, waiverSigned: false },
    },
  ];

  const categories = ["Men's Physique", 'Bikini', 'Bodybuilding', 'Figure', 'Classic Physique'];
  const additionalAthletes = Array.from({ length: 43 }, (_, i) => ({
    id: String(6 + i),
    registrationId: `REG${String(6 + i).padStart(3, '0')}`,
    name: `Atleta ${6 + i}`,
    email: `atleta${6 + i}@email.com`,
    category: categories[i % 5],
    photo: i % 2 === 0 ? '👨' : '👩',
    musicFile: Math.random() > 0.2 ? `track${6 + i}.mp3` : null,
    paymentStatus: (i < 35 ? 'paid' : i < 45 ? 'pending' : 'unpaid') as 'paid' | 'pending' | 'unpaid',
    checkInStatus: (i < 35 ? 'checked-in' : i < 45 ? 'pending' : 'no-show') as 'checked-in' | 'pending' | 'no-show',
    checkedInAt: i < 35 ? `2024-10-23 ${String(9 + Math.floor(i / 4)).padStart(2, '0')}:${String((i * 15) % 60).padStart(2, '0')}` : undefined,
    competitorNumber: i < 35 ? 4 + i : undefined,
    checklist: {
      musicVerified: i < 35 ? Math.random() > 0.3 : false,
      photoVerified: i < 35,
      idVerified: i < 35,
      waiverSigned: i < 35,
    },
  }));

  return [...baseAthletes, ...additionalAthletes];
};

export default function CheckInPage({
  params,
}: {
  params: { id: string };
}) {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'checked-in' | 'pending' | 'no-show'>('all');
  const [selectedAthletes, setSelectedAthletes] = useState<Set<string>>(new Set());
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [competitorNumber, setCompetitorNumber] = useState('');
  const [modalChecklist, setModalChecklist] = useState<{
    musicVerified: boolean;
    photoVerified: boolean;
    idVerified: boolean;
    waiverSigned: boolean;
  }>({ musicVerified: false, photoVerified: false, idVerified: false, waiverSigned: false });
  const [lastCheckInTime, setLastCheckInTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setAthletes(generateMockAthletes());
  }, []);

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.registrationId.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'all') return matchesSearch;
    return matchesSearch && athlete.checkInStatus === selectedFilter;
  });

  const stats: EventStats = {
    total: athletes.length,
    checkedIn: athletes.filter((a) => a.checkInStatus === 'checked-in').length,
    pending: athletes.filter((a) => a.checkInStatus === 'pending').length,
    noShow: athletes.filter((a) => a.checkInStatus === 'no-show').length,
  };

  const getNextCompetitorNumber = useCallback(() => {
    const usedNumbers = new Set(
      athletes
        .filter((a) => a.competitorNumber)
        .map((a) => a.competitorNumber as number)
    );
    for (let i = 1; i <= 100; i++) {
      if (!usedNumbers.has(i)) {
        return i;
      }
    }
    return 0;
  }, [athletes]);

  const handleAthletClick = (athlete: Athlete) => {
    setSelectedAthlete(athlete);
    setCompetitorNumber(athlete.competitorNumber?.toString() || getNextCompetitorNumber().toString());
    setModalChecklist(athlete.checklist);
    setShowModal(true);
  };

  const handleCompleteCheckIn = () => {
    if (!selectedAthlete) return;

    setAthletes((prev) =>
      prev.map((a) =>
        a.id === selectedAthlete.id
          ? {
              ...a,
              checkInStatus: 'checked-in',
              competitorNumber: parseInt(competitorNumber),
              checklist: modalChecklist,
              checkedInAt: new Date().toLocaleString(),
            }
          : a
      )
    );

    setLastCheckInTime(new Date().toLocaleTimeString());
    setShowModal(false);
    setSelectedAthlete(null);
  };

  const handleMarkNoShow = () => {
    if (!selectedAthlete) return;

    setAthletes((prev) =>
      prev.map((a) =>
        a.id === selectedAthlete.id
          ? {
              ...a,
              checkInStatus: 'no-show',
            }
          : a
      )
    );

    setShowModal(false);
    setSelectedAthlete(null);
  };

  const handleQRScan = () => {
    setShowQRScanner(true);
    setTimeout(() => {
      setShowQRScanner(false);
      const randomAthlete = athletes[Math.floor(Math.random() * athletes.length)];
      handleAthletClick(randomAthlete);
    }, 2000);
  };

  const handleBulkCheckIn = () => {
    const numbersToAssign = Array.from(selectedAthletes);
    let nextNumber = getNextCompetitorNumber();

    setAthletes((prev) =>
      prev.map((a) => {
        if (numbersToAssign.includes(a.id)) {
          return {
            ...a,
            checkInStatus: 'checked-in',
            competitorNumber: nextNumber++,
            checkedInAt: new Date().toLocaleString(),
          };
        }
        return a;
      })
    );

    setSelectedAthletes(new Set());
  };

  const handleExportCSV = () => {
    const headers = ['Nombre', 'Email', 'Categoría', 'Estado', 'N° Competidor', 'Hora Check-In'];
    const rows = athletes.map((a) => [
      a.name,
      a.email,
      a.category,
      a.checkInStatus,
      a.competitorNumber || 'N/A',
      a.checkedInAt || 'N/A',
    ]);

    const csv = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `check-in-${new Date().getTime()}.csv`;
    a.click();
  };

  const handlePrintSticker = () => {
    if (!selectedAthlete?.competitorNumber) return;

    const printWindow = window.open('', '', 'height=400,width=600');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Sticker ${selectedAthlete.competitorNumber}</title>
            <style>
              body { display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
              .sticker {
                width: 300px; height: 300px;
                border: 2px solid black;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: Arial, sans-serif;
                background: white;
              }
              .number { font-size: 120px; font-weight: bold; margin: 0; }
              .name { font-size: 18px; margin-top: 10px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="sticker">
              <p class="number">${selectedAthlete.competitorNumber}</p>
              <p class="name">${selectedAthlete.name}</p>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const CompetitorNumberGrid = () => {
    const usedNumbers = new Set(
      athletes
        .filter((a) => a.competitorNumber)
        .map((a) => a.competitorNumber as number)
    );

    return (
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-lg">Números de Competidor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-10 gap-2">
            {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
              <div
                key={num}
                className={`w-8 h-8 flex items-center justify-center rounded text-xs font-bold ${
                  usedNumbers.has(num)
                    ? 'bg-gray-400 text-white'
                    : 'bg-green-200 text-green-800'
                }`}
              >
                {num}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Check-In del Evento</h1>
          <p className="text-muted-foreground">
            Último check-in: {lastCheckInTime}
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleQRScan} className="gap-2" size="lg">
            <Smartphone className="h-5 w-5" />
            Escanear QR del Atleta
          </Button>
          <Button onClick={handleExportCSV} variant="outline" className="gap-2" size="lg">
            <Download className="h-5 w-5" />
            Descargar CSV
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inscritos</CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">{stats.total}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chequeados</CardTitle>
            <CheckCircle className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">{stats.checkedIn}</div>
            <p className="text-xs text-green-700 mt-1">
              {Math.round((stats.checkedIn / stats.total) * 100)}%
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
            <Clock className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">{stats.pending}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ausencias</CardTitle>
            <XCircle className="h-5 w-5 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-900">{stats.noShow}</div>
          </CardContent>
        </Card>
      </div>

      {/* QR Scanner Simulation */}
      {showQRScanner && (
        <Card className="bg-black border-4 border-blue-500 p-8">
          <CardContent className="flex items-center justify-center h-48">
            <div className="animate-pulse text-center">
              <Smartphone className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <p className="text-white text-lg font-semibold">Escaneando QR...</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search and Bulk Actions */}
      <Card className="bg-card">
        <CardHeader>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm font-medium">Buscar Atleta</label>
              <div className="relative mt-2">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Por nombre, email o ID de registro..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10 text-base"
                />
              </div>
            </div>
            {selectedAthletes.size > 0 && (
              <Button
                onClick={handleBulkCheckIn}
                className="gap-2"
                size="lg"
              >
                <Check className="h-5 w-5" />
                Check-In Masivo ({selectedAthletes.size})
              </Button>
            )}
          </div>
        </CardHeader>
      </Card>

      {/* Filter Tabs */}
      <Tabs
        defaultValue="all"
        value={selectedFilter}
        onValueChange={(value) => setSelectedFilter(value as any)}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">
            Todos ({athletes.length})
          </TabsTrigger>
          <TabsTrigger value="checked-in">
            Chequeados ({stats.checkedIn})
          </TabsTrigger>
          <TabsTrigger value="pending">
            Pendientes ({stats.pending})
          </TabsTrigger>
          <TabsTrigger value="no-show">
            Ausencias ({stats.noShow})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedFilter}>
          {/* Athletes List */}
          <Card className="bg-card">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted">
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        <Checkbox
                          checked={
                            selectedAthletes.size === filteredAthletes.length &&
                            filteredAthletes.length > 0
                          }
                          onChange={(checked) => {
                            if (checked.valueOf()) {
                              setSelectedAthletes(
                                new Set(filteredAthletes.map((a) => a.id))
                              );
                            } else {
                              setSelectedAthletes(new Set());
                            }
                          }}
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Foto</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Nombre</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Categoría</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Estado</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">N° Comp.</th>
                      <th className="px-4 py-3 text-right text-sm font-medium">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAthletes.map((athlete) => (
                      <tr
                        key={athlete.id}
                        className="border-b hover:bg-muted/50 transition-colors"
                      >
                        <td className="px-4 py-3">
                          <Checkbox
                            checked={selectedAthletes.has(athlete.id)}
                            onChange={(checked) => {
                              const newSet = new Set(selectedAthletes);
                              if (checked.valueOf()) {
                                newSet.add(athlete.id);
                              } else {
                                newSet.delete(athlete.id);
                              }
                              setSelectedAthletes(newSet);
                            }}
                          />
                        </td>
                        <td className="px-4 py-3 text-2xl">{athlete.photo}</td>
                        <td className="px-4 py-3 font-medium">{athlete.name}</td>
                        <td className="px-4 py-3 text-sm">{athlete.category}</td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={
                              athlete.checkInStatus === 'checked-in'
                                ? 'default'
                                : athlete.checkInStatus === 'pending'
                                  ? 'secondary'
                                  : 'destructive'
                            }
                          >
                            {athlete.checkInStatus === 'checked-in'
                              ? 'Chequeado'
                              : athlete.checkInStatus === 'pending'
                                ? 'Pendiente'
                                : 'Ausencia'}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 font-bold">
                          {athlete.competitorNumber || '-'}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Button
                            onClick={() => handleAthletClick(athlete)}
                            variant="outline"
                            size="sm"
                          >
                            Ver
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Competitor Number Grid */}
      <CompetitorNumberGrid />

      {/* Check-In Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-2xl max-h-screen overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Check-In del Atleta</DialogTitle>
          </DialogHeader>

          {selectedAthlete && (
            <div className="space-y-6">
              {/* Athlete Info */}
              <div className="bg-muted p-6 rounded-lg">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{selectedAthlete.photo}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{selectedAthlete.name}</h3>
                    <p className="text-muted-foreground">
                      ID: {selectedAthlete.registrationId}
                    </p>
                    <p className="text-muted-foreground">{selectedAthlete.email}</p>
                    <p className="mt-2">
                      <Badge>{selectedAthlete.category}</Badge>
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Estado de Pago</div>
                    <Badge
                      variant={
                        selectedAthlete.paymentStatus === 'paid'
                          ? 'default'
                          : 'destructive'
                      }
                    >
                      {selectedAthlete.paymentStatus === 'paid'
                        ? 'Pagado'
                        : 'Pendiente'}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Competitor Number Input */}
              <div>
                <label className="text-sm font-medium">Número de Competidor</label>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={competitorNumber}
                  onChange={(e) => setCompetitorNumber(e.target.value)}
                  className="mt-2 text-lg h-12"
                  placeholder="Auto-asignado"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Próximo disponible: {getNextCompetitorNumber()}
                </p>
              </div>

              {/* Checklist */}
              <div className="bg-muted p-6 rounded-lg space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Checklist de Verificación
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Checkbox
                      checked={modalChecklist.musicVerified}
                      onChange={(checked) =>
                        setModalChecklist({
                          ...modalChecklist,
                          musicVerified: checked.valueOf(),
                        })
                      }
                    />
                    <div className="flex-1">
                      <div className="font-medium flex items-center gap-2">
                        <Music className="h-4 w-4" />
                        Canción Verificada
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {selectedAthlete.musicFile || 'Sin archivo'}
                      </div>
                    </div>
                    {selectedAthlete.musicFile ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    )}
                  </div>

                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Checkbox
                      checked={modalChecklist.photoVerified}
                      onChange={(checked) =>
                        setModalChecklist({
                          ...modalChecklist,
                          photoVerified: checked.valueOf(),
                        })
                      }
                    />
                    <div className="flex-1">
                      <div className="font-medium flex items-center gap-2">
                        <ImageIcon className="h-4 w-4" />
                        Foto Verificada
                      </div>
                    </div>
                    <Check className="h-5 w-5 text-green-600" />
                  </div>

                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Checkbox
                      checked={modalChecklist.idVerified}
                      onChange={(checked) =>
                        setModalChecklist({
                          ...modalChecklist,
                          idVerified: checked.valueOf(),
                        })
                      }
                    />
                    <div className="flex-1">
                      <div className="font-medium flex items-center gap-2">
                        <IdCard className="h-4 w-4" />
                        Documento Verificado
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Checkbox
                      checked={modalChecklist.waiverSigned}
                      onChange={(checked) =>
                        setModalChecklist({
                          ...modalChecklist,
                          waiverSigned: checked.valueOf(),
                        })
                      }
                    />
                    <div className="flex-1">
                      <div className="font-medium flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Renuncia Firmada
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  onClick={handleCompleteCheckIn}
                  className="flex-1 gap-2 h-12 text-base"
                  size="lg"
                >
                  <Check className="h-5 w-5" />
                  Completar Check-In
                </Button>
                {selectedAthlete.competitorNumber && (
                  <Button
                    onClick={handlePrintSticker}
                    variant="outline"
                    className="gap-2 h-12"
                    size="lg"
                  >
                    <Printer className="h-5 w-5" />
                    Imprimir Sticker
                  </Button>
                )}
                <Button
                  onClick={handleMarkNoShow}
                  variant="destructive"
                  className="gap-2 h-12"
                  size="lg"
                >
                  <X className="h-5 w-5" />
                  Marcar Ausencia
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
