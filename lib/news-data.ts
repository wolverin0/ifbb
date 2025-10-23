export interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  date: Date
  category: "Campeonato" | "Atleta Destacado" | "Evento Internacional" | "Actualización" | "Anuncio"
  image: string
  author: string
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Argentina Domina el Campeonato Sudamericano de Bodybuilding 2024",
    excerpt:
      "Con un desempeño excepcional, los atletas argentinos conquistaron 8 medallas de oro en la competencia regional celebrada en Buenos Aires.",
    content: `El Campeonato Sudamericano de Bodybuilding 2024 marcó un hito histórico para la IFBB Argentina. Nuestros atletas demostraron un nivel técnico y físico incomparable, logrando posicionarse en los primeros lugares de todas las categorías.

    Destacamos especialmente el desempeño de nuestros campeones en las categorías Open, 212 Libras y Femenino, quienes brillaron en el escenario con una preparación impecable.

    Este triunfo refleja el compromiso de nuestros deportistas con la excelencia y el arduo entrenamiento realizado durante los últimos meses. La IFBB Argentina continúa siendo una potencia en la región.`,
    date: new Date(2024, 9, 20),
    category: "Campeonato",
    image: "/news/campeonato-sudamericano.jpg",
    author: "IFBB Argentina",
  },
  {
    id: "2",
    title: "Gómez Conquista el Título de Mr. Olympia en la Categoría 212",
    excerpt:
      "Lucas Gómez, representante argentino, se corona como campeón internacional en la máxima competencia de bodybuilding profesional.",
    content: `En una actuación memorable, Lucas Gómez se llevó la corona en la categoría 212 Libras del Mr. Olympia 2024, celebrado en Las Vegas.

    Con una musculatura completamente formada, proporciones perfectas y una condición extraordinaria, Gómez demostró que Argentina está a la altura de los mejores competidores del mundo.

    Su victoria es un orgullo para toda la comunidad de bodybuilding argentino y abre las puertas a futuras generaciones de atletas que buscan alcanzar la excelencia internacional.`,
    date: new Date(2024, 9, 15),
    category: "Atleta Destacado",
    image: "/news/gomez-olympia.jpg",
    author: "IFBB Argentina",
  },
  {
    id: "3",
    title: "Campeonato Nacional 2024: Inscripciones Abiertas",
    excerpt:
      "Ya están disponibles las inscripciones para el Campeonato Nacional de Bodybuilding 2024. Registra tu entrada antes del 31 de octubre.",
    content: `La IFBB Argentina abre las inscripciones para el Campeonato Nacional 2024, la competencia más importante a nivel nacional.

    Los atletas podrán participar en diversas categorías:
    - Hombres: Open, 212 Libras, 180 Libras, 175 Libras, Aficionados
    - Mujeres: Open, Wellness, Figure, Bikini
    - Juniors

    El evento se llevará a cabo en el Estadio de La Plata el 15 de noviembre. Las inscripciones cierran el 31 de octubre.

    Para más información y registro, visita www.ifbbargentina.com.ar`,
    date: new Date(2024, 9, 18),
    category: "Anuncio",
    image: "/news/campeonato-nacional-inscripciones.jpg",
    author: "IFBB Argentina",
  },
  {
    id: "4",
    title: "Martínez Clasificada para el Arnold Classic Europe",
    excerpt:
      "Sofia Martínez logra el pase directo para competir en el Arnold Classic Europe 2025, una de las pruebas profesionales más prestigiosas.",
    content: `Sofia Martínez, atleta argentina de categoría Bikini, ha sido seleccionada oficialmente para participar en el Arnold Classic Europe 2025.

    Esta clasificación es resultado de su impresionante desempeño en competencias nacionales e internacionales durante los últimos dos años.

    El Arnold Classic Europe se realizará en Madrid, España, del 12 al 15 de marzo de 2025. Martínez competirá contra las mejores atletas del mundo en su categoría.

    La IFBB Argentina respalda a Sofia y la acompaña en esta travesía hacia el reconocimiento internacional.`,
    date: new Date(2024, 9, 12),
    category: "Evento Internacional",
    image: "/news/martinez-arnold-classic.jpg",
    author: "IFBB Argentina",
  },
  {
    id: "5",
    title: "Nuevos Estándares de Preparación: Seminario Internacional",
    excerpt:
      "Expertos mundiales en nutrición y entrenamiento dictarán un seminario exclusivo sobre preparación moderna de competidores de bodybuilding.",
    content: `La IFBB Argentina, en colaboración con la IFBB Pro League, organiza un seminario internacional de entrenamiento y preparación.

    Conferenciantes confirmados:
    - Dr. Michel Haissaguerre: Fisiología del ejercicio avanzada
    - Coach Mike Israetel: Programación de volumen y frecuencia
    - Dra. María González: Nutrición deportiva de élite

    Fecha: 5 de noviembre de 2024
    Lugar: Centro de Convenciones de Buenos Aires
    Cupos limitados: 200 participantes

    Inscripciones: www.ifbbargentina.com.ar/seminario`,
    date: new Date(2024, 9, 10),
    category: "Actualización",
    image: "/news/seminario-internacional.jpg",
    author: "IFBB Argentina",
  },
  {
    id: "6",
    title: "Rodríguez Campeona Sudamericana en Categoría Wellness",
    excerpt:
      "Juliana Rodríguez logra el título sudamericano con una presentación impecable y promete ser competencia seria a nivel mundial.",
    content: `Juliana Rodríguez se coronó como campeona sudamericana en la categoría Wellness, superando a competidoras de toda la región.

    Con una musculatura armónica, excelente definición y presencia escénica de clase mundial, Rodríguez demostró por qué es considerada una de las atletas más prometedoras de Argentina.

    Su siguiente objetivo es clasificarse para el pro card y competir en escenarios internacionales de élite.

    Felicitaciones a Juliana y a su equipo de entrenadores y nutricionistas.`,
    date: new Date(2024, 9, 8),
    category: "Atleta Destacado",
    image: "/news/rodriguez-sudamericana.jpg",
    author: "IFBB Argentina",
  },
  {
    id: "7",
    title: "IFBB Argentina Apoya Nuevo Programa de Becas para Atletas Jóvenes",
    excerpt:
      "Se lanza programa de apoyo económico para atletas menores de 25 años que muestren talento y dedicación en bodybuilding.",
    content: `La IFBB Argentina implementa un nuevo programa de becas destinado a jóvenes atletas con potencial competitivo.

    Beneficiarios recibirán:
    - Asistencia económica mensual
    - Acceso a centros de entrenamiento de élite
    - Asesoría nutricional profesional
    - Participación en competencias nacionales cubiertas

    Requisitos:
    - Ser menor de 25 años
    - Tener antecedentes competitivos
    - Comprometerse con estándares de excelencia
    - Representar a Argentina en competencias internacionales

    Las convocatorias se abrirán el 1 de noviembre. Para detalles, contacta a becas@ifbbargentina.com.ar`,
    date: new Date(2024, 9, 5),
    category: "Anuncio",
    image: "/news/programa-becas.jpg",
    author: "IFBB Argentina",
  },
  {
    id: "8",
    title: "Récord de Asistencia en la Copa Argentina de Bodybuilding",
    excerpt:
      "Más de 5,000 espectadores presenciaron la final de la Copa Argentina, demostrando el crecimiento del interés en el deporte.",
    content: `La Copa Argentina de Bodybuilding registró un récord histórico de asistencia con más de 5,000 espectadores que llenaron el teatro del evento.

    La transmisión en vivo por redes sociales alcanzó 50,000 visualizaciones simultáneas, posicionando el bodybuilding como un deporte de masas en Argentina.

    Los organizadores atribuyen este éxito al nivel técnico excepcional de los competidores y a la promoción efectiva realizada a través de las redes sociales.

    La próxima edición de la Copa Argentina se realizará en 2025 con mayores recursos e infraestructura.`,
    date: new Date(2024, 9, 3),
    category: "Actualización",
    image: "/news/copa-argentina-exito.jpg",
    author: "IFBB Argentina",
  },
  {
    id: "9",
    title: "Sánchez Clasificada al World Amateur Bodybuilding Federation Championship",
    excerpt:
      "Mariana Sánchez obtiene su pase a la competencia mundial amateur más importante después de brillante actuación regional.",
    content: `Mariana Sánchez, competidora argentina de 23 años, ha clasificado para el World Amateur Bodybuilding Federation Championship 2025.

    Su desempeño en las eliminatorias sudamericanas fue impresionante, registrando puntuaciones que la posicionan como una de las favoritas globales.

    El campeonato mundial se realizará en Miami, Florida, del 20 al 25 de mayo de 2025, con participantes de más de 100 países.

    La IFBB Argentina se enorgullece de contar con atletás de este calibre que representan al país en escenarios de élite.`,
    date: new Date(2024, 8, 28),
    category: "Evento Internacional",
    image: "/news/sanchez-mundial.jpg",
    author: "IFBB Argentina",
  },
  {
    id: "10",
    title: "Acuerdo de Asociación con Federación Europea de Bodybuilding",
    excerpt:
      "IFBB Argentina firma tratado de cooperación con NABBA Europa para fortalecer intercambio de atletas y conocimiento técnico.",
    content: `La IFBB Argentina ha formalizado un acuerdo estratégico de asociación con la NABBA (National Amateur Bodybuilding Association) Europa.

    Los beneficios del acuerdo incluyen:
    - Intercambio de atletas y entrenadores
    - Acceso a seminarios y capacitaciones europeas
    - Participación conjunta en competencias internacionales
    - Compartir estándares y protocolos de entrenamiento

    Este acuerdo abre oportunidades sin precedentes para nuestros atletas de competir en el escenario europeo.

    El tratado entra en vigencia a partir del 1 de noviembre de 2024.`,
    date: new Date(2024, 8, 25),
    category: "Anuncio",
    image: "/news/acuerdo-europa.jpg",
    author: "IFBB Argentina",
  },
  {
    id: "11",
    title: "López Rompe Récord Personal en Competencia Nacional",
    excerpt:
      "Alejandro López establece nueva marca de puntuación en el bodybuilding profesional argentino durante la final nacional.",
    content: `Alejandro López ha roto el récord histórico de puntuación en bodybuilding profesional argentino con una actuación prácticamente perfecta.

    Su musculatura impresionante, simetría excepcional y condición extraordinaria fueron calificadas con puntuaciones máximas por todos los jueces.

    Este logro posiciona a López como candidato serio para competencias internacionales de élite en la próxima temporada.

    "Esto es el resultado de cinco años de dedicación, sacrificio y trabajo constante", expresó López tras su victoria.`,
    date: new Date(2024, 8, 22),
    category: "Atleta Destacado",
    image: "/news/lopez-record.jpg",
    author: "IFBB Argentina",
  },
  {
    id: "12",
    title: "Centro de Excelencia IFBB Argentina Ampliará Sus Instalaciones",
    excerpt:
      "Se invertirán 500,000 dólares en la expansión del Centro de Excelencia con nuevos laboratorios y áreas de entrenamiento.",
    content: `La IFBB Argentina anuncia una importante ampliación de su Centro de Excelencia ubicado en La Plata.

    Las mejoras incluirán:
    - Nuevo laboratorio de análisis de composición corporal (DEXA)
    - Sala de nutrición con calorimetría indirecta
    - Dos nuevas salas de entrenamiento especializadas
    - Clínica de medicina deportiva
    - Área de recuperación y fisioterapia

    La inversión de 500,000 dólares posicionará al Centro como la instalación más moderna de América Latina dedicada al entrenamiento de élite en bodybuilding.

    Las obras comenzarán en enero de 2025 y estarán completadas para marzo.`,
    date: new Date(2024, 8, 20),
    category: "Actualización",
    image: "/news/centro-excelencia-ampliacion.jpg",
    author: "IFBB Argentina",
  },
]
