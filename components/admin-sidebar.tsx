'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, Users, BarChart, DollarSign, Settings, LogOut, Music } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: '/admin', icon: Home, label: 'Resumen' },
  { href: '/admin/eventos', icon: Calendar, label: 'Eventos' },
  { href: '/admin/atletas', icon: Users, label: 'Atletas' },
  { href: '/admin/canciones', icon: Music, label: 'Canciones' },
  { href: '/admin/pagos', icon: DollarSign, label: 'Pagos' },
  { href: '/admin/reportes', icon: BarChart, label: 'Reportes' },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 flex-shrink-0 bg-card border-r border-border flex flex-col">
      <div className="h-20 flex items-center px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-white">A</span>
          </div>
          <div>
            <div className="text-lg font-bold text-red-500">Panel de Admin</div>
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
              pathname.startsWith(item.href)
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
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Cerrar Sesión</span>
          </Link>
      </div>
    </aside>
  )
}
