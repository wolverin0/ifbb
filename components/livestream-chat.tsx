"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, MessageCircle } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

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

const defaultMessages: ChatMessage[] = [
  {
    id: "1",
    author: "Juan Pérez",
    message: "Excelente presentación del campeón Juan!",
    timestamp: "2:34 PM",
    avatar: "JP",
  },
  {
    id: "2",
    author: "María García",
    message: "Que emoción! Muy buena competencia hoy",
    timestamp: "2:35 PM",
    avatar: "MG",
  },
  {
    id: "3",
    author: "Carlos López",
    message: "Increíble el nivel de los competidores",
    timestamp: "2:36 PM",
    avatar: "CL",
  },
  {
    id: "4",
    author: "Ana Martínez",
    message: "Felicidades a todos los participantes!",
    timestamp: "2:37 PM",
    avatar: "AM",
  },
  {
    id: "5",
    author: "Roberto Díaz",
    message: "La transmisión está impecable, felicitaciones",
    timestamp: "2:38 PM",
    avatar: "RD",
  },
]

export function LivestreamChat({ messages = defaultMessages }: LivestreamChatProps) {
  return (
    <Card className="glass-card border-border/50 h-full flex flex-col overflow-hidden">
      <CardHeader className="pb-3 border-b border-border/30">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-[#8B5CF6]" />
          <CardTitle className="text-lg">{"Chat en Vivo"}</CardTitle>
          <span className="ml-auto text-xs text-muted-foreground">{"235 usuarios"}</span>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="space-y-3 text-sm">
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-2 group">
              <Avatar className="w-8 h-8 flex-shrink-0 bg-[#8B5CF6]/20">
                <AvatarFallback className="bg-[#8B5CF6]/30 text-[#8B5CF6] text-xs font-semibold">
                  {msg.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-foreground text-xs">{msg.author}</span>
                  <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed break-words">{msg.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Alert */}
        <div className="mt-6 p-3 bg-[#B78B1E]/10 border border-[#B78B1E]/30 rounded-lg text-xs text-muted-foreground text-center">
          {"El chat estará disponible durante el evento en vivo"}
        </div>
      </CardContent>

      <div className="border-t border-border/30 p-3">
        <div className="flex gap-2">
          <Input
            placeholder="Escribe un mensaje..."
            className="bg-background/50 border-border/50 text-sm h-9"
            disabled
          />
          <Button
            size="sm"
            variant="ghost"
            className="bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 text-[#8B5CF6] h-9 px-3"
            disabled
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
