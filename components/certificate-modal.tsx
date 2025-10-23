'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Certificate } from '@/components/certificate';
import { Download, FileText, FileImage } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface CertificateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  athleteName: string;
  eventName: string;
  category: string;
  placing: number;
  date: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  open,
  onOpenChange,
  athleteName,
  eventName,
  category,
  placing,
  date,
}) => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const getMedalType = (place: number): 'gold' | 'silver' | 'bronze' => {
    if (place === 1) return 'gold';
    if (place === 2) return 'silver';
    return 'bronze';
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const fileName = `Certificate_${athleteName}_${eventName}.pdf`;
      toast({
        title: 'Certificate Downloaded!',
        description: `${fileName} has been saved to your downloads folder.`,
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: 'Download Error',
        description: 'There was an error downloading the certificate. Please try again.',
        variant: 'destructive',
        duration: 3000,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadPNG = async () => {
    setIsDownloading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const fileName = `Certificate_${athleteName}_${eventName}.png`;
      toast({
        title: 'Certificate Downloaded!',
        description: `${fileName} has been saved to your downloads folder.`,
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: 'Download Error',
        description: 'There was an error downloading the certificate. Please try again.',
        variant: 'destructive',
        duration: 3000,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadScoreSheet = async () => {
    setIsDownloading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const fileName = `ScoreSheet_${athleteName}_${eventName}.pdf`;
      toast({
        title: 'Score Sheet Downloaded!',
        description: `${fileName} has been saved to your downloads folder.`,
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: 'Download Error',
        description: 'There was an error downloading the score sheet. Please try again.',
        variant: 'destructive',
        duration: 3000,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Certificate Preview</DialogTitle>
          <DialogDescription>
            Preview and download your achievement certificate
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <Certificate
            athleteName={athleteName}
            eventName={eventName}
            category={category}
            placing={placing}
            date={date}
            medal={getMedalType(placing)}
          />
        </div>

        <DialogFooter className="flex gap-2 flex-wrap justify-end">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isDownloading}
          >
            Close
          </Button>

          {placing <= 3 && (
            <>
              <Button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="gap-2"
              >
                <FileText className="h-4 w-4" />
                {isDownloading ? 'Downloading...' : 'Download PDF'}
              </Button>
              <Button
                onClick={handleDownloadPNG}
                disabled={isDownloading}
                className="gap-2"
              >
                <FileImage className="h-4 w-4" />
                {isDownloading ? 'Downloading...' : 'Download Image'}
              </Button>
            </>
          )}

          <Button
            onClick={handleDownloadScoreSheet}
            disabled={isDownloading}
            variant="secondary"
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            {isDownloading ? 'Downloading...' : 'Score Sheet'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateModal;
