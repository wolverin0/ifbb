"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  achievement: string
  quote: string
  image: string
  category: string
  year: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Juan Pérez",
    achievement: "Mr. Olympia Argentina 2024",
    quote: "Gracias a IFBB Argentina pude competir a nivel internacional y representar con orgullo a nuestro país en Mr. Olympia. La plataforma hizo todo más simple y profesional.",
    image: "/athletes/juan-perez.jpg",
    category: "Clásico",
    year: 2024,
  },
  {
    id: 2,
    name: "María García",
    achievement: "Campeona Nacional Fitness 2024",
    quote: "La experiencia de competir a través de IFBB Argentina fue increíble. El apoyo, la organización y la calidad de los eventos superaron todas mis expectativas.",
    image: "/athletes/maria-garcia.jpg",
    category: "Fitness",
    year: 2024,
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    achievement: "Bicampeón Provincial 2023-2024",
    quote: "IFBB Argentina nos da las herramientas necesarias para crecer como atletas. La plataforma es moderna, fácil de usar y accesible para todos.",
    image: "/athletes/carlos-rodriguez.jpg",
    category: "Fisicoculturismo",
    year: 2024,
  },
  {
    id: 4,
    name: "Sandra López",
    achievement: "Campeona Nacional Bikini 2024",
    quote: "Desde el registro hasta la competencia, todo fue sin complicaciones. IFBB Argentina realmente se preocupa por los atletas y eso se nota en cada detalle.",
    image: "/athletes/sandra-lopez.jpg",
    category: "Bikini",
    year: 2024,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-[#111827]/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{"Historias de Éxito"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"Conocé las experiencias de nuestros atletas más destacados y cómo IFBB Argentina los ayudó a alcanzar sus objetivos"}
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Quote Design with Testimonial */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image Side */}
              <div className="flex-shrink-0 w-full md:w-1/3">
                <div className="relative">
                  {/* Gold Border/Frame */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B78B1E] to-[#FBBF24] rounded-2xl p-1 transform -rotate-2">
                    <div className="w-full h-full bg-[#0B0B0F] rounded-2xl" />
                  </div>
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/60 via-transparent to-transparent" />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-[#B78B1E] text-[#0B0B0F] px-4 py-2 rounded-full text-sm font-semibold text-center">
                      {currentTestimonial.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1">
                {/* Quote Mark */}
                <div className="text-6xl text-[#B78B1E] opacity-30 font-serif mb-2">"</div>

                {/* Quote Text */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                  {currentTestimonial.quote}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#B78B1E] text-[#B78B1E]"
                    />
                  ))}
                </div>

                {/* Name and Achievement */}
                <div className="mb-6">
                  <p className="text-xl font-bold text-foreground">{currentTestimonial.name}</p>
                  <p className="text-[#B78B1E] font-semibold">{currentTestimonial.achievement}</p>
                  <p className="text-sm text-muted-foreground mt-1">{currentTestimonial.year}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={goToPrevious}
              className="rounded-full w-12 h-12 p-0 bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#B78B1E] w-3 h-3"
                      : "bg-[#B78B1E]/30 hover:bg-[#B78B1E]/50 w-2 h-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              className="rounded-full w-12 h-12 p-0 bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-muted-foreground text-sm">
            {currentIndex + 1} de {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  )
}
