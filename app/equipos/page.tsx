import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Trophy, ArrowRight, Search } from "lucide-react"
import Link from "next/link"

const teamsData = [
  {
    id: "1",
    slug: "megathlon-buenos-aires",
    name: "Megathlon Buenos Aires",
    city: "Buenos Aires",
    athletes: 15,
    wins: 12,
    image: "/gym-megathlon.jpg",
    description: "One of the most prestigious gyms in Buenos Aires with top athletes.",
    topAthlete: "Juan García",
  },
  {
    id: "2",
    slug: "star-nutrition-cordoba",
    name: "Star Nutrition Team Córdoba",
    city: "Córdoba",
    athletes: 10,
    wins: 7,
    image: "/gym-star-nutrition.jpg",
    description: "Dedicated team from Córdoba focused on nutrition and training excellence.",
    topAthlete: "María Rodríguez",
  },
  {
    id: "3",
    slug: "gfitness-rosario",
    name: "GFitness Rosario",
    city: "Rosario",
    athletes: 8,
    wins: 5,
    image: "/gym-gfitness.jpg",
    description: "Dynamic gym in Rosario with emerging talent and strong community support.",
    topAthlete: "Carlos López",
  },
]

export default function EquiposPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-20 pb-12">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-[#B78B1E]/20 text-[#B78B1E] border-[#B78B1E]/30">
            Comunidad IFBB Argentina
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Equipos y Gimnasios
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Descubrí los mejores equipos y gimnasios de Argentina.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamsData.map((team) => (
              <Link key={team.id} href={`/equipos/${team.slug}`} className="group">
                <Card className="overflow-hidden hover:border-[#B78B1E] hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="relative h-48 bg-card overflow-hidden">
                    <img
                      src={team.image || "/placeholder.svg"}
                      alt={team.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{team.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-200">
                        <MapPin className="w-4 h-4" />
                        {team.city}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{team.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="glass-card p-3 rounded-lg border border-border/50">
                        <div className="text-lg font-bold text-[#B78B1E]">{team.athletes}</div>
                        <div className="text-xs text-muted-foreground">Atletas</div>
                      </div>
                      <div className="glass-card p-3 rounded-lg border border-border/50">
                        <div className="text-lg font-bold text-[#B78B1E]">{team.wins}</div>
                        <div className="text-xs text-muted-foreground">Victorias</div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold mt-auto"
                    >
                      Ver Equipo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
