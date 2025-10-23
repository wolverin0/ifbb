import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AthleteCard } from "@/components/athlete-card"
import { MapPin, Users, Trophy, Instagram, Phone, Mail, Calendar } from "lucide-react"
import Link from "next/link"

const teamsData: Record<string, any> = {
  "megathlon-buenos-aires": {
    name: "Megathlon Buenos Aires",
    city: "Buenos Aires",
    location: "Av. Santa Fe 1234, C1425 CABA",
    phone: "+54 11 1234-5678",
    email: "info@megathlon.com.ar",
    instagram: "@megathlon_bsas",
    image: "/gym-megathlon.jpg",
    description: "Megathlon es uno de los gimnasios más importantes de Buenos Aires",
    founded: "2004",
    coachName: "Prof. Roberto García",
    stats: {
      totalAthletes: 15,
      totalWins: 12,
      totalCompetitions: 45,
      activeStreak: 3,
    },
    athletes: [
      { id: "1", slug: "juan-garcia", name: "Juan García", category: "Men's Physique", image: "/athlete-juan.jpg" },
      { id: "2", slug: "diego-fernandez", name: "Diego Fernández", category: "Classic Physique", image: "/athlete-diego.jpg" },
      { id: "3", slug: "valeria-torres", name: "Valeria Torres", category: "Bikini Fitness", image: "/athlete-valeria.jpg" },
    ],
    achievements: [
      { date: "15 de Marzo, 2024", title: "Campeonato Nacional 2024", description: "3 atletas en el Top 3" },
    ],
  },
  "star-nutrition-cordoba": {
    name: "Star Nutrition Team Córdoba",
    city: "Córdoba",
    location: "Av. Colón 567, X5000 Córdoba",
    phone: "+54 351 5555-1234",
    email: "info@starnutrition.com.ar",
    instagram: "@starnutrition_cba",
    image: "/gym-star-nutrition.jpg",
    description: "Star Nutrition es un equipo dedicado a la excelencia",
    founded: "2010",
    coachName: "Lic. María Sánchez",
    stats: {
      totalAthletes: 10,
      totalWins: 7,
      totalCompetitions: 28,
      activeStreak: 2,
    },
    athletes: [
      { id: "6", slug: "maria-rodriguez", name: "María Rodríguez", category: "Women's Bikini", image: "/athlete-maria.jpg" },
    ],
    achievements: [
      { date: "20 de Febrero, 2024", title: "Regional Córdoba 2024", description: "Primer lugar en Bikini" },
    ],
  },
  "gfitness-rosario": {
    name: "GFitness Rosario",
    city: "Rosario",
    location: "Entre Ríos 789, S2000 Rosario",
    phone: "+54 341 4444-5678",
    email: "info@gfitness.com.ar",
    instagram: "@gfitness_rosario",
    image: "/gym-gfitness.jpg",
    description: "GFitness Rosario es un gimnasio dinámico",
    founded: "2015",
    coachName: "Prof. Luis Martínez",
    stats: {
      totalAthletes: 8,
      totalWins: 5,
      totalCompetitions: 22,
      activeStreak: 1,
    },
    athletes: [
      { id: "9", slug: "carlos-lopez", name: "Carlos López", category: "Classic Physique", image: "/athlete-carlos.jpg" },
    ],
    achievements: [
      { date: "5 de Marzo, 2024", title: "Regional Rosario 2024", description: "Segundo lugar" },
    ],
  },
}

export default function TeamDetailPage({ params }: { params: { slug: string } }) {
  const team = teamsData[params.slug]

  if (!team) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Equipo no encontrado</h1>
          <Button asChild>
            <Link href="/equipos">Volver a Equipos</Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative h-96 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={team.image} alt={team.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-end pb-12">
          <div className="max-w-3xl w-full">
            <Badge className="mb-4 bg-[#B78B1E] text-[#0B0B0F]">Equipo/Gimnasio</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">{team.name}</h1>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-[#B78B1E]" />
                <span>{team.city}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-[#B78B1E]" />
                <span>{`${team.stats.totalAthletes} atletas`}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="w-full justify-start mb-8 bg-card">
                  <TabsTrigger value="info">Info</TabsTrigger>
                  <TabsTrigger value="roster">Atletas</TabsTrigger>
                  <TabsTrigger value="achievements">Logros</TabsTrigger>
                </TabsList>

                <TabsContent value="info" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Sobre el Equipo</h2>
                    <p className="text-muted-foreground">{team.description}</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="glass-card p-6 rounded-xl">
                      <div className="text-3xl font-bold text-[#B78B1E]">{team.stats.totalAthletes}</div>
                      <p className="text-sm text-muted-foreground">Atletas</p>
                    </div>
                    <div className="glass-card p-6 rounded-xl">
                      <div className="text-3xl font-bold text-[#B78B1E]">{team.stats.totalWins}</div>
                      <p className="text-sm text-muted-foreground">Victorias</p>
                    </div>
                    <div className="glass-card p-6 rounded-xl">
                      <div className="text-3xl font-bold text-[#B78B1E]">{team.stats.totalCompetitions}</div>
                      <p className="text-sm text-muted-foreground">Competiciones</p>
                    </div>
                    <div className="glass-card p-6 rounded-xl">
                      <div className="text-3xl font-bold text-[#B78B1E]">{team.stats.activeStreak}</div>
                      <p className="text-sm text-muted-foreground">Racha Activa</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="roster" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Atletas del Equipo</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {team.athletes.map((athlete: any) => (
                        <AthleteCard
                          key={athlete.id}
                          id={athlete.id}
                          slug={athlete.slug}
                          name={athlete.name}
                          category={athlete.category}
                          image={athlete.image}
                          teamSlug={params.slug}
                        />
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="achievements" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Logros</h2>
                    <div className="space-y-4">
                      {team.achievements.map((ach: any, i: number) => (
                        <div key={i} className="glass-card p-6 rounded-xl border-l-4 border-[#B78B1E]">
                          <h3 className="text-lg font-bold text-foreground mb-1">{ach.title}</h3>
                          <p className="text-muted-foreground">{ach.description}</p>
                          <p className="text-xs text-muted-foreground mt-3">{ach.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-36 space-y-6">
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-6">Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#B78B1E] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Dirección</p>
                        <p className="text-foreground font-medium">{team.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#B78B1E] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Teléfono</p>
                        <p className="text-foreground font-medium">{team.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#B78B1E] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-foreground font-medium text-sm">{team.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Instagram className="w-5 h-5 text-[#B78B1E] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Instagram</p>
                        <p className="text-foreground font-medium">{team.instagram}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold h-12">
                  Seguir Equipo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
