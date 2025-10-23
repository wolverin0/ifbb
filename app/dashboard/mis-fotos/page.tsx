'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, ShoppingCart, Search, Filter, X, Download, Heart } from "lucide-react"
import Image from "next/image"

// Mock photo data
const mockPhotoEvents = [
  {
    id: 1,
    eventName: 'Campeonato Nacional 2025',
    date: '15/03/2025',
    category: "Men's Physique - Class A",
    photoCount: 24,
    price: 800,
    currency: 'ARS',
    imageUrl: '/bodybuilding-championship-stage-lights.jpg',
    photographer: 'Studio Pro Photos',
    isPurchased: false,
  },
  {
    id: 2,
    eventName: 'Copa Provincial Córdoba',
    date: '22/02/2025',
    category: "Men's Physique - Class A",
    photoCount: 18,
    price: 600,
    currency: 'ARS',
    imageUrl: '/bodybuilding-championship-stage-lights.jpg',
    photographer: 'Studio Pro Photos',
    isPurchased: true,
  },
  {
    id: 3,
    eventName: 'Torneo de Verano 2025',
    date: '10/01/2025',
    category: "Men's Physique - Open",
    photoCount: 22,
    price: 700,
    currency: 'ARS',
    imageUrl: '/bodybuilding-championship-stage-lights.jpg',
    photographer: 'Elite Photography',
    isPurchased: false,
  },
  {
    id: 4,
    eventName: 'Campeonato Argentino 2024',
    date: '15/03/2024',
    category: "Men's Physique - Class A",
    photoCount: 32,
    price: 1000,
    currency: 'ARS',
    imageUrl: '/bodybuilding-championship-stage-lights.jpg',
    photographer: 'ProShots Studio',
    isPurchased: true,
  },
  {
    id: 5,
    eventName: 'Open de Buenos Aires',
    date: '28/11/2024',
    category: "Men's Physique - Class B",
    photoCount: 16,
    price: 500,
    currency: 'ARS',
    imageUrl: '/bodybuilding-championship-stage-lights.jpg',
    photographer: 'Studio Pro Photos',
    isPurchased: false,
  },
  {
    id: 6,
    eventName: 'Copa de Otoño 2024',
    date: '20/04/2024',
    category: "Men's Physique - Open",
    photoCount: 28,
    price: 900,
    currency: 'ARS',
    imageUrl: '/bodybuilding-championship-stage-lights.jpg',
    photographer: 'Elite Photography',
    isPurchased: true,
  },
  {
    id: 7,
    eventName: 'Torneo Regional Mendoza',
    date: '12/08/2024',
    category: "Men's Physique - Class B",
    photoCount: 20,
    price: 650,
    currency: 'ARS',
    imageUrl: '/bodybuilding-championship-stage-lights.jpg',
    photographer: 'ProShots Studio',
    isPurchased: false,
  },
  {
    id: 8,
    eventName: 'Campeonato de Primavera',
    date: '05/09/2024',
    category: "Men's Physique - Class A",
    photoCount: 26,
    price: 850,
    currency: 'ARS',
    imageUrl: '/bodybuilding-championship-stage-lights.jpg',
    photographer: 'Studio Pro Photos',
    isPurchased: false,
  },
]

interface CartItem {
  eventId: number
  eventName: string
  type: 'single' | 'bundle' | 'all'
  price: number
  quantity: number
}

interface SelectedPhotoDetail {
  id: number
  eventName: string
  date: string
  category: string
  photoCount: number
  imageUrl: string
  photographer: string
}

export default function MisFotosPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<SelectedPhotoDetail | null>(null)
  const [activeTab, setActiveTab] = useState<'available' | 'purchased'>('available')
  const [favorites, setFavorites] = useState<number[]>([])

  // Filter photos
  const filteredPhotos = mockPhotoEvents.filter(photo => {
    const matchesSearch = photo.eventName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesYear = selectedYear === 'all' || photo.date.slice(-4) === selectedYear
    const matchesCategory = selectedCategory === 'all' || photo.category.includes(selectedCategory)
    const matchesTab = activeTab === 'available' ? !photo.isPurchased : photo.isPurchased
    return matchesSearch && matchesYear && matchesCategory && matchesTab
  })

  // Extract unique years and categories
  const years = ['all', ...new Set(mockPhotoEvents.map(p => p.date.slice(-4)))]
  const categories = ['all', ...new Set(mockPhotoEvents.map(p => {
    const parts = p.category.split(' - ')
    return parts[0]
  }))]

  const addToCart = (eventId: number, eventName: string, type: 'single' | 'bundle' | 'all', price: number) => {
    const newItem: CartItem = {
      eventId,
      eventName,
      type,
      price,
      quantity: 1,
    }
    setCartItems([...cartItems, newItem])
  }

  const removeFromCart = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  const toggleFavorite = (eventId: number) => {
    if (favorites.includes(eventId)) {
      setFavorites(favorites.filter(id => id !== eventId))
    } else {
      setFavorites([...favorites, eventId])
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground flex items-center gap-3">
            <Camera className="w-10 h-10 text-gold" />
            Mis Fotos
          </h1>
          <p className="text-muted-foreground mt-2">Fotos de tus competencias disponibles para compra</p>
        </div>
        <Button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-gradient-to-r from-gold to-amber-500 hover:from-amber-600 hover:to-amber-600 text-ink font-semibold"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Carrito ({cartItems.length})
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Button>
      </header>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-border">
        <button
          onClick={() => setActiveTab('available')}
          className={`px-4 py-2 font-medium transition-colors \${
            activeTab === 'available'
              ? 'text-gold border-b-2 border-gold'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Disponibles para Comprar
        </button>
        <button
          onClick={() => setActiveTab('purchased')}
          className={`px-4 py-2 font-medium transition-colors \${
            activeTab === 'purchased'
              ? 'text-gold border-b-2 border-gold'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Mis Fotos Compradas ({mockPhotoEvents.filter(p => p.isPurchased).length})
        </button>
      </div>

      {/* Filters */}
      <Card className="bg-card border-border">
        <CardContent className="pt-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar evento..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            {/* Filter buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Year filter */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Por Año</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'Todos los años' : year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category filter */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Por Categoría</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'Todas las categorías' : cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset filters */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedYear('all')
                    setSelectedCategory('all')
                  }}
                  className="w-full px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/70 transition-colors text-sm font-medium"
                >
                  Limpiar Filtros
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Photo Gallery Grid */}
      {filteredPhotos.length === 0 ? (
        <Card className="bg-card border-border">
          <CardContent className="pt-12 pb-12 text-center">
            <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">No se encontraron fotos con los filtros seleccionados</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="group">
              <Card className="bg-card border-border hover:border-gold transition-all duration-300 overflow-hidden cursor-pointer h-full hover:shadow-lg hover:shadow-gold/20">
                <div className="relative h-48 bg-muted overflow-hidden">
                  {/* Watermark overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center transform -rotate-45">
                      <span className="text-4xl font-bold text-gold whitespace-nowrap">PREVIEW</span>
                    </div>
                  </div>

                  {/* Image with hover zoom */}
                  <Image
                    src={photo.imageUrl}
                    alt={photo.eventName}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Favorite button */}
                  <button
                    onClick={() => toggleFavorite(photo.id)}
                    className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 \${
                        favorites.includes(photo.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-white'
                      }`}
                    />
                  </button>

                  {/* Photo count badge */}
                  <Badge className="absolute bottom-3 left-3 bg-gold/90 text-ink font-semibold">
                    {photo.photoCount} fotos
                  </Badge>

                  {/* Purchased badge */}
                  {photo.isPurchased && (
                    <Badge className="absolute bottom-3 right-3 bg-green-500/90 text-white font-semibold">
                      Comprado
                    </Badge>
                  )}
                </div>

                <CardContent className="pt-4">
                  <h3 className="font-bold text-foreground truncate mb-1">{photo.eventName}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{photo.date}</p>
                  <p className="text-xs text-muted-foreground mb-3">{photo.category}</p>
                  <p className="text-xs text-gold mb-4">Fotógrafo: {photo.photographer}</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gradient-gold">
                        ${photo.price}
                      </span>
                      <span className="text-xs text-muted-foreground">{photo.currency}</span>
                    </div>

                    {activeTab === 'available' ? (
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-gold text-gold hover:bg-gold hover:text-ink"
                          onClick={() => setSelectedPhoto({
                            id: photo.id,
                            eventName: photo.eventName,
                            date: photo.date,
                            category: photo.category,
                            photoCount: photo.photoCount,
                            imageUrl: photo.imageUrl,
                            photographer: photo.photographer,
                          })}
                        >
                          Ver Galería
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        className="w-full bg-green-500 hover:bg-green-600"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}

      {/* Photo Detail Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
              <h2 className="text-2xl font-bold text-foreground">{selectedPhoto.eventName}</h2>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <CardContent className="p-6 space-y-6">
              {/* Preview Image */}
              <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center z-10 pointer-events-none">
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center transform -rotate-45">
                    <span className="text-4xl font-bold text-gold whitespace-nowrap">PREVIEW</span>
                  </div>
                </div>
                <Image
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.eventName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Photo Info */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">Fecha</p>
                    <p className="text-foreground font-medium">{selectedPhoto.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Categoría</p>
                    <p className="text-foreground font-medium">{selectedPhoto.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total de Fotos</p>
                    <p className="text-foreground font-medium">{selectedPhoto.photoCount}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Fotógrafo</p>
                  <p className="text-gold font-medium">{selectedPhoto.photographer}</p>
                </div>
              </div>

              {/* Purchase Options */}
              <div className="bg-muted/50 border border-border rounded-lg p-4 space-y-3">
                <p className="font-semibold text-foreground">Opciones de Compra</p>

                <button
                  onClick={() => {
                    addToCart(
                      selectedPhoto.id,
                      selectedPhoto.eventName,
                      'single',
                      200
                    )
                    setSelectedPhoto(null)
                  }}
                  className="w-full text-left p-3 rounded-lg bg-card border border-border hover:border-gold hover:bg-muted transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-foreground">Foto Individual</p>
                      <p className="text-xs text-muted-foreground">1 foto en alta resolución</p>
                    </div>
                    <span className="text-lg font-bold text-gradient-gold">$200 ARS</span>
                  </div>
                </button>

                <button
                  onClick={() => {
                    addToCart(
                      selectedPhoto.id,
                      selectedPhoto.eventName,
                      'bundle',
                      800
                    )
                    setSelectedPhoto(null)
                  }}
                  className="w-full text-left p-3 rounded-lg bg-card border border-gold hover:bg-gold/10 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-foreground">Paquete del Evento</p>
                      <p className="text-xs text-muted-foreground">Todas las {selectedPhoto.photoCount} fotos del evento</p>
                    </div>
                    <span className="text-lg font-bold text-gold">$800 ARS</span>
                  </div>
                </button>

                <button
                  onClick={() => {
                    addToCart(
                      selectedPhoto.id,
                      selectedPhoto.eventName,
                      'all',
                      1500
                    )
                    setSelectedPhoto(null)
                  }}
                  className="w-full text-left p-3 rounded-lg bg-card border border-border hover:border-gold hover:bg-muted transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-foreground">Paquete Completo</p>
                      <p className="text-xs text-muted-foreground">Todas las fotos + copias de alta resolución</p>
                    </div>
                    <span className="text-lg font-bold text-gradient-gold">$1500 ARS</span>
                  </div>
                </button>
              </div>

              <Button
                onClick={() => setSelectedPhoto(null)}
                variant="outline"
                className="w-full border-border"
              >
                Cerrar
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-end">
          <Card className="bg-card w-full max-w-md h-screen rounded-none flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground">Tu Carrito</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item, index) => (
                    <div key={index} className="bg-muted/50 p-3 rounded-lg space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-medium text-foreground text-sm">{item.eventName}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.type === 'single' && 'Foto Individual'}
                            {item.type === 'bundle' && 'Paquete del Evento'}
                            {item.type === 'all' && 'Paquete Completo'}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="p-1 hover:bg-muted rounded transition-colors flex-shrink-0"
                        >
                          <X className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gold font-semibold">${item.price} ARS</span>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => {
                            const newCart = [...cartItems]
                            newCart[index].quantity = parseInt(e.target.value) || 1
                            setCartItems(newCart)
                          }}
                          className="w-12 px-2 py-1 bg-card border border-border rounded text-sm text-foreground text-center"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-foreground font-medium">Subtotal</span>
                    <span className="text-foreground font-semibold">${getTotalPrice()} ARS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Envío</span>
                    <span className="text-green-500 font-semibold">Gratis</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gold/10 to-amber-500/10 rounded-lg p-4 border border-gold">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-bold">TOTAL</span>
                    <span className="text-2xl font-bold text-gradient-gold">${getTotalPrice()} ARS</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-gold to-amber-500 hover:from-amber-600 hover:to-amber-600 text-ink font-semibold">
                    Proceder al Pago
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-border"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Seguir Comprando
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground text-center">
                  <p>Métodos de pago disponibles:</p>
                  <p className="text-foreground mt-1">MercadoPago - Tarjeta de Crédito - Transferencia Bancaria</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  )
}
