import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";

export default function AdminEventosPage() {
  // Mock data
  const events = [
    {
      name: "Campeonato Nacional 2025",
      date: "15/03/2025",
      status: "Inscripción Abierta",
      statusVariant: "default",
      registrations: 156,
      revenue: "$23,400.00"
    },
    {
      name: "Copa Provincial Córdoba",
      date: "22/02/2025",
      status: "Finalizado",
      statusVariant: "secondary",
      registrations: 89,
      revenue: "$13,350.00"
    },
    {
      name: "Torneo Regional Mendoza",
      date: "05/04/2025",
      status: "Próximo",
      statusVariant: "outline",
      registrations: 0,
      revenue: "$0.00"
    }
  ];

  return (
    <div>
      {/* Add left padding on mobile to avoid hamburger menu overlap */}
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pl-16 lg:pl-0">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-foreground">Gestionar Eventos</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Creá, editá y administrá todos los eventos de la federación.</p>
        </div>
        <Button className="self-start sm:self-auto">Crear Nuevo Evento</Button>
      </header>

      <Card className="bg-card">
        <CardContent>
          {/* Wrap table in scrollable container for mobile */}
          <div className="overflow-x-auto -mx-6 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-6 sm:px-0">
              <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre del Evento</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Inscriptos</TableHead>
                <TableHead>Ingresos</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.name}>
                  <TableCell className="font-medium">{event.name}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>
                    <Badge variant={event.statusVariant as any}>{event.status}</Badge>
                  </TableCell>
                  <TableCell>{event.registrations}</TableCell>
                  <TableCell>{event.revenue}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
