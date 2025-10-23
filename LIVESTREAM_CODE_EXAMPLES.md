# Livestream Integration - Code Examples & Snippets

## 1. Using the YouTubeVideoPlayer Component

### Basic Usage
```tsx
import { YouTubeVideoPlayer } from "@/components/youtube-video-player"

export default function Page() {
  return (
    <YouTubeVideoPlayer
      videoId="-qHfriGYCB4"
      title="Campeonato IFBB Argentina"
      showSampleBadge={true}
    />
  )
}
```

### With Custom Title
```tsx
<YouTubeVideoPlayer
  videoId="YOUR_VIDEO_ID"
  title="My Custom Event Title"
  showSampleBadge={false}
/>
```

### Component Props
```typescript
interface YouTubeVideoPlayerProps {
  videoId: string           // YouTube video ID (from URL)
  title?: string            // Display title (default: "IFBB Argentina...")
  showSampleBadge?: boolean // Show "EVENTO DE MUESTRA" badge (default: true)
}
```

---

## 2. Using the EventInfoCard Component

### Basic Setup
```tsx
import { EventInfoCard } from "@/components/event-info-card"

export default function Page() {
  return (
    <EventInfoCard
      eventName="Copa Provincial Córdoba"
      date="22 de Marzo, 2025"
      time="18:30"
      location="Centro de Convenciones"
      city="Córdoba"
      categories={[
        "Men's Physique - Class A",
        "Bikini Fitness",
        "Classic Physique"
      ]}
      viewers="235 espectadores"
    />
  )
}
```

### Dynamic Data from State
```tsx
import { useState } from "react"
import { EventInfoCard } from "@/components/event-info-card"

export default function LivestreamPage() {
  const [eventData] = useState({
    eventName: "Copa Provincial Córdoba",
    date: "22 de Marzo, 2025",
    time: "18:30",
    location: "Centro de Convenciones",
    city: "Córdoba",
    categories: ["Men's Physique", "Bikini Fitness"],
    viewers: "235 espectadores"
  })

  return <EventInfoCard {...eventData} />
}
```

### Component Props
```typescript
interface EventInfoCardProps {
  eventName: string
  date: string
  time: string
  location: string
  city: string
  categories: string[]
  viewers: string
}
```

---

## 3. Using the LivestreamChat Component

### Default Chat (Mock Messages)
```tsx
import { LivestreamChat } from "@/components/livestream-chat"

export default function Page() {
  return <LivestreamChat />
}
```

### Custom Messages
```tsx
import { LivestreamChat } from "@/components/livestream-chat"

const customMessages = [
  {
    id: "1",
    author: "Juan Pérez",
    message: "Excelente competencia!",
    timestamp: "2:34 PM",
    avatar: "JP"
  },
  {
    id: "2",
    author: "María García",
    message: "Increíble el nivel",
    timestamp: "2:35 PM",
    avatar: "MG"
  }
]

export default function Page() {
  return <LivestreamChat messages={customMessages} />
}
```

### Fetching Live Messages
```tsx
"use client"

import { useState, useEffect } from "react"
import { LivestreamChat } from "@/components/livestream-chat"

export default function Page() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    // Simulate fetching from WebSocket or API
    const fetchMessages = async () => {
      const response = await fetch("/api/chat/messages")
      const data = await response.json()
      setMessages(data)
    }

    const interval = setInterval(fetchMessages, 1000)
    return () => clearInterval(interval)
  }, [])

  return <LivestreamChat messages={messages} />
}
```

### Component Props
```typescript
interface ChatMessage {
  id: string
  author: string
  message: string
  timestamp: string
  avatar: string
}

interface LivestreamChatProps {
  messages?: ChatMessage[]
}
```

---

## 4. Using the NextEventCountdown Component

### Basic Implementation
```tsx
import { NextEventCountdown } from "@/components/next-event-countdown"

export default function Page() {
  return (
    <NextEventCountdown
      eventName="Campeonato Nacional IFBB Argentina 2025"
      date="15 de Marzo, 2025"
      time="18:00"
      location="Teatro Gran Rex, Buenos Aires"
    />
  )
}
```

### Dynamic Next Event
```tsx
"use client"

import { useState, useEffect } from "react"
import { NextEventCountdown } from "@/components/next-event-countdown"

interface Event {
  name: string
  date: string
  time: string
  location: string
}

export default function Page() {
  const [nextEvent, setNextEvent] = useState<Event | null>(null)

  useEffect(() => {
    const fetchNextEvent = async () => {
      const response = await fetch("/api/events/next")
      const event = await response.json()
      setNextEvent(event)
    }

    fetchNextEvent()
  }, [])

  if (!nextEvent) return <div>Cargando...</div>

  return (
    <NextEventCountdown
      eventName={nextEvent.name}
      date={nextEvent.date}
      time={nextEvent.time}
      location={nextEvent.location}
    />
  )
}
```

### Component Props
```typescript
interface NextEventCountdownProps {
  eventName: string
  date: string
  time: string
  location: string
}
```

---

## 5. Using the RelatedVideos Component

### Default Videos
```tsx
import { RelatedVideos } from "@/components/related-videos"

export default function Page() {
  return <RelatedVideos />
}
```

### Custom Video List
```tsx
import { RelatedVideos } from "@/components/related-videos"

const videos = [
  {
    id: "1",
    title: "Campeonato Provincial Córdoba",
    thumbnail: "/video1.jpg",
    date: "Hace 2 semanas",
    views: "1.2K",
    duration: "3:45:20"
  },
  {
    id: "2",
    title: "Clásico de Mendoza",
    thumbnail: "/video2.jpg",
    date: "Hace 1 mes",
    views: "856",
    duration: "2:30:15"
  }
]

export default function Page() {
  return <RelatedVideos videos={videos} />
}
```

### Fetching From Database
```tsx
"use client"

import { useState, useEffect } from "react"
import { RelatedVideos } from "@/components/related-videos"

interface Video {
  id: string
  title: string
  thumbnail: string
  date: string
  views: string
  duration: string
}

export default function Page() {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch("/api/videos/livestream-archives")
      const data = await response.json()
      setVideos(data)
    }

    fetchVideos()
  }, [])

  return <RelatedVideos videos={videos} />
}
```

### Component Props
```typescript
interface Video {
  id: string
  title: string
  thumbnail: string
  date: string
  views: string
  duration: string
}

interface RelatedVideosProps {
  videos?: Video[]
}
```

---

## 6. Complete Livestream Page Example

### Full Implementation
```tsx
// /app/transmision/page.tsx

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { YouTubeVideoPlayer } from "@/components/youtube-video-player"
import { EventInfoCard } from "@/components/event-info-card"
import { LivestreamChat } from "@/components/livestream-chat"
import { NextEventCountdown } from "@/components/next-event-countdown"
import { RelatedVideos } from "@/components/related-videos"
import { Badge } from "@/components/ui/badge"

export default function LivestreamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-24">
        {/* Header */}
        <section className="mb-12 text-center">
          <Badge className="mb-4">{"Transmisión Oficial"}</Badge>
          <h1 className="text-5xl font-bold mb-4">{"Transmisión en Vivo"}</h1>
          <p className="text-xl text-muted-foreground">
            {"Seguí las competencias en directo"}
          </p>
        </section>

        {/* Main Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <YouTubeVideoPlayer videoId="-qHfriGYCB4" />
          </div>
          <div>
            <EventInfoCard
              eventName="Copa Provincial Córdoba"
              date="22 de Marzo, 2025"
              time="18:30"
              location="Centro de Convenciones"
              city="Córdoba"
              categories={["Men's Physique", "Bikini Fitness"]}
              viewers="235 espectadores"
            />
          </div>
        </section>

        {/* Chat and Countdown */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <LivestreamChat />
          <NextEventCountdown
            eventName="Campeonato Nacional 2025"
            date="15 de Marzo, 2025"
            time="18:00"
            location="Teatro Gran Rex"
          />
        </section>

        {/* Related Videos */}
        <section className="mb-16">
          <RelatedVideos />
        </section>
      </main>

      <Footer />
    </div>
  )
}
```

---

## 7. Integrating with External APIs

### Real-time Chat with WebSocket
```tsx
"use client"

import { useState, useEffect } from "react"
import { LivestreamChat } from "@/components/livestream-chat"

export default function Page() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const ws = new WebSocket("wss://your-api.com/chat")

    ws.onmessage = (event) => {
      const newMessage = JSON.parse(event.data)
      setMessages(prev => [newMessage, ...prev].slice(0, 50))
    }

    return () => ws.close()
  }, [])

  return <LivestreamChat messages={messages} />
}
```

### Fetching Event Data from API
```tsx
"use client"

import { useState, useEffect } from "react"
import { EventInfoCard } from "@/components/event-info-card"

interface EventData {
  eventName: string
  date: string
  time: string
  location: string
  city: string
  categories: string[]
  viewers: string
}

export default function Page() {
  const [event, setEvent] = useState<EventData | null>(null)

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch("/api/events/current-livestream")
      const data = await response.json()
      setEvent(data)
    }

    fetchEvent()
    // Refresh every 30 seconds for viewer count
    const interval = setInterval(fetchEvent, 30000)

    return () => clearInterval(interval)
  }, [])

  if (!event) return <div>{"Cargando..."}</div>

  return <EventInfoCard {...event} />
}
```

### Multiple Livestreams (Coming Soon)
```tsx
"use client"

import { useState, useEffect } from "react"
import { YouTubeVideoPlayer } from "@/components/youtube-video-player"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Livestream {
  id: string
  videoId: string
  title: string
  stage: string
}

export default function Page() {
  const [livestreams, setLivestreams] = useState<Livestream[]>([])

  useEffect(() => {
    const fetchLivestreams = async () => {
      const response = await fetch("/api/livestreams/active")
      const data = await response.json()
      setLivestreams(data)
    }

    fetchLivestreams()
  }, [])

  return (
    <Tabs defaultValue={livestreams[0]?.id}>
      <TabsList>
        {livestreams.map(ls => (
          <TabsTrigger key={ls.id} value={ls.id}>
            {ls.stage}
          </TabsTrigger>
        ))}
      </TabsList>

      {livestreams.map(ls => (
        <TabsContent key={ls.id} value={ls.id}>
          <YouTubeVideoPlayer videoId={ls.videoId} title={ls.title} />
        </TabsContent>
      ))}
    </Tabs>
  )
}
```

---

## 8. Styling & Customization

### Custom Component Theme
```tsx
// Override styles in parent component
<div className="custom-livestream-theme">
  <YouTubeVideoPlayer videoId="..." className="custom-player" />
</div>
```

### CSS Custom Properties
```css
/* In your CSS file */
:root {
  --primary-gold: #B78B1E;
  --primary-purple: #8B5CF6;
  --primary-cyan: #22D3EE;
  --sample-orange: #F97316;
}

.livestream-section {
  --primary-color: var(--primary-gold);
  --secondary-color: var(--primary-purple);
}
```

### Responsive Adjustments
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
  <YouTubeVideoPlayer {...props} />
  <EventInfoCard {...props} />
  <div className="hidden lg:block">
    <NextEventCountdown {...props} />
  </div>
</div>
```

---

## 9. Event Handlers & Interactions

### Handling Share Button Clicks
```tsx
"use client"

import { EventInfoCard } from "@/components/event-info-card"

export default function Page() {
  const handleShare = (platform: string) => {
    const shareUrl = window.location.href
    const title = "Transmisión en Vivo - IFBB Argentina"

    const urls = {
      whatsapp: `https://wa.me/?text=${title} ${shareUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${shareUrl}`
    }

    window.open(urls[platform], '_blank')
  }

  return <EventInfoCard {...props} onShare={handleShare} />
}
```

### Handling Reminder Notifications
```tsx
"use client"

import { NextEventCountdown } from "@/components/next-event-countdown"

export default function Page() {
  const handleSetReminder = async (eventDate: string) => {
    // Request notification permission
    if (Notification.permission === "granted") {
      // Schedule notification
      const eventTime = new Date(eventDate).getTime()
      const now = new Date().getTime()
      const timeUntil = eventTime - now

      setTimeout(() => {
        new Notification("¡Evento en vivo comenzando!", {
          body: "Tu evento favorito está por comenzar",
          icon: "/ifbb-logo.jpg"
        })
      }, timeUntil)
    }
  }

  return <NextEventCountdown {...props} onReminder={handleSetReminder} />
}
```

---

## 10. Performance Optimization

### Lazy Loading Components
```tsx
import dynamic from "next/dynamic"

const RelatedVideos = dynamic(() => import("@/components/related-videos"), {
  loading: () => <div>{"Cargando videos..."}</div>
})

export default function Page() {
  return (
    <>
      <YouTubeVideoPlayer {...props} />
      {/* Only loads when scrolled to */}
      <RelatedVideos />
    </>
  )
}
```

### Memoizing Heavy Components
```tsx
"use client"

import { memo } from "react"
import { LivestreamChat } from "@/components/livestream-chat"

const MemoizedChat = memo(LivestreamChat)

export default function Page() {
  return <MemoizedChat messages={messages} />
}
```

### Optimized Image Loading
```tsx
import Image from "next/image"

<Image
  src="/event-thumbnail.jpg"
  alt="Event"
  width={1200}
  height={675}
  priority={false}
  loading="lazy"
/>
```

---

## Summary

These code examples demonstrate:
- Basic component usage
- Custom data integration
- API integration patterns
- Event handling
- Performance optimization
- Responsive design

For more information, refer to the main implementation documentation.
