"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Globe } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from './theme-toggle'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300 hover:bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center gap-3 group hover:opacity-90 transition-opacity">
            <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-lg bg-white dark:bg-slate-900 shadow-md group-hover:shadow-lg transition-shadow">
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
                {"IFBB Argentina"}
              </div>
              <div className="text-xs text-muted-foreground leading-tight">
                {"Federación Internacional"}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/eventos"
              className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
            >
              {"Eventos"}
            </Link>
            <Link
              href="/transmision"
              className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
            >
              {"Transmisión en Vivo"}
            </Link>
            <Link
              href="/galeria"
              className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
            >
              {"Galería"}
            </Link>
            <Link
              href="/atletas"
              className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
            >
              {"Atletas"}
            </Link>
            <Link
              href="/noticias"
              className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
            >
              {"Noticias"}
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors duration-200 text-sm text-foreground"
                aria-label="Language selector"
              >
                <Globe className="w-4 h-4" />
                <span>{"ES"}</span>
              </button>
              {languageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-background border border-border rounded-lg shadow-lg z-10">
                  <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary/50 transition-colors">
                    {"Español"}
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary/50 transition-colors border-t border-border">
                    {"English"}
                  </button>
                </div>
              )}
            </div>

            <ThemeToggle />

            {/* Profile/Login */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-secondary/50 transition-colors duration-200"
            >
              <Link href="/login" aria-label="User profile">
                <User className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              className="bg-gradient-to-r from-[#B78B1E] to-[#F59E0B] hover:from-[#A67A1A] hover:to-[#E58A00] text-[#0B0B0F] font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              asChild
            >
              <Link href="/registro">{"Inscribirme"}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-secondary/50 rounded-lg transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="lg:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              {/* Navigation Links */}
              <Link
                href="/eventos"
                className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
              >
                {"Eventos"}
              </Link>
              <Link
                href="/transmision"
                className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
              >
                {"Transmisión en Vivo"}
              </Link>
              <Link
                href="/galeria"
                className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
              >
                {"Galería"}
              </Link>
              <Link
                href="/atletas"
                className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
              >
                {"Atletas"}
              </Link>
              <Link
                href="/noticias"
                className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
              >
                {"Noticias"}
              </Link>

              {/* Quick Actions Section */}
              <div className="pt-4 border-t border-border">
                <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                  {"Acciones Rápidas"}
                </h3>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
                  >
                    {"Mi Dashboard"}
                  </Link>
                  <Link
                    href="/mis-eventos"
                    className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
                  >
                    {"Mis Eventos"}
                  </Link>
                  <Link
                    href="/mi-perfil"
                    className="text-sm font-medium text-foreground hover:text-[#B78B1E] transition-colors duration-200"
                  >
                    {"Mi Perfil"}
                  </Link>
                </div>
              </div>

              {/* Controls and Auth */}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <div className="relative flex-1">
                  <button
                    onClick={() => setLanguageOpen(!languageOpen)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors duration-200 text-sm text-foreground"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{"ES"}</span>
                  </button>
                </div>
                <ThemeToggle />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Button
                  variant="outline"
                  asChild
                  className="flex-1 border-border hover:border-[#B78B1E] transition-colors duration-200"
                >
                  <Link href="/login">{"Iniciar Sesión"}</Link>
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-[#B78B1E] to-[#F59E0B] hover:from-[#A67A1A] hover:to-[#E58A00] text-[#0B0B0F] font-semibold transition-all duration-200"
                  asChild
                >
                  <Link href="/registro">{"Inscribirme"}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
