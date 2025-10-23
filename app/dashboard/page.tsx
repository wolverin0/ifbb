import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Bienvenido, Juan</h1>
        <p className="text-muted-foreground">Aquí tenés un resumen de tu actividad reciente.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Event */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Próximo Evento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img src="/bodybuilding-championship-stage-lights.jpg" alt="Campeonato Nacional" className="w-full md:w-48 h-auto rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">Campeonato Nacional 2025</h3>
                  <p className="text-muted-foreground mb-4">15 de Marzo, 2025 - Teatro Gran Rex, Buenos Aires</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Pago de Inscripción:</span>
                      <Badge variant="secondary">Confirmado</Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Música de Posing:</span>
                      <Badge variant="secondary">Aprobada</Badge>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/dashboard/mis-eventos">
                      Gestionar Evento <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Results */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Resultados Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-bold">Copa Provincial Córdoba</p>
                    <p className="text-sm text-muted-foreground">Men's Physique - Class A</p>
                  </div>
                  <div className="text-right">
                     <p className="text-lg font-bold text-gradient-gold">1er Puesto</p>
                     <Link href="/dashboard/mis-resultados" className="text-sm text-muted-foreground hover:underline">Ver detalles</Link>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-bold">Torneo de Verano</p>
                    <p className="text-sm text-muted-foreground">Men's Physique - Open</p>
                  </div>
                  <div className="text-right">
                     <p className="text-lg font-bold text-foreground">3er Puesto</p>
                     <Link href="/dashboard/mis-resultados" className="text-sm text-muted-foreground hover:underline">Ver detalles</Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Notifications */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5"/>
                Notificaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Las fotos del Campeonato Nacional ya están disponibles.</span> Comprá tu paquete ahora. <span className="text-xs">- hace 2hs</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">Recordatorio:</span> El pesaje para la Copa de Córdoba es el Viernes a las 18:00hs. <span className="text-xs">- hace 1 día</span></p>
                </div>
                 <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-background mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">Tu música para el Campeonato Nacional fue aprobada. <span className="text-xs">- hace 3 días</span></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
