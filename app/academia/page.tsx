import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Globe,
  Monitor,
  Users,
  BookOpen,
  Award,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import Image from "next/image";

const courses = [
  {
    title: "Personal Trainer",
    description: "Obtené una acreditación gratificante y exitosa donde ayudarás a tus clientes a alcanzar sus objetivos de salud, fitness y deportivos.",
    level: "Básico",
    icon: Users
  },
  {
    title: "Nutrición Básica",
    description: "Adquirí las pautas esenciales para asesorar sobre la nutrición más efectiva para el rendimiento atlético y un estilo de vida saludable.",
    level: "Básico",
    icon: BookOpen
  },
  {
    title: "Nutrición Avanzada",
    description: "Obtené la calificación definitiva para ser reconocido como especialista prestigioso en nutrición para atletas de alto rendimiento.",
    level: "Avanzado",
    icon: Award
  },
  {
    title: "Master en Bodybuilding & Fitness",
    description: "Obtené un título de Máster de la IFBB, la autoridad mundial en Fisicoculturismo y Fitness.",
    level: "Máster",
    icon: GraduationCap
  },
  {
    title: "Especialista en Entrenamiento Abdominal",
    description: "Aprendé las técnicas definitivas para convertirte en un gurú en educar a tus clientes para tener un core fuerte y un impresionante six pack.",
    level: "Especialización",
    icon: CheckCircle2
  },
  {
    title: "Kinesiología del Entrenamiento con Pesas",
    description: "La mejor manera de mejorar tu conocimiento sobre la ciencia detrás de los ejercicios de entrenamiento con pesas.",
    level: "Avanzado",
    icon: BookOpen
  }
];

const features = [
  {
    icon: Globe,
    title: "Alcance Mundial",
    description: "La Academia IFBB lleva a cabo actividades educativas en los cinco continentes, unificando criterios de enseñanza a nivel mundial."
  },
  {
    icon: Award,
    title: "Certificación Internacional",
    description: "Certificaciones reconocidas por la IFBB en más de 190 países, avaladas por la autoridad mundial en Bodybuilding y Fitness."
  },
  {
    icon: Users,
    title: "Formación de Élite",
    description: "La Academia IFBB forma nuevas generaciones de entrenadores y especialistas con técnicas de entrenamiento y nutrición probadas internacionalmente."
  },
  {
    icon: Monitor,
    title: "Flexibilidad de Estudio",
    description: "Cursos online, presenciales y e-learning que te permiten estudiar a tu ritmo desde cualquier lugar del mundo."
  }
];

const testimonials = [
  {
    name: "Angela Oramas",
    country: "Colombia",
    quote: "Aprender nutrición con IFBB Academy ha sido muy fácil. Ahora puedo cuidar de mí y de mi familia."
  },
  {
    name: "Edgard López",
    country: "España",
    quote: "El Bodybuilding es mi pasión y, con el Master de IFBB Academy, se ha convertido también en mi profesión. Complemento mi trabajo en un club deportivo con el asesoramiento a atletas de competición."
  },
  {
    name: "Mohammad Al Abbas",
    country: "EAU",
    quote: "Después de completar el Curso de Entrenamiento Abdominal, tengo más conocimiento para asesorar a mis estudiantes sobre cómo mejorar su rendimiento deportivo."
  }
];

export default function AcademiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="w-12 h-12" />
            <h1 className="text-5xl md:text-6xl font-bold">IFBB Academia</h1>
          </div>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Alcanzá tu Certificación Internacional avalada por la Autoridad Mundial en Fitness y Bodybuilding
          </p>
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-white/20 text-white border-0 text-base px-4 py-2">
              Certificación Internacional
            </Badge>
            <Badge className="bg-white/20 text-white border-0 text-base px-4 py-2">
              Reconocida en 190+ Países
            </Badge>
            <Badge className="bg-white/20 text-white border-0 text-base px-4 py-2">
              Estudia Online
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Why Choose Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">¿Por Qué Elegir IFBB Academia?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Formación de excelencia respaldada por la experiencia y el prestigio de la
              Federación Internacional de Fisicoculturismo y Fitness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-card to-muted/10 border-purple-600/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <Card className="mb-20 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-purple-600/20">
          <CardContent className="p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Misión</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Los programas educativos de IFBB Academia están diseñados para cubrir la demanda incesante
                  de entrenadores y monitores por parte de una sociedad en la que la conciencia sobre la
                  importancia de una vida saludable y la necesidad de combatir los problemas del sedentarismo
                  está en constante aumento.
                </p>
                <p>
                  A través de la incorporación de hábitos de ejercicio, estilo de vida y nutrición fitness,
                  cubrimos también las áreas más especializadas del alto rendimiento en fitness, fisicoculturismo
                  y bodybuilding aplicado.
                </p>
                <p>
                  Los cursos de IFBB Academia abren el camino para que atletas y entusiastas del Bodybuilding
                  y fitness se embarquen en la emocionante aventura de trabajar y hacer una profesión del deporte
                  que aman, contribuyendo a la mejora de la salud y el fitness para todos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Types */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Tipos de Cursos</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-card to-purple-600/5 border-purple-600/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Monitor className="w-6 h-6 text-purple-600" />
                  Cursos Online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Estudia fácilmente desde casa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Certificación reconocida internacionalmente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>100% Online con apps interactivas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Disponible en múltiples idiomas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-blue-600/5 border-blue-600/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  Cursos Presenciales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Academias en países afiliados a IFBB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Formación práctica presencial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Certificación y guía de profesionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Programa de certificación integral</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-green-600/5 border-green-600/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-green-600" />
                  Cursos E-Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Clases en vivo, no grabadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Tecnologías de comunicación modernas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Estudia desde casa sin viajar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Prestigio y reconocimiento IFBB</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Cursos Destacados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                    <course.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Lo Que Dicen Nuestros Estudiantes</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-card to-muted/10">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-4xl text-purple-600 mb-2">"</div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recognition Logos */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Reconocida Por / Afiliada A</h2>
          <Card className="bg-gradient-to-br from-card to-muted/10">
            <CardContent className="p-8">
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="text-center">
                  <p className="font-semibold text-sm">European College</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">European Commission</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">ICCE</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">ICSSPE</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">UNESCO</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-purple-600/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Comenzar tu Carrera?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unite a miles de profesionales certificados por IFBB en todo el mundo y
              convertí tu pasión por el fitness en una carrera exitosa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-lg px-8"
                asChild
              >
                <a href="https://ifbb-academy.com/online-courses/" target="_blank" rel="noopener noreferrer">
                  Ver Cursos Online
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold text-lg px-8"
                asChild
              >
                <a href="mailto:academia@ifbbargentina.com.ar">
                  Consultar Información
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
