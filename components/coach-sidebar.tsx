'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Calendar, Trophy, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: '/coach/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/coach/atletas', icon: Users, label: 'Mis Atletas' },
  { href: '/coach/registro-evento', icon: Calendar, label: 'Registro de Eventos' },
  { href: '/coach/resultados', icon: Trophy, label: 'Resultados' },
  { href: '/coach/perfil', icon: User, label: 'Mi Perfil' },
]

export function CoachSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 flex-shrink-0 bg-card border-r border-border flex flex-col">
      <div className="h-20 flex items-center px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-white">ED</span>
          </div>
          <div>
            <div className="text-lg font-bold text-purple-700">Panel Entrenador</div>
          </div>
        </Link>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
              pathname === item.href || pathname.startsWith(item.href)
                ? "bg-purple-600/20 text-purple-700"
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
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Cerrar Sesión</span>
        </Link>
      </div>
    </aside>
  )
}
