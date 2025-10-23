import { Card, CardContent } from "@/components/ui/card";

export default function AdminReportesPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Reportes y Estadísticas</h1>
        <p className="text-muted-foreground">Visualizá el crecimiento y la actividad de la plataforma.</p>
      </header>
      <Card>
        <CardContent className="p-6">
          <p>Aquí se mostrarán gráficos y reportes customizables.</p>
        </CardContent>
      </Card>
    </div>
  );
}
