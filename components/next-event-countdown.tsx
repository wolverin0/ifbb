"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, Share2, Calendar } from "lucide-react"
import { useState, useEffect } from "react"

interface NextEventCountdownProps {
  eventName: string
  date: string
  time: string
  location: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function NextEventCountdown({
  eventName = "Campeonato Nacional IFBB Argentina 2025",
  date = "15 de Marzo, 2025",
  time = "18:00",
  location = "Teatro Gran Rex, Buenos Aires",
}: NextEventCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Parse date - using a fixed date for demo purposes
      const targetDate = new Date("2025-03-15T18:00:00").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="glass-card border-[#B78B1E]/30 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge className="mb-3 bg-[#B78B1E]/20 text-[#B78B1E] border-[#B78B1E]/30">
              {"PRÓXIMO EVENTO"}
            </Badge>
            <CardTitle className="text-2xl text-foreground">{eventName}</CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Countdown */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-gradient-to-b from-[#B78B1E]/10 to-[#B78B1E]/5 rounded-lg p-3 text-center border border-[#B78B1E]/20">
            <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{timeLeft.days}</div>
            <div className="text-xs text-muted-foreground mt-1">{"Días"}</div>
          </div>
          <div className="bg-gradient-to-b from-[#8B5CF6]/10 to-[#8B5CF6]/5 rounded-lg p-3 text-center border border-[#8B5CF6]/20">
            <div className="text-2xl md:text-3xl font-bold text-[#8B5CF6]">{timeLeft.hours}</div>
            <div className="text-xs text-muted-foreground mt-1">{"Horas"}</div>
          </div>
          <div className="bg-gradient-to-b from-[#22D3EE]/10 to-[#22D3EE]/5 rounded-lg p-3 text-center border border-[#22D3EE]/20">
            <div className="text-2xl md:text-3xl font-bold text-[#22D3EE]">{timeLeft.minutes}</div>
            <div className="text-xs text-muted-foreground mt-1">{"Minutos"}</div>
          </div>
          <div className="bg-gradient-to-b from-[#F59E0B]/10 to-[#F59E0B]/5 rounded-lg p-3 text-center border border-[#F59E0B]/20">
            <div className="text-2xl md:text-3xl font-bold text-[#F59E0B]">{timeLeft.seconds}</div>
            <div className="text-xs text-muted-foreground mt-1">{"Segundos"}</div>
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-3 pb-6 border-b border-border/30">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Calendar className="w-4 h-4 text-[#B78B1E]" />
            <div>
              <div className="text-xs text-muted-foreground">{"Fecha y Hora"}</div>
              <div className="font-semibold text-foreground text-sm">
                {date} a las {time}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 text-muted-foreground">
            <div className="w-4 h-4 text-[#B78B1E] mt-0.5">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{"Ubicación"}</div>
              <div className="font-semibold text-foreground text-sm">{location}</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 gap-3">
          <Button className="bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold w-full">
            <Bell className="w-4 h-4 mr-2" />
            {"Recordarme en Vivo"}
          </Button>
          <Button
            variant="outline"
            className="border-border hover:bg-background/50"
          >
            <Share2 className="w-4 h-4 mr-2" />
            {"Compartir Evento"}
          </Button>
        </div>

        {/* Info Text */}
        <p className="text-xs text-muted-foreground text-center">
          {"¡No te pierdas esta emocionante transmisión en vivo!"}
        </p>
      </CardContent>
    </Card>
  )
}
