'use client';

import { Card } from '@/components/ui/card';
import { ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ScoringHeaderProps {
  eventId: string;
}

export function ScoringHeader({ eventId }: ScoringHeaderProps) {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString('es-AR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }));

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="glass-card border-b border-border/20 rounded-none px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link
          href={`/admin/eventos`}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-card/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Volver</span>
        </Link>
        <div className="border-l border-border/20 pl-4">
          <h1 className="text-2xl font-bold text-gradient-gold">
            Panel de Puntuación en Vivo
          </h1>
          <p className="text-sm text-muted-foreground">
            Evento ID: {eventId}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-lg font-semibold text-gold">
        <Clock className="w-5 h-5" />
        <span>{time}</span>
      </div>
    </Card>
  );
}
