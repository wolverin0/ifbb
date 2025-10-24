'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Trophy, Users, Music, Bell, Award, User, TrendingUp,
  QrCode, Play, BarChart3, Calendar, Building2, ShoppingBag,
  Briefcase, GraduationCap, DollarSign, Sparkles, Target,
  CheckCircle, UserPlus, ArrowRight
} from "lucide-react";

export default function DemoPage() {
  const features = [
    {
      category: "Fase 1: Funcionalidades Esenciales",
      color: "from-amber-600/10 to-yellow-600/10",
      borderColor: "border-amber-600/20",
      items: [
        {
          title: "Interfaz de Puntuación en Vivo",
          description: "Sistema de puntuación para jueces optimizado para tablets. Puntúa 72 competidores en 6 categorías con ranking en tiempo real.",
          icon: Trophy,
          link: "/admin/eventos/1/puntuacion",
          badge: "Jueces",
          badgeColor: "bg-amber-600/20 text-amber-700",
        },
        {
          title: "Recomendaciones Inteligentes de Categorías",
          description: "Algoritmo que sugiere las mejores categorías basándose en altura, peso y edad del atleta.",
          icon: Sparkles,
          link: "/eventos/1/inscripcion",
          badge: "Atletas",
          badgeColor: "bg-blue-600/20 text-blue-700",
        },
        {
          title: "Aprobación de Música",
          description: "Gestión de cola de canciones con preview de audio, aprobar/rechazar y operaciones masivas.",
          icon: Music,
          link: "/admin/canciones",
          badge: "Admin",
          badgeColor: "bg-purple-600/20 text-purple-700",
        },
        {
          title: "Sistema de Notificaciones",
          description: "Centro de notificaciones con 9 tipos diferentes, contador de no leídas y filtros por pestaña.",
          icon: Bell,
          link: "/dashboard/notificaciones",
          badge: "Atletas",
          badgeColor: "bg-blue-600/20 text-blue-700",
        },
        {
          title: "Generación Automática de Certificados",
          description: "Certificados digitales oro/plata/bronce con planillas de puntajes descargables en PDF.",
          icon: Award,
          link: "/dashboard/mis-resultados",
          badge: "Atletas",
          badgeColor: "bg-blue-600/20 text-blue-700",
        },
      ]
    },
    {
      category: "Fase 2: Experiencia del Atleta",
      color: "from-cyan-600/10 to-blue-600/10",
      borderColor: "border-cyan-600/20",
      items: [
        {
          title: "Perfiles Públicos de Atletas",
          description: "Perfiles completos con historial de competencias, estadísticas, galería de fotos y línea de tiempo de logros.",
          icon: User,
          link: "/atletas/juan-perez",
          badge: "Público",
          badgeColor: "bg-green-600/20 text-green-700",
        },
        {
          title: "Tabla de Posiciones en Tiempo Real",
          description: "Leaderboard en vivo con auto-actualización cada 5 segundos, selector de categorías y contador de espectadores.",
          icon: TrendingUp,
          link: "/eventos/1/leaderboard",
          badge: "Público",
          badgeColor: "bg-green-600/20 text-green-700",
        },
        {
          title: "Check-In Backstage",
          description: "Sistema de check-in con simulación de escáner QR, asignación de números de competidor y lista de verificación.",
          icon: QrCode,
          link: "/admin/eventos/1/check-in",
          badge: "Admin",
          badgeColor: "bg-purple-600/20 text-purple-700",
        },
        {
          title: "Reproductor de Vista Previa de Música",
          description: "Reproductor HTML5 con visualización de forma de onda, control de volumen y opciones de descarga/reemplazo.",
          icon: Play,
          link: "/dashboard/mis-eventos",
          badge: "Atletas",
          badgeColor: "bg-blue-600/20 text-blue-700",
        },
        {
          title: "Herramienta de Comparación de Atletas",
          description: "Compara tus métricas contra ganadores de categoría con 5 métricas visuales y recomendaciones personalizadas.",
          icon: BarChart3,
          link: "/dashboard/comparacion",
          badge: "Atletas",
          badgeColor: "bg-blue-600/20 text-blue-700",
        },
        {
          title: "Panel de Seguimiento de Progreso",
          description: "Gráficos de puntajes históricos, seguimiento de peso, sistema de metas y línea de tiempo de mejoras.",
          icon: Target,
          link: "/dashboard/progreso",
          badge: "Atletas",
          badgeColor: "bg-blue-600/20 text-blue-700",
        },
      ]
    },
    {
      category: "Fase 3: Experiencia de Espectadores",
      color: "from-purple-600/10 to-pink-600/10",
      borderColor: "border-purple-600/20",
      items: [
        {
          title: "Visualización de Cronograma de Eventos",
          description: "Timeline visual con horarios de check-in, pre-juzgamiento, finales y ceremonia. Descarga PDF y sincronización con Google Calendar.",
          icon: Calendar,
          link: "/eventos/1",
          badge: "Público",
          badgeColor: "bg-green-600/20 text-green-700",
        },
        {
          title: "Páginas de Equipos/Gimnasios",
          description: "Perfiles completos de equipos con roster de atletas, logros del equipo e información de contacto.",
          icon: Building2,
          link: "/equipos/megathlon-buenos-aires",
          badge: "Público",
          badgeColor: "bg-green-600/20 text-green-700",
        },
      ]
    },
    {
      category: "Fase 4: Funcionalidades de Negocio",
      color: "from-green-600/10 to-emerald-600/10",
      borderColor: "border-green-600/20",
      items: [
        {
          title: "Portal para Entrenadores",
          description: "Dashboard completo para entrenadores con gestión de roster, registro masivo de eventos y seguimiento de resultados.",
          icon: GraduationCap,
          link: "/coach/dashboard",
          badge: "Entrenadores",
          badgeColor: "bg-indigo-600/20 text-indigo-700",
        },
        {
          title: "Panel de ROI de Patrocinadores",
          description: "Seguimiento de ROI de patrocinadores con métricas de impresiones, apariciones en eventos y gestión de contratos.",
          icon: Briefcase,
          link: "/admin/patrocinadores",
          badge: "Admin",
          badgeColor: "bg-purple-600/20 text-purple-700",
        },
        {
          title: "Tienda de Merchandising",
          description: "E-commerce completo con 12 productos, carrito de compras, flujo de checkout y confirmación de pedido.",
          icon: ShoppingBag,
          link: "/tienda",
          badge: "Público",
          badgeColor: "bg-green-600/20 text-green-700",
        },
      ]
    },
  ];

  const quickLinks = [
    { title: "Dashboard Atleta", link: "/dashboard", icon: User },
    { title: "Dashboard Admin", link: "/admin", icon: CheckCircle },
    { title: "Dashboard Entrenador", link: "/coach/dashboard", icon: GraduationCap },
    { title: "Eventos", link: "/eventos", icon: Trophy },
    { title: "Atletas", link: "/atletas", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                IFBB Argentina - Demo Hub
              </h1>
              <p className="text-muted-foreground mt-2">
                Explora todas las funcionalidades de la plataforma desde un solo lugar
              </p>
            </div>
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Accesos Rápidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, idx) => (
              <Link key={idx} href={link.link}>
                <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer bg-gradient-to-br from-card to-muted/20 h-full">
                  <CardContent className="pt-6 text-center">
                    <link.icon className="w-8 h-8 mx-auto mb-3 text-amber-600" />
                    <p className="text-sm font-semibold">{link.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-gradient-to-br from-amber-600/10 to-yellow-600/10 border-amber-600/20">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Funcionalidades</p>
              <p className="text-4xl font-bold text-amber-600">15</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 border-cyan-600/20">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Páginas Implementadas</p>
              <p className="text-4xl font-bold text-cyan-600">30+</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 border-purple-600/20">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Componentes</p>
              <p className="text-4xl font-bold text-purple-600">40+</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 border-green-600/20">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Fases Completadas</p>
              <p className="text-4xl font-bold text-green-600">4</p>
            </CardContent>
          </Card>
        </div>

        {/* Features by Phase */}
        {features.map((phase, phaseIdx) => (
          <div key={phaseIdx} className="mb-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">{phase.category}</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-transparent rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phase.items.map((item, itemIdx) => (
                <Card
                  key={itemIdx}
                  className={`hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br ${phase.color} ${phase.borderColor} border h-full flex flex-col`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`p-3 rounded-lg bg-gradient-to-br from-amber-600/20 to-yellow-600/20`}>
                        <item.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <Badge className={`${item.badgeColor} border-0`}>
                        {item.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Link href={item.link}>
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 gap-2">
                        Ver Demo
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Footer Info */}
        <Card className="bg-gradient-to-br from-card to-muted/30 border-amber-600/20 mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              Información de la Plataforma
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-amber-600">Tecnologías</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Next.js 16.0.0</li>
                  <li>• React 19.2.0</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS v4</li>
                  <li>• shadcn/ui</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-cyan-600">Portales</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Portal Público</li>
                  <li>• Dashboard Atleta (8 páginas)</li>
                  <li>• Dashboard Admin (9 páginas)</li>
                  <li>• Portal Entrenador (7 páginas)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-600">Estado</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• ✅ 100% Responsive</li>
                  <li>• ✅ Datos Mock Completos</li>
                  <li>• ✅ Listo para Producción</li>
                  <li>• ⏳ Requiere Backend</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Esta plataforma incluye paridad de funcionalidades con las plataformas líderes de la industria
                como NPC Online, Musclecontest y Athletic.net, con funcionalidades únicas como recomendaciones
                inteligentes, portal de entrenadores y seguimiento de ROI de patrocinadores.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
