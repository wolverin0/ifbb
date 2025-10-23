'use client'

import Link from "next/link"
import { UserCircle, Shield, Check, ArrowRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DemoAccessSection() {
  const features = {
    athlete: [
      "Inscripción a eventos",
      "Gestión de fotos",
      "Historial de resultados",
      "Dashboard personalizado"
    ],
    admin: [
      "Gestión de eventos",
      "Control de inscripciones",
      "Sistema de puntuación",
      "Reportes y estadísticas"
    ]
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#111827] via-[#0B0B0F] to-[#0B0B0F]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {"Explorá la Plataforma"}
          </h2>
          <p className="text-xl text-muted-foreground mb-3">
            {"Accedé al modo demo y descubrí todas las funcionalidades"}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"Conocé cómo atletas, jueces y administradores utilizan nuestra plataforma. Sin necesidad de registro."}
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Athlete Demo Card */}
          <div className="group relative overflow-hidden rounded-2xl glass-card p-8 hover-lift hover:border-[#B78B1E]/50 transition-all duration-300">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B78B1E]/5 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B78B1E] to-[#A67A1A] rounded-xl flex items-center justify-center">
                  <UserCircle className="w-8 h-8 text-[#0B0B0F]" />
                </div>
              </div>

              {/* Badge */}
              <div className="mb-4">
                <Badge className="bg-[#B78B1E] text-[#0B0B0F] font-bold animate-pulse">
                  {"DEMO"}
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {"Portal del Atleta"}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {"Explora el dashboard de competidores, inscripción a eventos, gestión de fotos y resultados."}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {features.athlete.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#B78B1E] flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Demo Credentials */}
              <div className="bg-[#1F2937]/50 rounded-lg p-4 mb-6 border border-[#374151]">
                <p className="text-sm text-muted-foreground mb-2">{"Credenciales de demo:"}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{"Usuario:"}</span>
                    <code className="text-[#B78B1E] font-mono">{"demo@atleta.com"}</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{"Contraseña:"}</span>
                    <code className="text-[#B78B1E] font-mono">{"demo123"}</code>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Button
                size="lg"
                className="w-full bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold text-lg h-12"
                asChild
              >
                <Link href="/dashboard?demo=true">
                  {"Acceder como Atleta"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Admin Demo Card */}
          <div className="group relative overflow-hidden rounded-2xl glass-card p-8 hover-lift hover:border-[#8B5CF6]/50 transition-all duration-300">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Badge */}
              <div className="mb-4">
                <Badge className="bg-[#8B5CF6] text-white font-bold animate-pulse">
                  {"DEMO"}
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {"Panel de Administración"}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {"Descubre las herramientas de gestión para organizadores, jueces y staff de eventos."}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {features.admin.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Demo Credentials */}
              <div className="bg-[#1F2937]/50 rounded-lg p-4 mb-6 border border-[#374151]">
                <p className="text-sm text-muted-foreground mb-2">{"Credenciales de demo:"}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{"Usuario:"}</span>
                    <code className="text-[#8B5CF6] font-mono">{"demo@admin.com"}</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{"Contraseña:"}</span>
                    <code className="text-[#8B5CF6] font-mono">{"admin123"}</code>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Button
                size="lg"
                className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-lg h-12"
                asChild
              >
                <Link href="/admin?demo=true">
                  {"Acceder como Admin"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-2xl glass-card p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B78B1E]/5 via-[#8B5CF6]/5 to-[#22D3EE]/5" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {"¿Listo para comenzar?"}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {"Después de explorar el demo, crea tu cuenta y comienza a competir."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold text-lg px-8 h-12 w-full sm:w-auto"
                asChild
              >
                <Link href="/registro">
                  {"Crear mi cuenta"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white text-lg px-8 h-12 w-full sm:w-auto bg-transparent"
                asChild
              >
                <a href="https://wa.me/5491234567890" target="_blank" rel="noopener noreferrer">
                  {"Contactar ventas"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
