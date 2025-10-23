import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import Link from "next/link";

export default function GaleriaPage() {
  // Mock data
  const galleries = [
    {
      id: "1",
      title: "Campeonato Nacional 2025",
      date: "15 de Marzo, 2025",
      imageCount: 348,
      images: [
        "/bodybuilding-championship-stage-lights.jpg",
        "/fitness-competition-stage.jpg",
        "/bodybuilding-competition-arena.jpg",
        "/bodybuilding-stage-spotlight-dramatic-lighting.jpg",
      ]
    },
    {
      id: "2",
      title: "Copa Provincial Córdoba",
      date: "22 de Febrero, 2025",
      imageCount: 212,
      images: [
        "/fitness-competition-stage.jpg",
        "/bodybuilding-stage-spotlight-dramatic-lighting.jpg",
        "/bodybuilding-championship-stage-lights.jpg",
        "/bodybuilding-competition-arena.jpg",
      ]
    },
    {
      id: "3",
      title: "Arnold Classic 2024",
      date: "15 de Diciembre, 2024",
      imageCount: 580,
      images: [
        "/bodybuilding-competition-arena.jpg",
        "/bodybuilding-championship-stage-lights.jpg",
        "/fitness-competition-stage.jpg",
        "/bodybuilding-stage-spotlight-dramatic-lighting.jpg",
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground">Galería de Eventos</h1>
          <p className="text-lg text-muted-foreground mt-2">Reviví los mejores momentos de cada competencia.</p>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <div className="flex-1 w-full relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Buscar por nombre de evento..." className="pl-10 h-12 w-full" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="h-12 w-full md:w-[180px]">
              <SelectValue placeholder="Ordenar por..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Más Recientes</SelectItem>
              <SelectItem value="oldest">Más Antiguos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Galleries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {galleries.map(gallery => (
            <Link key={gallery.id} href={`/galeria/${gallery.id}`} className="block group">
              <Card className="bg-card overflow-hidden group-hover:border-primary transition-colors">
                <div className="grid grid-cols-2 grid-rows-2 h-64">
                    <img src={gallery.images[0]} alt={gallery.title} className="w-full h-full object-cover col-span-1 row-span-2"/>
                    <img src={gallery.images[1]} alt={gallery.title} className="w-full h-full object-cover"/>
                    <img src={gallery.images[2]} alt={gallery.title} className="w-full h-full object-cover"/>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold group-hover:text-gold transition-colors">{gallery.title}</h2>
                  <p className="text-muted-foreground">{gallery.date} - {gallery.imageCount} fotos</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}