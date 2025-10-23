'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface ComparisonMetric {
  label: string
  yourValue: number | string
  winnerValue: number | string
  unit: string
  isBetter?: 'higher' | 'lower'
}

interface ComparisonData {
  eventId: string
  eventName: string
  category: string
  metrics: ComparisonMetric[]
  yourPlacing: number
  winnerName: string
  winnerPlacing: number
}

const mockCompetitions = [
  { id: '1', name: 'Copa Provincial Córdoba', date: '22 de Febrero, 2025' },
  { id: '2', name: 'Torneo de Verano', date: '10 de Enero, 2025' },
  { id: '3', name: 'Regional Cup 2024', date: '15 de Diciembre, 2024' },
  { id: '4', name: 'Campeonato Provincial', date: '10 de Noviembre, 2024' },
  { id: '5', name: 'Copa Nacional 2024', date: '20 de Octubre, 2024' },
]

const mockCategories = [
  { id: 'mp-class-a', name: "Men's Physique - Class A" },
  { id: 'mp-class-b', name: "Men's Physique - Class B" },
  { id: 'mp-open', name: "Men's Physique - Open" },
  { id: 'bb-light', name: 'Bodybuilding - Light' },
  { id: 'bb-heavy', name: 'Bodybuilding - Heavy' },
]

const mockComparisonData = {
  '1-mp-class-a': {
    eventId: '1',
    eventName: 'Copa Provincial Córdoba',
    category: "Men's Physique - Class A",
    yourPlacing: 5,
    winnerName: 'Carlos Martinez',
    winnerPlacing: 1,
    metrics: [
      { label: 'Altura', yourValue: 175, winnerValue: 173, unit: 'cm', isBetter: 'higher' },
      { label: 'Peso', yourValue: 82, winnerValue: 78, unit: 'kg', isBetter: 'lower' },
      { label: 'Puntuación', yourValue: 88.5, winnerValue: 95.2, unit: 'pts', isBetter: 'higher' },
      { label: 'Simetría', yourValue: 8.2, winnerValue: 9.1, unit: '/10', isBetter: 'higher' },
      { label: 'Definición', yourValue: 7.8, winnerValue: 9.5, unit: '/10', isBetter: 'higher' },
    ]
  },
  '2-mp-class-a': {
    eventId: '2',
    eventName: 'Torneo de Verano',
    category: "Men's Physique - Class A",
    yourPlacing: 3,
    winnerName: 'Diego Lopez',
    winnerPlacing: 1,
    metrics: [
      { label: 'Altura', yourValue: 175, winnerValue: 176, unit: 'cm', isBetter: 'higher' },
      { label: 'Peso', yourValue: 82, winnerValue: 80, unit: 'kg', isBetter: 'lower' },
      { label: 'Puntuación', yourValue: 92.3, winnerValue: 96.8, unit: 'pts', isBetter: 'higher' },
      { label: 'Simetría', yourValue: 8.8, winnerValue: 9.3, unit: '/10', isBetter: 'higher' },
      { label: 'Definición', yourValue: 8.5, winnerValue: 9.2, unit: '/10', isBetter: 'higher' },
    ]
  }
}

const historicalScores = [
  { competition: 'Copa Provincial Córdoba', score: 88.5, date: '22 Feb 2025' },
  { competition: 'Torneo de Verano', score: 92.3, date: '10 Ene 2025' },
  { competition: 'Regional Cup 2024', score: 85.2, date: '15 Dic 2024' },
  { competition: 'Campeonato Provincial', score: 87.8, date: '10 Nov 2024' },
  { competition: 'Copa Nacional 2024', score: 83.5, date: '20 Oct 2024' },
]

const calculateDifference = (yourValue, winnerValue, isBetter) => {
  if (typeof yourValue !== 'number' || typeof winnerValue !== 'number') return 0

  if (isBetter === 'higher') {
    return winnerValue - yourValue
  }
  return yourValue - winnerValue
}

const getMetricColor = (difference, isBetter) => {
  if (difference === 0) return 'text-slate-400'
  if (difference > 0) {
    return isBetter === 'lower' ? 'text-red-500' : 'text-green-500'
  }
  return isBetter === 'lower' ? 'text-green-500' : 'text-red-500'
}

export default function ComparacionPage() {
  const [selectedEvent, setSelectedEvent] = useState('1')
  const [selectedCategory, setSelectedCategory] = useState('mp-class-a')
  const [comparisonData, setComparisonData] = useState(mockComparisonData['1-mp-class-a'])

  const handleEventChange = (eventId) => {
    setSelectedEvent(eventId)
    const key = `${eventId}-${selectedCategory}`
    if (mockComparisonData[key]) {
      setComparisonData(mockComparisonData[key])
    }
  }

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    const key = `${selectedEvent}-${categoryId}`
    if (mockComparisonData[key]) {
      setComparisonData(mockComparisonData[key])
    }
  }

  const averageImprovement = 2.3
  const highestScore = Math.max(...historicalScores.map(s => s.score))
  const lowestScore = Math.min(...historicalScores.map(s => s.score))

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Herramienta de Comparación</h1>
        <p className="text-muted-foreground">Comparate con los ganadores y descubre áreas de mejora.</p>
      </header>

      <section className="space-y-6">
        {/* Selection Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-base">Seleccionar Evento</CardTitle>
            </CardHeader>
            <CardContent>
              <select
                value={selectedEvent}
                onChange={(e) => handleEventChange(e.target.value)}
                className="w-full px-3 py-2 bg-muted border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {mockCompetitions.map(comp => (
                  <option key={comp.id} value={comp.id}>
                    {comp.name} ({comp.date})
                  </option>
                ))}
              </select>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-base">Seleccionar Categoría</CardTitle>
            </CardHeader>
            <CardContent>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-3 py-2 bg-muted border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {mockCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Header */}
        <Card className="bg-gradient-to-r from-slate-800 to-slate-900 border-slate-700">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-sm text-slate-400 mb-2">Tu Desempeño</p>
                <h2 className="text-3xl font-bold text-white mb-1">Posición #{comparisonData.yourPlacing}</h2>
                <Badge variant="secondary">Tu Puntuación</Badge>
              </div>
              <div className="border-l border-slate-700"></div>
              <div>
                <p className="text-sm text-slate-400 mb-2">Ganador de la Categoría</p>
                <h2 className="text-3xl font-bold text-gold mb-1">{comparisonData.winnerName}</h2>
                <Badge className="bg-gold/20 text-gold border-gold/30">Posición #{comparisonData.winnerPlacing}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Metrics Comparison */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Comparación de Métricas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {comparisonData.metrics.map((metric, idx) => {
                const diff = calculateDifference(
                  typeof metric.yourValue === 'number' ? metric.yourValue : 0,
                  typeof metric.winnerValue === 'number' ? metric.winnerValue : 0,
                  metric.isBetter
                )
                const isYouBetter = diff < 0
                const colorClass = getMetricColor(diff, metric.isBetter)

                return (
                  <div key={idx} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{metric.label}</h3>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Tu valor</p>
                          <p className="text-xl font-bold text-white">
                            {metric.yourValue} {metric.unit}
                          </p>
                        </div>
                        <div className="text-2xl text-slate-600">|</div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Ganador</p>
                          <p className="text-xl font-bold text-gold">
                            {metric.winnerValue} {metric.unit}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Progress bar comparison */}
                    <div className="space-y-2">
                      <div className="h-8 bg-muted rounded-lg overflow-hidden flex">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center transition-all"
                          style={{
                            width: `${Math.min(100, Math.max(20, (typeof metric.yourValue === 'number' ? metric.yourValue : 0) / (typeof metric.winnerValue === 'number' ? metric.winnerValue : 1) * 100))}%`
                          }}
                        >
                          <span className="text-xs font-bold text-white">Tu</span>
                        </div>
                      </div>
                      <div className="h-8 bg-muted rounded-lg overflow-hidden flex">
                        <div
                          className="bg-gradient-to-r from-gold to-amber-500"
                          style={{ width: '100%' }}
                        >
                          <span className="text-xs font-bold text-slate-900 px-2 py-1">Ganador</span>
                        </div>
                      </div>
                    </div>

                    {/* Difference indicator */}
                    <div className="mt-3 flex items-center gap-2">
                      {isYouBetter ? (
                        <>
                          <TrendingUp className={`w-4 h-4 ${colorClass}`} />
                          <span className={`text-sm font-medium ${colorClass}`}>
                            Mejor por {Math.abs(diff).toFixed(1)} {metric.unit}
                          </span>
                        </>
                      ) : (
                        <>
                          <TrendingDown className={`w-4 h-4 ${colorClass}`} />
                          <span className={`text-sm font-medium ${colorClass}`}>
                            Diferencia: +{diff.toFixed(1)} {metric.unit}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Areas of Improvement */}
        <Card className="bg-card border-red-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">Target Symbol</span>
              Áreas de Mejora
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Definición Muscular</h4>
                <p className="text-sm text-slate-300">
                  Tu puntuación: 7.8/10 vs Ganador: 9.5/10. Brecha de -1.7 puntos. Enfócate en una dieta más estricta y entrenamiento de volumen controlado.
                </p>
              </div>
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Control de Peso</h4>
                <p className="text-sm text-slate-300">
                  El ganador promedio en tu categoría pesa 78kg vs tus 82kg. Intenta perder 3-4kg manteniendo la masa muscular.
                </p>
              </div>
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Simetría</h4>
                <p className="text-sm text-slate-300">
                  Tu puntuación: 8.2/10. Excelente progreso. Sigue trabajando en ejercicios unilaterales para mantener el balance perfecto.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Historical Trends */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Tendencia Histórica de Puntajes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Simple chart representation */}
              <div className="h-64 flex items-end justify-between gap-2 p-4 bg-muted/30 rounded-lg">
                {historicalScores.map((score, idx) => {
                  const maxScore = 100
                  const heightPercent = (score.score / maxScore) * 100

                  return (
                    <div key={idx} className="flex flex-col items-center flex-1">
                      <div className="w-full flex flex-col items-center">
                        <div
                          className="w-full bg-gradient-to-t from-gold to-amber-400 rounded-t transition-all hover:from-amber-400 hover:to-yellow-300"
                          style={{ height: `${heightPercent}%`, minHeight: '4px' }}
                        ></div>
                        <span className="text-xs font-bold text-gold mt-2">{score.score}</span>
                      </div>
                      <span className="text-xs text-muted-foreground mt-4 text-center text-wrap leading-tight">
                        {score.competition.split(' ')[0]}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Puntaje Máximo</p>
                  <p className="text-2xl font-bold text-gold">{highestScore}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Promedio</p>
                  <p className="text-2xl font-bold text-white">
                    {(historicalScores.reduce((sum, s) => sum + s.score, 0) / historicalScores.length).toFixed(1)}
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Mejora Promedio</p>
                  <p className="text-2xl font-bold text-green-500">+{averageImprovement}</p>
                </div>
              </div>

              <p className="text-center text-sm text-slate-400 mt-4">
                Mejora promedio por competencia: <span className="text-green-500 font-semibold">+{averageImprovement} puntos</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="bg-gradient-to-r from-gold/10 to-amber-500/10 border-gold/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">Lightbulb Symbol</span>
              Recomendaciones Personalizadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">1.</span>
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Programa de acondicionamiento:</span> Los ganadores en tu categoría tienen un promedio de 78kg. Implementa un déficit calórico moderado (-300 calorías/día) durante 8 semanas.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">2.</span>
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Mejora de definición:</span> Aumenta el volumen de cardio (20 min, 4x/semana) y trabaja más ejercicios de aislamiento en los últimos 6 semanas previas a la competencia.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">3.</span>
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Trabajo de simetría:</span> Dedica sesiones enfocadas en ejercicios unilaterales para corregir desbalances musculares.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-gold font-bold flex-shrink-0">4.</span>
                <p className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Posing y presentación:</span> Con tu puntuación de simetría en 8.2/10, tu fortaleza está en la proporción. Practica más posing en escena para maximizar tu presentación.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Targets */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Objetivos para la Próxima Competencia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/50 rounded-lg border border-gold/30">
                <h4 className="font-semibold text-white mb-2">Peso Meta</h4>
                <p className="text-3xl font-bold text-gold mb-1">78 kg</p>
                <p className="text-sm text-slate-400">Actual: 82kg | Meta: -4kg</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg border border-gold/30">
                <h4 className="font-semibold text-white mb-2">Puntaje Meta</h4>
                <p className="text-3xl font-bold text-gold mb-1">94+</p>
                <p className="text-sm text-slate-400">Promedio ganador: 95.2</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg border border-gold/30">
                <h4 className="font-semibold text-white mb-2">Definición Meta</h4>
                <p className="text-3xl font-bold text-gold mb-1">9.2</p>
                <p className="text-sm text-slate-400">De 7.8 a 9.2/10</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg border border-gold/30">
                <h4 className="font-semibold text-white mb-2">Posición Meta</h4>
                <p className="text-3xl font-bold text-gold mb-1">1er</p>
                <p className="text-sm text-slate-400">De 5to a 1er lugar</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
