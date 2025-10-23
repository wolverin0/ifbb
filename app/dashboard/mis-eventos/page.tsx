import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function MisEventosPage() {
  // Mock data
  const upcomingEvents = [
    {
      id: "1",
      title: "Campeonato Nacional 2025",
      date: "15 de Marzo, 2025",
      location: "Teatro Gran Rex, Buenos Aires",
      status: "Inscripto",
      statusVariant: "default"
    }
  ];

  const pastEvents = [
    {
      id: "2",
      title: "Copa Provincial Córdoba",
      date: "22 de Febrero, 2025",
      location: "Centro de Convenciones, Córdoba",
      status: "Finalizado",
      statusVariant: "secondary"
    },
    {
      id: "3",
      title: "Torneo de Verano",
      date: "10 de Enero, 2025",
      location: "Arena Mar del Plata",
      status: "Finalizado",
      statusVariant: "secondary"
    }
  ];

  const availableEvents = [
    {
      id: "4",
      title: "Torneo Regional Mendoza",
      date: "5 de Abril, 2025",
      location: "Arena Maipú, Mendoza",
      status: "Abierto",
      statusVariant: "default"
    },
    {
      id: "5",
      title: "Copa del Interior",
      date: "20 de Abril, 2025",
      location: "Polideportivo, Rosario",
      status: "Abierto",
      statusVariant: "default"
    }
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Mis Eventos</h1>
        <p className="text-muted-foreground">Gestioná tus inscripciones y consultá tu historial de competencias.</p>
      </header>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Próximos Eventos</h2>
          <Card className="bg-card">
            <CardContent className="p-6">
              {upcomingEvents.map(event => (
                <div key={event.title} className="flex flex-col md:flex-row items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-muted-foreground">{event.date} - {event.location}</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <Badge>{event.status}</Badge>
                    <Button variant="outline">Gestionar Inscripción</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Eventos Disponibles para Inscripción</h2>
          <Card className="bg-card">
            <CardContent className="p-6 space-y-4">
              {availableEvents.map(event => (
                <div key={event.title} className="flex flex-col md:flex-row items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date} - {event.location}</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <Badge variant={event.statusVariant as any}>{event.status}</Badge>
                    <Button asChild className="bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F]">
                      <Link href={`/eventos/${event.id}/inscripcion`}>Inscribirse</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Historial de Eventos</h2>
          <Card className="bg-card">
            <CardContent className="p-6 space-y-4">
              {pastEvents.map(event => (
                <div key={event.title} className="flex flex-col md:flex-row items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date} - {event.location}</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <Badge variant={event.statusVariant as any}>{event.status}</Badge>
                    <Button variant="secondary">Ver Resultados</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
