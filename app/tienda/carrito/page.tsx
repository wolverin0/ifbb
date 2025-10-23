'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex-1 pt-32">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-8">Mi Carrito de Compras</h1>
          <div className="bg-card border border-border rounded-xl p-12 text-center glass-card">
            <p className="text-xl text-muted-foreground mb-6">Tu carrito esta vacio</p>
            <Button className="bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold">
              Continuar Comprando
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
