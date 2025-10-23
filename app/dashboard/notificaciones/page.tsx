'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Trash2 } from 'lucide-react'
import {
  Notification,
  NotificationType,
  getNotifications,
  getUnreadNotifications,
  getNotificationsByType,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  getNotificationColor,
} from '@/lib/notifications'

export default function NotificacionesPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [filterTab, setFilterTab] = useState<'all' | 'unread' | 'events' | 'payments' | 'photos'>('all')

  useEffect(() => {
    loadNotifications()
  }, [filterTab])

  const loadNotifications = () => {
    let filtered: Notification[] = []

    switch (filterTab) {
      case 'unread':
        filtered = getUnreadNotifications()
        break
      case 'events':
        filtered = [
          ...getNotificationsByType('event_1week'),
          ...getNotificationsByType('event_1day'),
          ...getNotificationsByType('number_assigned'),
        ]
        break
      case 'payments':
        filtered = getNotificationsByType('payment')
        break
      case 'photos':
        filtered = getNotificationsByType('photos')
        break
      default:
        filtered = getNotifications()
    }

    setNotifications(filtered)
  }

  const handleMarkAsRead = (notificationId: string) => {
    markAsRead(notificationId)
    setNotifications(prev =>
      prev.map(n =>
        n.id === notificationId ? { ...n, isRead: true } : n
      )
    )
  }

  const handleDelete = (notificationId: string) => {
    deleteNotification(notificationId)
    setNotifications(prev => prev.filter(n => n.id !== notificationId))
  }

  const handleMarkAllAsRead = () => {
    markAllAsRead()
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))
  }

  const getNotificationTypeLabel = (type: NotificationType): string => {
    const labels: Record<NotificationType, string> = {
      registration: 'Inscripción',
      payment: 'Pago',
      song_approved: 'Música Aprobada',
      song_rejected: 'Música Rechazada',
      number_assigned: 'Número Asignado',
      event_1week: 'Recordatorio 1 Semana',
      event_1day: 'Recordatorio 1 Día',
      results: 'Resultados',
      photos: 'Fotos',
    }
    return labels[type]
  }

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Notificaciones</h1>
        <p className="text-muted-foreground">Gestiona todas tus notificaciones en un solo lugar</p>
      </header>

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="px-3 py-1">
            {notifications.length} notificaciones
          </Badge>
        </div>
        <Button
          variant="outline"
          onClick={handleMarkAllAsRead}
          className="text-sm"
        >
          Marcar todas como leídas
        </Button>
      </div>

      <Card className="bg-card">
        <CardHeader className="border-b border-border">
          <Tabs value={filterTab} onValueChange={(value: any) => setFilterTab(value)}>
            <TabsList className="grid w-full grid-cols-5 bg-muted/50">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="unread">Sin Leer</TabsTrigger>
              <TabsTrigger value="events">Eventos</TabsTrigger>
              <TabsTrigger value="payments">Pagos</TabsTrigger>
              <TabsTrigger value="photos">Fotos</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>

        <CardContent className="p-0">
          {notifications.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-muted-foreground mb-2">No hay notificaciones en esta categoría</p>
              <p className="text-sm text-muted-foreground/75">
                Las nuevas notificaciones aparecerán aquí
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-6 transition-colors ${
                    notification.isRead
                      ? 'bg-background hover:bg-muted/30'
                      : 'bg-muted/50 hover:bg-muted'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-lg flex-shrink-0 ${getNotificationColor(notification.type)}`}>
                      {notification.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">
                            {notification.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="mt-2 text-xs bg-muted text-muted-foreground"
                          >
                            {getNotificationTypeLabel(notification.type)}
                          </Badge>
                        </div>
                        {!notification.isRead && (
                          <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 mt-2" />
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground/75">
                        {notification.timestamp}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 flex-shrink-0">
                      {!notification.isRead && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMarkAsRead(notification.id)}
                          className="text-xs h-8"
                        >
                          Marcar como leída
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(notification.id)}
                        className="text-xs h-8 text-red-500 hover:text-red-600 hover:bg-red-500/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
