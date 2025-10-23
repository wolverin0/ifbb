import { Card, CardContent } from "@/components/ui/card";

export default function AdminPagosPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Gestionar Pagos</h1>
        <p className="text-muted-foreground">Consultá el historial de transacciones y gestioná reembolsos.</p>
      </header>
      <Card>
        <CardContent className="p-6">
          <p>Aquí se mostrará una tabla con todas las transacciones.</p>
        </CardContent>
      </Card>
    </div>
  );
}
