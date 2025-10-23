'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Info, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if we should show the banner (demo mode is active and not dismissed in this session)
    const isDemoMode = typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).get('demo') === 'true'
    const isDismissed = typeof window !== 'undefined' &&
      sessionStorage.getItem('demo-banner-dismissed') === 'true'

    if (isDemoMode && !isDismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('demo-banner-dismissed', 'true')
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#F59E0B] via-[#F59E0B]/95 to-[#F59E0B]/90 text-[#0B0B0F]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4 gap-4">
          {/* Left: Icon and Message */}
          <div className="flex items-center gap-3 flex-1">
            <Info className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            <p className="text-sm md:text-base font-semibold">
              {"Estás en MODO DEMO. Los cambios no se guardarán."}
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              size="sm"
              variant="ghost"
              className="text-[#0B0B0F] hover:bg-[#F59E0B]/80 h-8 px-3 text-xs md:text-sm"
              asChild
            >
              <Link href="/">{"Salir del Demo"}</Link>
            </Button>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-[#F59E0B]/80 rounded-md transition-colors"
              aria-label="Cerrar banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
