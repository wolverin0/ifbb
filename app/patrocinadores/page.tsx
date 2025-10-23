import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Award, Trophy } from "lucide-react";
import Image from "next/image";

const sponsors = [
  {
    id: '1',
    name: 'Megathlon',
    tier: 'Gold',
    description: 'Cadena líder de gimnasios en Argentina con más de 50 sucursales en todo el país.',
    website: 'https://megathlon.com.ar',
    logo: '/megatlon.png',
  },
  {
    id: '2',
    name: 'Star Nutrition',
    tier: 'Gold',
    description: 'Suplementos deportivos y nutrición especializada para atletas de alto rendimiento.',
    website: 'https://starnutrition.com.ar',
    logo: '/star.png',
  },
  {
    id: '3',
    name: 'GFitness',
    tier: 'Silver',
    description: 'Red de gimnasios premium con equipamiento de última generación.',
    website: 'https://gfitness.com.ar',
    logo: '/gfitness.png',
  },
  {
    id: '4',
    name: 'BSN',
    tier: 'Silver',
    description: 'Marca internacional de suplementación deportiva de calidad premium.',
    website: 'https://bsnonline.com',
    logo: '/bsn.png',
  },
  {
    id: '5',
    name: 'MuscleTech',
    tier: 'Silver',
    description: 'Suplementos científicamente formulados para máximo rendimiento.',
    website: 'https://muscletech.com',
    logo: '/muscletech.png',
  },
  {
    id: '6',
    name: 'ENA Sport',
    tier: 'Bronze',
    description: 'Suplementos y nutrición deportiva accesible para todos los atletas.',
    website: 'https://enasport.com.ar',
    logo: '/ena.png',
  },
];

const tierInfo = {
  Gold: { icon: Trophy, color: 'from-[#B78B1E] to-[#F59E0B]', textColor: 'text-amber-700', bgColor: 'bg-amber-600/20' },
  Silver: { icon: Award, color: 'from-gray-400 to-gray-600', textColor: 'text-gray-700', bgColor: 'bg-gray-600/20' },
  Bronze: { icon: Building2, color: 'from-orange-700 to-orange-900', textColor: 'text-orange-700', bgColor: 'bg-orange-600/20' },
};

export default function PatrocinadoresPage() {
  const goldSponsors = sponsors.filter(s => s.tier === 'Gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'Silver');
  const bronzeSponsors = sponsors.filter(s => s.tier === 'Bronze');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 spotlight-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Nuestros Patrocinadores</h1>
          <p className="text-xl md:text-2xl max-w-3xl text-muted-foreground">
            Gracias a nuestros patrocinadores, podemos ofrecer eventos de clase mundial
            y apoyar el crecimiento del fisicoculturismo en Argentina.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-8 h-8 text-amber-600" />
              <h2 className="text-3xl font-bold">Patrocinadores Oro</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goldSponsors.map(sponsor => {
                const tierConfig = tierInfo[sponsor.tier];
                return (
                  <Card key={sponsor.id} className="hover:shadow-xl transition-shadow bg-gradient-to-br from-card to-muted/10 border-amber-600/30">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center mb-6 h-24">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          width={200}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center mb-4">
                        <Badge className={`${tierConfig.bgColor} ${tierConfig.textColor} border-0`}>
                          <tierConfig.icon className="w-3 h-3 mr-1 inline" />
                          {sponsor.tier}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-center mb-4">{sponsor.description}</p>
                      <div className="text-center">
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 hover:text-amber-700 font-semibold"
                        >
                          Visitar sitio web →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-gray-600" />
              <h2 className="text-3xl font-bold">Patrocinadores Plata</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {silverSponsors.map(sponsor => {
                const tierConfig = tierInfo[sponsor.tier];
                return (
                  <Card key={sponsor.id} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-card to-muted/10 border-gray-600/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center mb-4 h-20">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          width={150}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center mb-3">
                        <Badge className={`${tierConfig.bgColor} ${tierConfig.textColor} border-0 text-xs`}>
                          {sponsor.tier}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm text-center mb-3">{sponsor.description}</p>
                      <div className="text-center">
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-700 font-semibold text-sm"
                        >
                          Visitar sitio →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Bronze Sponsors */}
        {bronzeSponsors.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-8 h-8 text-orange-700" />
              <h2 className="text-3xl font-bold">Patrocinadores Bronce</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {bronzeSponsors.map(sponsor => {
                const tierConfig = tierInfo[sponsor.tier];
                return (
                  <Card key={sponsor.id} className="hover:shadow-md transition-shadow bg-gradient-to-br from-card to-muted/10 border-orange-600/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-center mb-3 h-16">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          width={120}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center mb-2">
                        <Badge className={`${tierConfig.bgColor} ${tierConfig.textColor} border-0 text-xs`}>
                          {sponsor.tier}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-xs text-center mb-2 line-clamp-2">{sponsor.description}</p>
                      <div className="text-center">
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-700 hover:text-orange-800 font-semibold text-xs"
                        >
                          Visitar →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#B78B1E]/10 to-[#F59E0B]/10 rounded-2xl p-12 text-center border border-amber-600/20">
          <h2 className="text-3xl font-bold mb-4">¿Querés ser parte?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Convertite en patrocinador de IFBB Argentina y llegá a miles de atletas y
            entusiastas del fitness en todo el país.
          </p>
          <a
            href="mailto:patrocinios@ifbbargentina.com.ar"
            className="inline-block bg-gradient-to-r from-[#B78B1E] to-[#F59E0B] hover:from-[#A67A1A] hover:to-[#E58A00] text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            Contactar
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
