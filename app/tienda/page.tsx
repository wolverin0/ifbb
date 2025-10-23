'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const categories = ['Todos', 'Ropa del evento', 'Trajes de competencia', 'Aceites de pose', 'Accesorios', 'Fotos impresas']

export default function MerchandiseStore() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32">
        <section className="py-12 bg-gradient-to-b from-[#B78B1E]/10 to-transparent border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Tienda IFBB Argentina</h1>
            <p className="text-lg text-muted-foreground">Ropa, accesorios y productos oficiales</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Tienda en desarrollo</h2>
            <p className="text-muted-foreground">Los productos estan siendo cargados...</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
