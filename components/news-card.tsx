import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"
import { Share2, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface NewsCardProps {
  id: string
  title: string
  excerpt: string
  content: string
  date: Date
  category: "Campeonato" | "Atleta Destacado" | "Evento Internacional" | "Actualización" | "Anuncio"
  image: string
  author?: string
  featured?: boolean
}

export function NewsCard({ id, title, excerpt, content, date, category, image, author, featured = false }: NewsCardProps) {
  const categoryConfig = {
    "Campeonato": { label: "Campeonato", color: "bg-[#B78B1E] text-[#0B0B0F]" },
    "Atleta Destacado": { label: "Atleta", color: "bg-[#22D3EE] text-[#0B0B0F]" },
    "Evento Internacional": { label: "Internacional", color: "bg-[#8B5CF6] text-white" },
    "Actualización": { label: "Actualización", color: "bg-[#EC4899] text-white" },
    "Anuncio": { label: "Anuncio", color: "bg-[#10B981] text-white" },
  }

  const dateFormatted = new Date(date).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true, locale: es })

  if (featured) {
    return (
      <article className="col-span-full mb-12">
        <Link href={`/noticias/${id}`}>
          <div className="group relative overflow-hidden rounded-3xl glass-card hover-lift cursor-pointer">
            {/* Featured Image */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={image || "/placeholder.jpg"}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/30 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <Badge className={`${categoryConfig[category].color} font-bold text-sm px-4 py-2`}>
                  {categoryConfig[category].label}
                </Badge>
              </div>

              {/* Featured Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-gradient-to-r from-[#B78B1E] to-[#FBBF24] text-[#0B0B0F] px-4 py-2 rounded-full font-bold text-sm">
                  Destacada
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h1 className="text-4xl font-bold text-foreground mb-4 group-hover:text-[#B78B1E] transition-colors line-clamp-2">
                {title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6 line-clamp-3">
                {excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#B78B1E]/20">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-foreground">{author || "IFBB Argentina"}</p>
                    <p className="text-xs text-muted-foreground">{dateFormatted}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F] bg-transparent font-semibold"
                >
                  Leer Más
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className="group relative overflow-hidden rounded-2xl glass-card hover-lift transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <Link href={`/noticias/${id}`}>
        <div className="relative h-48 overflow-hidden cursor-pointer">
          <img
            src={image || "/placeholder.jpg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/60 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge className={`${categoryConfig[category].color} font-semibold text-xs`}>
              {categoryConfig[category].label}
            </Badge>
          </div>
        </div>
      </Link>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/noticias/${id}`} className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-[#B78B1E] transition-colors cursor-pointer">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {excerpt}
          </p>
        </Link>

        {/* Footer */}
        <div className="space-y-3 border-t border-[#B78B1E]/20 pt-3">
          {/* Date and Time */}
          <div className="flex justify-between items-center text-xs">
            <time className="text-muted-foreground font-medium">{dateFormatted}</time>
            <span className="text-[#B78B1E] font-semibold">{timeAgo}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 h-8 text-xs text-muted-foreground hover:text-[#B78B1E] hover:bg-[#B78B1E]/10"
            >
              <Heart className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Me gusta</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 h-8 text-xs text-muted-foreground hover:text-[#22D3EE] hover:bg-[#22D3EE]/10"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Comentar</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 h-8 text-xs text-muted-foreground hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/10"
            >
              <Share2 className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Compartir</span>
            </Button>
          </div>

          {/* Read More Button */}
          <Link href={`/noticias/${id}`} className="block w-full">
            <Button className="w-full bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-bold h-9 text-sm">
              Leer Más
            </Button>
          </Link>
        </div>
      </div>
    </article>
  )
}
