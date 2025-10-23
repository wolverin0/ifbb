"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Share2 } from "lucide-react"

interface EventInfoCardProps {
  eventName: string
  date: string
  time: string
  location: string
  city: string
  categories: string[]
  viewers: string
}

export function EventInfoCard({
  eventName,
  date,
  time,
  location,
  city,
  categories,
  viewers,
}: EventInfoCardProps) {
  return (
    <Card className="glass-card border-border/50 overflow-hidden hover-lift">
      <CardHeader className="pb-4 border-b border-border/30">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-xl md:text-2xl text-foreground mb-2">{eventName}</CardTitle>
            <Badge className="bg-red-500/20 text-red-500 border-red-500/30">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
              {"EN VIVO"}
            </Badge>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Users className="w-4 h-4" />
              <span>{viewers}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        {/* Event Details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Calendar className="w-5 h-5 text-[#B78B1E]" />
            <div>
              <div className="text-sm text-muted-foreground">{"Fecha y Hora"}</div>
              <div className="font-semibold text-foreground">
                {date} a las {time}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-[#B78B1E]" />
            <div>
              <div className="text-sm text-muted-foreground">{"Ubicación"}</div>
              <div className="font-semibold text-foreground">
                {location}, {city}
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6 pb-6 border-b border-border/30">
          <h4 className="text-sm font-semibold text-foreground mb-3">{"Categorías en Transmisión"}</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground mb-3">{"Compartir Transmisión"}</h4>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-background/50 hover:bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366]"
              asChild
            >
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                {"WhatsApp"}
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-background/50 hover:bg-[#1877F2]/10 border-[#1877F2]/30 text-[#1877F2]"
              asChild
            >
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                {"Facebook"}
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-background/50 hover:bg-[#1DA1F2]/10 border-[#1DA1F2]/30 text-[#1DA1F2]"
              asChild
            >
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                {"Twitter"}
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
