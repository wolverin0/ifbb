'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Trophy,
  Activity,
  Target,
  Download,
  Share2,
  ArrowUp,
  ArrowDown,
  Zap,
  Calendar,
} from "lucide-react"

// Mock data for competitions
const competitionsData = [
  { date: 'Ene 15', score: 78, event: 'Copa Inicial', placing: 5 },
  { date: 'Feb 20', score: 82, event: 'Torneo de Verano', placing: 3 },
  { date: 'Mar 10', score: 85, event: 'Copa Regional', placing: 2 },
  { date: 'Apr 05', score: 87, event: 'Open Metropolitana', placing: 2 },
  { date: 'May 12', score: 90, event: 'Torneo Nacional U25', placing: 1 },
  { date: 'Jun 18', score: 91, event: 'Copa Provincial', placing: 1 },
  { date: 'Jul 22', score: 93, event: 'Campeonato Verano', placing: 1 },
  { date: 'Aug 29', score: 95, event: 'Copa Provincial', placing: 1 },
]

const weightData = [
  { month: 'Sep', weight: 85 },
  { month: 'Oct', weight: 84.8 },
  { month: 'Nov', weight: 84.5 },
  { month: 'Dec', weight: 84.2 },
  { month: 'Ene', weight: 83.8 },
  { month: 'Feb', weight: 83.5 },
  { month: 'Mar', weight: 83.2 },
  { month: 'Apr', weight: 83 },
  { month: 'May', weight: 82.6 },
  { month: 'Jun', weight: 82.3 },
  { month: 'Jul', weight: 82 },
  { month: 'Aug', weight: 82 },
]

const categoryPerformance = [
  { category: 'Mens Physique - Open', competitions: 4, bestPlacing: 1, avgScore: 91.5, winRate: 75 },
  { category: 'Mens Physique - U25', competitions: 3, bestPlacing: 1, avgScore: 87.3, winRate: 66 },
  { category: 'Clasica', competitions: 1, bestPlacing: 2, avgScore: 85, winRate: 0 },
]

const milestones = [
  { date: 'Ene 15, 2024', title: 'Primera Competencia', description: 'Copa Inicial - 5to Puesto', icon: '🏁' },
  { date: 'Feb 20, 2024', title: 'Primer Top 3', description: 'Torneo de Verano - 3er Puesto', icon: '🥉' },
  { date: 'May 12, 2024', title: 'Primer Triunfo', description: 'Torneo Nacional U25 - 1er Puesto', icon: '🥇' },
  { date: 'Jul 22, 2024', title: 'Racha de Victorias', description: '3 victorias consecutivas (May-Jul)', icon: '⚡' },
]

const defaultGoals = [
  { id: 1, text: 'Ganar Campeonato Nacional 2025', completed: 0 },
  { id: 2, text: 'Mejorar puntaje a 95+', completed: 100 },
  { id: 3, text: 'Competir en 4 eventos este ano', completed: 75 },
]

const upcomingEvents = [
  { date: '23 Nov, 2025', event: 'Campeonato Nacional', daysUntil: 23 },
  { date: '15 Dec, 2025', event: 'Open Metropolitana', daysUntil: 46 },
  { date: '20 Jan, 2026', event: 'Copa de Verano', daysUntil: 82 },
]

const ScoreChart = () => {
  const maxScore = 100
  const minScore = 70
  const chartHeight = 200
  const pointsCount = competitionsData.length

  const points = competitionsData.map((data, index) => {
    const x = (index / (pointsCount - 1)) * 100
    const y = 100 - ((data.score - minScore) / (maxScore - minScore)) * 100
    return { x, y, ...data }
  })

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <div className="relative w-full" style={{ height: `${chartHeight}px` }}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[70, 75, 80, 85, 90, 95, 100].map((score) => (
          <line key={score} x1="0" y1={(100 - ((score - 70) / 30) * 100)} x2="100" y2={(100 - ((score - 70) / 30) * 100)} stroke="currentColor" strokeWidth="0.1" opacity="0.2" className="text-muted-foreground"/>
        ))}
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(251, 191, 36)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(251, 191, 36)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d={`${pathD} L 100 100 L 0 100 Z`} fill="url(#scoreGradient)"/>
        <path d={pathD} stroke="currentColor" strokeWidth="0.5" fill="none" className="text-amber-500"/>
        {points.map((p, i) => (<circle key={i} cx={p.x} cy={p.y} r="1" fill="currentColor" className="text-amber-500"/>))}
      </svg>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground px-2 -mb-5">
        {competitionsData.map((data, i) => (<span key={i}>{data.date}</span>))}
      </div>
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground -ml-6">
        {[100, 90, 80, 70].map((score) => (<span key={score}>{score}</span>))}
      </div>
    </div>
  )
}

const WeightChart = () => {
  const maxWeight = 85
  const minWeight = 81
  const chartHeight = 180
  const pointsCount = weightData.length

  const points = weightData.map((data, index) => {
    const x = (index / (pointsCount - 1)) * 100
    const y = 100 - ((data.weight - minWeight) / (maxWeight - minWeight)) * 100
    return { x, y, ...data }
  })

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <div className="relative w-full" style={{ height: `${chartHeight}px` }}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[81, 82, 83, 84, 85].map((weight) => (
          <line key={weight} x1="0" y1={(100 - ((weight - 81) / 4) * 100)} x2="100" y2={(100 - ((weight - 81) / 4) * 100)} stroke="currentColor" strokeWidth="0.1" opacity="0.2" className="text-muted-foreground"/>
        ))}
        <defs>
          <linearGradient id="weightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d={`${pathD} L 100 100 L 0 100 Z`} fill="url(#weightGradient)"/>
        <path d={pathD} stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue-500"/>
        {points.map((p, i) => (<circle key={i} cx={p.x} cy={p.y} r="1" fill="currentColor" className="text-blue-500"/>))}
      </svg>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground px-2 -mb-5">
        {weightData.map((data, i) => (<span key={i}>{data.month}</span>))}
      </div>
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground -ml-6">
        {[85, 83, 81].map((weight) => (<span key={weight}>{weight}kg</span>))}
      </div>
    </div>
  )
}

const GoalsSection = () => {
  const [goals, setGoals] = useState(defaultGoals)
  const [newGoal, setNewGoal] = useState('')

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, { id: Date.now(), text: newGoal, completed: 0 }])
      setNewGoal('')
    }
  }

  const updateGoalProgress = (id, progress) => {
    setGoals(goals.map(g => g.id === id ? { ...g, completed: Math.min(progress, 100) } : g))
  }

  const deleteGoal = (id) => {
    setGoals(goals.filter(g => g.id !== id))
  }

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5" />
          Objetivos 2025
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{goal.text}</p>
              <button onClick={() => deleteGoal(goal.id)} className="text-xs text-muted-foreground hover:text-red-500 transition-colors">Eliminar</button>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all" style={{ width: `${goal.completed}%` }}/>
              </div>
              <span className="text-xs text-muted-foreground w-10 text-right">{goal.completed}%</span>
            </div>
            <input type="range" min="0" max="100" value={goal.completed} onChange={(e) => updateGoalProgress(goal.id, parseInt(e.target.value))} className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
          </div>
        ))}
        <div className="pt-4 border-t border-border">
          <div className="flex gap-2">
            <input type="text" value={newGoal} onChange={(e) => setNewGoal(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addGoal()} placeholder="Agregar nuevo objetivo..." className="flex-1 px-3 py-2 text-sm rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"/>
            <Button onClick={addGoal} size="sm">Agregar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ProgressPage() {
  const [dateRange, setDateRange] = useState('all')

  const stats = [
    { label: 'Competencias', value: '8', icon: Trophy, gradient: 'from-purple-500 to-pink-500' },
    { label: 'Mejor Colocacion', value: '1', icon: Zap, gradient: 'from-amber-400 to-amber-600', subtext: 'Medalla de Oro' },
    { label: 'Promedio de Puntaje', value: '89.5', icon: Activity, gradient: 'from-blue-500 to-cyan-500', subtext: 'puntos' },
    { label: 'Mejora', value: '+15%', icon: TrendingUp, gradient: 'from-green-500 to-emerald-500', subtext: 'vs periodo anterior' },
  ]

  const handleExport = () => {
    const csv = [['Fecha', 'Evento', 'Puntaje', 'Colocacion'], ...competitionsData.map(d => [d.date, d.event, d.score, d.placing])].map(row => row.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'progreso-atletico.csv'
    a.click()
  }

  const handleShare = () => {
    const text = `Mi progreso atletico: 8 competencias, mejor colocacion 1, promedio 89.5 pts, mejora +15%`
    if (navigator.share) {
      navigator.share({ title: 'Mi Progreso', text })
    } else {
      navigator.clipboard.writeText(text)
      alert('Copiado al portapapeles!')
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground">Tu Progreso</h1>
          <p className="text-muted-foreground mt-2">Seguimiento de tu trayectoria atletica y estadisticas</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            Compartir
          </Button>
        </div>
      </div>

      <div className="flex gap-2">
        {[{ label: 'Ultimos 6 meses', value: '6m' }, { label: 'Ultimo ano', value: '1y' }, { label: 'Todo el tiempo', value: 'all' }].map((range) => (
          <Button key={range.value} variant={dateRange === range.value ? 'default' : 'outline'} size="sm" onClick={() => setDateRange(range.value)}>
            {range.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="bg-card overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5`} />
              <CardContent className="pt-6 relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-3xl font-bold mt-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                    {stat.subtext && <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>}
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Progresion de Puntajes
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Ultimas 8 competencias</p>
            </CardHeader>
            <CardContent className="pt-6 pb-12">
              <ScoreChart />
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Proximo Evento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-6 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-lg border border-amber-500/20">
              <div className="text-5xl font-bold text-amber-600">23</div>
              <p className="text-sm text-muted-foreground mt-2">dias hasta</p>
              <p className="font-bold text-foreground">Campeonato Nacional</p>
            </div>
            <div className="space-y-3 pt-4 border-t border-border">
              {upcomingEvents.map((evt, i) => (
                <div key={i} className="p-2 rounded bg-muted/50">
                  <p className="font-medium text-sm">{evt.event}</p>
                  <p className="text-xs text-muted-foreground">{evt.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Hitos Importantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl">{milestone.icon}</div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <p className="text-xs text-muted-foreground">{milestone.date}</p>
                    <p className="font-bold text-foreground">{milestone.title}</p>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Progresion de Peso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Peso Actual</p>
                <p className="text-2xl font-bold text-foreground">82 kg</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Cambio Anual</p>
                <p className="text-2xl font-bold flex items-center gap-1 text-green-500">
                  <ArrowDown className="w-5 h-5" />
                  3 kg
                </p>
              </div>
            </div>
            <div className="pt-4">
              <WeightChart />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Desempeno por Categoria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Categoria</th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Competencias</th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Mejor Colocacion</th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Promedio</th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Tasa de Victoria</th>
                </tr>
              </thead>
              <tbody>
                {categoryPerformance.map((cat, i) => (
                  <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4">{cat.category}</td>
                    <td className="text-center py-3 px-4">{cat.competitions}</td>
                    <td className="text-center py-3 px-4">
                      <Badge variant="outline">{cat.bestPlacing}</Badge>
                    </td>
                    <td className="text-center py-3 px-4 font-medium">{cat.avgScore}</td>
                    <td className="text-center py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-12 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: `${cat.winRate}%` }}/>
                        </div>
                        <span className="text-xs font-medium">{cat.winRate}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GoalsSection />

        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Resumen de Estadisticas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 rounded bg-muted/50">
                <span className="text-sm font-medium">Total de Competencias</span>
                <span className="text-lg font-bold">8</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded bg-muted/50">
                <span className="text-sm font-medium">Primeros Puestos</span>
                <span className="text-lg font-bold text-amber-600">4</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded bg-muted/50">
                <span className="text-sm font-medium">Top 3 Finishes</span>
                <span className="text-lg font-bold text-blue-600">7</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded bg-muted/50">
                <span className="text-sm font-medium">Racha Actual</span>
                <span className="text-lg font-bold text-green-600">3 Victorias</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded bg-muted/50">
                <span className="text-sm font-medium">Mejora Total</span>
                <span className="text-lg font-bold text-green-600">+17 puntos</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}