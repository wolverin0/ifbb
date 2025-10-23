'use client'

import { useEffect, useRef } from 'react'

interface Sponsor {
  name: string
  logo: string
}

const sponsors: Sponsor[] = [
  { name: 'Megathlon', logo: '/sponsors/megathlon-logo.svg' },
  { name: 'Star Nutrition', logo: '/sponsors/starnutrition-logo.svg' },
  { name: 'GFitness', logo: '/sponsors/gfitness-logo.svg' },
  { name: 'ENA Sport', logo: '/sponsors/enasport-logo.svg' },
  { name: 'BSN', logo: '/sponsors/bsn-logo.svg' },
  { name: 'MuscleTech', logo: '/sponsors/muscletech-logo.svg' },
]

export function SponsorsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const animate = () => {
      scrollPosition += 0.5
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-[#111827]/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-3">
            {"Nuestros Sponsors"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"Marcas líderes que confían en nosotros"}
          </p>
        </div>

        {/* Sponsors Marquee */}
        <div className="relative">
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-hidden py-8"
          >
            {/* First Set of Sponsors */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`sponsor-1-${index}`}
                className="flex-shrink-0 w-48 h-32 glass-card rounded-2xl p-6 flex items-center justify-center group hover-lift"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Grayscale filter on default state */}
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-32 h-20 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 filter"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`sponsor-2-${index}`}
                className="flex-shrink-0 w-48 h-32 glass-card rounded-2xl p-6 flex items-center justify-center group hover-lift"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-32 h-20 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 filter"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B78B1E]/10 border border-[#B78B1E]/30 rounded-full text-sm text-[#B78B1E]">
            <span className="w-2 h-2 rounded-full bg-[#B78B1E] animate-pulse" />
            {"Partners Oficiales de IFBB Argentina"}
          </div>
        </div>
      </div>
    </section>
  )
}
