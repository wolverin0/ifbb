import { Card, CardContent } from "@/components/ui/card";

export default function AdminAtletasPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Gestionar Atletas</h1>
        <p className="text-muted-foreground">Buscá, editá y administrá los perfiles de los atletas.</p>
      </header>
      <Card>
        <CardContent className="p-6">
          <p>Aquí se mostrará una tabla con todos los atletas registrados.</p>
        </CardContent>
      </Card>
    </div>
  );
}
