"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NewsCard } from "@/components/news-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { newsData } from "@/lib/news-data"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

type CategoryType = "Todas" | "Campeonato" | "Atleta Destacado" | "Evento Internacional" | "Actualización" | "Anuncio"

const ITEMS_PER_PAGE = 9

export default function NoticiasPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("Todas")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const categories: CategoryType[] = ["Todas", "Campeonato", "Atleta Destacado", "Evento Internacional", "Actualización", "Anuncio"]

  // Filter news based on category and search
  const filteredNews = useMemo(() => {
    return newsData.filter((item) => {
      const matchesCategory = selectedCategory === "Todas" || item.category === selectedCategory
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Get featured news (latest)
  const featuredNews = filteredNews.length > 0 ? filteredNews[0] : null
  const regularNews = filteredNews.slice(1)

  // Pagination logic
  const totalPages = Math.ceil(regularNews.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedNews = regularNews.slice(startIndex, endIndex)

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setSearchQuery("")
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 spotlight-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Noticias IFBB</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mantente informado sobre los últimos campeonatos, atletas destacados y eventos del bodybuilding profesional
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative glass-card rounded-full p-1 group hover-lift">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#B78B1E]" />
              <Input
                type="text"
                placeholder="Buscar noticias..."
                className="pl-12 pr-4 py-3 bg-transparent border-0 text-foreground placeholder-muted-foreground focus:outline-none text-lg"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryChange(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F]"
                    : "border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F]"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-foreground mb-2">No hay noticias encontradas</h2>
            <p className="text-muted-foreground mb-8">
              Intenta cambiar los filtros o realizar una búsqueda diferente
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("Todas")
                setSearchQuery("")
                setCurrentPage(1)
              }}
              className="bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-semibold"
            >
              Ver todas las noticias
            </Button>
          </div>
        ) : (
          <>
            {/* Featured News */}
            {featuredNews && <NewsCard {...featuredNews} featured={true} />}

            {/* News Grid */}
            {regularNews.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedNews.map((news) => (
                  <NewsCard key={news.id} {...news} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 py-12">
                <Button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  variant="outline"
                  className="border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F] disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Anterior
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      variant={currentPage === page ? "default" : "outline"}
                      className={`w-10 h-10 p-0 ${
                        currentPage === page
                          ? "bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F]"
                          : "border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F]"
                      }`}
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  className="border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F] disabled:opacity-50"
                >
                  Siguiente
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {/* Results Info */}
            <div className="text-center text-muted-foreground mb-8">
              <p>
                Mostrando {startIndex + 1} a {Math.min(endIndex, regularNews.length)} de {regularNews.length} noticias
                {selectedCategory !== "Todas" && ` en ${selectedCategory}`}
              </p>
            </div>
          </>
        )}

        {/* Highlighted Sidebar */}
        <div className="mt-20 pt-12 border-t border-[#B78B1E]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Newsletter CTA */}
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-3">Recibe las Noticias</h3>
              <p className="text-muted-foreground mb-6">
                Suscríbete a nuestro boletín para estar actualizado con las últimas noticias de IFBB Argentina
              </p>
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="mb-4 bg-[#0B0B0F]/50 border-[#B78B1E]/50 text-foreground placeholder-muted-foreground"
              />
              <Button className="w-full bg-[#B78B1E] hover:bg-[#A67A1A] text-[#0B0B0F] font-bold">
                Suscribirse
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-6">Estadísticas</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-[#B78B1E]">{newsData.length}</p>
                  <p className="text-muted-foreground">Noticias Publicadas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#22D3EE]">{newsData.filter((n) => n.category === "Campeonato").length}</p>
                  <p className="text-muted-foreground">Campeonatos</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-3">¿Tienes una Noticia?</h3>
              <p className="text-muted-foreground mb-6">
                Si tienes información relevante sobre el mundo del bodybuilding, contáctanos
              </p>
              <Button
                variant="outline"
                className="w-full border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E] hover:text-[#0B0B0F] font-bold"
              >
                Enviar Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
