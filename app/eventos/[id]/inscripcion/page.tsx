'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Calendar,
  MapPin,
  Users,
  Music,
  Image as ImageIcon,
  Upload,
  ChevronLeft,
  ChevronRight,
  Check,
  AlertCircle,
  Play,
  X,
  Download,
  QrCode,
  CheckCircle2,
  Clock,
  Trash2,
  FileText,
  DollarSign,
  Phone,
  Mail,
  Share2,
  Home,
  Loader2,
  Save,
  Trophy,
  Sparkles,
  Info,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Category Recommendation Algorithm
interface RecommendationResult {
  recommendedCategoryIds: string[]
  reason: string
  details: string
}

function calculateAgeInYears(birthDate: string): number {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

function getRecommendations(height: number, age: number, gender: 'male' | 'female' = 'male'): RecommendationResult {
  const recommendations: string[] = []
  let reason = ''
  let details = ''

  if (gender === 'male') {
    // Men's Physique classifications
    if (height >= 168 && height <= 171.9) {
      recommendations.push('mp-a')
      reason = "Men's Physique Class A"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 172 && height <= 175.9) {
      recommendations.push('mp-b')
      reason = "Men's Physique Class B"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 176 && height <= 179.9) {
      recommendations.push('mp-c')
      reason = "Men's Physique Class C"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 180) {
      // Assuming Class D for height 180+
      recommendations.push('mp-d')
      reason = "Men's Physique (180cm+)"
      details = 'Based on your height: ' + height + 'cm'
    }
  } else {
    // Women's Bikini classifications
    if (height < 160) {
      recommendations.push('wb-bikini-a')
      reason = "Women's Bikini Class A"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 160 && height <= 163.9) {
      recommendations.push('wb-bikini-b')
      reason = "Women's Bikini Class B"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 164 && height <= 167.9) {
      recommendations.push('wb-bikini-c')
      reason = "Women's Bikini Class C"
      details = 'Based on your height: ' + height + 'cm'
    } else if (height >= 168) {
      recommendations.push('wb-bikini-d')
      reason = "Women's Bikini Class D"
      details = 'Based on your height: ' + height + 'cm'
    }
  }

  // Age-based recommendations
  if (age >= 50) {
    recommendations.push('masters-50')
    reason += (reason ? ' + ' : '') + 'Masters 50+'
    details += (details ? ' | ' : '') + 'Based on your age: ' + age + ' years old'
  } else if (age >= 40) {
    recommendations.push('masters-40')
    reason += (reason ? ' + ' : '') + 'Masters 40+'
    details += (details ? ' | ' : '') + 'Based on your age: ' + age + ' years old'
  }

  return {
    recommendedCategoryIds: recommendations,
    reason: reason || 'General Category',
    details: details || 'Please select a category'
  }
}

// Mock event data
function getEventData(id: string) {
  return {
    id,
    title: 'Campeonato Nacional IFBB Argentina 2025',
    date: '15 de Marzo, 2025',
    location: 'Teatro Gran Rex',
    categories: [
      { id: 'mp-a', name: "Men's Physique", description: 'Clase A (170-175cm)', price: 1500, weight: '70-75kg', height: '170-175cm' },
      { id: 'mp-b', name: "Men's Physique", description: 'Clase B (175-180cm)', price: 1500, weight: '75-80kg', height: '175-180cm' },
      { id: 'mp-c', name: "Men's Physique", description: 'Clase C (180cm+)', price: 1500, weight: '80kg+', height: '180cm+' },
      { id: 'bb-a', name: 'Bodybuilding', description: 'Peso Ligero (80kg)', price: 1500, weight: '75-80kg', height: 'Varios' },
      { id: 'bb-b', name: 'Bodybuilding', description: 'Peso Medio (90kg)', price: 1500, weight: '80-90kg', height: 'Varios' },
      { id: 'bb-c', name: 'Bodybuilding', description: 'Peso Pesado (100kg+)', price: 1500, weight: '90kg+', height: 'Varios' },
      { id: 'wb-bikini', name: 'Women Bikini', description: 'Categoría Femenina', price: 1500, weight: 'Varios', height: 'Varios' },
      { id: 'wb-wellness', name: 'Women Wellness', description: 'Categoría Femenina', price: 1500, weight: 'Varios', height: 'Varios' },
      { id: 'masters', name: 'Masters 40+', description: 'Categoría Veterana', price: 2000, weight: 'Varios', height: 'Varios' },
      { id: 'junior', name: 'Junior', description: 'Menos de 23 años', price: 1200, weight: 'Varios', height: 'Varios' },
    ],
    registrationFee: 2000,
  }
}

type StepType = 1 | 2 | 3 | 4 | 5 | 6

interface RegistrationData {
  selectedCategories: string[]
  acceptRules: boolean
  fullName: string
  birthDate: string
  dni: string
  height: number
  weight: number
  gym: string
  trainer: string
  phone: string
  email: string
  saveProfile: boolean
  musicFile: File | null
  musicTitle: string
  photoFile: File | null
  photoPreview: string | null
  paymentMethod: 'mercadopago' | 'card' | 'transfer'
  acceptTerms: boolean
  acceptRefund: boolean
  acceptImages: boolean
}

export default function EventRegistrationPage({ params }: { params: { id: string } }) {
  const event = getEventData(params.id)
  const [currentStep, setCurrentStep] = useState<StepType>(1)
  const [isLoading, setIsLoading] = useState(false)
  const [registrationComplete, setRegistrationComplete] = useState(false)
  const [confirmationNumber] = useState('IFBB-2025-' + Math.random().toString(36).substr(2, 5).toUpperCase())
  const [recommendations, setRecommendations] = useState<RecommendationResult | null>(null)

  const [data, setData] = useState<RegistrationData>({
    selectedCategories: [],
    acceptRules: false,
    fullName: 'Juan Pérez',
    birthDate: '1990-05-15',
    dni: '12345678',
    height: 175,
    weight: 85,
    gym: 'Gold Gym CABA',
    trainer: 'Carlos López',
    phone: '1123456789',
    email: 'juan@email.com',
    saveProfile: true,
    musicFile: null,
    musicTitle: '',
    photoFile: null,
    photoPreview: null,
    paymentMethod: 'mercadopago',
    acceptTerms: false,
    acceptRefund: false,
    acceptImages: false,
  })

  // Save progress to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('eventRegistration')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setData(parsed)
      } catch (e) {
        console.error('Failed to load saved data')
      }
    }
  }, [])

  // Calculate recommendations when on Step 1
  useEffect(() => {
    if (currentStep === 1) {
      const age = calculateAgeInYears(data.birthDate)
      const recs = getRecommendations(data.height, age)
      setRecommendations(recs)
      // Auto-select first recommendation if not already selected
      if (recs.recommendedCategoryIds.length > 0 && data.selectedCategories.length === 0) {
        setData(prev => ({
          ...prev,
          selectedCategories: [recs.recommendedCategoryIds[0]]
        }))
      }
    }
  }, [currentStep, data.height, data.birthDate])

  useEffect(() => {
    localStorage.setItem('eventRegistration', JSON.stringify(data))
  }, [data])

  const canProceedStep1 = data.selectedCategories.length > 0 && data.acceptRules
  const canProceedStep2 = data.fullName && data.birthDate && data.dni && data.height && data.weight && data.phone && data.email
  const canProceedStep3 = true
  const canProceedStep4 = true
  const canProceedStep5 = true
  const canConfirm = data.acceptTerms && data.acceptRefund && data.acceptImages

  const canProceed = {
    1: canProceedStep1,
    2: canProceedStep2,
    3: canProceedStep3,
    4: canProceedStep4,
    5: canProceedStep5,
    6: true,
  } as const

  const totalPrice = data.selectedCategories.reduce((sum, catId) => {
    const category = event.categories.find(c => c.id === catId)
    return sum + (category?.price || 0)
  }, 0) + event.registrationFee

  const handleCategoryToggle = (categoryId: string) => {
    setData(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(categoryId)
        ? prev.selectedCategories.filter(id => id !== categoryId)
        : [...prev.selectedCategories, categoryId]
    }))
  }

  const handleMusicUpload = (file: File | null) => {
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert('El archivo es muy grande. Máximo 3MB.')
        return
      }
      if (!['audio/mpeg', 'audio/wav', 'audio/mp3'].includes(file.type)) {
        alert('Formato no válido. Solo MP3 y WAV.')
        return
      }
      setData(prev => ({ ...prev, musicFile: file }))
    }
  }

  const handlePhotoUpload = (file: File | null) => {
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('El archivo es muy grande. Máximo 5MB.')
        return
      }
      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
        alert('Formato no válido. Solo JPG y PNG.')
        return
      }
      const reader = new FileReader()
      reader.onload = (e) => {
        setData(prev => ({
          ...prev,
          photoFile: file,
          photoPreview: e.target?.result as string
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleNextStep = async () => {
    if (!canProceed[currentStep]) {
      alert('Por favor completa todos los campos requeridos.')
      return
    }

    if (currentStep === 5) {
      if (!canConfirm) {
        alert('Por favor acepta todos los términos y condiciones.')
        return
      }
      setIsLoading(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        setRegistrationComplete(true)
        localStorage.removeItem('eventRegistration')
      } catch (error) {
        alert('Error en el proceso de pago. Por favor intenta de nuevo.')
      } finally {
        setIsLoading(false)
      }
    } else if (currentStep < 5) {
      setCurrentStep((currentStep + 1) as StepType)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as StepType)
    }
  }

  if (registrationComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0B0B0F] to-[#1a1a1f]">
        <Navigation />
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
          <div className="max-w-2xl w-full">
            <div className="text-center mb-8">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B78B1E] to-[#FFD700] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-[#0B0B0F]" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                ¡Inscripción Confirmada!
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Tu inscripción al campeonato ha sido procesada exitosamente.
              </p>
            </div>

            {/* Confirmation Card */}
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader className="border-b border-[#2a2a2f]">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-[#B78B1E]">
                      {confirmationNumber}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Número de confirmación
                    </CardDescription>
                  </div>
                  <div className="w-24 h-24 bg-white p-2 rounded-lg">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
                      QR Code
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">Evento</Label>
                      <p className="font-semibold text-foreground">{event.title}</p>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Fecha</Label>
                      <p className="font-semibold text-foreground">{event.date}</p>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm text-muted-foreground mb-2 block">Categorías Seleccionadas</Label>
                    <div className="space-y-2">
                      {data.selectedCategories.map(catId => {
                        const cat = event.categories.find(c => c.id === catId)
                        return (
                          <div key={catId} className="flex justify-between items-center bg-[#2a2a2f] p-3 rounded-lg">
                            <span className="text-foreground">{cat?.name} - {cat?.description}</span>
                            <span className="text-[#B78B1E] font-semibold">${cat?.price}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="border-t border-[#2a2a2f] pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-foreground">Total</span>
                      <span className="text-2xl font-bold text-[#B78B1E]">${totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Próximos Pasos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#B78B1E] text-[#0B0B0F] flex items-center justify-center font-bold text-sm">
                        <Check className="w-4 h-4" />
                      </div>
                      <div className="w-1 h-12 bg-[#2a2a2f] my-2" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Inscripción confirmada</p>
                      <p className="text-sm text-muted-foreground">Hoy</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full border-2 border-[#B78B1E] text-muted-foreground flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="w-1 h-12 bg-[#2a2a2f] my-2" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Revisión de música y fotos</p>
                      <p className="text-sm text-muted-foreground">24-48 horas</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full border-2 border-[#B78B1E] text-muted-foreground flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="w-1 h-12 bg-[#2a2a2f] my-2" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Pesaje (Weigh-in)</p>
                      <p className="text-sm text-muted-foreground">14 de Marzo, 2025 - 14:00</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full border-2 border-[#B78B1E] text-muted-foreground flex items-center justify-center">
                        <Trophy className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Competencia</p>
                      <p className="text-sm text-muted-foreground">15 de Marzo, 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="btn-group-responsive">
              <Button
                variant="outline"
                className="border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E]/10 sm:flex-1"
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar Comprobante
              </Button>
              <Link href="/dashboard/mis-eventos" className="sm:flex-1">
                <Button className="w-full bg-gradient-to-r from-[#B78B1E] to-[#FFD700] text-[#0B0B0F] font-semibold hover:shadow-lg hover:shadow-[#B78B1E]/50">
                  <Home className="w-4 h-4 mr-2" />
                  Mis Eventos
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0F] to-[#1a1a1f]">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Inscripción a {event.title}
          </h1>
          <p className="text-muted-foreground">Completa los siguientes pasos para registrarte</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {([1, 2, 3, 4, 5] as StepType[]).map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all',
                    currentStep >= step
                      ? 'bg-gradient-to-r from-[#B78B1E] to-[#FFD700] text-[#0B0B0F]'
                      : 'bg-[#2a2a2f] text-muted-foreground'
                  )}
                >
                  {currentStep > step ? <Check className="w-5 h-5" /> : step}
                </div>
                {step < 5 && (
                  <div
                    className={cn(
                      'h-1 flex-1 mx-2 transition-all',
                      currentStep > step
                        ? 'bg-gradient-to-r from-[#B78B1E] to-[#FFD700]'
                        : 'bg-[#2a2a2f]'
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Evento</span>
            <span>Información</span>
            <span>Música</span>
            <span>Foto</span>
            <span>Pago</span>
          </div>
        </div>

        {/* Step 1: Event & Category Selection */}
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Información del Evento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#B78B1E] mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Fecha</p>
                      <p className="font-semibold text-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B78B1E] mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="font-semibold text-foreground">{event.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations Section */}
            {recommendations && recommendations.recommendedCategoryIds.length > 0 && (
              <Card className="bg-gradient-to-r from-[#B78B1E]/20 to-[#FFD700]/10 border-[#B78B1E] mb-8">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#B78B1E]" />
                    <CardTitle className="text-foreground">Recomendado para Ti</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {recommendations.details}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {event.categories
                      .filter(cat => recommendations.recommendedCategoryIds.includes(cat.id))
                      .map((category) => (
                        <div
                          key={category.id}
                          className={cn(
                            'p-4 rounded-lg border-2 transition-all cursor-pointer relative overflow-hidden',
                            data.selectedCategories.includes(category.id)
                              ? 'bg-[#B78B1E]/20 border-[#B78B1E] shadow-lg shadow-[#B78B1E]/30'
                              : 'bg-[#B78B1E]/10 border-[#B78B1E] hover:shadow-md hover:shadow-[#B78B1E]/20'
                          )}
                          onClick={() => handleCategoryToggle(category.id)}
                        >
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-gradient-to-r from-[#B78B1E] to-[#FFD700] text-[#0B0B0F] font-semibold">
                              Recomendado
                            </Badge>
                          </div>
                          <div className="flex items-start gap-3">
                            <Checkbox
                              checked={data.selectedCategories.includes(category.id)}
                              onCheckedChange={() => handleCategoryToggle(category.id)}
                              className="mt-1"
                            />
                            <div className="flex-1 pr-32">
                              <div className="font-semibold text-foreground">
                                {category.name} - {category.description}
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                Altura: {category.height} | Peso: {category.weight}
                              </p>
                            </div>
                            <Badge className="ml-2 bg-[#B78B1E] text-[#0B0B0F] font-semibold whitespace-nowrap">
                              ${category.price}
                            </Badge>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Categories */}
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground">Todas las Categorías</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Puedes seleccionar múltiples categorías. El precio se calcula automáticamente.
                    </CardDescription>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-[#B78B1E] hover:bg-[#B78B1E]/10"
                        >
                          <Info className="w-5 h-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs bg-[#2a2a2f] border-[#B78B1E]">
                        <p className="text-foreground font-semibold mb-2">Criterios de Categorías:</p>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Men's Physique:</p>
                          <ul className="ml-2 space-y-1">
                            <li>Class A: 168-171.9cm</li>
                            <li>Class B: 172-175.9cm</li>
                            <li>Class C: 176-179.9cm</li>
                            <li>Class D: 180+cm</li>
                          </ul>
                          <p className="mt-2">Women's Bikini:</p>
                          <ul className="ml-2 space-y-1">
                            <li>Class A: Menos 160cm</li>
                            <li>Class B: 160-163.9cm</li>
                            <li>Class C: 164-167.9cm</li>
                            <li>Class D: 168+cm</li>
                          </ul>
                          <p className="mt-2">Edad: Masters 40+, Masters 50+</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto pr-4">
                  {event.categories.map((category) => {
                    const isRecommended = recommendations?.recommendedCategoryIds.includes(category.id)
                    return (
                      <div
                        key={category.id}
                        className={cn(
                          'p-4 rounded-lg border-2 transition-all cursor-pointer',
                          isRecommended && data.selectedCategories.includes(category.id)
                            ? 'bg-[#B78B1E]/10 border-[#B78B1E] shadow-lg shadow-[#B78B1E]/30'
                            : data.selectedCategories.includes(category.id)
                            ? 'bg-[#0B0B0F]/80 border-[#B78B1E] opacity-80'
                            : 'bg-[#0B0B0F] border-[#2a2a2f] hover:border-[#B78B1E]/50'
                        )}
                        onClick={() => handleCategoryToggle(category.id)}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox
                            checked={data.selectedCategories.includes(category.id)}
                            onCheckedChange={() => handleCategoryToggle(category.id)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="font-semibold text-foreground">
                              {category.name} - {category.description}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Altura: {category.height} | Peso: {category.weight}
                            </p>
                          </div>
                          <Badge className="ml-2 bg-[#B78B1E] text-[#0B0B0F] font-semibold whitespace-nowrap">
                            ${category.price}
                          </Badge>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Cost Summary */}
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Resumen de Costos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {data.selectedCategories.map(catId => {
                    const cat = event.categories.find(c => c.id === catId)
                    return (
                      <div key={catId} className="flex justify-between text-foreground">
                        <span>{cat?.name}</span>
                        <span className="font-semibold">${cat?.price}</span>
                      </div>
                    )
                  })}
                </div>
                <div className="border-t border-[#2a2a2f] pt-3">
                  <div className="flex justify-between text-foreground">
                    <span>Arancel de Inscripción</span>
                    <span className="font-semibold">${event.registrationFee}</span>
                  </div>
                </div>
                <div className="bg-[#B78B1E]/10 border border-[#B78B1E] rounded-lg p-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-[#B78B1E]">${totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rules Acceptance */}
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Reglamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-[#0B0B0F] p-4 rounded-lg max-h-48 overflow-y-auto">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    El competidor se compromete a cumplir con todas las normas establecidas por IFBB Argentina.
                    Incluye comportamiento deportivo, presentación física según estándares, y respeto hacia
                    jueces y organizadores. El incumplimiento de estas normas puede resultar en descalificación.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="rules"
                    checked={data.acceptRules}
                    onCheckedChange={(checked) =>
                      setData(prev => ({ ...prev, acceptRules: checked as boolean }))
                    }
                  />
                  <Label htmlFor="rules" className="text-foreground cursor-pointer flex-1">
                    Acepto el reglamento de la competencia
                  </Label>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E]/10"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Descargar PDF Completo
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {currentStep === 2 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Información Personal</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Completa tus datos personales. Estos datos se utilizarán para la acreditación.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-foreground mb-2 block">Nombre Completo *</Label>
                    <Input
                      value={data.fullName}
                      onChange={(e) => setData(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="Juan Pérez"
                      className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                    />
                  </div>
                  <div>
                    <Label className="text-foreground mb-2 block">Fecha de Nacimiento *</Label>
                    <Input
                      type="date"
                      value={data.birthDate}
                      onChange={(e) => setData(prev => ({ ...prev, birthDate: e.target.value }))}
                      className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-foreground mb-2 block">DNI / Pasaporte *</Label>
                    <Input
                      value={data.dni}
                      onChange={(e) => setData(prev => ({ ...prev, dni: e.target.value }))}
                      placeholder="12345678"
                      className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                    />
                  </div>
                  <div>
                    <Label className="text-foreground mb-2 block">Teléfono *</Label>
                    <Input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => setData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="1123456789"
                      className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-foreground mb-2 block">Email de Contacto *</Label>
                  <Input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="correo@email.com"
                    className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                  />
                </div>

                <div>
                  <Label className="text-foreground mb-4 block">Altura: {data.height} cm</Label>
                  <Slider
                    value={[data.height]}
                    onValueChange={(value) => setData(prev => ({ ...prev, height: value[0] }))}
                    min={150}
                    max={210}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <Label className="text-foreground mb-4 block">Peso Actual: {data.weight} kg</Label>
                  <Slider
                    value={[data.weight]}
                    onValueChange={(value) => setData(prev => ({ ...prev, weight: value[0] }))}
                    min={50}
                    max={150}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-foreground mb-2 block">Equipo/Gimnasio</Label>
                    <Input
                      value={data.gym}
                      onChange={(e) => setData(prev => ({ ...prev, gym: e.target.value }))}
                      placeholder="Gold Gym"
                      className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                    />
                  </div>
                  <div>
                    <Label className="text-foreground mb-2 block">Entrenador</Label>
                    <Input
                      value={data.trainer}
                      onChange={(e) => setData(prev => ({ ...prev, trainer: e.target.value }))}
                      placeholder="Carlos López"
                      className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#2a2a2f]">
                  <Checkbox
                    id="saveProfile"
                    checked={data.saveProfile}
                    onCheckedChange={(checked) =>
                      setData(prev => ({ ...prev, saveProfile: checked as boolean }))
                    }
                  />
                  <Label htmlFor="saveProfile" className="text-foreground cursor-pointer flex-1">
                    Guardar esta información en mi perfil
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Music Upload */}
        {currentStep === 3 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Música de Posing</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Sube la música que usarás durante tu presentación
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Requirements */}
                <Alert className="bg-[#B78B1E]/10 border-[#B78B1E]">
                  <AlertCircle className="h-4 w-4 text-[#B78B1E]" />
                  <AlertDescription className="text-foreground">
                    <div className="space-y-1">
                      <p className="font-semibold">Requisitos:</p>
                      <ul className="text-sm space-y-1 ml-4 list-disc">
                        <li>Duración máxima: 60 segundos</li>
                        <li>Formatos aceptados: MP3, WAV</li>
                        <li>Tamaño máximo: 3MB</li>
                        <li>Sin contenido explícito</li>
                        <li>Formato: [Apellido]_[Categoría].mp3</li>
                      </ul>
                    </div>
                  </AlertDescription>
                </Alert>

                {/* Upload Area */}
                {!data.musicFile ? (
                  <div
                    className="border-2 border-dashed border-[#B78B1E]/50 rounded-lg p-8 text-center cursor-pointer transition-all hover:border-[#B78B1E] hover:bg-[#B78B1E]/5"
                    onClick={() => document.getElementById('music-input')?.click()}
                  >
                    <Music className="w-12 h-12 text-[#B78B1E] mx-auto mb-4" />
                    <p className="font-semibold text-foreground mb-2">Arrastra tu archivo aquí</p>
                    <p className="text-sm text-muted-foreground">o haz clic para seleccionar</p>
                    <input
                      id="music-input"
                      type="file"
                      accept="audio/mpeg,audio/wav,.mp3,.wav"
                      className="hidden"
                      onChange={(e) => handleMusicUpload(e.target.files?.[0] || null)}
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-[#0B0B0F] p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <Music className="w-8 h-8 text-[#B78B1E]" />
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{data.musicFile.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(data.musicFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <audio
                        controls
                        className="w-full mb-4"
                        src={URL.createObjectURL(data.musicFile)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E]/10"
                        onClick={() => document.getElementById('music-input-replace')?.click()}
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Reemplazar
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-red-500 text-red-500 hover:bg-red-500/10"
                        onClick={() => setData(prev => ({ ...prev, musicFile: null }))}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Eliminar
                      </Button>
                      <input
                        id="music-input-replace"
                        type="file"
                        accept="audio/mpeg,audio/wav,.mp3,.wav"
                        className="hidden"
                        onChange={(e) => handleMusicUpload(e.target.files?.[0] || null)}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <Label className="text-foreground mb-2 block">Título de la Canción</Label>
                  <Input
                    value={data.musicTitle}
                    onChange={(e) => setData(prev => ({ ...prev, musicTitle: e.target.value }))}
                    placeholder="Ej: Pérez_Men's Physique A"
                    className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                  />
                </div>

                <div className="bg-[#0B0B0F] p-4 rounded-lg">
                  <Button
                    variant="outline"
                    className="w-full border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E]/10"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Usar Música del Evento Anterior
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 4: Photo Upload */}
        {currentStep === 4 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Foto de Identificación</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Sube una foto clara de identificación o tu posing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Requirements */}
                <Alert className="bg-[#B78B1E]/10 border-[#B78B1E]">
                  <AlertCircle className="h-4 w-4 text-[#B78B1E]" />
                  <AlertDescription className="text-foreground">
                    <div className="space-y-1">
                      <p className="font-semibold">Requisitos:</p>
                      <ul className="text-sm space-y-1 ml-4 list-disc">
                        <li>Foto reciente (últimos 30 días)</li>
                        <li>Fondo claro o blanco</li>
                        <li>Pose frontal relajada o posing obligatorio</li>
                        <li>Formatos aceptados: JPG, PNG</li>
                        <li>Tamaño máximo: 5MB</li>
                      </ul>
                    </div>
                  </AlertDescription>
                </Alert>

                {/* Upload Area */}
                {!data.photoPreview ? (
                  <div
                    className="border-2 border-dashed border-[#B78B1E]/50 rounded-lg p-8 text-center cursor-pointer transition-all hover:border-[#B78B1E] hover:bg-[#B78B1E]/5 aspect-video flex flex-col items-center justify-center"
                    onClick={() => document.getElementById('photo-input')?.click()}
                  >
                    <ImageIcon className="w-12 h-12 text-[#B78B1E] mx-auto mb-4" />
                    <p className="font-semibold text-foreground mb-2">Arrastra tu foto aquí</p>
                    <p className="text-sm text-muted-foreground">o haz clic para seleccionar</p>
                    <input
                      id="photo-input"
                      type="file"
                      accept="image/jpeg,image/png,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => handlePhotoUpload(e.target.files?.[0] || null)}
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-[#0B0B0F] p-4 rounded-lg">
                      <img
                        src={data.photoPreview}
                        alt="Preview"
                        className="w-full max-h-96 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E]/10"
                        onClick={() => document.getElementById('photo-input-replace')?.click()}
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Reemplazar
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-red-500 text-red-500 hover:bg-red-500/10"
                        onClick={() => setData(prev => ({ ...prev, photoPreview: null, photoFile: null }))}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Eliminar
                      </Button>
                      <input
                        id="photo-input-replace"
                        type="file"
                        accept="image/jpeg,image/png,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={(e) => handlePhotoUpload(e.target.files?.[0] || null)}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 5: Payment & Confirmation */}
        {currentStep === 5 && (
          <div className="max-w-4xl mx-auto">
            {/* Summary */}
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Resumen de Inscripción</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground">Evento</Label>
                    <p className="font-semibold text-foreground">{event.title}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Fecha</Label>
                    <p className="font-semibold text-foreground">{event.date}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Categorías</Label>
                  <div className="space-y-2">
                    {data.selectedCategories.map(catId => {
                      const cat = event.categories.find(c => c.id === catId)
                      return (
                        <div key={catId} className="flex justify-between items-center bg-[#0B0B0F] p-3 rounded-lg">
                          <span className="text-foreground">{cat?.name} - {cat?.description}</span>
                          <span className="text-[#B78B1E] font-semibold">${cat?.price}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="border-t border-[#2a2a2f] pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Arancel</span>
                    <span className="font-semibold text-foreground">${event.registrationFee}</span>
                  </div>
                </div>
                <div className="bg-[#B78B1E]/10 border border-[#B78B1E] rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-3xl font-bold text-[#B78B1E]">${totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Método de Pago</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={data.paymentMethod} onValueChange={(value: any) => setData(prev => ({ ...prev, paymentMethod: value }))}>
                  {/* MercadoPago */}
                  <div className="mb-4 p-4 border border-[#2a2a2f] rounded-lg hover:border-[#B78B1E]/50 cursor-pointer transition-all">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="mercadopago" id="mp" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="mp" className="font-semibold text-foreground cursor-pointer">
                          MercadoPago
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">Transferencia bancaria segura</p>
                      </div>
                    </div>
                    {data.paymentMethod === 'mercadopago' && (
                      <div className="mt-4 ml-8 p-4 bg-[#0B0B0F] rounded-lg text-center">
                        <div className="inline-block p-4 bg-white rounded">
                          <QrCode className="w-24 h-24 text-gray-400" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Código QR para pagar</p>
                      </div>
                    )}
                  </div>

                  {/* Credit Card */}
                  <div className="mb-4 p-4 border border-[#2a2a2f] rounded-lg hover:border-[#B78B1E]/50 cursor-pointer transition-all">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="card" id="card" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="card" className="font-semibold text-foreground cursor-pointer">
                          Tarjeta de Crédito/Débito
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">Visa, Mastercard, American Express</p>
                      </div>
                    </div>
                    {data.paymentMethod === 'card' && (
                      <div className="mt-4 ml-8 space-y-3">
                        <Input
                          placeholder="Número de tarjeta"
                          className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <Input
                            placeholder="MM/AA"
                            className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                          />
                          <Input
                            placeholder="CVV"
                            className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                          />
                        </div>
                        <Input
                          placeholder="Nombre del titular"
                          className="bg-[#0B0B0F] border-[#2a2a2f] text-foreground"
                        />
                      </div>
                    )}
                  </div>

                  {/* Bank Transfer */}
                  <div className="p-4 border border-[#2a2a2f] rounded-lg hover:border-[#B78B1E]/50 cursor-pointer transition-all">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="transfer" id="transfer" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="transfer" className="font-semibold text-foreground cursor-pointer">
                          Transferencia Bancaria
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">Depósito directo a nuestra cuenta</p>
                      </div>
                    </div>
                    {data.paymentMethod === 'transfer' && (
                      <div className="mt-4 ml-8 space-y-2 bg-[#0B0B0F] p-4 rounded-lg text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Banco:</span>
                          <span className="font-semibold text-foreground">Banco Credicoop</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">CBU:</span>
                          <span className="font-semibold text-foreground">1430003470108200000000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Titular:</span>
                          <span className="font-semibold text-foreground">IFBB Argentina</span>
                        </div>
                      </div>
                    )}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Terms */}
            <Card className="bg-[#1a1a1f] border-[#2a2a2f] mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Términos y Condiciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={data.acceptTerms}
                    onCheckedChange={(checked) =>
                      setData(prev => ({ ...prev, acceptTerms: checked as boolean }))
                    }
                  />
                  <Label htmlFor="terms" className="text-foreground cursor-pointer">
                    Acepto los términos y condiciones de participación
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="refund"
                    checked={data.acceptRefund}
                    onCheckedChange={(checked) =>
                      setData(prev => ({ ...prev, acceptRefund: checked as boolean }))
                    }
                  />
                  <Label htmlFor="refund" className="text-foreground cursor-pointer">
                    Acepto la política de devoluciones (no hay reembolsos dentro de 7 días del evento)
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="images"
                    checked={data.acceptImages}
                    onCheckedChange={(checked) =>
                      setData(prev => ({ ...prev, acceptImages: checked as boolean }))
                    }
                  />
                  <Label htmlFor="images" className="text-foreground cursor-pointer">
                    Autorizo el uso de mis imágenes y videos durante el evento para fines de promoción
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Security Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-[#B78B1E]">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Pago seguro - SSL encriptado</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="max-w-4xl mx-auto btn-group-responsive mb-16">
          <Button
            variant="outline"
            className="border-[#B78B1E] text-[#B78B1E] hover:bg-[#B78B1E]/10 sm:flex-1"
            onClick={handlePreviousStep}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          <Button
            variant="ghost"
            className="text-[#B78B1E] hover:bg-[#B78B1E]/10 sm:flex-1"
          >
            <Save className="w-4 h-4 mr-2" />
            Guardar y continuar después
          </Button>

          <Button
            onClick={handleNextStep}
            disabled={!canProceed[currentStep] || isLoading}
            className="bg-gradient-to-r from-[#B78B1E] to-[#FFD700] text-[#0B0B0F] font-semibold hover:shadow-lg hover:shadow-[#B78B1E]/50 sm:flex-1"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Procesando...
              </>
            ) : (
              <>
                {currentStep === 5 ? 'Confirmar Inscripción' : 'Siguiente'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
