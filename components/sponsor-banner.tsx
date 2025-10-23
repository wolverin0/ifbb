'use client'

import Image from "next/image";

const sponsors = [
  { name: 'Megathlon', logo: '/megatlon.png' },
  { name: 'Star Nutrition', logo: '/star.png' },
  { name: 'GFitness', logo: '/gfitness.png' },
  { name: 'BSN', logo: '/bsn.png' },
  { name: 'MuscleTech', logo: '/muscletech.png' },
  { name: 'ENA Sport', logo: '/ena.png' },
];

export function SponsorBanner() {
  // Duplicate sponsors array for seamless loop
  const allSponsors = [...sponsors, ...sponsors];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#B78B1E]/10 via-[#F59E0B]/10 to-[#B78B1E]/10 border-y border-amber-600/20 py-8">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#B78B1E] to-[#F59E0B] bg-clip-text text-transparent">
          Patrocinadores Oficiales
        </h2>
        <p className="text-sm text-muted-foreground mt-1">Impulsando el fisicoculturismo argentino</p>
      </div>

      {/* Scrolling container */}
      <div className="relative flex">
        <div className="flex animate-scroll-slow">
          {allSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: '200px', height: '100px' }}
            >
              <div className="relative w-full h-full p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-amber-600/50 transition-all hover:scale-110 hover:shadow-lg">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-slow {
          animation: scroll-slow 30s linear infinite;
        }
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
