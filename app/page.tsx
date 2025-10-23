import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventCard } from "@/components/event-card"
import { InstagramFeed } from "@/components/instagram-feed"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { WhatsAppContact } from "@/components/whatsapp-contact"
import { DemoAccessSection } from "@/components/demo-access-section"
import { SponsorBanner } from "@/components/sponsor-banner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, ImageIcon, ArrowRight, Play, Tv } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  // Mock data for events
  const upcomingEvents = [
    {
      id: "1",
      title: "Campeonato Nacional IFBB Argentina 2025",
      date: "15 de Marzo, 2025",
      location: "Teatro Gran Rex",
      city: "Buenos Aires",
      image: "/bodybuilding-championship-stage-lights.jpg",
      status: "open" as const,
      participants: 156,
    },
    {
      id: "2",
      title: "Copa Provincial Córdoba",
      date: "22 de Marzo, 2025",
      location: "Centro de Convenciones",
      city: "Córdoba",
      image: "/fitness-competition-stage.jpg",
      status: "open" as const,
      participants: 89,
    },
    {
      id: "3",
      title: "Torneo Regional Mendoza",
      date: "5 de Abril, 2025",
      location: "Arena Maipú",
      city: "Mendoza",
      image: "/bodybuilding-competition-arena.jpg",
      status: "upcoming" as const,
      participants: 67,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-20 mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/bodybuilding-stage-spotlight-dramatic-lighting.jpg" alt="Hero background" className="w-full h-full object-cover object-[center_30%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/80 via-[#0B0B0F]/60 to-[#0B0B0F]" />
        </div>

        {/* Spotlight Gradient */}
        <div className="absolute inset-0 spotlight-gradient z-0" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#B78B1E]/20 text-[#B78B1E] border-[#B78B1E]/30 text-sm px-4 py-1.5">
              {"Plataforma Oficial IFBB Argentina"}
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span className="text-gradient-gold">{"Competí."}</span>{" "}
              <span className="text-foreground">{"Crecé."}</span>{" "}
              <span className="text-gradient-amethyst">{"Brillá."}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-balance">
              {"Inscribite en segundos, subí tu música y seguí tus resultados en vivo."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold text-lg px-8 h-14 w-full sm:w-auto"
                asChild
              >
                <Link href="/registro">
                  {"Inscribirme Ahora"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-8 h-14 w-full sm:w-auto bg-transparent"
                asChild
              >
                <Link href="/eventos">
                  {"Ver Eventos"}
                  <Calendar className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold text-gradient-gold mb-1">{"250+"}</div>
                <div className="text-sm text-muted-foreground">{"Atletas"}</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold text-gradient-gold mb-1">{"24"}</div>
                <div className="text-sm text-muted-foreground">{"Eventos/Año"}</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold text-gradient-gold mb-1">{"15"}</div>
                <div className="text-sm text-muted-foreground">{"Provincias"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#B78B1E] rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-[#B78B1E] rounded-full" />
          </div>
        </div>
      </section>

      {/* Sponsor Banner */}
      <SponsorBanner />

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-3">{"Próximos Eventos"}</h2>
              <p className="text-lg text-muted-foreground">
                {"No te pierdas las competencias más importantes del año"}
              </p>
            </div>
            <Button variant="ghost" className="text-[#B78B1E] hover:text-[#A67A1A]" asChild>
              <Link href="/eventos">
                {"Ver Todos"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#111827]/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{"Todo lo que necesitás en un solo lugar"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Una plataforma completa para atletas, jueces y organizadores"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="w-12 h-12 bg-[#B78B1E]/20 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-[#B78B1E]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{"Inscripción Rápida"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Registrate en minutos, subí tu música y pagá de forma segura."}
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-xl flex items-center justify-center mb-4">
                <Tv className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{"Transmisión en Vivo"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Seguí las competencias en tiempo real con streaming y puntajes actualizados."}
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="w-12 h-12 bg-[#22D3EE]/20 rounded-xl flex items-center justify-center mb-4">
                <ImageIcon className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{"Galería Profesional"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Accedé a fotos de alta calidad de todas las competencias."}
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{"Historial Completo"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Consultá tu trayectoria, certificados y estadísticas personales."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl glass-card p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B78B1E]/10 via-[#8B5CF6]/10 to-[#22D3EE]/10" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {"¿Listo para competir al más alto nivel?"}
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {"Unite a la comunidad de atletas más grande de Argentina y llevá tu carrera al siguiente nivel."}
              </p>
              <Button
                size="lg"
                className="bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold text-lg px-10 h-14"
                asChild
              >
                <Link href="/registro">
                  {"Crear Mi Cuenta"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Access Section */}
      <DemoAccessSection />

      {/* Instagram & Social Media Section */}
      <InstagramFeed />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* WhatsApp Floating Button */}
      <WhatsAppContact />

      <Footer />
    </div>
  )
}
