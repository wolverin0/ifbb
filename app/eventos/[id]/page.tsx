import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  DollarSign,
  Trophy,
  Info,
  FileText,
  ArrowRight,
  Share2,
  Heart,
} from "lucide-react"
import Link from "next/link"

// This would normally come from a database or API
function getEventData(id: string) {
  return {
    id,
    title: "Campeonato Nacional IFBB Argentina 2025",
    date: "15 de Marzo, 2025",
    time: "09:00 - 20:00",
    location: "Teatro Gran Rex",
    address: "Av. Corrientes 857, C1043 CABA",
    city: "Buenos Aires",
    image: "/bodybuilding-championship-stage-lights.jpg",
    status: "open" as const,
    participants: 156,
    maxParticipants: 300,
    registrationDeadline: "8 de Marzo, 2025",
    price: "$25,000",
    categories: [
      "Men's Physique",
      "Classic Physique",
      "Bodybuilding",
      "Women's Bikini",
      "Women's Wellness",
      "Women's Figure",
    ],
    description:
      "El evento más importante del año en Argentina. Competidores de todo el país se reunirán para demostrar su dedicación, disciplina y pasión por el fisicoculturismo. Este campeonato es clasificatorio para el Sudamericano IFBB 2025.",
    requirements: [
      "Ser mayor de 18 años",
      "Presentar certificado médico vigente",
      "Estar federado en IFBB Argentina",
      "Completar el formulario de inscripción",
      "Subir música en formato MP3 (máximo 90 segundos)",
    ],
    schedule: [
      { time: "09:00", activity: "Acreditación y pesaje" },
      { time: "10:00", activity: "Pre-judging - Categorías masculinas" },
      { time: "13:00", activity: "Almuerzo" },
      { time: "14:00", activity: "Pre-judging - Categorías femeninas" },
      { time: "17:00", activity: "Ceremonia de apertura" },
      { time: "18:00", activity: "Finals - Todas las categorías" },
      { time: "20:00", activity: "Premiación y cierre" },
    ],
    prizes: [
      { place: "1er Puesto", prize: "Trofeo + $100,000 + Clasificación Sudamericano" },
      { place: "2do Puesto", prize: "Trofeo + $50,000" },
      { place: "3er Puesto", prize: "Trofeo + $25,000" },
      { place: "Overall Winner", prize: "Trofeo + $150,000 + Viaje al Arnold Classic" },
    ],
  }
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = getEventData(params.id)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-end pb-12">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-[#22D3EE] text-[#0B0B0F] font-semibold">{"Inscripción Abierta"}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-lg">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5 text-[#B78B1E]" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-[#B78B1E]" />
                <span>{event.city}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-[#B78B1E]" />
                <span>{`${event.participants}/${event.maxParticipants} inscriptos`}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:text-[#B78B1E]">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-[#B78B1E]">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                className="flex-1 sm:flex-none border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F] bg-transparent"
                asChild
              >
                <Link href="#info">{"Más Info"}</Link>
              </Button>
              <Button
                className="flex-1 sm:flex-none bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold"
                asChild
              >
                <Link href={`/eventos/${event.id}/inscripcion`}>
                  {"Inscribirme Ahora"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="w-full justify-start mb-8 bg-card">
                  <TabsTrigger
                    value="info"
                    className="data-[state=active]:bg-[#B78B1E] data-[state=active]:text-[#0B0B0F]"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    {"Información"}
                  </TabsTrigger>
                  <TabsTrigger
                    value="schedule"
                    className="data-[state=active]:bg-[#B78B1E] data-[state=active]:text-[#0B0B0F]"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    {"Cronograma"}
                  </TabsTrigger>
                  <TabsTrigger
                    value="prizes"
                    className="data-[state=active]:bg-[#B78B1E] data-[state=active]:text-[#0B0B0F]"
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    {"Premios"}
                  </TabsTrigger>
                  <TabsTrigger
                    value="rules"
                    className="data-[state=active]:bg-[#B78B1E] data-[state=active]:text-[#0B0B0F]"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    {"Reglamento"}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="info" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">{"Sobre el Evento"}</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">{event.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{"Categorías Disponibles"}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {event.categories.map((category) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className="justify-center py-2 text-sm border-[#B78B1E]/30 hover:bg-[#B78B1E]/10"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{"Requisitos de Inscripción"}</h3>
                    <ul className="space-y-3">
                      {event.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#B78B1E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#B78B1E]" />
                          </div>
                          <span className="text-muted-foreground leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="schedule" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">{"Cronograma del Evento"}</h2>
                    <div className="space-y-4">
                      {event.schedule.map((item, index) => (
                        <div key={index} className="flex gap-4 glass-card p-4 rounded-xl">
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 rounded-xl bg-[#B78B1E]/20 flex items-center justify-center">
                              <span className="text-lg font-bold text-[#B78B1E]">{item.time}</span>
                            </div>
                          </div>
                          <div className="flex-1 flex items-center">
                            <p className="text-foreground font-medium text-lg">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="prizes" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">{"Premios y Reconocimientos"}</h2>
                    <div className="space-y-4">
                      {event.prizes.map((prize, index) => (
                        <div key={index} className="glass-card p-6 rounded-xl">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B78B1E] to-[#F59E0B] flex items-center justify-center flex-shrink-0">
                              <Trophy className="w-6 h-6 text-[#0B0B0F]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-foreground mb-2">{prize.place}</h3>
                              <p className="text-muted-foreground leading-relaxed">{prize.prize}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="rules" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">{"Reglamento Oficial"}</h2>
                    <div className="glass-card p-8 rounded-xl">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {
                          "Este evento se rige por el reglamento oficial de IFBB Argentina y las normativas internacionales de IFBB Pro League."
                        }
                      </p>
                      <Button
                        variant="outline"
                        className="border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F] bg-transparent"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        {"Descargar Reglamento Completo (PDF)"}
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-36 space-y-6">
                {/* Event Details Card */}
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-6">{"Detalles del Evento"}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#B78B1E] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">{"Fecha"}</p>
                        <p className="text-foreground font-medium">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#B78B1E] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">{"Horario"}</p>
                        <p className="text-foreground font-medium">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#B78B1E] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">{"Ubicación"}</p>
                        <p className="text-foreground font-medium">{event.location}</p>
                        <p className="text-sm text-muted-foreground">{event.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-[#B78B1E] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">{"Inscripción"}</p>
                        <p className="text-foreground font-medium">{event.price}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-[#B78B1E] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">{"Cupos"}</p>
                        <p className="text-foreground font-medium">{`${event.participants}/${event.maxParticipants}`}</p>
                        <div className="w-full bg-card rounded-full h-2 mt-2">
                          <div
                            className="bg-[#B78B1E] h-2 rounded-full"
                            style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registration Deadline */}
                <div className="glass-card p-6 rounded-2xl bg-[#B78B1E]/10 border-[#B78B1E]/30">
                  <div className="flex items-start gap-3 mb-4">
                    <Info className="w-5 h-5 text-[#B78B1E] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">{"Fecha límite de inscripción"}</p>
                      <p className="text-foreground font-bold text-lg">{event.registrationDeadline}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {"No te quedes afuera. Los cupos son limitados y se agotan rápido."}
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="w-full bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold h-14"
                  asChild
                >
                  <Link href={`/eventos/${event.id}/inscripcion`}>
                    {"Inscribirme Ahora"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                {/* Contact Info */}
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-foreground mb-4">{"¿Tenés dudas?"}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {"Contactanos para más información sobre el evento."}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F] bg-transparent"
                  >
                    {"Contactar Organizadores"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
