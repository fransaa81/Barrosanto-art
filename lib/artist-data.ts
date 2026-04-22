// Datos de la carrera artística de Nicolás Barrosanto

export interface Artwork {
  id: string;
  title: string;
  dimensions: string;
  description: string;
  mainImage?: string;
  detailImages?: string[];
}

export interface Project {
  id: string;
  title: string;
  year: string;
  status: 'completed' | 'upcoming';
  location?: string;
  description: string;
  image?: string;
  photos?: string[];
  modalPhotos?: string[];
}

// Obras Escultóricas con imágenes reales del catálogo
export const sculptureWorks: Artwork[] = [
  {
    id: 'amanecer',
    title: 'Amanecer',
    dimensions: '145cm x 95cm',
    description: 'Una composición que explora la textura y el movimiento a través de fragmentos metálicos ensamblados, representando el despertar de nuevas formas.',
    mainImage: '/images/uploaded_esculturas/IMG_2744.jpg',
    detailImages: [
      '/images/uploaded_esculturas/IMG_2746.JPG',
      '/images/uploaded_esculturas/IMG_2749.jpg',
      '/images/uploaded_esculturas/IMG_2750.jpg',
    ],
  },
  {
    id: 'la-proeza',
    title: 'La Proeza',
    dimensions: '156cm x 38cm',
    description: 'Escultura dinámico que captura el movimiento ascendente, donde el zorro y el pájaro se unen en una narrativa de tenacidad y libertad.',
    mainImage: '/images/uploaded_esculturas/IMG_2793.jpg',
    detailImages: [
      '/images/uploaded_esculturas/IMG_2800.jpg',
      '/images/uploaded_esculturas/IMG_2808.jpg',
      '/images/uploaded_esculturas/IMG_2802.jpg',
    ],
  },
  {
    id: 'ocaso',
    title: 'Ocaso',
    dimensions: '100cm x 70cm',
    description: 'Una obra que juega con la luz y la sombra, creando efectos visuales que varían según el ángulo de observación.',
    mainImage: '/images/uploaded_esculturas/IMG_2884.jpg',
    detailImages: [
      '/images/uploaded_esculturas/IMG_2881.JPG',
      '/images/uploaded_esculturas/IMG_2877.JPG',
    ],
  },
  {
    id: 'el-vuelo',
    title: 'El Vuelo de la Bestia',
    dimensions: '140cm x 98cm',
    description: 'Una escultura que desafía la gravedad, representando la transformación y la liberación a través de formas orgánicas armadas en metal.',
    mainImage: '/images/uploaded_esculturas/IMG_2769.jpg',
    detailImages: ['/images/uploaded_esculturas/IMG_2777.jpg', '/images/uploaded_esculturas/IMG_2771.jpg', '/images/uploaded_esculturas/IMG_2773.jpg'],
  },
  {
    id: 'pajaros',
    title: 'Se te Volaron los Pájaros',
    dimensions: '145cm x 95cm',
    description: 'Composición que expresa la libertad y el movimiento, fragmentos de metal que parecen elevarse del suelo.',
    mainImage: '/images/uploaded_esculturas/IMG_2831.JPG',
    detailImages: [
      '/images/uploaded_esculturas/IMG_2825.jpg',
      '/images/uploaded_esculturas/IMG_2823.JPG',
      '/images/uploaded_esculturas/IMG_2818.jpg',
    ],
  },
  {
    id: 'umbral',
    title: 'Umbral del Tiempo',
    dimensions: '53cm x 73cm',
    description: 'Series de esculturas de liebres que representan diferentes momentos del tiempo, cada una con su propia narrativa.',
    mainImage: '/images/uploaded_esculturas/IMG_2782.jpg',
    detailImages: [
      '/images/uploaded_esculturas/IMG_2791.jpg',
      '/images/uploaded_esculturas/IMG_2788.jpg',
      '/images/uploaded_esculturas/IMG_2789.JPG',
    ],
  },
  {
    id: 'fuga',
    title: 'Punto de Fuga',
    dimensions: '100cm x 70cm',
    description: 'Una obra que juega con la perspectiva y la profundidad, invitando al espectador a seguir una línea imaginaria.',
    mainImage: '/images/uploaded_esculturas/IMG_2754.jpg',
    detailImages: [
      '/images/uploaded_esculturas/IMG_2764.jpg',
      '/images/uploaded_esculturas/IMG_2760.JPG',
      '/images/uploaded_esculturas/IMG_2767.JPG',
    ],
  },
  {
    id: 'trono-cerezo',
    title: 'Trono Cerezo',
    dimensions: '178cm x 85cm',
    description: 'Escultura que fusiona lo natural y lo artístico, un trono hecho de ramas de árbol y metal con flores blancas adornando su estructura superior.',
    mainImage: '/images/uploaded_esculturas/IMG_2865.JPG',
    detailImages: [
      '/images/uploaded_esculturas/IMG_2848.JPG',
      '/images/uploaded_esculturas/IMG_2852.JPG',
      '/images/uploaded_esculturas/IMG_2856.JPG',
      '/images/uploaded_esculturas/IMG_2858.JPG',
      '/images/uploaded_esculturas/IMG_2857.JPG',
    ],
  }
];

export const sculpturePhotoGallery: Array<string | null> = [
  '/images/uploaded_esculturas/sapo2.png',
  '/images/uploaded_esculturas/pajarito1.png',
  '/images/uploaded_esculturas/corazon1.png',
  '/images/uploaded_esculturas/toro2.png',
  '/images/uploaded_esculturas/sapo1.png',
  '/images/uploaded_esculturas/toro1.png',
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

// Obras Pictóricas
export const paintingWorks: Artwork[] = [
  {
    id: 'paisaje-1',
    title: 'Paisaje Interior',
    dimensions: 'Óleo sobre lienzo 100x80cm',
    description: 'Exploración cromática que combina abstracción y figuración.'
  },
  {
    id: 'abstracto-1',
    title: 'Geometría Emocional',
    dimensions: 'Técnica mixta 120x100cm',
    description: 'Fusión de formas geométricas con texturas que evocan movimiento.'
  },
  {
    id: 'retrato-1',
    title: 'Metamorfosis',
    dimensions: 'Acrílico 90x120cm',
    description: 'Serie que explora la transformación de lo humano en lo natural.'
  },
  {
    id: 'retrato-2',
    title: 'Encuentro',
    dimensions: 'Óleo 100x100cm',
    description: 'Diálogo visual entre formas y colores que representan conexiones.'
  },
  {
    id: 'abstracto-2',
    title: 'Movimiento Constante',
    dimensions: 'Técnica mixta 80x120cm',
    description: 'Una pintura que busca capturar la esencia del cambio perpetuo.'
  },
  {
    id: 'abstracto-3',
    title: 'Cosmos Personal',
    dimensions: 'Acrílico 110x110cm',
    description: 'Universo propio creado a través de capas y superposiciones.'
  }
];

// Proyectos Realizados
export const completedProjects: Project[] = [
  {
    id: 'gauchito-gil',
    title: 'Basura Sagrada - Gauchito Gil',
    year: '2025',
    status: 'completed',
    location: 'Buenos Aires, Argentina',
    image: '/images/barrosanto_bs.jpeg',
    photos: ['/images/gauchito_gil/logo_basura.jpeg', '/images/gauchito_gil/guachito10.png', '/images/gauchito_gil/gauchito1.png'],
    modalPhotos: [
      '/images/gauchito_gil/gauchito2.png',
      '/images/gauchito_gil/gauchito3.png',
      '/images/gauchito_gil/gauchito4.png',
      '/images/gauchito_gil/gauchito5.png',
      '/images/gauchito_gil/gauchito6.png',
      '/images/gauchito_gil/gauchito7.png',
      '/images/gauchito_gil/gauchito8.png',
      '/images/gauchito_gil/gauchito9.png',
    ],
    description: 'Escultura colectiva que resignifica residuos urbanos como símbolos de fe y consumo.',
  },
  {
    id: 'muestra-interplanetaria',
    title: 'Muestra Interplanetaria - Orbitando B-612',
    year: '2022',
    status: 'completed',
    location: 'Sala de Exposiciones Manuel Belgrano, Buenos Aires',
    description: 'Exposición colectiva que presentó esculturas metálicas como viajes a mundos imaginarios, explorando la conexión entre lo terrestre y lo cósmico.'
  },
  {
    id: 'encuentro-escultores',
    title: 'El Monte Que Nos Abraza',
    year: '2022',
    status: 'completed',
    location: 'San Javier, Córdoba',
    description: 'Participación en encuentro nacional de escultores donde presenté obras que exploran la relación entre el arte y la naturaleza.'
  },
  {
    id: 'arte-metal',
    title: 'Primer Expo Nacional de Arte Metal Argentino',
    year: '2022',
    status: 'completed',
    location: 'Lagos del Rocío, Buenos Aires',
    description: 'Preseleccionado entre los mejores 40 escultores en metal del país. Obra destacada que representó la innovación en técnicas metalúrgicas.'
  }
];

// Próximos Proyectos
export const upcomingProjects: Project[] = [
  {
    id: 'angel-dragon',
    title: 'Ángel en Tensión - Proyecto Comunitario',
    year: '2026',
    status: 'upcoming',
    location: 'Buenos Aires (Por definir)',
    description: 'Intervención artística y educativa que propone una transformación simbólica de autopartes en desuso para crear una escultura de carácter público. Incluye talleres en instituciones escolares que promueven reciclaje y arte como herramienta de transformación social.'
  },
  {
    id: 'residencia-artistica',
    title: 'Residencia Artística Internacional',
    year: '2026',
    status: 'upcoming',
    description: 'Participación en residencia internacional donde exploraré nuevas técnicas y colaboraré con artistas de diferentes disciplinas.'
  }
];

// Información del artista
export const artistInfo = {
  name: 'Nicolás Barrosanto',
  birthPlace: 'San Luis, Villa Mercedes',
  birthYear: 1985,
  email: 'nicobarrosanto@gmail.com',
  instagram: '@nicolas.barrosanto',
  bio: 'Artista argentino cuya obra se caracteriza por su enfoque autodidacta y su versatilidad creativa. Desarrolla una técnica única que explora la interacción entre lo orgánico y lo industrial, con el metal como material predominante.',
  philosophy: 'Mi proceso creativo es una evolución continua, en la que la obra cobra vida en el encuentro con el otro. Cada pieza es una invitación a reflexionar y a participar en un diálogo abierto entre lo tangible y lo intangible.'
};
