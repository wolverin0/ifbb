'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, Trophy, Camera, User, Settings, LogOut, Bell, TrendingUp, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Resumen' },
  { href: '/dashboard/mis-eventos', icon: Calendar, label: 'Mis Eventos' },
  { href: '/dashboard/mis-resultados', icon: Trophy, label: 'Mis Resultados' },
  { href: '/dashboard/progreso', icon: TrendingUp, label: 'Progreso' },
  { href: '/dashboard/mis-fotos', icon: Camera, label: 'Mis Fotos' },
  { href: '/dashboard/notificaciones', icon: Bell, label: 'Notificaciones' },
  { href: '/dashboard/mi-perfil', icon: User, label: 'Mi Perfil' },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      {/* Mobile Menu Button - Fixed at top */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Backdrop overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar - Hidden on mobile, shown as overlay when menu open */}
      <aside
        className={cn(
          "w-64 flex-shrink-0 bg-card border-r border-border flex flex-col",
          "lg:relative lg:translate-x-0",
          "fixed top-0 left-0 h-full z-40 transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="h-20 flex items-center px-6 border-b border-border">
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-ink">IF</span>
            </div>
            <div>
              <div className="text-lg font-bold text-gradient-gold">Panel de Atleta</div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMobileMenu}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="px-4 py-6 border-t border-border">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Cerrar Sesion</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
