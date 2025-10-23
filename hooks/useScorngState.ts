import { useState, useCallback } from 'react';
import { Category, Competitor, CompetitorScores } from '@/types/scoring';

const STORAGE_KEY_PREFIX = 'scoring_';

export function useScoringState(eventId: string) {
  const [categories] = useState<Category[]>([
    { id: 'mens-physique-a', name: "Men's Physique Clase A" },
    { id: 'mens-physique-b', name: "Men's Physique Clase B" },
    { id: 'bikini', name: 'Bikini' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'figure', name: 'Figure' },
    { id: 'bodyfitness', name: 'Body Fitness' },
  ]);

  const [competitors] = useState<Competitor[]>(
    generateMockCompetitors(categories)
  );

  const [scores, setScores] = useState<CompetitorScores>({});
  const [lockedCategories, setLockedCategories] = useState<string[]>([]);

  const storageKey = `${STORAGE_KEY_PREFIX}${eventId}`;
  const lockedStorageKey = `${storageKey}_locked`;

  const loadScores = useCallback(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      const storedLocked = localStorage.getItem(lockedStorageKey);

      if (stored) {
        setScores(JSON.parse(stored));
      }
      if (storedLocked) {
        setLockedCategories(JSON.parse(storedLocked));
      }
    } catch (error) {
      console.error('Error loading scores:', error);
    }
  }, [storageKey, lockedStorageKey]);

  const updateScore = useCallback(
    (categoryId: string, competitorId: string, score: number) => {
      setScores(prev => {
        const updated = { ...prev };
        if (!updated[competitorId]) {
          updated[competitorId] = {};
        }
        updated[competitorId] = {
          ...updated[competitorId],
          [categoryId]: score,
        };

        // Save to localStorage
        try {
          localStorage.setItem(storageKey, JSON.stringify(updated));
        } catch (error) {
          console.error('Error saving scores:', error);
        }

        return updated;
      });
    },
    [storageKey]
  );

  const finalizeCategory = useCallback(
    (categoryId: string) => {
      setLockedCategories(prev => {
        const updated = [...prev, categoryId];

        // Save to localStorage
        try {
          localStorage.setItem(lockedStorageKey, JSON.stringify(updated));
        } catch (error) {
          console.error('Error saving locked categories:', error);
        }

        return updated;
      });
    },
    [lockedStorageKey]
  );

  const clearScores = useCallback(() => {
    setScores({});
    setLockedCategories([]);

    try {
      localStorage.removeItem(storageKey);
      localStorage.removeItem(lockedStorageKey);
    } catch (error) {
      console.error('Error clearing scores:', error);
    }
  }, [storageKey, lockedStorageKey]);

  return {
    categories,
    competitors,
    scores,
    lockedCategories,
    updateScore,
    finalizeCategory,
    loadScores,
    clearScores,
  };
}

function generateMockCompetitors(categories: Category[]): Competitor[] {
  const firstNames = [
    'Juan',
    'Miguel',
    'Carlos',
    'Pedro',
    'Diego',
    'Fernando',
    'Ricardo',
    'Sergio',
    'Roberto',
    'Andrés',
    'Javier',
    'Gustavo',
  ];

  const lastNames = [
    'García',
    'Martínez',
    'López',
    'Rodríguez',
    'Pérez',
    'González',
    'Sánchez',
    'Fernández',
    'Ruiz',
    'Reyes',
    'Santos',
    'Morales',
  ];

  const photoPlaceholders = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1539571696357-5a69c006b310?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1552869300-6e8e8e8e8e8e?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
  ];

  const competitors: Competitor[] = [];
  let competitorNumber = 1;

  categories.forEach(category => {
    for (let i = 0; i < 12; i++) {
      const firstName =
        firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName =
        lastNames[Math.floor(Math.random() * lastNames.length)];
      const photo =
        photoPlaceholders[Math.floor(Math.random() * photoPlaceholders.length)];

      competitors.push({
        id: `competitor-${competitorNumber}`,
        number: competitorNumber,
        name: `${firstName} ${lastName}`,
        categoryId: category.id,
        photoUrl: photo,
      });

      competitorNumber++;
    }
  });

  return competitors;
}
