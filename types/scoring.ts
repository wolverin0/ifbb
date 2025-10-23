export interface Category {
  id: string;
  name: string;
}

export interface Competitor {
  id: string;
  number: number;
  name: string;
  categoryId: string;
  photoUrl?: string;
}

export interface CompetitorScores {
  [competitorId: string]: {
    [categoryId: string]: number;
  };
}

export interface Judge {
  id: string;
  name: string;
  number: number;
}

export interface ScoringSession {
  eventId: string;
  judges: Judge[];
  scores: CompetitorScores;
  lockedCategories: string[];
  createdAt: Date;
  updatedAt: Date;
}
