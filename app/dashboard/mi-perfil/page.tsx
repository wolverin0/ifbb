import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MiPerfilPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Mi Perfil</h1>
        <p className="text-muted-foreground">Actualizá tu información personal y de atleta.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="bg-card text-center p-6">
            <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-gold">
              <AvatarImage src="/placeholder-user.jpg" alt="Juan Perez" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">Juan Perez</h2>
            <p className="text-muted-foreground">IFBB Pro Athlete</p>
            <Button variant="outline" className="mt-4">Cambiar Foto</Button>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Información Personal</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" defaultValue="Juan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" defaultValue="Perez" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="juan.perez@email.com" disabled />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="dob">Fecha de Nacimiento</Label>
                  <Input id="dob" type="date" defaultValue="1990-05-15" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="height">Altura (cm)</Label>
                    <Input id="height" type="number" defaultValue="175" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Peso (kg)</Label>
                    <Input id="weight" type="number" defaultValue="82.5" step="0.1" />
                  </div>
                </div>
                <div className="text-right">
                  <Button type="submit">Guardar Cambios</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
