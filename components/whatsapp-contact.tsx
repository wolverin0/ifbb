
"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"

export function WhatsAppContact() {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappNumber = "+541137234567"
  const whatsappMessage = "Hola, tengo una consulta sobre IFBB Argentina"
  const cleanNumber = whatsappNumber.replace(/\D/g, "")
  const whatsappLink = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-8 right-8 z-40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] rounded-full"
        aria-label="Contact via WhatsApp"
      >
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#20BA58] rounded-full opacity-20" />
        </div>

        <div
          className={`relative w-16 h-16 rounded-full bg-gradient-to-r from-[#25D366] to-[#20BA58] shadow-lg flex items-center justify-center transition-all duration-300 transform ${
            isHovered ? "scale-110 shadow-2xl" : "scale-100"
          } hover:shadow-xl`}
        >
          <MessageCircle className="w-8 h-8 text-white fill-white" />
        </div>

        {isHovered && (
          <div className="absolute bottom-20 right-0 bg-[#25D366] text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-200">
          Necesitas ayuda? Contactanos
          <div className="absolute top-full right-4 w-2 h-2 bg-[#25D366] transform rotate-45" />
        </div>
        )}
      </a>

      <style jsx>{`
        @media (max-width: 768px) {
          [aria-label="Contact via WhatsApp"] {
            bottom: 6rem;
          }
        }
      `}</style>
    </>
  )
}
