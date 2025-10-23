'use client';

import { Competitor, CompetitorScores } from '@/types/scoring';
import { CompetitorCard } from './competitor-card';
import { useMemo } from 'react';

interface CompetitorGridProps {
  competitors: Competitor[];
  scores: CompetitorScores;
  onScoreChange: (competitorId: string, score: number) => void;
  isLocked: boolean;
}

export function CompetitorGrid({
  competitors,
  scores,
  onScoreChange,
  isLocked,
}: CompetitorGridProps) {
  // Calculate rankings based on total scores
  const rankedCompetitors = useMemo(() => {
    const competitorScores = competitors.map(competitor => {
      const competitorScore = scores[competitor.id];
      const totalScore = competitorScore
        ? Object.values(competitorScore).reduce((sum, score) => sum + (score || 0), 0)
        : 0;

      return {
        ...competitor,
        totalScore,
      };
    });

    // Sort by total score (highest first)
    return competitorScores.sort((a, b) => {
      if (b.totalScore === 0 && a.totalScore === 0) return 0;
      if (b.totalScore === 0) return -1;
      if (a.totalScore === 0) return 1;
      return b.totalScore - a.totalScore;
    });
  }, [competitors, scores]);

  return (
    <div className="flex-1 overflow-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-8">
        {rankedCompetitors.map((competitor, index) => {
          const competitorScore = scores[competitor.id];
          const totalScore = competitorScore
            ? Object.values(competitorScore).reduce((sum, score) => sum + (score || 0), 0)
            : 0;
          const isScoredByAnyJudge = totalScore > 0;

          return (
            <CompetitorCard
              key={competitor.id}
              competitor={competitor}
              ranking={isScoredByAnyJudge ? index + 1 : null}
              totalScore={totalScore}
              scores={competitorScore || {}}
              onScoreChange={(score) => onScoreChange(competitor.id, score)}
              isLocked={isLocked}
            />
          );
        })}
      </div>
    </div>
  );
}
