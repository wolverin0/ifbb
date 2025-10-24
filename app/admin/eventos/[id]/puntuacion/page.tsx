'use client';

import { use } from 'react';
import { ScoringInterface } from '@/components/scoring/scoring-interface';

export default function PuntuacionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: eventId } = use(params);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-amethyst/5">
      <ScoringInterface eventId={eventId} />
    </div>
  );
}
