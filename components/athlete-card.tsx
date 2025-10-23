import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface AthleteCardProps {
  id: string
  slug: string
  name: string
  category: string
  image?: string
  teamSlug?: string
}

export function AthleteCard({ id, slug, name, category, image, teamSlug }: AthleteCardProps) {
  return (
    <Link href={`/atletas/${slug}`} className="group">
      <Card className="overflow-hidden hover:border-[#B78B1E] hover:shadow-lg transition-all h-full">
        <div className="relative h-64 bg-card overflow-hidden">
          <img
            src={image || "/placeholder-athlete.jpg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
            <Badge className="bg-[#B78B1E] text-[#0B0B0F] font-semibold">{category}</Badge>
          </div>
        </div>

        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-3">
            {teamSlug ? (
              <Link href={`/equipos/${teamSlug}`} className="hover:text-[#B78B1E]">
                Ver equipo
              </Link>
            ) : (
              "Atleta independiente"
            )}
          </p>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div>Competencias activas: 5</div>
            <div>Mejor ranking: Top 3</div>
          </div>
        </div>
      </Card>
    </Link>
  )
}