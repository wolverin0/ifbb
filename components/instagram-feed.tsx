import Link from "next/link"
import { Instagram } from "lucide-react"

export function InstagramFeed() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-[#111827]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-6 h-6 text-[#E4405F]" />
            <h2 className="text-4xl font-bold text-foreground">{"Síguenos en Instagram"}</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            {"Mantente actualizado con las últimas fotos y noticias de IFBB Argentina"}
          </p>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Link
              key={i}
              href="https://instagram.com/ifbbargentina"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-secondary aspect-square hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#B78B1E]/20 to-[#F59E0B]/10 flex items-center justify-center">
                <div className="text-center">
                  <Instagram className="w-12 h-12 text-[#E4405F] mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">{"Post "}{i}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="text-center">
                  <p className="text-white font-semibold">{"Ver en Instagram"}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/ifbbargentina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#B78B1E] to-[#F59E0B] hover:from-[#A67A1A] hover:to-[#E58A00] text-[#0B0B0F] font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            {"Seguir @ifbbargentina"}
          </a>
        </div>
      </div>
    </section>
  )
}
