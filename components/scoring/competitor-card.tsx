'use client';

import { useState } from 'react';
import { Competitor } from '@/types/scoring';
import { Card } from '@/components/ui/card';
import { CheckCircle2, AlertCircle, Lock } from 'lucide-react';

interface CompetitorCardProps {
  competitor: Competitor;
  ranking: number | null;
  totalScore: number;
  scores: Record<string, number>;
  onScoreChange: (score: number) => void;
  isLocked: boolean;
}

export function CompetitorCard({
  competitor,
  ranking,
  totalScore,
  scores,
  onScoreChange,
  isLocked,
}: CompetitorCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(totalScore.toString());

  const isScoredByAnyJudge = totalScore > 0;
  const statusColor = isLocked
    ? 'bg-blue-500/20 border-blue-300 text-blue-700'
    : isScoredByAnyJudge
    ? 'bg-green-500/20 border-green-300 text-green-700'
    : 'bg-gray-500/20 border-gray-300 text-gray-700';

  const handleScoreSubmit = () => {
    const newScore = parseInt(inputValue) || 0;
    if (newScore >= 1 && newScore <= 100) {
      onScoreChange(newScore);
      setIsEditing(false);
    }
  };

  return (
    <Card
      className={`glass-card border overflow-hidden flex flex-col h-full transition-all duration-200 ${
        isLocked
          ? 'opacity-75 pointer-events-none'
          : 'hover:shadow-lg hover:-translate-y-1'
      }`}
    >
      {/* Ranking Badge */}
      {ranking && (
        <div className="bg-gradient-to-r from-gold to-amber-500 text-ink font-bold text-lg px-3 py-2 text-center">
          #{ranking}
        </div>
      )}

      {/* Competitor Photo */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-slate-400 opacity-20">
          {competitor.number}
        </div>
        {competitor.photoUrl && (
          <img
            src={competitor.photoUrl}
            alt={competitor.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 flex flex-col flex-1">
        {/* Competitor Number and Status */}
        <div className="flex items-center justify-between mb-3 gap-2">
          <div className="bg-ink/10 rounded-full px-3 py-1 text-center">
            <span className="font-bold text-lg text-foreground">#{competitor.number}</span>
          </div>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border ${statusColor}`}>
            {isLocked ? (
              <>
                <Lock className="w-3 h-3" />
                <span>Bloqueado</span>
              </>
            ) : isScoredByAnyJudge ? (
              <>
                <CheckCircle2 className="w-3 h-3" />
                <span>Puntuado</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-3 h-3" />
                <span>Sin Puntaje</span>
              </>
            )}
          </div>
        </div>

        {/* Competitor Name */}
        <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-3 flex-1">
          {competitor.name}
        </h3>

        {/* Score Input Area */}
        <div className="space-y-2 border-t border-border/20 pt-3">
          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              Puntuación Total
            </p>
            <p className="text-2xl font-bold text-gradient-gold">
              {totalScore > 0 ? totalScore : '—'}
            </p>
          </div>

          {isEditing ? (
            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                max="100"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleScoreSubmit();
                  if (e.key === 'Escape') setIsEditing(false);
                }}
                className="flex-1 px-2 py-1 rounded border border-gold/50 bg-ink/5 text-center font-bold text-foreground text-lg"
              />
              <button
                onClick={handleScoreSubmit}
                className="px-2 py-1 bg-gold text-ink rounded font-semibold text-sm hover:bg-amber-500 transition-colors"
              >
                OK
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsEditing(true);
                setInputValue(totalScore.toString());
              }}
              disabled={isLocked}
              className="w-full px-3 py-2 bg-amethyst/10 hover:bg-amethyst/20 text-amethyst font-semibold rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {totalScore > 0 ? 'Editar' : 'Ingresar Puntaje'}
            </button>
          )}
        </div>
      </div>
    </Card>
  );
}
