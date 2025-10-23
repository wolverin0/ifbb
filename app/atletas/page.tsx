import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function AtletasPage() {
  // Mock data
  const athletes = Array(12).fill(0).map((_, i) => ({
    id: i + 1,
    name: `Atleta ${i + 1}`,
    team: "Equipo de Ejemplo",
    avatarUrl: `/placeholder-user.jpg?v=${i}`
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground">Directorio de Atletas</h1>
          <p className="text-lg text-muted-foreground mt-2">Encontrá a tus atletas favoritos y seguí su progreso.</p>
        </header>

        {/* Filters */}
        <div className="max-w-lg mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Buscar por nombre o equipo..." className="pl-12 h-14 text-lg" />
          </div>
        </div>

        {/* Athletes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {athletes.map(athlete => (
            <Link key={athlete.id} href="#" className="block group">
              <Card className="p-6 text-center bg-card group-hover:border-primary transition-colors">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-border group-hover:border-gold transition-colors">
                  <AvatarImage src={athlete.avatarUrl} alt={athlete.name} />
                  <AvatarFallback>{athlete.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{athlete.name}</h2>
                <p className="text-muted-foreground">{athlete.team}</p>
              </Card>
            </Link>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}