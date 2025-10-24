"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LucideIcon } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from './theme-toggle'

interface NavItem {
  href: string
  label: string
  icon?: LucideIcon
}

interface DashboardNavigationProps {
  navItems?: NavItem[]
  title?: string
}

export function DashboardNavigation({ navItems, title }: DashboardNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Default navigation if none provided
  const defaultNavItems: NavItem[] = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/atletas', label: 'Atletas' },
    { href: '/demo', label: 'Demo' },
  ]

  const items = navItems || defaultNavItems

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-lg bg-white dark:bg-slate-900 shadow-md">
              <Image
                src="/ifbb-logo.jpg"
                alt="IFBB Argentina Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden md:flex flex-col">
              <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B78B1E] to-[#F59E0B]">
                {title || 'IFBB Argentina'}
              </div>
              <div className="text-xs text-muted-foreground leading-tight">
                Federación Internacional
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link href="/login">
                <User className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-secondary/50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <ThemeToggle />
                <Button variant="outline" asChild className="flex-1">
                  <Link href="/login">Mi Perfil</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
