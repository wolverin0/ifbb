'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface JudgeScore {
  judgeNumber: number;
  symmetry: number;
  muscularity: number;
  conditioning: number;
  total: number;
}

interface ScoreSheetProps {
  athleteName: string;
  eventName: string;
  category: string;
  date: string;
  judgeScores?: JudgeScore[];
}

export const ScoreSheet: React.FC<ScoreSheetProps> = ({
  athleteName,
  eventName,
  category,
  date,
  judgeScores,
}) => {
  const scores = judgeScores || [
    { judgeNumber: 1, symmetry: 9.2, muscularity: 9.5, conditioning: 9.3, total: 28.0 },
    { judgeNumber: 2, symmetry: 9.0, muscularity: 9.4, conditioning: 9.2, total: 27.6 },
    { judgeNumber: 3, symmetry: 9.3, muscularity: 9.6, conditioning: 9.4, total: 28.3 },
    { judgeNumber: 4, symmetry: 9.1, muscularity: 9.3, conditioning: 9.1, total: 27.5 },
    { judgeNumber: 5, symmetry: 9.2, muscularity: 9.5, conditioning: 9.3, total: 28.0 },
  ];

  const calculateAverage = (key: keyof Omit<JudgeScore, 'judgeNumber' | 'total'>) => {
    const sum = scores.reduce((acc, score) => acc + score[key], 0);
    return (sum / scores.length).toFixed(2);
  };

  const calculateTotalAverage = () => {
    const sum = scores.reduce((acc, score) => acc + score.total, 0);
    return (sum / scores.length).toFixed(2);
  };

  return (
    <Card className="w-full print:shadow-none print:border-2">
      <CardHeader className="border-b-2 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl mb-2">Judge Score Sheet</CardTitle>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold">Athlete:</span> {athleteName}
              </p>
              <p>
                <span className="font-semibold">Event:</span> {eventName}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {category}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {date}
              </p>
            </div>
          </div>
          <div className="text-right text-xs text-muted-foreground">
            Issued: {new Date().toLocaleDateString('es-AR')}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="overflow-x-auto">
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-secondary hover:bg-secondary">
                <TableHead className="font-bold text-center border">Judge #</TableHead>
                <TableHead className="font-bold text-center border">Symmetry</TableHead>
                <TableHead className="font-bold text-center border">Muscularity</TableHead>
                <TableHead className="font-bold text-center border">Conditioning</TableHead>
                <TableHead className="font-bold text-center border">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scores.map((score) => (
                <TableRow key={score.judgeNumber} className="border">
                  <TableCell className="text-center font-semibold border">
                    Judge {score.judgeNumber}
                  </TableCell>
                  <TableCell className="text-center border">{score.symmetry}</TableCell>
                  <TableCell className="text-center border">{score.muscularity}</TableCell>
                  <TableCell className="text-center border">{score.conditioning}</TableCell>
                  <TableCell className="text-center font-bold border">
                    <span className="text-primary">{score.total}</span>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-secondary font-bold border">
                <TableCell className="text-center border">Average</TableCell>
                <TableCell className="text-center border">
                  {calculateAverage('symmetry')}
                </TableCell>
                <TableCell className="text-center border">
                  {calculateAverage('muscularity')}
                </TableCell>
                <TableCell className="text-center border">
                  {calculateAverage('conditioning')}
                </TableCell>
                <TableCell className="text-center text-primary border">
                  {calculateTotalAverage()}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 pt-6 border-t-2 print:border-t-2">
          <h3 className="font-bold mb-3">Scoring Criteria:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold text-primary mb-1">Symmetry (0-10)</p>
              <p className="text-muted-foreground">
                Overall proportion and balance of body parts
              </p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-1">Muscularity (0-10)</p>
              <p className="text-muted-foreground">
                Muscle size, shape, and definition
              </p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-1">Conditioning (0-10)</p>
              <p className="text-muted-foreground">
                Skin tightness, vascularity, and overall condition
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t text-xs text-muted-foreground text-center print:text-xs">
          <p>This score sheet is official documentation of the competition results.</p>
          <p className="mt-1">For inquiries, please contact IFBB Argentina official headquarters.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreSheet;
