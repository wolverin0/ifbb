'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, BarChart3 } from "lucide-react";
import { useState } from "react";

export default function CoachResultsPage() {
  const [results] = useState([
    { id: "1", event: "Copa Provincial Córdoba", athlete: "María García", placing: 1, score: 94.5 },
    { id: "2", event: "Torneo de Verano", athlete: "Ana Martínez", placing: 1, score: 91.8 },
    { id: "3", event: "Competencia de Invierno", athlete: "Lucas Pérez", placing: 1, score: 92.1 },
  ]);

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Resultados</h1>
        <p className="text-muted-foreground">Desempeño de tus atletas</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-card">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-2">Puntaje Promedio</p>
            <p className="text-3xl font-bold text-purple-600">89.7</p>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-2">Competiciones</p>
            <p className="text-3xl font-bold text-amber-600">5</p>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-2">Podios</p>
            <p className="text-3xl font-bold text-cyan-600">6</p>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-2">Primeros</p>
            <p className="text-3xl font-bold text-green-600">3</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-purple-600" />
            Resultados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {results.map(r => (
              <div key={r.id} className="p-3 rounded-lg bg-muted/30 flex justify-between">
                <div>
                  <p className="font-bold">{r.athlete}</p>
                  <p className="text-sm text-muted-foreground">{r.event}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{r.placing}º lugar</p>
                  <p className="text-purple-600">{r.score} pts</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
