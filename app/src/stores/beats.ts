import { mainPlayListName } from "@/constants";
import { atom } from "nanostores";
const beats = [
  {
    id: 1,
    name: "Crazy Duck",
    url: "viDyXXRwwL8",
    bpm: 120,
    key: "C",
    genre: "Trap",
    mood: "Agresivo",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    featured: false,
    price: 200,
    producer: {
      id: 4,
      name: "Trafalgar Beats",
    },
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Gansta Paradise",
    url: "ewvYDxeOhN4",
    bpm: 140,
    key: "Dm",
    mood: "Agresivo",
    genre: "Trap",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    featured: true,
    producer: {
      id: 3,
      name: "Trafalgar Beats",
    },
    price: 100,
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Laugh",
    url: "yJ4qaV-B22I",
    bpm: 145,
    key: "Em",
    mood: "Agresivo",
    genre: "Drill",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    featured: true,
    price: 400,
    producer: {
      id: 1,
      name: "Jhon Doe",
    },
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Me dice",
    url: "btsfpOe9NZo",
    bpm: 90,
    key: "Bm",
    mood: "Agresivo",
    genre: "Reggaeton",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    featured: false,
    price: 200,
    producer: {
      id: 1,
      name: "Jhon Doe",
    },
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
  {
    id: 5,
    name: "China",
    url: "b2VXgrXi0yk",
    bpm: 95,
    key: "C#m",
    mood: "Agresivo",
    genre: "Dancehall",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    featured: true,
    producer: {
      id: 2,
      name: "Dj Pablito",
    },
    price: 50,
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
  {
    id: 7,
    name: "Cupido",
    url: "0onih8VuXpg",
    bpm: 90,
    key: "D",
    mood: "Agresivo",
    genre: "Dancehall",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    featured: false,
    price: 200,
    producer: {
      id: 11,
      name: "Ocean Rhythms",
    },
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
  {
    id: 8,
    name: "Dale Fuego",
    url: "pjg_ZjH__fU",
    bpm: 95,
    key: "Am",
    mood: "Agresivo",
    genre: "Hip Hop",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    featured: false,
    producer: {
      id: 12,
      name: "Harmony Productions",
    },
    price: 1000,
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
  {
    id: 9,
    name: "Estoy Volando",
    url: "a_oVE3NOs-E",
    bpm: 85,
    key: "G",
    mood: "Agresivo",
    genre: "Hip Hop",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    featured: true,
    price: 75,
    producer: {
      id: 13,
      name: "Melody Forge",
    },
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
  {
    id: 10,
    name: "One Call",
    url: "Mo7ewSP_G5I",
    bpm: 105,
    key: "F",
    mood: "Agresivo",
    genre: "Dancehall",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    price: 200,
    featured: false,
    producer: {
      id: 14,
      name: "Rhythm Foundry",
    },
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
  {
    id: 11,
    name: "Profano",
    url: "6CHXPeM4jM4",
    bpm: 110,
    key: "Dm",
    genre: "Trap",
    mood: "Agresivo",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    price: 150,
    featured: false,
    producer: {
      id: 15,
      name: "Beat Crafters",
    },
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
  {
    id: 12,
    name: "Nah Change",
    url: "7OyLRQdF1hc",
    bpm: 120,
    key: "E",
    mood: "Agresivo",
    genre: "Dancehall",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    price: 200,
    featured: true,
    producer: {
      id: 16,
      name: "Cadence Creators",
    },
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
  {
    id: 13,
    name: "YOVNGCHIMI",
    url: "jNl-g4RPayc",
    bpm: 130,
    key: "Bm",
    mood: "Agresivo",
    genre: "Drill",
    structure: [
      {
        id: 1,
        name: "intro",
        start: 0,
        end: 0.1,
      },
      {
        id: 2,
        name: "verse",
        start: 0.1,
        end: 0.3,
      },
      {
        id: 3,
        name: "chorus",
        start: 0.3,
        end: 0.5,
      },
      {
        id: 4,
        name: "verse",
        start: 0.5,
        end: 0.6,
      },
      {
        id: 5,
        name: "bridge",
        start: 0.6,
        end: 0.65,
      },
      {
        id: 6,
        name: "chorus",
        start: 0.65,
        end: 0.95,
      },
      {
        id: 7,
        name: "outro",
        start: 0.95,
        end: 1,
      },
    ],
    featured: false,
    price: 100,
    producer: {
      id: 17,
      name: "Beat Architects",
    },
    license: {
      id: 1,
      name: "Licencia Exclusiva",
      description: "Licencia exclusiva para uso comercial",
      duration: "2 años",
      features: [
        {
          id: 1,
          name: "Uso Comercial",
        },
        {
          id: 2,
          name: "Streaming Ilimitado",
        },
        {
          id: 3,
          name: "Distribución Ilimitada",
        },
        {
          id: 4,
          name: "Venta Ilimitada",
        },
        {
          id: 5,
          name: "Monetización Ilimitada",
        },
        {
          id: 6,
          name: "Sin Regalías",
        },
        {
          id: 7,
          name: "Sin Créditos",
        },
        {
          id: 8,
          name: "Sin Limitaciones de Audiencia",
        },
        {
          id: 9,
          name: "Sin Limitaciones Geográficas",
        },
        {
          id: 10,
          name: "Sin Limitaciones de Plataforma",
        },
        {
          id: 11,
          name: "Sin Limitaciones de Copias",
        },
      ],
    },
  },
];
interface Beat {
  id: number;
  name: string;
  url: string;
  bpm: number;
  key: string;
  mood: string;
  genre: string;
  featured: boolean;
  structure: {
    name: string;
    start: number;
    end: number;
  }[];
  price: number;
  producer: {
    id: number;
    name: string;
  };
}
interface ShoppingCartBeat {
  id: number;
  name: string;
  price: number;
  url: string;
}
interface PlayList {
  name: string;
  beats: Beat[];
}
export type PropsPlayList = PlayList;
export type PropsBeat = Beat;
export type PropsShoppingCartBeat = ShoppingCartBeat;
export const $Beats = atom<PropsBeat[]>(beats);
export const $SelectedBeat = atom<PropsBeat | null>(null);
export const $PlayList = atom<PropsPlayList>({
  name: mainPlayListName,
  beats: beats,
});
export const $ShoppingCart = atom<PropsShoppingCartBeat[] | null>(null);
