import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { YouTubeVideoPlayer } from "@/components/youtube-video-player"
import { EventInfoCard } from "@/components/event-info-card"
import { LivestreamChat } from "@/components/livestream-chat"
import { NextEventCountdown } from "@/components/next-event-countdown"
import { RelatedVideos } from "@/components/related-videos"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Transmisión en Vivo - IFBB Argentina",
  description: "Seguí las competencias de bodybuilding y fitness en vivo con streaming de alta calidad",
}

export default function LivestreamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <section className="mb-12 pt-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-[#B78B1E]/20 text-[#B78B1E] border-[#B78B1E]/30">
              {"Transmisión Oficial IFBB Argentina"}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              {"Transmisión en Vivo"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {"Seguí las competencias en directo con streaming en alta definición"}
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Video Player - Left Side (2 columns) */}
          <div className="lg:col-span-2">
            <YouTubeVideoPlayer
              videoId="-qHfriGYCB4"
              title="Campeonato IFBB Argentina - Evento de Muestra"
              showSampleBadge={true}
            />
          </div>

          {/* Event Info Card - Right Side */}
          <div>
            <EventInfoCard
              eventName="Copa Provincial Córdoba"
              date="22 de Marzo, 2025"
              time="18:30"
              location="Centro de Convenciones"
              city="Córdoba"
              categories={[
                "Men's Physique",
                "Bikini Fitness",
                "Classic Physique",
              ]}
              viewers="235 espectadores"
            />
          </div>
        </section>

        {/* Chat and Additional Info Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Left: Chat (can span 2 columns on larger screens) */}
          <div className="lg:col-span-2">
            <LivestreamChat />
          </div>

          {/* Right: Next Event Countdown */}
          <div className="lg:col-span-2">
            <NextEventCountdown
              eventName="Campeonato Nacional IFBB Argentina 2025"
              date="15 de Marzo, 2025"
              time="18:00"
              location="Teatro Gran Rex, Buenos Aires"
            />
          </div>
        </section>

        {/* Related Videos Section */}
        <section className="mb-16 pb-8">
          <RelatedVideos />
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-3xl glass-card p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B78B1E]/10 via-[#8B5CF6]/10 to-[#22D3EE]/10" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {"¿Querés competir con nosotros?"}
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {"Inscribite en el próximo evento y sé parte de la competencia más emocionante del año."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold text-lg px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                  {"Inscribirme Ahora"}
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 font-semibold text-lg px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                  {"Ver Más Eventos"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
