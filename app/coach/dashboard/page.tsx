'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Calendar, Clock, UserPlus, FileText, CreditCard, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CoachDashboardPage() {
  const [stats] = useState({
    totalAthletes: 8,
    competingThisMonth: 5,
    upcomingEvents: 3,
    pendingRegistrations: 2,
  });

  const upcomingEvents = [
    { id: 1, title: "Campeonato Nacional IFBB Argentina 2025", date: "15 de Marzo, 2025", athletes: 4 },
    { id: 2, title: "Copa Provincial Córdoba", date: "22 de Marzo, 2025", athletes: 2 },
    { id: 3, title: "Torneo Regional Mendoza", date: "5 de Abril, 2025", athletes: 3 },
  ];

  const activityFeed = [
    { id: 1, athlete: "María García", action: "se registró en Campeonato Nacional", time: "hace 2 horas" },
    { id: 2, athlete: "Carlos Rodríguez", action: "completó check-in", time: "hace 4 horas" },
    { id: 3, athlete: "Ana Martínez", action: "recibió puntaje: 92.5", time: "hace 1 día" },
    { id: 4, athlete: "Diego López", action: "envió música de posing", time: "hace 2 días" },
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Bienvenido, Carlos</h1>
        <p className="text-muted-foreground">Panel de gestión de entrenador - IFBB Argentina</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-card border-purple-200/50 dark:border-purple-900/50">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Total de Atletas</p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">{stats.totalAthletes}</p>
              </div>
              <Users className="w-8 h-8 text-purple-600/30" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-cyan-200/50 dark:border-cyan-900/50">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Compitiendo este mes</p>
                <p className="text-3xl font-bold text-cyan-600">{stats.competingThisMonth}</p>
              </div>
              <Trophy className="w-8 h-8 text-cyan-600/30" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-amber-200/50 dark:border-amber-900/50">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Próximos Eventos</p>
                <p className="text-3xl font-bold text-amber-600">{stats.upcomingEvents}</p>
              </div>
              <Calendar className="w-8 h-8 text-amber-600/30" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-red-200/50 dark:border-red-900/50">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Registros Pendientes</p>
                <p className="text-3xl font-bold text-red-600">{stats.pendingRegistrations}</p>
              </div>
              <Clock className="w-8 h-8 text-red-600/30" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-foreground">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 h-12">
            <Link href="/coach/registro-evento">
              <UserPlus className="w-5 h-5 mr-2" />
              Registrar Atleta en Evento
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 h-12">
            <Link href="/coach/atletas">
              <Users className="w-5 h-5 mr-2" />
              Ver Todos los Atletas
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 h-12">
            <Link href="/coach/registro-evento">
              <CreditCard className="w-5 h-5 mr-2" />
              Pago Grupal
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Próximos Eventos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-start justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">{event.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Users className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-muted-foreground">{event.athletes} atletas registrados</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="ml-4">{event.athletes}/{stats.totalAthletes}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityFeed.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-bold text-foreground">{activity.athlete}</span>
                        <span className="text-muted-foreground"> {activity.action}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-purple-600/10 to-cyan-600/10 border-purple-200/50 dark:border-purple-900/50">
            <CardHeader>
              <CardTitle>Información del Entrenador</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Nombre</p>
                  <p className="font-bold text-foreground">Carlos Trainer</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Certificación</p>
                  <Badge className="bg-purple-600/20 text-purple-700 dark:text-purple-300 border-0">IFBB Level 3</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-mono text-sm text-foreground">carlos@ifbb.ar</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Años de Experiencia</p>
                  <p className="font-bold text-foreground">8 años</p>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full mt-6">
                <Link href="/coach/perfil">
                  Ver Perfil Completo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Desempeño</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Tasa de Éxito</p>
                  <p className="text-2xl font-bold text-purple-600">87.5%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Atletas en Podio</p>
                  <p className="text-2xl font-bold text-cyan-600">12</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Puntaje Promedio</p>
                  <p className="text-2xl font-bold text-amber-600">88.2</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
