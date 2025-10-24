import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { YouTubeVideoPlayer } from "@/components/youtube-video-player";
import { EventInfoCard } from "@/components/event-info-card";

export default function ResultadosPage() {
  // Mock data
  const leaderboard = [
    { number: 104, name: "Juan Perez", scores: [9, 9, 8, 9, 9], total: 44, place: 1 },
    { number: 102, name: "Carlos Gomez", scores: [8, 9, 8, 8, 9], total: 42, place: 2 },
    { number: 115, name: "Luis Fernandez", scores: [8, 8, 8, 8, 8], total: 40, place: 3 },
    { number: 108, name: "Miguel Torres", scores: [7, 8, 7, 8, 8], total: 38, place: 4 },
    { number: 110, name: "Javier Rodriguez", scores: [7, 7, 8, 7, 8], total: 37, place: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <header className="text-center mb-12">
          <Badge className="mb-4 bg-red-500/20 text-red-500 border-red-500/30">EN VIVO</Badge>
          <h1 className="text-5xl font-bold text-foreground">Copa Provincial Córdoba</h1>
          <p className="text-lg text-muted-foreground mt-2">Actualmente en el escenario: <span className="font-bold text-gold">Men's Physique - Class A</span></p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <YouTubeVideoPlayer
              videoId="-qHfriGYCB4"
              title="Campeonato IFBB Argentina - Sample Stream"
              showSampleBadge={true}
            />
          </div>

          {/* Event Info Card */}
          <div>
            <EventInfoCard
              eventName="Copa Provincial Córdoba"
              date="22 de Marzo, 2025"
              time="18:30"
              location="Centro de Convenciones"
              city="Córdoba"
              categories={[
                "Men's Physique - Class A",
                "Bikini Fitness",
                "Classic Physique",
              ]}
              viewers="235 espectadores"
            />
          </div>
        </div>

        {/* Leaderboard */}
        <div className="mt-12">
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Tabla de Posiciones en Vivo</CardTitle>
              <Select defaultValue="mens-physique-a">
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mens-physique-a">Men's Physique - Class A</SelectItem>
                  <SelectItem value="bikini-fitness">Bikini Fitness - Talla Alta</SelectItem>
                  <SelectItem value="classic-physique">Classic Physique - Open</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              {/* Mobile Card Layout - visible on small screens only */}
              <div className="sm:hidden space-y-4">
                {leaderboard.map((row) => (
                  <Card key={row.number} className={`border-2 ${row.place <= 3 ? 'border-gold' : ''}`}>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="text-xs text-muted-foreground">Puesto</p>
                            <p className="font-bold text-3xl text-gold">{row.place}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">N° {row.number}</p>
                            <p className="font-bold text-xl">{row.name}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-5 gap-2 pt-3 border-t">
                          {row.scores.map((score, i) => (
                            <div key={i} className="text-center">
                              <p className="text-xs text-muted-foreground">J{i + 1}</p>
                              <p className="font-semibold text-lg">{score}</p>
                            </div>
                          ))}
                        </div>
                        <div className="pt-3 border-t text-center">
                          <p className="text-xs text-muted-foreground">Puntuación Total</p>
                          <p className="font-bold text-2xl text-primary">{row.total}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Desktop Table Layout - hidden on small screens */}
              <div className="hidden sm:block overflow-x-auto -mx-6 sm:mx-0">
                <div className="inline-block min-w-full align-middle px-6 sm:px-0">
                  <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Puesto</TableHead>
                    <TableHead className="w-[100px]">N°</TableHead>
                    <TableHead>Atleta</TableHead>
                    <TableHead className="text-center">Juez 1</TableHead>
                    <TableHead className="text-center">Juez 2</TableHead>
                    <TableHead className="text-center">Juez 3</TableHead>
                    <TableHead className="text-center">Juez 4</TableHead>
                    <TableHead className="text-center">Juez 5</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboard.map((row) => (
                    <TableRow key={row.number} className={row.place <= 3 ? "bg-card" : ""}>
                      <TableCell className="font-bold text-2xl text-gold">{row.place}</TableCell>
                      <TableCell className="font-medium text-lg">{row.number}</TableCell>
                      <TableCell className="font-bold">{row.name}</TableCell>
                      {row.scores.map((score, i) => (
                        <TableCell key={i} className="text-center">{score}</TableCell>
                      ))}
                      <TableCell className="text-right font-bold">{row.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}