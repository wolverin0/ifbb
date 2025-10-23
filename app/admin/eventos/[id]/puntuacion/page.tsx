'use client';

import { useState, useEffect } from 'react';
import { ScoringInterface } from '@/components/scoring/scoring-interface';
import { Card } from '@/components/ui/card';

export default function PuntuacionPage({
  params,
}: {
  params: { id: string };
}) {
  const [eventId, setEventId] = useState<string>('');

  useEffect(() => {
    setEventId(params.id);
  }, [params.id]);

  if (!eventId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="glass-card p-8">
          <p className="text-lg text-muted-foreground">Cargando interfaz de puntuación...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-amethyst/5">
      <ScoringInterface eventId={eventId} />
    </div>
  );
}
