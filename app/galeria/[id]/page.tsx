import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";

export default function GaleriaDetailPage({ params }: { params: { id: string } }) {
  // Mock data
  const gallery = {
    id: params.id,
    title: "Campeonato Nacional 2025",
    images: Array(24).fill(0).map((_, i) => ({
      id: i + 1,
      url: `/bodybuilding-stage-spotlight-dramatic-lighting.jpg?v=${i}`,
      competitor: `Atleta #${Math.floor(Math.random() * 50) + 100}`
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-foreground">{gallery.title}</h1>
          <p className="text-lg text-muted-foreground mt-2">{gallery.images.length} fotos</p>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <div className="flex-1 w-full relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Buscar por número de atleta..." className="pl-10 h-12 w-full" />
          </div>
          <Button className="h-12 w-full md:w-auto">Buscar</Button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.images.map(image => (
            <div key={image.id} className="group relative aspect-square overflow-hidden rounded-lg">
              <img src={image.url} alt={image.competitor} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <p className="text-white font-bold">{image.competitor}</p>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-white hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  Comprar
                </Button>
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
