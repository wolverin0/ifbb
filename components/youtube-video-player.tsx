"use client"

import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"
import { useState } from "react"

interface YouTubeVideoPlayerProps {
  videoId: string
  title?: string
  showSampleBadge?: boolean
}

export function YouTubeVideoPlayer({
  videoId,
  title = "IFBB Argentina - Transmisión en Vivo",
  showSampleBadge = true,
}: YouTubeVideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative w-full">
      {/* Sample Badge */}
      {showSampleBadge && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-orange-500 text-white border-orange-600 flex items-center gap-2 px-3 py-1">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            {"EVENTO DE MUESTRA"}
          </Badge>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-20 rounded-xl">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-8 h-8 text-[#B78B1E] animate-spin" />
            <p className="text-sm text-muted-foreground">Cargando transmisión...</p>
          </div>
        </div>
      )}

      {/* Video Container */}
      <div className="w-full bg-black rounded-xl overflow-hidden shadow-2xl">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&fs=1&autoplay=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleIframeLoad}
          />
        </div>
      </div>

      {/* Video Info */}
      <div className="mt-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
            <p className="text-muted-foreground">
              {"Disfrutá la transmisión en vivo de nuestro evento de muestra con la mejor calidad de video y sonido."}
            </p>
          </div>
        </div>

        {/* Video Stats */}
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground border-t border-border pt-6">
          <div>
            <span className="text-foreground font-semibold">{"235"}</span>
            {" espectadores en vivo"}
          </div>
          <div>
            <span className="text-foreground font-semibold">{"HD"}</span>
            {" • Calidad automática"}
          </div>
          <div>
            <span className="text-foreground font-semibold">{"Evento de Muestra"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
