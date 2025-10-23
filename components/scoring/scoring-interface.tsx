'use client';

import { useState, useEffect } from 'react';
import { CategorySelector } from './category-selector';
import { CompetitorGrid } from './competitor-grid';
import { ScoringHeader } from './scoring-header';
import { useScoringState } from '@/hooks/useScorngState';
import { Card } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

interface ScoringInterfaceProps {
  eventId: string;
}

export function ScoringInterface({ eventId }: ScoringInterfaceProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('mens-physique-a');
  const [allCategoriesLocked, setAllCategoriesLocked] = useState(false);

  const {
    categories,
    competitors,
    scores,
    lockedCategories,
    updateScore,
    finalizeCategory,
    loadScores,
    clearScores,
  } = useScoringState(eventId);

  useEffect(() => {
    loadScores();
  }, []);

  const currentCategory = categories.find(c => c.id === selectedCategory);
  const isCategoryLocked = lockedCategories.includes(selectedCategory);
  const categoryCompetitors = competitors.filter(
    c => c.categoryId === selectedCategory
  );

  const handleClearAll = () => {
    if (window.confirm('Esto borrará todas las puntuaciones. Continuar?')) {
      clearScores();
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-background via-slate-50 to-background">
      {/* Header */}
      <ScoringHeader eventId={eventId} />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Category Selector */}
        <div className="w-1/5 bg-card/30 backdrop-blur border-r border-border/20 flex flex-col p-6 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              Categorías
            </h2>
            <CategorySelector
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              lockedCategories={lockedCategories}
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-auto space-y-3 border-t border-border/20 pt-6">
            <button
              onClick={() => finalizeCategory(selectedCategory)}
              disabled={isCategoryLocked || categoryCompetitors.length === 0}
              className="w-full px-4 py-3 bg-gradient-to-r from-gold to-amber-500 text-ink font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:shadow-lg hover:enabled:-translate-y-0.5"
            >
              {isCategoryLocked ? 'Categoría Bloqueada' : 'Finalizar Categoría'}
            </button>

            <button
              onClick={handleClearAll}
              className="w-full px-4 py-3 bg-destructive/10 text-destructive hover:bg-destructive/20 font-semibold rounded-lg transition-all duration-200"
            >
              Borrar Todo
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden p-8 gap-6">
          {/* Category Info Card */}
          {currentCategory && (
            <Card className="glass-card border border-border/30 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gradient-gold mb-2">
                    {currentCategory.name}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {categoryCompetitors.length} competidores
                  </p>
                </div>
                <div
                  className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                    isCategoryLocked
                      ? 'bg-blue-500/20 text-blue-600 border border-blue-200'
                      : 'bg-amber-500/20 text-amber-700 border border-amber-200'
                  }`}
                >
                  {isCategoryLocked ? 'Bloqueada' : 'En Vivo'}
                </div>
              </div>
            </Card>
          )}

          {/* Competitors Grid */}
          {categoryCompetitors.length > 0 ? (
            <CompetitorGrid
              competitors={categoryCompetitors}
              scores={scores}
              onScoreChange={(competitorId, score) =>
                updateScore(selectedCategory, competitorId, score)
              }
              isLocked={isCategoryLocked}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <AlertCircle className="w-12 h-12 text-muted-foreground" />
                <p className="text-lg text-muted-foreground">
                  No hay competidores en esta categoría
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
