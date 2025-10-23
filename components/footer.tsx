import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube, Facebook, Mail, Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0B0B0F] to-[#0B0B0F] border-t border-border/30 mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-border/30">
          <div className="bg-gradient-to-r from-[#B78B1E]/10 to-[#F59E0B]/10 rounded-xl p-8 backdrop-blur-sm border border-[#B78B1E]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{"Suscribite al Newsletter"}</h3>
                <p className="text-sm text-muted-foreground">{"Recibe las últimas noticias, resultados y eventos de IFBB Argentina"}</p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 md:flex-none px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#B78B1E]/50 transition-all duration-200"
                />
                <Button className="bg-gradient-to-r from-[#B78B1E] to-[#F59E0B] hover:from-[#A67A1A] hover:to-[#E58A00] text-[#0B0B0F] font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0 overflow-hidden rounded-lg bg-white dark:bg-slate-900 shadow-md">
                <Image
                  src="/ifbb-logo.jpg"
                  alt="IFBB Argentina Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B78B1E] to-[#F59E0B]">
                {"IFBB"}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {"La plataforma oficial de la Federación Internacional de Fisicoculturismo en Argentina."}
            </p>
            <Link
              href="/academy"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#B78B1E] hover:text-[#F59E0B] transition-colors duration-200"
            >
              <span className="text-xs font-bold px-2 py-1 rounded bg-[#B78B1E]/20 border border-[#B78B1E]/30">
                {"NEW"}
              </span>
              {"IFBB Academy Argentina"}
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{"Enlaces Rápidos"}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/eventos" className="text-sm text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#B78B1E]/40 group-hover:bg-[#B78B1E] transition-colors duration-200"></span>
                  {"Calendario de Eventos"}
                </Link>
              </li>
              <li>
                <Link href="/resultados" className="text-sm text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#B78B1E]/40 group-hover:bg-[#B78B1E] transition-colors duration-200"></span>
                  {"Resultados en Vivo"}
                </Link>
              </li>
              <li>
                <Link href="/atletas" className="text-sm text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#B78B1E]/40 group-hover:bg-[#B78B1E] transition-colors duration-200"></span>
                  {"Directorio de Atletas"}
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-sm text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#B78B1E]/40 group-hover:bg-[#B78B1E] transition-colors duration-200"></span>
                  {"Galería de Fotos"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{"Recursos"}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/reglamento" className="text-sm text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#B78B1E]/40 group-hover:bg-[#B78B1E] transition-colors duration-200"></span>
                  {"Reglamento y Normas"}
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="text-sm text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#B78B1E]/40 group-hover:bg-[#B78B1E] transition-colors duration-200"></span>
                  {"Categorías"}
                </Link>
              </li>
              <li>
                <Link href="/antidoping" className="text-sm text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#B78B1E]/40 group-hover:bg-[#B78B1E] transition-colors duration-200"></span>
                  {"Política Antidoping"}
                </Link>
              </li>
              <li>
                <Link href="/ayuda" className="text-sm text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#B78B1E]/40 group-hover:bg-[#B78B1E] transition-colors duration-200"></span>
                  {"Ayuda y FAQ"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{"Contacto"}</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@ifbbargentina.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 group-hover:text-[#B78B1E]" />
                <span className="break-all">{"info@ifbbargentina.com"}</span>
              </a>
              <a
                href="tel:+541234567890"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4 group-hover:text-[#B78B1E]" />
                <span>{"+54 (11) 1234-5678"}</span>
              </a>
              <a
                href="https://wa.me/5491123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:text-[#B78B1E]" />
                <span>{"WhatsApp"}</span>
              </a>
            </div>
          </div>

          {/* Social & Sponsors */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{"Síguenos"}</h3>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com/ifbbargentina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-[#B78B1E] flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@ifbbargentina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-[#B78B1E] flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ifbbargentina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-[#B78B1E] flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Sponsors Section */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-semibold">{"Sponsors"}</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="w-full h-12 rounded bg-secondary/40 border border-border/30 flex items-center justify-center hover:border-[#B78B1E]/50 transition-colors duration-200">
                  <span className="text-xs text-muted-foreground">{"Logo 1"}</span>
                </div>
                <div className="w-full h-12 rounded bg-secondary/40 border border-border/30 flex items-center justify-center hover:border-[#B78B1E]/50 transition-colors duration-200">
                  <span className="text-xs text-muted-foreground">{"Logo 2"}</span>
                </div>
                <div className="w-full h-12 rounded bg-secondary/40 border border-border/30 flex items-center justify-center hover:border-[#B78B1E]/50 transition-colors duration-200">
                  <span className="text-xs text-muted-foreground">{"Logo 3"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            {"© 2025 IFBB Argentina. Todos los derechos reservados."}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacidad"
              className="text-xs text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200"
            >
              {"Privacidad"}
            </Link>
            <Link
              href="/terminos"
              className="text-xs text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200"
            >
              {"Términos"}
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-[#B78B1E] transition-colors duration-200"
            >
              {"Cookies"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
