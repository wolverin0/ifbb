'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Award, Edit } from "lucide-react";
import { useState } from "react";

export default function CoachProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Mi Perfil</h1>
            <p className="text-muted-foreground">Información del entrenador</p>
          </div>
          <Button onClick={() => setIsEditing(!isEditing)} className="bg-purple-600">
            <Edit className="w-4 h-4 mr-2" />
            Editar
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600" />
                Información Personal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Nombre</p>
                  <p className="text-lg font-bold">Carlos Trainer</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-mono">carlos@ifbb.ar</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p>+54 9 11 2345-6789</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600" />
                Información Profesional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Certificación</p>
                  <Badge className="bg-purple-600/20 text-purple-700 border-0">IFBB Level 3</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Gimnasio</p>
                  <p className="font-bold">Power Gym Buenos Aires</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experiencia</p>
                  <p className="font-bold">8 años</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-gradient-to-br from-purple-600/10 to-cyan-600/10">
            <CardHeader>
              <CardTitle>Estadísticas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Atletas</p>
                  <p className="text-2xl font-bold text-purple-600">8</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tasa Éxito</p>
                  <p className="text-2xl font-bold text-cyan-600">87.5%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Competiciones</p>
                  <p className="text-2xl font-bold text-amber-600">15</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
