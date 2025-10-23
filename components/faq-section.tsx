"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    category: "Inscripción",
    question: "¿Cómo me inscribo en una competencia?",
    answer:
      "Para inscribirte, primero debes crear una cuenta en la plataforma. Luego, dirígete a la sección de eventos, selecciona la competencia de tu interés y completa el formulario de inscripción. Podrás cargar tu música, datos personales y efectuar el pago de forma segura. El proceso toma aproximadamente 5 minutos.",
  },
  {
    id: 2,
    category: "Requisitos",
    question: "¿Cuáles son los requisitos para competir?",
    answer:
      "Debes ser mayor de 18 años, tener nacionalidad argentina o residencia legal en el país. Es necesario contar con un certificado de aptitud física expedido por un médico. Algunos eventos pueden tener requisitos específicos según la categoría. Te recomendamos revisar los términos de cada competencia.",
  },
  {
    id: 3,
    category: "Categorías",
    question: "¿Qué categorías de competencia están disponibles?",
    answer:
      "Contamos con categorías para hombres y mujeres: Fisicoculturismo Clásico, Fisicoculturismo Moderno, Fitness, Bikini, Wellness, Physique, y Culturismo Juvenil. También ofrecemos categorías por peso y altura. Puedes consultar las categorías específicas de cada evento en la sección de detalles.",
  },
  {
    id: 4,
    category: "Costos",
    question: "¿Cuál es el costo de inscripción?",
    answer:
      "El costo varía según la competencia y la categoría. En promedio, la inscripción oscila entre $5,000 y $15,000 ARS. Los precios incluyen el acceso a la competencia y certificados. Ofrecemos descuentos especiales para inscripciones anticipadas. Consulta el detalle de cada evento para conocer el precio exacto.",
  },
  {
    id: 5,
    category: "Música",
    question: "¿Cómo subo mi música de posing?",
    answer:
      "En el formulario de inscripción encontrarás la opción para cargar tu música. Debe estar en formato MP3, tener una duración máxima de 90 segundos y un tamaño máximo de 15 MB. La música debe estar libre de derechos de autor o contar con la autorización correspondiente. Recomendamos probar la música en el posing antes de la competencia.",
  },
  {
    id: 6,
    category: "Regulaciones",
    question: "¿Cuáles son las reglas y regulaciones de competencia?",
    answer:
      "Las reglas IFBB son internacionalmente reconocidas y regulan aspectos como el tamaño de los trajes de baño, posiciones de rutina, criterios de juicio y conducta en el escenario. Puedes encontrar el reglamento completo en nuestra sección de documentos. Todos los jueces están certificados y siguen protocolos internacionales.",
  },
  {
    id: 7,
    category: "Certificaciones",
    question: "¿Qué certificados recibo al competir?",
    answer:
      "Al completar una competencia, recibirás un certificado digital y físico de participación. Si clasificas entre los primeros lugares, recibirás certificados específicos de tu posición. Los certificados incluyen fecha, evento, categoría y tu posición final. Estos certificados son reconocidos internacionalmente por IFBB.",
  },
  {
    id: 8,
    category: "Anti-Doping",
    question: "¿Cuál es la política anti-doping?",
    answer:
      "IFBB Argentina se adhiere estrictamente a las normas anti-doping internacionales. Los atletas pueden ser sometidos a pruebas anti-doping aleatorias antes o después de la competencia. El incumplimiento de estas normas resulta en descalificación y sanciones. Promovemos el deporte limpio y seguro para todos nuestros atletas.",
  },
  {
    id: 9,
    category: "Resultados",
    question: "¿Cuándo y dónde se publican los resultados?",
    answer:
      "Los resultados se publican en tiempo real durante la competencia en nuestra plataforma. Puedes seguir los puntajes, clasificaciones y updates en vivo desde tu celular. Los resultados finales se confirman 24 horas después del evento y se envían certificados a todos los participantes.",
  },
  {
    id: 10,
    category: "Contacto",
    question: "¿A quién puedo contactar si tengo dudas?",
    answer:
      "Puedes contactarnos a través de WhatsApp, email o completar un formulario en nuestra plataforma. Nuestro equipo de atención al atleta está disponible de lunes a viernes de 9 a 18 hs. También puedes participar en nuestros webinars mensuales donde resolvemos dudas y compartimos tips de preparación.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const categories = Array.from(new Set(faqs.map((item) => item.category)))

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {"Preguntas Frecuentes"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {
              "Resuelve tus dudas sobre inscripción, competencias, reglas y todo lo que necesitas saber"
            }
          </p>
        </div>

        {/* FAQ Grid by Category */}
        <div className="max-w-3xl mx-auto">
          {categories.map((category) => {
            const categoryFaqs = faqs.filter((item) => item.category === category)
            return (
              <div key={category} className="mb-12">
                {/* Category Title */}
                <h3 className="text-2xl font-bold text-[#B78B1E] mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#B78B1E] to-[#FBBF24] rounded-full" />
                  {category}
                </h3>

                {/* FAQ Items */}
                <div className="space-y-3">
                  {categoryFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="glass-card rounded-xl overflow-hidden transition-all duration-300"
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#B78B1E]/5 transition-colors"
                      >
                        <span className="text-lg font-semibold text-foreground text-left">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#B78B1E] flex-shrink-0 ml-4 transition-transform duration-300 ${
                            openItems.includes(faq.id) ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Answer */}
                      {openItems.includes(faq.id) && (
                        <div className="px-6 pb-4 pt-0 border-t border-[#B78B1E]/20 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact CTA */}
        <div className="max-w-2xl mx-auto mt-16 p-8 glass-card rounded-2xl text-center border border-[#B78B1E]/20">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            {"¿No encontraste lo que buscas?"}
          </h3>
          <p className="text-muted-foreground mb-6">
            {
              "Contactanos a través de WhatsApp o email y nuestro equipo te ayudará de inmediato."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5411XXXXXXXX"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#1FAB56] text-white font-semibold rounded-lg transition-colors"
            >
              {"Contactar por WhatsApp"}
            </a>
            <a
              href="mailto:info@ifbbtargentina.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E]/10 font-semibold rounded-lg transition-colors"
            >
              {"Enviar Email"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
