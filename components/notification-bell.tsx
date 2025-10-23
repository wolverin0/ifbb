'use client'

import { useState, useEffect } from 'react'
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Notification } from '@/lib/notifications'
import { getNotifications, getUnreadCount } from '@/lib/notifications'

export function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Load notifications
    const allNotifications = getNotifications()
    setNotifications(allNotifications.slice(0, 5)) // Get 5 most recent
    setUnreadCount(getUnreadCount())
  }, [])

  const handleMarkAsRead = (notificationId: string) => {
    setNotifications(prev =>
      prev.map(n =>
        n.id === notificationId ? { ...n, isRead: true } : n
      )
    )
    setUnreadCount(prev => Math.max(0, prev - 1))
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <Badge
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-600"
            variant="default"
          >
            {unreadCount}
          </Badge>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Notificaciones</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground text-lg"
            >
              ×
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                <p>No tienes notificaciones</p>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    onClick={() => handleMarkAsRead(notification.id)}
                    className={`p-4 cursor-pointer transition-colors ${
                      notification.isRead
                        ? 'bg-background'
                        : 'bg-muted/50 hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg flex-shrink-0 ${
                        notification.type === 'registration' ? 'bg-green-500/20' :
                        notification.type === 'payment' ? 'bg-amber-500/20' :
                        notification.type === 'song_approved' ? 'bg-blue-500/20' :
                        notification.type === 'song_rejected' ? 'bg-red-500/20' :
                        notification.type === 'number_assigned' ? 'bg-purple-500/20' :
                        notification.type === 'event_1week' ? 'bg-orange-500/20' :
                        notification.type === 'event_1day' ? 'bg-red-500/20' :
                        notification.type === 'results' ? 'bg-amber-500/20' :
                        notification.type === 'photos' ? 'bg-cyan-500/20' :
                        'bg-blue-500/20'
                      }`}>
                        {notification.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-foreground truncate">
                          {notification.title}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.timestamp}
                        </p>
                      </div>
                      {!notification.isRead && (
                        <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 border-t border-border text-center">
            <Link href="/dashboard/notificaciones">
              <Button variant="ghost" className="w-full text-sm">
                Ver Todas las Notificaciones
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
