'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, RefreshCw, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function SponsorDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <Link href="/admin/patrocinadores">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Patrocinadores
          </Button>
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Sponsor {params.id}</h1>
            <div className="flex items-center gap-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-700 border border-yellow-200">
                Gold
              </span>
              <span className="text-sm font-semibold text-green-600">Activo</span>
            </div>
          </div>
          <Button className="bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold">
            <Download className="w-4 h-4 mr-2" />
            Generar Reporte PDF
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-6 glass-card">
            <div className="text-sm text-muted-foreground mb-2">Eventos Patrocinados</div>
            <div className="text-3xl font-bold text-foreground">12</div>
            <div className="text-xs text-blue-600 mt-2">Total de participaciones</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 glass-card">
            <div className="text-sm text-muted-foreground mb-2">Logo Impresiones</div>
            <div className="text-3xl font-bold text-foreground">45K</div>
            <div className="text-xs text-purple-600 mt-2">Estimadas en eventos y online</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 glass-card">
            <div className="text-sm text-muted-foreground mb-2">Click-throughs</div>
            <div className="text-3xl font-bold text-foreground">320</div>
            <div className="text-xs text-orange-600 mt-2">Accesos al sitio del sponsor</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 glass-card">
            <div className="text-sm text-muted-foreground mb-2">Puntaje ROI</div>
            <div className="text-3xl font-bold text-[#B78B1E]">8.5/10</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-xs text-green-600">Muy positivo</span>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 glass-card">
            <div className="text-sm text-muted-foreground mb-2">Menciones Sociales</div>
            <div className="text-3xl font-bold text-foreground">15</div>
            <div className="text-xs text-green-600 mt-2">Posts etiquetados</div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 glass-card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Estado del Contrato</h3>
              <p className="text-muted-foreground">
                Contrato vence: <span className="font-semibold text-amber-600">31/12/2025</span>
              </p>
            </div>
            <Button className="bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold">
              <RefreshCw className="w-4 h-4 mr-2" />
              Renovar Contrato
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
