import React from 'react'
import {
  CheckCircle,
  DollarSign,
  Music,
  AlertTriangle,
  Hash,
  Calendar,
  Clock,
  Trophy,
  Camera,
} from 'lucide-react'

export type NotificationType =
  | 'registration'
  | 'payment'
  | 'song_approved'
  | 'song_rejected'
  | 'number_assigned'
  | 'event_1week'
  | 'event_1day'
  | 'results'
  | 'photos'

export interface Notification {
  id: string
  title: string
  message: string
  type: NotificationType
  icon: React.ReactNode
  timestamp: string
  isRead: boolean
  createdAt: Date
}

const notificationIcons: Record<NotificationType, React.ComponentType<any>> = {
  registration: CheckCircle,
  payment: DollarSign,
  song_approved: Music,
  song_rejected: AlertTriangle,
  number_assigned: Hash,
  event_1week: Calendar,
  event_1day: Clock,
  results: Trophy,
  photos: Camera,
}

function getNotificationIconElement(type: NotificationType): React.ReactNode {
  const iconClass = "w-4 h-4"
  const IconComponent = notificationIcons[type]
  return React.createElement(IconComponent, { className: `${iconClass}` })
}

const formatTimeAgo = (date: Date): string => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'hace unos momentos'
  if (minutes < 60) return `hace ${minutes}m`
  if (hours < 24) return `hace ${hours}h`
  if (days < 7) return `hace ${days}d`
  return `hace ${Math.floor(days / 7)}w`
}

// Helper to create mock notifications with icons
const createNotification = (
  id: string,
  title: string,
  message: string,
  type: NotificationType,
  offset: number,
  isRead: boolean
): Notification => {
  const createdAt = new Date(Date.now() - offset)
  return {
    id,
    title,
    message,
    type,
    icon: getNotificationIconElement(type),
    timestamp: formatTimeAgo(createdAt),
    isRead,
    createdAt,
  }
}

// Mock notifications data
const mockNotifications: Notification[] = [
  createNotification('1', 'Inscripción Confirmada', 'Tu inscripción al Campeonato Nacional 2025 ha sido confirmada.', 'registration', 2 * 60000, false),
  createNotification('2', 'Pago Recibido', 'Hemos recibido tu pago de $5,000 por la inscripción. Gracias.', 'payment', 1 * 3600000, false),
  createNotification('3', 'Música Aprobada', 'Tu canción de posing para el Campeonato Nacional ha sido aprobada.', 'song_approved', 2 * 3600000, false),
  createNotification('4', 'Número de Atleta Asignado', 'Se te ha asignado el número 42 para el Campeonato Nacional.', 'number_assigned', 5 * 3600000, false),
  createNotification('5', 'Recordatorio: Evento en 1 Semana', 'El Campeonato Nacional comienza en 7 días. Asegúrate de llegar a tiempo.', 'event_1week', 1 * 86400000, true),
  createNotification('6', 'Recordatorio: Pesaje Mañana', 'El pesaje para el Campeonato Nacional es mañana a las 18:00hs.', 'event_1day', 2 * 86400000, true),
  createNotification('7', 'Resultados Publicados', 'Los resultados de la Copa Provincial Córdoba ya están disponibles.', 'results', 3 * 86400000, true),
  createNotification('8', 'Fotos Disponibles', 'Las fotos del Campeonato Nacional ya están disponibles. Comprá tu paquete ahora.', 'photos', 4 * 86400000, true),
  createNotification('9', 'Música Rechazada', 'Tu canción de posing no cumple con los requisitos. Por favor, sube una nueva.', 'song_rejected', 5 * 86400000, true),
  createNotification('10', 'Pago Recibido', 'Hemos recibido tu pago de $3,500 por las fotos del evento.', 'payment', 6 * 86400000, true),
  createNotification('11', 'Inscripción Confirmada', 'Tu inscripción a la Copa Provincial Córdoba ha sido confirmada.', 'registration', 7 * 86400000, true),
  createNotification('12', 'Fotos Disponibles', 'Las fotos de la Copa Provincial Córdoba ya están disponibles.', 'photos', 8 * 86400000, true),
]

// Simulate a simple in-memory store (in a real app, this would be a database)
let notificationsStore = [...mockNotifications]

export function getNotifications(): Notification[] {
  return notificationsStore.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export function getNotificationsByType(type: NotificationType): Notification[] {
  return notificationsStore
    .filter(n => n.type === type)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export function getUnreadNotifications(): Notification[] {
  return notificationsStore
    .filter(n => !n.isRead)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export function getUnreadCount(): number {
  return notificationsStore.filter(n => !n.isRead).length
}

export function markAsRead(notificationId: string): void {
  notificationsStore = notificationsStore.map(n =>
    n.id === notificationId ? { ...n, isRead: true } : n
  )
}

export function markAllAsRead(): void {
  notificationsStore = notificationsStore.map(n => ({ ...n, isRead: true }))
}

export function deleteNotification(notificationId: string): void {
  notificationsStore = notificationsStore.filter(n => n.id !== notificationId)
}


export function getNotificationColor(type: NotificationType): string {
  switch (type) {
    case 'registration':
      return 'bg-green-500/20 text-green-600 dark:text-green-400'
    case 'payment':
      return 'bg-amber-500/20 text-amber-600 dark:text-amber-400'
    case 'song_approved':
      return 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
    case 'song_rejected':
      return 'bg-red-500/20 text-red-600 dark:text-red-400'
    case 'number_assigned':
      return 'bg-purple-500/20 text-purple-600 dark:text-purple-400'
    case 'event_1week':
      return 'bg-orange-500/20 text-orange-600 dark:text-orange-400'
    case 'event_1day':
      return 'bg-red-500/20 text-red-600 dark:text-red-400'
    case 'results':
      return 'bg-amber-500/20 text-amber-600 dark:text-amber-400'
    case 'photos':
      return 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400'
    default:
      return 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
  }
}
