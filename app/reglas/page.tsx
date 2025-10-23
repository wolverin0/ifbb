import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, BookOpen } from "lucide-react";

const ruleCategories = [
  {
    title: "Reglas Generales",
    rules: [
      {
        name: "Reglas Generales IFBB (2024)",
        url: "https://ifbb.com/wp-content/uploads/2024/08/01-IFBB-General-Rules-2024-edition-1.pdf",
        year: "2024"
      }
    ]
  },
  {
    title: "Categorías Masculinas",
    rules: [
      {
        name: "Men's Bodybuilding",
        url: "https://ifbb.com/wp-content/uploads/2024/02/Mens-Bodybuilding-Rules-2024.pdf",
        year: "2024"
      },
      {
        name: "Men's Classic Physique",
        url: "https://ifbb.com/wp-content/uploads/2024/02/Mens-Classic-Physique-2024.pdf",
        year: "2024"
      },
      {
        name: "Men's Classic Bodybuilding",
        url: "https://ifbb.com/wp-content/uploads/2024/02/Mens-Classic-Bodybuilding-Rules-2024.pdf",
        year: "2024"
      },
      {
        name: "Men's Physique",
        url: "https://ifbb.com/wp-content/uploads/2025/04/Mens-Physique-2024.pdf",
        year: "2024"
      },
      {
        name: "Men's Fitness",
        url: "https://ifbb.com/wp-content/uploads/2023/02/Mens-Fitness-Rules-2023.pdf",
        year: "2023"
      },
      {
        name: "Men's Fit-Model",
        url: "https://ifbb.com/wp-content/uploads/2025/02/Mens-Fit-Model-Rules-2025.pdf",
        year: "2025"
      },
      {
        name: "Men's Wheelchair Bodybuilding",
        url: "https://ifbb.com/wp-content/uploads/2024/04/MENS-WHEELCHAIR-BODYBUILDINGapril24.pdf",
        year: "2024"
      }
    ]
  },
  {
    title: "Categorías Femeninas",
    rules: [
      {
        name: "Women's Bikini Fitness",
        url: "https://ifbb.com/wp-content/uploads/2024/02/Women-Bikini-Rules-2024.pdf",
        year: "2024"
      },
      {
        name: "Women's Bodyfitness",
        url: "https://ifbb.com/wp-content/uploads/2024/02/Women-Bodyfitness-Rules-2024.pdf",
        year: "2024"
      },
      {
        name: "Women's Physique",
        url: "https://ifbb.com/wp-content/uploads/2024/02/Womens-Physique-Rules-2024.pdf",
        year: "2024"
      },
      {
        name: "Women's Wellness Fitness",
        url: "https://ifbb.com/wp-content/uploads/2024/02/Women-Wellnes-2024.pdf",
        year: "2024"
      },
      {
        name: "Women's Fit-Model",
        url: "https://ifbb.com/wp-content/uploads/2025/03/Women-Fit-Model-Rules-2025.pdf",
        year: "2025"
      },
      {
        name: "Women's Artistic Fitness",
        url: "https://ifbb.com/wp-content/uploads/2024/02/Women-Artistic-Fitness-2024.pdf",
        year: "2024"
      },
      {
        name: "Women's Acrobatic Fitness",
        url: "https://ifbb.com/wp-content/uploads/2023/05/Women-Acrobatic-Fitness-Rules-2023.pdf",
        year: "2023"
      }
    ]
  },
  {
    title: "Categorías Mixtas y Parejas",
    rules: [
      {
        name: "Fit Pairs",
        url: "https://ifbb.com/wp-content/uploads/2024/02/Fit-Pairs-Rules-2024.pdf",
        year: "2024"
      },
      {
        name: "Mixed Pairs",
        url: "https://ifbb.com/wp-content/uploads/2024/02/Mixed-Pairs-Rules-2024.pdf",
        year: "2024"
      }
    ]
  },
  {
    title: "Categorías Infantiles",
    rules: [
      {
        name: "Children's Fitness Challenge",
        url: "https://ifbb.com/wp-content/uploads/2024/10/CHILDREN-FITNESS-CHALLENGE.pdf",
        year: "2024"
      },
      {
        name: "Mini Children Fitness Challenge",
        url: "https://ifbb.com/wp-content/uploads/2024/10/CHILDREN-FITNESS-CHALLENGE-MINI-CATEGORIES.pdf",
        year: "2024"
      },
      {
        name: "Children's Dance Fitness",
        url: "https://ifbb.com/wp-content/uploads/2025/02/Childrens-Dance-Fitness-Rules-2025.pdf",
        year: "2025"
      },
      {
        name: "Children's Artistic Fitness",
        url: "https://ifbb.com/wp-content/uploads/2025/02/Childrens-Artistic-Fitness-Rules-2025.pdf",
        year: "2025"
      },
      {
        name: "Children's Acrobatic Fitness",
        url: "https://ifbb.com/wp-content/uploads/2025/02/Children-Acrobatic-Fitness-Rules-2025.pdf",
        year: "2025"
      },
      {
        name: "Children Fitness Team",
        url: "https://ifbb.com/wp-content/uploads/2025/02/Children-Fitness-Team-Rules-2025.pdf",
        year: "2025"
      }
    ]
  },
  {
    title: "Otras Categorías",
    rules: [
      {
        name: "Fitness Challenge",
        url: "https://ifbb.com/wp-content/uploads/2025/07/TECHNICAL-REGULATION-OF-THE-EXERCISES-%D9%80July-2025.pdf",
        year: "2025"
      },
      {
        name: "Athletic Fitness",
        url: "https://ifbb.com/wp-content/uploads/2018/01/Athletic-Fitness-Rules.pdf",
        year: "2019"
      },
      {
        name: "IFBB Fitness Agility",
        url: "https://ifbb.com/wp-content/uploads/2024/06/IFBB-FITNESS-AGILITY.pdf",
        year: "2024"
      },
      {
        name: "Fit Sport Modalities",
        url: "https://ifbb.com/wp-content/uploads/2025/05/Fits-sport-modalities.pdf",
        year: "2025"
      }
    ]
  }
];

export default function ReglasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 spotlight-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-12 h-12 text-[#B78B1E]" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Reglamento Oficial IFBB</h1>
          </div>
          <p className="text-xl md:text-2xl max-w-3xl text-muted-foreground">
            Consultá las reglas oficiales de la Federación Internacional de Fisicoculturismo y Fitness
            para todas las categorías de competencia.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <Card className="mb-12 bg-gradient-to-br from-card to-muted/10 border-purple-600/20">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Sobre el Reglamento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las reglas están disponibles en formato PDF, el cual requiere Adobe Acrobat Reader para su correcta visualización.
                  Todos los documentos están en inglés y son los oficiales de la IFBB a nivel internacional.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Es responsabilidad de cada atleta, entrenador y juez conocer y cumplir con el reglamento
                  correspondiente a su categoría antes de participar en cualquier competencia oficial.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rules by Category */}
        {ruleCategories.map((category, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.rules.map((rule, ruleIdx) => (
                <Card key={ruleIdx} className="hover:shadow-lg transition-shadow bg-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold flex-1">{rule.name}</h3>
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {rule.year}
                      </Badge>
                    </div>
                    <a
                      href={rule.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm mt-2"
                    >
                      <Download className="w-4 h-4" />
                      Descargar PDF
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-purple-600/20 mt-16">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Tenés dudas sobre el reglamento?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Si necesitás aclaraciones sobre alguna regla o categoría, contactá a nuestro equipo técnico.
            </p>
            <a
              href="mailto:reglamento@ifbbargentina.com.ar"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Contactar Equipo Técnico
            </a>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
