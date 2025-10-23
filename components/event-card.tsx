import Link from "next/link"
import { Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface EventCardProps {
  id: string
  title: string
  date: string
  location: string
  city: string
  image: string
  status: "open" | "upcoming" | "live" | "finished"
  participants?: number
}

export function EventCard({ id, title, date, location, city, image, status, participants }: EventCardProps) {
  const statusConfig = {
    open: { label: "Inscripción Abierta", color: "bg-[#22D3EE] text-[#0B0B0F]" },
    upcoming: { label: "Próximamente", color: "bg-[#8B5CF6] text-white" },
    live: { label: "En Vivo", color: "bg-[#EF4444] text-white animate-pulse" },
    finished: { label: "Finalizado", color: "bg-[#374151] text-white" },
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl glass-card hover-lift">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/50 to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={`${statusConfig[status].color} font-semibold`}>{statusConfig[status].label}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-[#B78B1E] transition-colors">
          {title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-[#B78B1E]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-[#B78B1E]" />
            <span>{`${location}, ${city}`}</span>
          </div>
          {participants && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-[#B78B1E]" />
              <span>{`${participants} inscriptos`}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="flex-1 border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F] bg-transparent"
            asChild
          >
            <Link href={`/eventos/${id}`}>{"Ver Detalles"}</Link>
          </Button>
          {status === "open" && (
            <Button className="flex-1 bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold" asChild>
              <Link href={`/eventos/${id}/inscripcion`}>{"Inscribirme"}</Link>
            </Button>
          )}
          {status === "live" && (
            <Button className="flex-1 bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold" asChild>
              <Link href={`/eventos/${id}/en-vivo`}>{"Ver en Vivo"}</Link>
            </Button>
          )}
          {status === "finished" && (
            <Button className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold" asChild>
              <Link href={`/eventos/${id}/resultados`}>{"Ver Resultados"}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
