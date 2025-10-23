export interface Athlete {
  id: number;
  name: string;
  slug: string;
  category: string;
  gym: string;
  profileImage: string;
  bio: string;
  stats: {
    height: string;
    weight: string;
    age: number;
    yearsCompeting: number;
  };
  wins: number;
  socialLinks: {
    instagram?: string;
    youtube?: string;
  };
  competitionHistory: Array<{
    date: string;
    event: string;
    categoryClass: string;
    placing: number;
    score: number;
  }>;
  personalRecords: Array<{
    placing: number;
    categoryClass: string;
    timesAchieved: number;
  }>;
  gallery: Array<{
    url: string;
    event: string;
    date: string;
  }>;
  timeline: Array<{
    date: string;
    type: "first_competition" | "first_win" | "championship";
    title: string;
    description: string;
  }>;
}

export const athletesDatabase: Athlete[] = [
  {
    id: 1,
    name: "Juan Pérez",
    slug: "juan-perez",
    category: "Men's Physique",
    gym: "Poder Fitness",
    profileImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop",
    bio: "Juan Pérez es un atleta dedicado del Men's Physique con 8 años de experiencia en competencias. Con múltiples campeonatos ganados y una dedicación excepcional al entrenamiento, se ha posicionado como uno de los referentes de la disciplina en Argentina.\n\nSu enfoque en la nutrición y el entrenamiento estructurado ha permitido lograr resultados consistentes. Actualmente entrena en Poder Fitness bajo un programa de periodización avanzada.",
    stats: {
      height: "1.78m",
      weight: "88 kg",
      age: 32,
      yearsCompeting: 8,
    },
    wins: 3,
    socialLinks: {
      instagram: "https://instagram.com/juanperez",
      youtube: "https://youtube.com/juanperez",
    },
    competitionHistory: [
      { date: "2024-09-15", event: "Campeonato Nacional", categoryClass: "Men's Physique Open", placing: 1, score: 92.5 },
      { date: "2024-07-20", event: "Copa Argentina", categoryClass: "Men's Physique Classic", placing: 2, score: 89.0 },
      { date: "2024-05-10", event: "Mr. Argentina", categoryClass: "Men's Physique Open", placing: 1, score: 94.0 },
      { date: "2024-03-05", event: "Torneo Regional", categoryClass: "Men's Physique", placing: 3, score: 87.5 },
      { date: "2023-11-18", event: "Copa Sudamericana", categoryClass: "Men's Physique Open", placing: 1, score: 91.5 },
      { date: "2023-09-22", event: "Nacional Primavera", categoryClass: "Men's Physique", placing: 4, score: 85.0 },
      { date: "2023-07-10", event: "Torneo Verano", categoryClass: "Men's Physique Classic", placing: 5, score: 84.0 },
      { date: "2023-05-08", event: "Clasificatorio", categoryClass: "Men's Physique", placing: 2, score: 88.5 },
    ],
    personalRecords: [
      { placing: 1, categoryClass: "Men's Physique Open", timesAchieved: 3 },
      { placing: 2, categoryClass: "Men's Physique Classic", timesAchieved: 2 },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1574126057212-ead3c3b17650?w=400&h=400&fit=crop", event: "Campeonato Nacional 2024", date: "2024-09-15" },
      { url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop", event: "Copa Argentina 2024", date: "2024-07-20" },
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop", event: "Mr. Argentina 2024", date: "2024-05-10" },
      { url: "https://images.unsplash.com/photo-1523241507487-14fefa0a0c46?w=400&h=400&fit=crop", event: "Torneo Regional 2024", date: "2024-03-05" },
      { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop", event: "Copa Sudamericana 2023", date: "2023-11-18" },
      { url: "https://images.unsplash.com/photo-1504161814050-7ce0e64b88d7?w=400&h=400&fit=crop", event: "Nacional Primavera 2023", date: "2023-09-22" },
      { url: "https://images.unsplash.com/photo-1522119636498-235350b2d8f5?w=400&h=400&fit=crop", event: "Torneo Verano 2023", date: "2023-07-10" },
      { url: "https://images.unsplash.com/photo-1552672260-6882c3646fda?w=400&h=400&fit=crop", event: "Clasificatorio 2023", date: "2023-05-08" },
      { url: "https://images.unsplash.com/photo-1532618942605-450895917562?w=400&h=400&fit=crop", event: "Entrenamiento 2024", date: "2024-08-01" },
      { url: "https://images.unsplash.com/photo-1600080946962-b169a8179013?w=400&h=400&fit=crop", event: "Sesión de fotos 2024", date: "2024-06-15" },
      { url: "https://images.unsplash.com/photo-1578762421867-fec6339f446d?w=400&h=400&fit=crop", event: "Competencia Regional 2023", date: "2023-08-20" },
      { url: "https://images.unsplash.com/photo-1598221050679-d8db8ade23c0?w=400&h=400&fit=crop", event: "Preparación 2024", date: "2024-04-10" },
    ],
    timeline: [
      { date: "2016-05-20", type: "first_competition", title: "Primera Competencia", description: "Participó en su primera competencia en el Torneo Clasificatorio de Buenos Aires." },
      { date: "2017-11-10", type: "first_win", title: "Primera Victoria", description: "Ganó su primer título en la categoría Men's Physique Classic en la Copa Provincial." },
      { date: "2021-09-15", type: "championship", title: "Campeón Nacional", description: "Obtuvo el título de Campeón Nacional en Men's Physique Open." },
      { date: "2023-11-18", type: "championship", title: "Campeón Sudamericano", description: "Ganó el campeonato Sudamericano en su categoría." },
    ],
  },
  {
    id: 2,
    name: "María García",
    slug: "maria-garcia",
    category: "Bikini Fitness",
    gym: "FitLife Gym",
    profileImage: "https://images.unsplash.com/photo-1552345586-dffcb36b7a5a?w=400&h=500&fit=crop",
    bio: "María García es una atleta versátil del Bikini Fitness con 6 años de experiencia competitiva. Su dedicación al balance entre masa muscular y proporción la ha convertido en una referente de elegancia en el escenario.\n\nCon un enfoque holístico en salud y bienestar, María combina entrenamientos de fuerza con cardio estratégico. Es conocida por su perseverancia y su capacidad de mantener consistencia en sus preparaciones.",
    stats: { height: "1.68m", weight: "62 kg", age: 28, yearsCompeting: 6 },
    wins: 2,
    socialLinks: { instagram: "https://instagram.com/mariagarcia" },
    competitionHistory: [
      { date: "2024-08-25", event: "Campeonato Nacional", categoryClass: "Bikini Fitness", placing: 2, score: 88.5 },
      { date: "2024-06-15", event: "Copa Argentina Verano", categoryClass: "Bikini Fitness", placing: 1, score: 90.0 },
      { date: "2024-04-20", event: "Torneo Regional", categoryClass: "Bikini Fitness", placing: 3, score: 86.5 },
      { date: "2024-02-10", event: "Clasificatorio Nacional", categoryClass: "Bikini Fitness", placing: 2, score: 87.0 },
      { date: "2023-10-30", event: "Campeonato Otoño", categoryClass: "Bikini Fitness", placing: 1, score: 89.5 },
      { date: "2023-08-12", event: "Copa Provincial", categoryClass: "Bikini Fitness", placing: 4, score: 84.0 },
    ],
    personalRecords: [
      { placing: 1, categoryClass: "Bikini Fitness", timesAchieved: 2 },
      { placing: 2, categoryClass: "Bikini Fitness", timesAchieved: 2 },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1516104915014-ff4ee4dba955?w=400&h=400&fit=crop", event: "Campeonato Nacional 2024", date: "2024-08-25" },
      { url: "https://images.unsplash.com/photo-1552676066-5781c5a69a88?w=400&h=400&fit=crop", event: "Copa Argentina Verano 2024", date: "2024-06-15" },
      { url: "https://images.unsplash.com/photo-1542818528-523f9be82e88?w=400&h=400&fit=crop", event: "Torneo Regional 2024", date: "2024-04-20" },
      { url: "https://images.unsplash.com/photo-1552345586-dffcb36b7a5a?w=400&h=400&fit=crop", event: "Clasificatorio Nacional 2024", date: "2024-02-10" },
      { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop", event: "Campeonato Otoño 2023", date: "2023-10-30" },
      { url: "https://images.unsplash.com/photo-1516126613408-eca07ce68773?w=400&h=400&fit=crop", event: "Copa Provincial 2023", date: "2023-08-12" },
      { url: "https://images.unsplash.com/photo-1552676066-5781c5a69a88?w=400&h=400&fit=crop", event: "Sesión de fotos 2024", date: "2024-07-01" },
      { url: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=400&fit=crop", event: "Entrenamiento 2024", date: "2024-05-20" },
      { url: "https://images.unsplash.com/photo-1520699491152-3aa4e2b06112?w=400&h=400&fit=crop", event: "Preparación 2024", date: "2024-03-15" },
      { url: "https://images.unsplash.com/photo-1518126322129-ad4dd41d6e3f?w=400&h=400&fit=crop", event: "Evento social 2024", date: "2024-01-25" },
      { url: "https://images.unsplash.com/photo-1516116216624-53e51073f234?w=400&h=400&fit=crop", event: "Competencia 2023", date: "2023-09-10" },
      { url: "https://images.unsplash.com/photo-1517135920335-4dd9c1e0e1f6?w=400&h=400&fit=crop", event: "Sesión de fotos 2023", date: "2023-07-05" },
    ],
    timeline: [
      { date: "2018-06-15", type: "first_competition", title: "Primera Competencia", description: "Debutó en competencia en el Torneo Provincial de Bikini Fitness." },
      { date: "2019-08-20", type: "first_win", title: "Primera Victoria", description: "Ganó su primer título en la Copa Provincial Bikini Fitness." },
      { date: "2022-11-05", type: "championship", title: "Campeona Nacional", description: "Se coronó como Campeona Nacional en la categoría Bikini Fitness." },
    ],
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    slug: "carlos-rodriguez",
    category: "Classic Physique",
    gym: "Muscle House",
    profileImage: "https://images.unsplash.com/photo-1566921399348-0e79b3e17cbf?w=400&h=500&fit=crop",
    bio: "Carlos Rodríguez es un atleta experimentado del Classic Physique con 10 años en el deporte competitivo. Su dedicación a la preservación de las proporciones clásicas lo ha posicionado como un referente en su categoría.\n\nCon una trayectoria de 5 victorias importantes, Carlos ha demostrado ser consistente en sus entrenamientos y disciplinado en su nutrición. Actualmente mentoriza a nuevas generaciones de competidores.",
    stats: { height: "1.76m", weight: "90 kg", age: 35, yearsCompeting: 10 },
    wins: 5,
    socialLinks: { instagram: "https://instagram.com/carlosrodriguez", youtube: "https://youtube.com/carlosrodriguez" },
    competitionHistory: [
      { date: "2024-09-22", event: "Campeonato Nacional", categoryClass: "Classic Physique Open", placing: 1, score: 93.0 },
      { date: "2024-07-28", event: "Copa Argentina", categoryClass: "Classic Physique", placing: 2, score: 90.5 },
      { date: "2024-05-18", event: "Mr. Argentina Classic", categoryClass: "Classic Physique Open", placing: 1, score: 91.5 },
      { date: "2024-03-10", event: "Torneo Metropolitano", categoryClass: "Classic Physique", placing: 3, score: 88.0 },
      { date: "2023-11-25", event: "Copa Sudamericana", categoryClass: "Classic Physique Open", placing: 1, score: 92.0 },
      { date: "2023-09-30", event: "Nacional Primavera", categoryClass: "Classic Physique", placing: 2, score: 89.5 },
      { date: "2023-07-15", event: "Torneo Verano", categoryClass: "Classic Physique", placing: 4, score: 87.0 },
      { date: "2023-05-12", event: "Clasificatorio Open", categoryClass: "Classic Physique Open", placing: 1, score: 90.0 },
      { date: "2023-03-08", event: "Regional Sur", categoryClass: "Classic Physique", placing: 3, score: 86.5 },
      { date: "2023-01-20", event: "Torneo Invierno", categoryClass: "Classic Physique", placing: 2, score: 88.5 },
    ],
    personalRecords: [
      { placing: 1, categoryClass: "Classic Physique Open", timesAchieved: 4 },
      { placing: 2, categoryClass: "Classic Physique", timesAchieved: 3 },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop", event: "Campeonato Nacional 2024", date: "2024-09-22" },
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop", event: "Copa Argentina 2024", date: "2024-07-28" },
      { url: "https://images.unsplash.com/photo-1566921399348-0e79b3e17cbf?w=400&h=400&fit=crop", event: "Mr. Argentina Classic 2024", date: "2024-05-18" },
      { url: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=400&fit=crop", event: "Torneo Metropolitano 2024", date: "2024-03-10" },
      { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop", event: "Copa Sudamericana 2023", date: "2023-11-25" },
      { url: "https://images.unsplash.com/photo-1577221084712-56ceb4e8d99b?w=400&h=400&fit=crop", event: "Nacional Primavera 2023", date: "2023-09-30" },
      { url: "https://images.unsplash.com/photo-1552672260-6882c3646fda?w=400&h=400&fit=crop", event: "Torneo Verano 2023", date: "2023-07-15" },
      { url: "https://images.unsplash.com/photo-1588021662159-cfc34e5eb0c7?w=400&h=400&fit=crop", event: "Clasificatorio Open 2023", date: "2023-05-12" },
      { url: "https://images.unsplash.com/photo-1580156579312-94651dfd596d?w=400&h=400&fit=crop", event: "Regional Sur 2023", date: "2023-03-08" },
      { url: "https://images.unsplash.com/photo-1578762421867-fec6339f446d?w=400&h=400&fit=crop", event: "Torneo Invierno 2023", date: "2023-01-20" },
      { url: "https://images.unsplash.com/photo-1600080946962-b169a8179013?w=400&h=400&fit=crop", event: "Sesión de fotos 2024", date: "2024-06-01" },
      { url: "https://images.unsplash.com/photo-1598221050679-d8db8ade23c0?w=400&h=400&fit=crop", event: "Preparación 2024", date: "2024-04-15" },
    ],
    timeline: [
      { date: "2014-04-10", type: "first_competition", title: "Primera Competencia", description: "Participó en su primer torneo de Classic Physique en Buenos Aires." },
      { date: "2015-11-05", type: "first_win", title: "Primera Victoria", description: "Obtuvo su primer título en la categoría Classic Physique." },
      { date: "2019-09-20", type: "championship", title: "Campeón Nacional", description: "Se coronó como Campeón Nacional en Classic Physique Open." },
      { date: "2023-11-25", type: "championship", title: "Campeón Sudamericano", description: "Ganó el campeonato Sudamericano en su categoría con puntaje perfecto." },
    ],
  },
  {
    id: 4,
    name: "Ana Martínez",
    slug: "ana-martinez",
    category: "Wellness",
    gym: "Strong Women Gym",
    profileImage: "https://images.unsplash.com/photo-1524863479829-916ffeb34d7e?w=400&h=500&fit=crop",
    bio: "Ana Martínez es una atleta dedicada de Wellness con 5 años de experiencia competitiva. Su transformación física y dedicación a la categoría la han convertido en inspiración para muchas otras competidoras.\n\nCon enfoque en la salud integral y el bienestar, Ana combina entrenamientos inteligentes con nutrición balanceada. Su primer título nacional marcó un hito importante en su carrera.",
    stats: { height: "1.65m", weight: "68 kg", age: 26, yearsCompeting: 5 },
    wins: 1,
    socialLinks: { instagram: "https://instagram.com/anamartinez", youtube: "https://youtube.com/anamartinez" },
    competitionHistory: [
      { date: "2024-08-18", event: "Campeonato Nacional", categoryClass: "Wellness", placing: 1, score: 89.0 },
      { date: "2024-06-22", event: "Copa Argentina Verano", categoryClass: "Wellness", placing: 2, score: 87.5 },
      { date: "2024-04-25", event: "Torneo Regional", categoryClass: "Wellness", placing: 3, score: 85.5 },
      { date: "2024-02-15", event: "Clasificatorio Nacional", categoryClass: "Wellness", placing: 4, score: 83.0 },
      { date: "2023-10-28", event: "Copa Provincial", categoryClass: "Wellness", placing: 2, score: 86.0 },
    ],
    personalRecords: [
      { placing: 1, categoryClass: "Wellness", timesAchieved: 1 },
      { placing: 2, categoryClass: "Wellness", timesAchieved: 2 },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop", event: "Campeonato Nacional 2024", date: "2024-08-18" },
      { url: "https://images.unsplash.com/photo-1524863479829-916ffeb34d7e?w=400&h=400&fit=crop", event: "Copa Argentina Verano 2024", date: "2024-06-22" },
      { url: "https://images.unsplash.com/photo-1516126613408-eca07ce68773?w=400&h=400&fit=crop", event: "Torneo Regional 2024", date: "2024-04-25" },
      { url: "https://images.unsplash.com/photo-1517135920335-4dd9c1e0e1f6?w=400&h=400&fit=crop", event: "Clasificatorio Nacional 2024", date: "2024-02-15" },
      { url: "https://images.unsplash.com/photo-1552676066-5781c5a69a88?w=400&h=400&fit=crop", event: "Copa Provincial 2023", date: "2023-10-28" },
      { url: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=400&fit=crop", event: "Sesión de fotos 2024", date: "2024-07-10" },
      { url: "https://images.unsplash.com/photo-1520699491152-3aa4e2b06112?w=400&h=400&fit=crop", event: "Entrenamiento 2024", date: "2024-05-20" },
      { url: "https://images.unsplash.com/photo-1518126322129-ad4dd41d6e3f?w=400&h=400&fit=crop", event: "Preparación 2024", date: "2024-03-15" },
      { url: "https://images.unsplash.com/photo-1516116216624-53e51073f234?w=400&h=400&fit=crop", event: "Evento social 2024", date: "2024-01-30" },
      { url: "https://images.unsplash.com/photo-1516104915014-ff4ee4dba955?w=400&h=400&fit=crop", event: "Competencia 2023", date: "2023-09-15" },
      { url: "https://images.unsplash.com/photo-1506919258140-b549fb3192d3?w=400&h=400&fit=crop", event: "Sesión fotos 2023", date: "2023-07-20" },
      { url: "https://images.unsplash.com/photo-1517180102446-f3ece2e671e2?w=400&h=400&fit=crop", event: "Competencia 2023", date: "2023-05-10" },
    ],
    timeline: [
      { date: "2019-07-15", type: "first_competition", title: "Primera Competencia", description: "Debutó en competencia en el Torneo Provincial de Wellness." },
      { date: "2020-10-10", type: "first_win", title: "Primera Victoria", description: "Ganó su primer título en la categoría Wellness en competencia regional." },
      { date: "2024-08-18", type: "championship", title: "Campeona Nacional", description: "Obtuvo el título de Campeona Nacional en Wellness con excelente puntaje." },
    ],
  },
  {
    id: 5,
    name: "Diego López",
    slug: "diego-lopez",
    category: "Bodybuilding",
    gym: "Titan Gym",
    profileImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=500&fit=crop",
    bio: "Diego López es un atleta de Bodybuilding con 12 años de experiencia competitiva y trayectoria de 4 victorias nacionales. Su dedicación extrema al entrenamiento de fuerza y la hipertrofia lo han posicionado entre los mejores de Argentina.\n\nCon una mentalidad de campeón y disciplina inquebrantable, Diego sigue buscando mejorar en cada competencia. Su experiencia como entrenador de otros atletas demuestra su profundo conocimiento del deporte.",
    stats: { height: "1.80m", weight: "108 kg", age: 38, yearsCompeting: 12 },
    wins: 4,
    socialLinks: { instagram: "https://instagram.com/diegolopez", youtube: "https://youtube.com/diegolopez" },
    competitionHistory: [
      { date: "2024-09-29", event: "Campeonato Nacional", categoryClass: "Bodybuilding Open", placing: 1, score: 96.0 },
      { date: "2024-08-05", event: "Copa Argentina Pro", categoryClass: "Bodybuilding Open", placing: 2, score: 93.5 },
      { date: "2024-06-10", event: "Mr. Argentina Abierto", categoryClass: "Bodybuilding Open", placing: 1, score: 95.0 },
      { date: "2024-04-15", event: "Torneo Metropolitano", categoryClass: "Bodybuilding", placing: 3, score: 91.0 },
      { date: "2024-02-20", event: "Clasificatorio Open", categoryClass: "Bodybuilding Open", placing: 1, score: 94.5 },
      { date: "2023-12-10", event: "Copa Sudamericana", categoryClass: "Bodybuilding Open", placing: 2, score: 92.0 },
      { date: "2023-10-22", event: "Nacional Primavera", categoryClass: "Bodybuilding", placing: 2, score: 90.5 },
      { date: "2023-08-28", event: "Torneo Verano Pro", categoryClass: "Bodybuilding Open", placing: 1, score: 93.0 },
      { date: "2023-07-05", event: "Regional Sur", categoryClass: "Bodybuilding", placing: 3, score: 89.0 },
      { date: "2023-05-18", event: "Clasificatorio Regional", categoryClass: "Bodybuilding", placing: 1, score: 91.5 },
      { date: "2023-03-25", event: "Torneo Invierno", categoryClass: "Bodybuilding", placing: 2, score: 88.5 },
      { date: "2023-01-15", event: "Copa Inicial", categoryClass: "Bodybuilding Open", placing: 3, score: 88.0 },
    ],
    personalRecords: [
      { placing: 1, categoryClass: "Bodybuilding Open", timesAchieved: 4 },
      { placing: 2, categoryClass: "Bodybuilding", timesAchieved: 3 },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop", event: "Campeonato Nacional 2024", date: "2024-09-29" },
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop", event: "Copa Argentina Pro 2024", date: "2024-08-05" },
      { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop", event: "Mr. Argentina 2024", date: "2024-06-10" },
      { url: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=400&fit=crop", event: "Torneo Metropolitano 2024", date: "2024-04-15" },
      { url: "https://images.unsplash.com/photo-1544367567-0d37bcdc6ce9?w=400&h=400&fit=crop", event: "Clasificatorio Open 2024", date: "2024-02-20" },
      { url: "https://images.unsplash.com/photo-1520994740400-fc8fbb8ffc7d?w=400&h=400&fit=crop", event: "Copa Sudamericana 2023", date: "2023-12-10" },
      { url: "https://images.unsplash.com/photo-1577221084712-56ceb4e8d99b?w=400&h=400&fit=crop", event: "Nacional Primavera 2023", date: "2023-10-22" },
      { url: "https://images.unsplash.com/photo-1588021662159-cfc34e5eb0c7?w=400&h=400&fit=crop", event: "Torneo Verano Pro 2023", date: "2023-08-28" },
      { url: "https://images.unsplash.com/photo-1580156579312-94651dfd596d?w=400&h=400&fit=crop", event: "Regional Sur 2023", date: "2023-07-05" },
      { url: "https://images.unsplash.com/photo-1574126057212-ead3c3b17650?w=400&h=400&fit=crop", event: "Clasificatorio Regional 2023", date: "2023-05-18" },
      { url: "https://images.unsplash.com/photo-1600080946962-b169a8179013?w=400&h=400&fit=crop", event: "Torneo Invierno 2023", date: "2023-03-25" },
      { url: "https://images.unsplash.com/photo-1598221050679-d8db8ade23c0?w=400&h=400&fit=crop", event: "Copa Inicial 2023", date: "2023-01-15" },
    ],
    timeline: [
      { date: "2012-03-20", type: "first_competition", title: "Primera Competencia", description: "Participó en su primer torneo de Bodybuilding en Buenos Aires." },
      { date: "2013-09-15", type: "first_win", title: "Primera Victoria", description: "Ganó su primer título en la categoría Bodybuilding." },
      { date: "2018-11-10", type: "championship", title: "Campeón Nacional", description: "Se coronó como Campeón Nacional en Bodybuilding Open." },
      { date: "2023-08-28", type: "championship", title: "Pro Card Obtenido", description: "Obtuvo su Pro Card en torneo internacional de Bodybuilding." },
    ],
  },
  {
    id: 6,
    name: "Sofia González",
    slug: "sofia-gonzalez",
    category: "Figure",
    gym: "Elite Fitness Center",
    profileImage: "https://images.unsplash.com/photo-1552235506-19a4d7b4b16a?w=400&h=500&fit=crop",
    bio: "Sofia González es una atleta de Figure con 7 años de experiencia competitiva y 2 títulos nacionales. Su combinación de musculatura balanceada y presentación elegante la han convertido en referente de la categoría.\n\nCon dedicación absoluta a su programa de entrenamiento, Sofia demuestra que la consistencia es la clave del éxito. Su mentoría a nuevas atletas refleja su compromiso con el crecimiento del deporte.",
    stats: { height: "1.66m", weight: "72 kg", age: 30, yearsCompeting: 7 },
    wins: 2,
    socialLinks: { instagram: "https://instagram.com/sofiagonzalez" },
    competitionHistory: [
      { date: "2024-09-08", event: "Campeonato Nacional", categoryClass: "Figure", placing: 1, score: 91.0 },
      { date: "2024-07-12", event: "Copa Argentina", categoryClass: "Figure", placing: 2, score: 88.5 },
      { date: "2024-05-20", event: "Torneo Regional", categoryClass: "Figure", placing: 3, score: 86.0 },
      { date: "2024-03-18", event: "Clasificatorio Nacional", categoryClass: "Figure", placing: 2, score: 87.5 },
      { date: "2023-11-28", event: "Copa Provincial", categoryClass: "Figure", placing: 1, score: 89.5 },
      { date: "2023-09-25", event: "Regional Otoño", categoryClass: "Figure", placing: 3, score: 85.5 },
      { date: "2023-07-08", event: "Torneo Verano", categoryClass: "Figure", placing: 2, score: 87.0 },
    ],
    personalRecords: [
      { placing: 1, categoryClass: "Figure", timesAchieved: 2 },
      { placing: 2, categoryClass: "Figure", timesAchieved: 2 },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1535498730237-1d71bcdd2f76?w=400&h=400&fit=crop", event: "Campeonato Nacional 2024", date: "2024-09-08" },
      { url: "https://images.unsplash.com/photo-1516126613408-eca07ce68773?w=400&h=400&fit=crop", event: "Copa Argentina 2024", date: "2024-07-12" },
      { url: "https://images.unsplash.com/photo-1552235506-19a4d7b4b16a?w=400&h=400&fit=crop", event: "Torneo Regional 2024", date: "2024-05-20" },
      { url: "https://images.unsplash.com/photo-1517135920335-4dd9c1e0e1f6?w=400&h=400&fit=crop", event: "Clasificatorio Nacional 2024", date: "2024-03-18" },
      { url: "https://images.unsplash.com/photo-1552676066-5781c5a69a88?w=400&h=400&fit=crop", event: "Copa Provincial 2023", date: "2023-11-28" },
      { url: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=400&fit=crop", event: "Regional Otoño 2023", date: "2023-09-25" },
      { url: "https://images.unsplash.com/photo-1520699491152-3aa4e2b06112?w=400&h=400&fit=crop", event: "Torneo Verano 2023", date: "2023-07-08" },
      { url: "https://images.unsplash.com/photo-1518126322129-ad4dd41d6e3f?w=400&h=400&fit=crop", event: "Sesión de fotos 2024", date: "2024-06-15" },
      { url: "https://images.unsplash.com/photo-1516104915014-ff4ee4dba955?w=400&h=400&fit=crop", event: "Entrenamiento 2024", date: "2024-05-01" },
      { url: "https://images.unsplash.com/photo-1506919258140-b549fb3192d3?w=400&h=400&fit=crop", event: "Preparación 2024", date: "2024-03-20" },
      { url: "https://images.unsplash.com/photo-1517180102446-f3ece2e671e2?w=400&h=400&fit=crop", event: "Sesión fotos 2023", date: "2023-08-10" },
      { url: "https://images.unsplash.com/photo-1516116216624-53e51073f234?w=400&h=400&fit=crop", event: "Evento social 2023", date: "2023-06-15" },
    ],
    timeline: [
      { date: "2017-05-10", type: "first_competition", title: "Primera Competencia", description: "Debutó en competencia en el Torneo Provincial de Figure." },
      { date: "2018-10-15", type: "first_win", title: "Primera Victoria", description: "Ganó su primer título en la categoría Figure." },
      { date: "2021-11-20", type: "championship", title: "Campeona Nacional", description: "Se coronó como Campeona Nacional en la categoría Figure." },
    ],
  },
];
