"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, LayoutGrid, List } from "lucide-react"
import { useState } from "react"

export default function EventosPage() {
  const [view, setView] = useState('grid');
  // Mock data for events
  const allEvents = [
    {
      id: "1",
      title: "Campeonato Nacional IFBB Argentina 2025",
      date: "15 de Marzo, 2025",
      location: "Teatro Gran Rex",
      city: "Buenos Aires",
      image: "/bodybuilding-championship-stage-lights.jpg",
      status: "open" as const,
      participants: 156,
      category: "Nacional",
    },
    {
      id: "2",
      title: "Copa Provincial Córdoba",
      date: "22 de Marzo, 2025",
      location: "Centro de Convenciones",
      city: "Córdoba",
      image: "/fitness-competition-stage.jpg",
      status: "open" as const,
      participants: 89,
      category: "Provincial",
    },
    {
      id: "3",
      title: "Torneo Regional Mendoza",
      date: "5 de Abril, 2025",
      location: "Arena Maipú",
      city: "Mendoza",
      image: "/bodybuilding-competition-arena.jpg",
      status: "upcoming" as const,
      participants: 67,
      category: "Regional",
    },
    {
      id: "4",
      title: "Campeonato Sudamericano IFBB",
      date: "20 de Abril, 2025",
      location: "Estadio Luna Park",
      city: "Buenos Aires",
      image: "/bodybuilding-championship-stage-lights.jpg",
      status: "upcoming" as const,
      participants: 234,
      category: "Internacional",
    },
    {
      id: "5",
      title: "Copa Santa Fe Fitness",
      date: "10 de Mayo, 2025",
      location: "Centro Cultural Provincial",
      city: "Santa Fe",
      image: "/fitness-competition-stage.jpg",
      status: "upcoming" as const,
      participants: 45,
      category: "Provincial",
    },
    {
      id: "6",
      title: "Arnold Classic Argentina 2024",
      date: "15 de Diciembre, 2024",
      location: "Centro Costa Salguero",
      city: "Buenos Aires",
      image: "/bodybuilding-championship-stage-lights.jpg",
      status: "finished" as const,
      participants: 312,
      category: "Internacional",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 spotlight-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {"Eventos y Competencias"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {
                "Descubrí todas las competencias de IFBB Argentina. Inscribite, seguí los resultados en vivo y accedé a las galerías."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 border-y border-border sticky top-20 z-40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Buscar eventos..."
                className="pl-10 bg-card border-border h-12 w-full"
              />
            </div>
            <div className="flex gap-2 items-center">
              <Select defaultValue="all">
                <SelectTrigger className="h-12 w-[180px]">
                  <SelectValue placeholder="Filtrar por estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los estados</SelectItem>
                  <SelectItem value="open">Inscripción Abierta</SelectItem>
                  <SelectItem value="upcoming">Próximamente</SelectItem>
                  <SelectItem value="finished">Finalizados</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="h-12 w-[180px]">
                  <SelectValue placeholder="Filtrar por categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  <SelectItem value="Nacional">Nacional</SelectItem>
                  <SelectItem value="Internacional">Internacional</SelectItem>
                  <SelectItem value="Provincial">Provincial</SelectItem>
                  <SelectItem value="Regional">Regional</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center rounded-md bg-card p-1">
                  <Button variant={view === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setView('grid')}>
                    <LayoutGrid className="w-5 h-5" />
                  </Button>
                  <Button variant={view === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setView('list')}>
                    <List className="w-5 h-5" />
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid / List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {view === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {allEvents.map(event => (
                  <div key={event.id} className="flex items-center gap-6 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                      <img src={event.image} alt={event.title} className="w-32 h-20 object-cover rounded-md hidden sm:block"/>
                      <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                          <h3 className="text-lg font-bold hover:underline"><Link href={`/eventos/${event.id}`}>{event.title}</Link></h3>
                          <p className="text-sm text-muted-foreground">{event.city}</p>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="text-center hidden md:block">
                            <p className="font-bold text-lg">{event.participants}</p>
                            <p className="text-sm text-muted-foreground">Inscriptos</p>
                          </div>
                          <Button asChild>
                            <Link href={`/eventos/${event.id}`}>Ver Evento</Link>
                          </Button>
                      </div>
                  </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
