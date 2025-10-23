"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Eye } from "lucide-react"
import Link from "next/link"

interface Video {
  id: string
  title: string
  thumbnail: string
  date: string
  views: string
  duration: string
}

interface RelatedVideosProps {
  videos?: Video[]
}

const defaultVideos: Video[] = [
  {
    id: "1",
    title: "Campeonato Provincial Córdoba - Finales",
    thumbnail: "/bodybuilding-competition-arena.jpg",
    date: "Hace 2 semanas",
    views: "1.2K",
    duration: "3:45:20",
  },
  {
    id: "2",
    title: "Clasico de Mendoza - Men's Physique",
    thumbnail: "/fitness-competition-stage.jpg",
    date: "Hace 1 mes",
    views: "856",
    duration: "2:30:15",
  },
  {
    id: "3",
    title: "Torneo Nacional - Bikini Fitness",
    thumbnail: "/bodybuilding-championship-stage-lights.jpg",
    date: "Hace 1 mes",
    views: "2.1K",
    duration: "4:12:45",
  },
]

export function RelatedVideos({ videos = defaultVideos }: RelatedVideosProps) {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{"Transmisiones Anteriores"}</h2>
        <p className="text-muted-foreground">
          {"Revé las mejores competencias del pasado"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="glass-card border-border/50 overflow-hidden group hover-lift cursor-pointer"
          >
            <CardContent className="p-0">
              {/* Thumbnail */}
              <div className="relative w-full aspect-video overflow-hidden bg-background">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full bg-[#B78B1E]/20 hover:bg-[#B78B1E]/30 border-[#B78B1E]/50 text-[#B78B1E] rounded-none"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {"Ver Grabación"}
                  </Button>
                </div>

                {/* Duration Badge */}
                <Badge className="absolute bottom-2 right-2 bg-background/90 text-foreground text-xs">
                  {video.duration}
                </Badge>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight group-hover:text-[#B78B1E] transition-colors">
                  {video.title}
                </h3>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{video.views} visualizaciones</span>
                  </div>
                  <span>{video.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
