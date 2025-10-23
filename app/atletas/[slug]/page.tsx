import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Youtube,
  Download,
  Medal,
  Award,
  Target,
  Calendar,
  Users,
  TrendingUp,
  Trophy,
  Mail,
} from "lucide-react";
import { athletesDatabase } from "@/lib/athletes-database";

interface AthleteProfilePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return athletesDatabase.map((athlete) => ({
    slug: athlete.slug,
  }));
}

export async function generateMetadata(
  { params }: AthleteProfilePageProps
): Promise<Metadata> {
  const athlete = athletesDatabase.find((a) => a.slug === params.slug);

  if (!athlete) {
    return {
      title: "Atleta no encontrado",
      description: "El perfil del atleta que buscas no existe.",
    };
  }

  return {
    title: `${athlete.name} - IFBB Argentina`,
    description: athlete.bio.substring(0, 160),
    openGraph: {
      title: `${athlete.name} - Atleta IFBB Argentina`,
      description: athlete.bio.substring(0, 160),
      images: [
        {
          url: athlete.profileImage,
          width: 400,
          height: 500,
          alt: athlete.name,
        },
      ],
    },
  };
}

export default function AthleteProfilePage({ params }: AthleteProfilePageProps) {
  const athlete = athletesDatabase.find((a) => a.slug === params.slug);

  if (!athlete) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Profile Image */}
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="relative w-full max-w-xs mb-6">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-4 border-gold shadow-2xl">
                  <Image
                    src={athlete.profileImage}
                    alt={athlete.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {athlete.wins > 0 && (
                  <div className="absolute -top-4 -right-4 bg-gold text-black rounded-full p-3 shadow-lg border-4 border-background">
                    <Trophy className="w-6 h-6" />
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div className="flex gap-4 w-full justify-center mb-6">
                {athlete.socialLinks.instagram && (
                  <Link
                    href={athlete.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-full hover:border-gold hover:bg-gold/10 transition-all"
                  >
                    <Instagram className="w-5 h-5 text-gold" />
                  </Link>
                )}
                {athlete.socialLinks.youtube && (
                  <Link
                    href={athlete.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-full hover:border-gold hover:bg-gold/10 transition-all"
                  >
                    <Youtube className="w-5 h-5 text-gold" />
                  </Link>
                )}
              </div>
            </div>

            {/* Info Section */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h1 className="text-5xl font-bold text-foreground mb-2">
                  {athlete.name}
                </h1>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge variant="outline" className="border-gold text-gold text-base px-3 py-1">
                    {athlete.category}
                  </Badge>
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    {athlete.gym}
                  </Badge>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-1">Altura</p>
                  <p className="text-2xl font-bold text-gold">{athlete.stats.height}</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-1">Peso</p>
                  <p className="text-2xl font-bold text-gold">{athlete.stats.weight}</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-1">Edad</p>
                  <p className="text-2xl font-bold text-gold">{athlete.stats.age}</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-1">Años en competencia</p>
                  <p className="text-2xl font-bold text-gold">{athlete.stats.yearsCompeting}</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-1">Total de competencias</p>
                  <p className="text-2xl font-bold text-gold">{athlete.competitionHistory.length}</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-1">Mejores puestos</p>
                  <p className="text-2xl font-bold text-gold flex items-center gap-2">
                    <Medal className="w-5 h-5" />
                    {athlete.wins}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-foreground">Biografía</h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  {athlete.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="competitions" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="competitions">Competencias</TabsTrigger>
            <TabsTrigger value="records">Récords</TabsTrigger>
            <TabsTrigger value="gallery">Galería</TabsTrigger>
            <TabsTrigger value="timeline">Hitos</TabsTrigger>
          </TabsList>

          {/* Competition History Tab */}
          <TabsContent value="competitions">
            <Card className="p-6 border-border">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-gold" />
                Historial de Competencias
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                        Fecha
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                        Evento
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">
                        Categoría
                      </th>
                      <th className="text-center py-3 px-4 font-semibold text-muted-foreground">
                        Resultado
                      </th>
                      <th className="text-center py-3 px-4 font-semibold text-muted-foreground">
                        Puntaje
                      </th>
                      <th className="text-center py-3 px-4 font-semibold text-muted-foreground">
                        Certificado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {athlete.competitionHistory.map((comp, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-border/50 hover:bg-card/50 transition-colors"
                      >
                        <td className="py-4 px-4">
                          {new Date(comp.date).toLocaleDateString("es-AR")}
                        </td>
                        <td className="py-4 px-4 font-medium">{comp.event}</td>
                        <td className="py-4 px-4">{comp.categoryClass}</td>
                        <td className="py-4 px-4">
                          <div className="flex justify-center">
                            <MedalIcon placing={comp.placing} />
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center font-semibold">
                          {comp.score}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex justify-center">
                            {comp.placing <= 3 && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-gold text-gold hover:bg-gold/10"
                              >
                                <Download className="w-4 h-4 mr-2" />
                                Descargar
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Personal Records Tab */}
          <TabsContent value="records">
            <Card className="p-6 border-border">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-gold" />
                Récords Personales
              </h2>

              <div className="space-y-4">
                {athlete.personalRecords.length > 0 ? (
                  athlete.personalRecords.map((record, idx) => (
                    <div
                      key={idx}
                      className="bg-card border border-border rounded-lg p-5 flex items-center justify-between hover:border-gold/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold/20 border-2 border-gold">
                            {record.placing === 1 ? (
                              <Medal className="h-6 w-6 text-gold" />
                            ) : (
                              <Award className="h-6 w-6 text-gold" />
                            )}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">
                            {record.placing === 1 ? "1er Lugar" : record.placing === 2 ? "2do Lugar" : "3er Lugar"} - {record.categoryClass}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            Logrado {record.timesAchieved} veces
                          </p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gold">
                        {record.timesAchieved}x
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground py-8 text-center">
                    Sin récords personales registrados aún.
                  </p>
                )}
              </div>
            </Card>
          </TabsContent>

          {/* Photo Gallery Tab */}
          <TabsContent value="gallery">
            <Card className="p-6 border-border">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-gold" />
                Galería de Competencias
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {athlete.gallery.map((photo, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-gold transition-all"
                  >
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={photo.url}
                        alt={`Gallery $${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Watermark */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-center">
                          <p className="text-white text-sm font-semibold mb-3">
                            {photo.event}
                          </p>
                          <Button
                            size="sm"
                            className="bg-gold text-black hover:bg-gold/90"
                          >
                            Comprar
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t border-border">
                      <p className="text-sm text-muted-foreground">{photo.event}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(photo.date).toLocaleDateString("es-AR")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Achievements Timeline Tab */}
          <TabsContent value="timeline">
            <Card className="p-6 border-border">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-gold" />
                Línea de Tiempo de Logros
              </h2>

              <div className="space-y-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold to-gold/20" />

                {/* Timeline Items */}
                {athlete.timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-20">
                    <div className="absolute left-0 w-14 h-14 bg-gold/20 border-4 border-gold rounded-full flex items-center justify-center">
                      {item.type === "first_competition" ? (
                        <Target className="w-6 h-6 text-gold" />
                      ) : item.type === "first_win" ? (
                        <Medal className="w-6 h-6 text-gold" />
                      ) : (
                        <Trophy className="w-6 h-6 text-gold" />
                      )}
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4">
                      <p className="text-sm text-gold font-semibold">
                        {new Date(item.date).toLocaleDateString("es-AR")}
                      </p>
                      <h3 className="text-lg font-bold text-foreground mt-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/30 rounded-lg p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-2 text-foreground">
              ¿Quieres trabajar con {athlete.name}?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contacta directamente para colaboraciones, patrocinios o consultas
            </p>
            <Button className="bg-gold text-black hover:bg-gold/90">
              <Mail className="w-4 h-4 mr-2" />
              Enviar Mensaje
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function MedalIcon({ placing }: { placing: number }) {
  if (placing === 1) {
    return (
      <div className="flex items-center gap-1 bg-gold/20 text-gold px-3 py-1 rounded-full">
        <Medal className="w-4 h-4" />
        <span className="text-sm font-semibold">1er</span>
      </div>
    );
  } else if (placing === 2) {
    return (
      <div className="flex items-center gap-1 bg-slate-400/20 text-slate-400 px-3 py-1 rounded-full">
        <Medal className="w-4 h-4" />
        <span className="text-sm font-semibold">2do</span>
      </div>
    );
  } else if (placing === 3) {
    return (
      <div className="flex items-center gap-1 bg-orange-600/20 text-orange-500 px-3 py-1 rounded-full">
        <Medal className="w-4 h-4" />
        <span className="text-sm font-semibold">3er</span>
      </div>
    );
  } else {
    return (
      <Badge variant="outline" className="text-muted-foreground">
        {placing}to Lugar
      </Badge>
    );
  }
}
