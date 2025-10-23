"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Eye,
  Share2,
  Maximize2,
  Minimize2,
  RefreshCw,
  Trophy,
  Music,
} from "lucide-react"
import Link from "next/link"

// Type definitions
type Status = "Puntuando" | "Completado" | "Siguiente"

interface Competitor {
  id: string
  number: number
  name: string
  photo: string
  score: number
  place: number
  status: Status
}

interface Category {
  id: string
  name: string
  competitors: Competitor[]
}

// Mock data generation
function generateMockCompetitors(count: number): Competitor[] {
  const names = [
    "Juan Rodríguez", "Carlos García", "Miguel López", "Fernando Martínez",
    "Diego Pérez", "Andrés Gómez", "Lucas Fernández", "Pablo Sánchez",
    "Ricardo Torres", "Sergio Díaz", "Roberto Ramírez", "Alfonso Moreno",
  ]

  const competitors: Competitor[] = names.slice(0, count).map((name, index) => ({
    id: `comp-${index}`,
    number: index + 1,
    name,
    photo: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
    score: 85 + Math.random() * 13,
    place: 0,
    status: index < 3 ? "Completado" : index < 5 ? "Puntuando" : "Siguiente",
  }))

  // Sort by score and assign places
  competitors.sort((a, b) => b.score - a.score)
  competitors.forEach((comp, index) => {
    comp.place = index + 1
  })

  return competitors
}

function generateMockCategories(): Category[] {
  return [
    {
      id: "mens-physique-a",
      name: "Men's Physique A",
      competitors: generateMockCompetitors(12),
    },
    {
      id: "mens-physique-b",
      name: "Men's Physique B",
      competitors: generateMockCompetitors(12),
    },
    {
      id: "classic-physique",
      name: "Classic Physique",
      competitors: generateMockCompetitors(12),
    },
    {
      id: "bikini",
      name: "Women's Bikini",
      competitors: generateMockCompetitors(12),
    },
    {
      id: "wellness",
      name: "Women's Wellness",
      competitors: generateMockCompetitors(12),
    },
    {
      id: "figure",
      name: "Women's Figure",
      competitors: generateMockCompetitors(12),
    },
  ]
}

// Leaderboard Row Component
function LeaderboardRow({ competitor, place }: { competitor: Competitor; place: number }) {
  const getPlaceBg = () => {
    if (place === 1) return "bg-gradient-to-r from-yellow-500/20 to-yellow-400/10"
    if (place === 2) return "bg-gradient-to-r from-gray-300/20 to-gray-200/10"
    if (place === 3) return "bg-gradient-to-r from-orange-700/20 to-orange-600/10"
    return "bg-card/50 hover:bg-card/80"
  }

  const getPlaceColor = () => {
    if (place === 1) return "text-yellow-400"
    if (place === 2) return "text-gray-300"
    if (place === 3) return "text-orange-400"
    return "text-foreground"
  }

  const getStatusColor = () => {
    if (competitor.status === "Completado") return "bg-green-500/20 text-green-400"
    if (competitor.status === "Puntuando") return "bg-blue-500/20 text-blue-400 animate-pulse"
    return "bg-amber-500/20 text-amber-400"
  }

  return (
    <div
      className={`grid grid-cols-12 gap-3 items-center p-4 rounded-xl transition-all duration-300 border border-border/50 ${getPlaceBg()}`}
    >
      {/* Place */}
      <div className={`col-span-1 text-center font-bold text-2xl ${getPlaceColor()}`}>
        {place === 1 && "🥇"}
        {place === 2 && "🥈"}
        {place === 3 && "🥉"}
        {place > 3 && <span>#{place}</span>}
      </div>

      {/* Number */}
      <div className="col-span-1 text-center">
        <span className="text-sm font-bold text-muted-foreground">#{competitor.number}</span>
      </div>

      {/* Photo */}
      <div className="col-span-2">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
          <img src={competitor.photo} alt={competitor.name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Name */}
      <div className="col-span-4">
        <p className="font-semibold text-foreground text-sm md:text-base truncate">{competitor.name}</p>
      </div>

      {/* Score */}
      <div className="col-span-2 text-right">
        <div className="font-bold text-xl md:text-2xl text-primary">{competitor.score.toFixed(1)}</div>
      </div>

      {/* Status */}
      <div className="col-span-2 text-right">
        <Badge className={`text-xs ${getStatusColor()}`}>{competitor.status}</Badge>
      </div>
    </div>
  )
}

// Event Info Card
function EventInfoCard() {
  return (
    <div className="glass-card p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Evento</p>
          <h2 className="text-2xl font-bold text-foreground">Campeonato Nacional IFBB 2025</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Fecha</p>
            <p className="font-semibold text-foreground">15 de Marzo, 2025</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Lugar</p>
            <p className="font-semibold text-foreground">Teatro Gran Rex</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Categoría en Vivo</p>
          <p className="font-semibold text-cyan-400">Men's Physique A</p>
        </div>
      </div>
    </div>
  )
}

// Live Indicator Badge
function LiveIndicator() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-red-400/10 border border-red-500/30">
      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
      <span className="text-sm font-bold text-red-400 animate-pulse">EN VIVO</span>
    </div>
  )
}

// Viewer Counter
function ViewerCounter() {
  const [viewers, setViewers] = useState(235)

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => prev + Math.floor(Math.random() * 10) - 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
      <Eye className="w-4 h-4 text-primary" />
      <span className="text-sm font-semibold">{Math.max(50, viewers)} personas viendo</span>
    </div>
  )
}

export default function LeaderboardPage({ params }: { params: { id: string } }) {
  const [selectedCategory, setSelectedCategory] = useState("mens-physique-a")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [refreshCount, setRefreshCount] = useState(0)

  // Initialize mock data
  useEffect(() => {
    setCategories(generateMockCategories())
  }, [])

  // Auto-refresh simulation - update random scores every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCategories((prevCategories) =>
        prevCategories.map((category) => ({
          ...category,
          competitors: category.competitors.map((comp, index) => {
            // Randomly update 2-3 competitors' scores
            if (Math.random() < 0.25) {
              const newScore = Math.max(85, Math.min(98, comp.score + (Math.random() * 2 - 1)))
              return {
                ...comp,
                score: newScore,
                status: "Puntuando" as Status,
              }
            }
            return comp
          }),
        }))
      )
      setRefreshCount((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Re-sort competitors after score changes
  const currentCategory = categories.find((c) => c.id === selectedCategory)
  const sortedCompetitors = currentCategory
    ? [...currentCategory.competitors].sort((a, b) => b.score - a.score).map((comp, index) => ({
        ...comp,
        place: index + 1,
      }))
    : []

  const handleShare = () => {
    const url = `${window.location.origin}/eventos/${params.id}/leaderboard`
    navigator.clipboard.writeText(url)
    alert("Enlace copiado al portapapeles!")
  }

  const handleFullscreen = () => {
    if (!isFullscreen) {
      const elem = document.documentElement
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 ${
        isFullscreen ? "overflow-hidden" : ""
      }`}
    >
      {!isFullscreen && <Navigation />}

      <section className={`${isFullscreen ? "p-8" : "pt-24"} pb-8`}>
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          {!isFullscreen && (
            <div className="mb-8 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <LiveIndicator />
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">Tabla en Vivo</h1>
                </div>
                <ViewerCounter />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => setRefreshCount((prev) => prev + 1)}
                >
                  <RefreshCw className={`w-4 h-4 ${refreshCount > 0 ? "animate-spin" : ""}`} />
                  Actualizar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4" />
                  Compartir
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 ml-auto"
                  onClick={handleFullscreen}
                >
                  <Maximize2 className="w-4 h-4" />
                  Pantalla Completa
                </Button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Leaderboard */}
            <div className="lg:col-span-3 space-y-6">
              {/* Event Info */}
              {!isFullscreen && <EventInfoCard />}

              {/* Category Selector */}
              <div className="flex items-center gap-4">
                <label className="text-sm font-semibold text-foreground">Categoría:</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-64 bg-card border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Leaderboard Table Header */}
              <div className="glass-card p-4 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-transparent">
                <div className="grid grid-cols-12 gap-3 items-center">
                  <div className="col-span-1 text-center text-xs font-bold text-cyan-400 uppercase">Puesto</div>
                  <div className="col-span-1 text-center text-xs font-bold text-cyan-400 uppercase">Num</div>
                  <div className="col-span-2 text-xs font-bold text-cyan-400 uppercase">Foto</div>
                  <div className="col-span-4 text-xs font-bold text-cyan-400 uppercase">Nombre</div>
                  <div className="col-span-2 text-right text-xs font-bold text-cyan-400 uppercase">Puntaje</div>
                  <div className="col-span-2 text-right text-xs font-bold text-cyan-400 uppercase">Estado</div>
                </div>
              </div>

              {/* Competitors List */}
              <div className="space-y-3">
                {sortedCompetitors.map((competitor) => (
                  <LeaderboardRow
                    key={competitor.id}
                    competitor={competitor}
                    place={competitor.place}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              {/* Top 3 Highlight */}
              <div className="glass-card p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-transparent">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  Top 3
                </h3>
                <div className="space-y-3">
                  {sortedCompetitors.slice(0, 3).map((comp, idx) => (
                    <div
                      key={comp.id}
                      className={`p-3 rounded-lg text-center ${
                        idx === 0
                          ? "bg-yellow-500/20 border border-yellow-500/30"
                          : idx === 1
                            ? "bg-gray-400/10 border border-gray-400/20"
                            : "bg-orange-600/20 border border-orange-600/30"
                      }`}
                    >
                      <p className="text-xs text-muted-foreground">{"Posición " + (idx + 1)}</p>
                      <p className="font-bold text-foreground">{comp.name}</p>
                      <p
                        className={`text-sm font-bold ${
                          idx === 0 ? "text-yellow-400" : idx === 1 ? "text-gray-300" : "text-orange-400"
                        }`}
                      >
                        {comp.score.toFixed(1)} pts
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="glass-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-foreground mb-4">Estados</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-muted-foreground">Puntuando</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-muted-foreground">Completado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="text-muted-foreground">Siguiente</span>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="glass-card p-6 rounded-2xl border border-border space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Última Actualización</p>
                  <p className="text-sm font-semibold text-foreground">Hace {refreshCount} segundos</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <Link href={`/eventos/${params.id}`}>Volver al Evento</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Mode Button for Exit */}
      {isFullscreen && (
        <button
          onClick={handleFullscreen}
          className="fixed top-4 right-4 p-2 rounded-lg bg-slate-900/80 border border-border hover:bg-slate-800 transition-colors z-50"
          title="Salir de pantalla completa"
        >
          <Minimize2 className="w-6 h-6 text-foreground" />
        </button>
      )}
    </div>
  )
}
