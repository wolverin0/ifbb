'use client';

import { Category } from '@/types/scoring';
import { CheckCircle2, Lock } from 'lucide-react';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  lockedCategories: string[];
}

export function CategorySelector({
  categories,
  selectedCategory,
  onSelectCategory,
  lockedCategories,
}: CategorySelectorProps) {
  return (
    <div className="space-y-2">
      {categories.map((category) => {
        const isLocked = lockedCategories.includes(category.id);
        const isSelected = selectedCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => !isLocked && onSelectCategory(category.id)}
            disabled={isLocked}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium text-sm group relative overflow-hidden ${
              isSelected
                ? 'bg-gradient-to-r from-gold to-amber-500 text-ink shadow-lg'
                : isLocked
                ? 'bg-blue-500/10 text-blue-700 cursor-not-allowed opacity-60'
                : 'bg-card/50 text-foreground hover:bg-card/80 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between relative z-10">
              <span className="flex items-center gap-2">
                {isLocked && <Lock className="w-4 h-4" />}
                <span className="truncate">{category.name}</span>
              </span>
              {isSelected && !isLocked && (
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
