import { mainPlayListName } from "@/constants";
import { atom } from "nanostores";
const beats = [
  {
    idBeat: 1,
    nombre: "Crazy Duck",
    url: "viDyXXRwwL8",
    tiempoBpm: 120,
    tonalidad: "C",
    mood: "Agresivo",
    genero: "Trap",
    featured: false,
    precio: 200,
    estructurasBeat: [
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
    productor: {
      id: 4,
      name: "Trafalgar Beats",
      lastname: "Smith", // Apellido ficticio
      username: "Trafalgar Beats", // Nombre de usuario ficticio
      email: "trafalgarbeats@example.com", // Correo electrónico ficticio
      description: "Productor experto en Trap", // Descripción ficticia
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },
  {
    idBeat: 2,
    nombre: "Gansta Paradise",
    url: "ewvYDxeOhN4",
    tiempoBpm: 140,
    tonalidad: "Dm",
    mood: "Agresivo",
    genero: "Trap",
    featured: true,
    precio: 100,
    estructurasBeat: [
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
    productor: {
      id: 3,
      name: "Trafalgar Beats",
      lastname: "Johnson", // Apellido ficticio
      username: "Trafalgar Beats", // Nombre de usuario ficticio
      email: "trafalgarbeats@example.com", // Correo electrónico ficticio
      description: "Productor experto en Trap", // Descripción ficticia
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },
  {
    idBeat: 3,
    nombre: "Laugh",
    url: "yJ4qaV-B22I",
    tiempoBpm: 145,
    tonalidad: "Em",
    mood: "Agresivo",
    genero: "Drill",
    featured: true,
    precio: 400,
    estructurasBeat: [
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
    productor: {
      id: 1,
      name: "Jhon Doe",
      lastname: "Smith", // Apellido ficticio
      username: "Jhon Doe", // Nombre de usuario ficticio
      email: "jhondoe@example.com", // Correo electrónico ficticio
      description: "Productor experto en Drill", // Descripción ficticia
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },
  {
    idBeat: 4,
    nombre: "Me dice",
    url: "btsfpOe9NZo",
    tiempoBpm: 90,
    tonalidad: "Bm",
    mood: "Agresivo",
    genero: "Reggaeton",
    featured: false,
    precio: 200,
    estructurasBeat: [
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
    productor: {
      id: 1,
      name: "Jhon Doe",
      lastname: "Smith", // Apellido ficticio
      username: "Jhon Doe", // Nombre de usuario ficticio
      email: "jhondoe@example.com", // Correo electrónico ficticio
      description: "Productor especializado en Reggaeton", // Descripción ficticia
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },
  {
    idBeat: 5,
    nombre: "China",
    url: "b2VXgrXi0yk",
    tiempoBpm: 95,
    tonalidad: "C#m",
    mood: "Agresivo",
    genero: "Dancehall",
    featured: true,
    precio: 50,
    estructurasBeat: [
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
    productor: {
      id: 2,
      name: "Dj Pablito",
      lastname: "González", // Apellido ficticio
      username: "Dj Pablito", // Nombre de usuario ficticio
      email: "djpablito@example.com", // Correo electrónico ficticio
      description: "Productor experto en Dancehall", // Descripción ficticia
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },
  {
    idBeat: 7,
    nombre: "Cupido",
    url: "0onih8VuXpg",
    tiempoBpm: 90,
    tonalidad: "D",
    mood: "Agresivo",
    genero: "Dancehall",
    featured: false,
    precio: 200,
    estructurasBeat: [
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
    productor: {
      id: 11,
      name: "Ocean Rhythms",
      lastname: "Martínez", // Apellido ficticio
      username: "Ocean Rhythms", // Nombre de usuario ficticio
      email: "oceanrhythms@example.com", // Correo electrónico ficticio
      description: "Productor especializado en Dancehall", // Descripción ficticia
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },
  {
    idBeat: 8,
    nombre: "Dale Fuego",
    url: "pjg_ZjH__fU",
    tiempoBpm: 95,
    tonalidad: "Am",
    mood: "Agresivo",
    genero: "Hip Hop",
    featured: false,
    precio: 1000,
    estructurasBeat: [
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
    productor: {
      id: 12,
      name: "Harmony Productions",
      lastname: "López", // Apellido ficticio
      username: "Harmony Productions", // Nombre de usuario ficticio
      email: "harmony@example.com", // Correo electrónico ficticio
      description: "Productor especializado en Hip Hop", // Descripción ficticia
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },
  {
    idBeat: 9,
    nombre: "Estoy Volando",
    url: "a_oVE3NOs-E",
    tiempoBpm: 85,
    tonalidad: "G",
    mood: "Agresivo",
    genero: "Hip Hop",
    featured: true,
    precio: 75,
    estructurasBeat: [
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
    productor: {
      id: 13,
      name: "Melody Forge",
      lastname: "Rodriguez", // Apellido ficticio
      username: "Melody Forge", // Nombre de usuario ficticio
      email: "melodyforge@example.com", // Correo electrónico ficticio
      description: "Productor especializado en Hip Hop", // Descripción ficticia
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },
  {
    idBeat: 10,
    nombre: "One Call",
    url: "Mo7ewSP_G5I",
    tiempoBpm: 105,
    tonalidad: "F",
    mood: "Agresivo",
    genero: "Dancehall",
    featured: false,
    precio: 200,
    estructurasBeat: [
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
    productor: {
      id: 14,
      name: "Rhythm Foundry",
      lastname: "Garcia", // Apellido ficticio
      username: "Rhythm Foundry", // Nombre de usuario ficticio
      email: "rhythm@example.com", // Correo electrónico ficticio
      description: "Productor especializado en Dancehall", // Descripción ficticia
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },
  {
    idBeat: 11,
    nombre: "Profano",
    url: "6CHXPeM4jM4",
    tiempoBpm: 110,
    tonalidad: "Dm",
    mood: "Agresivo",
    genero: "Trap",
    featured: false,
    precio: 150,
    estructurasBeat: [
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
    productor: {
      id: 15,
      name: "Beat Crafters",
      lastname: "Doe", // Apellido ficticio
      username: "Beat Crafters", // Nombre de usuario ficticio
      email: "beatcrafters@example.com", // Correo electrónico ficticio
      description: "Productor experto en el género Trap", // Descripción ficticia
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },

  {
    idBeat: 12,
    nombre: "Nah Change",
    url: "7OyLRQdF1hc",
    tiempoBpm: 120,
    tonalidad: "E",
    mood: "Agresivo",
    genero: "Dancehall",
    featured: true,
    precio: 200,
    estructurasBeat: [
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
    productor: {
      id: 16,
      name: "Cadence Creators",
      lastname: "Smith",
      username: "Cadence Creators",
      email: "cadence@example.com",
      description: "Productor experimentado en Dancehall",
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },
  {
    idBeat: 13,
    nombre: "YOVNGCHIMI",
    url: "jNl-g4RPayc",
    tiempoBpm: 130,
    tonalidad: "Bm",
    mood: "Agresivo",
    genero: "Drill",
    estructurasBeat: [
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
    precio: 100,
    productor: {
      id: 17,
      name: "Jose",
      lastname: "Mendoza",
      username: "Beat Architects",
      email: "beatsarchitects@prueba.com",
      description: "Productor de beats",
    },
    miLicencia: {
      idLic: 1,
      miPago: {
        nombre: "Licencia Exclusiva",
        idPago: 1,
      },
    },
  },
];
interface Beat {
  idBeat: number;
  nombre: string;
  url: string;
  tiempoBpm: number;
  tonalidad: string;
  mood: string;
  genero: string;
  featured: boolean;
  precio: number;
  estructurasBeat: {
    id: number;
    name: string;
    start: number;
    end: number;
  }[];
  productor: {
    id: number;
    name: string;
    lastname: string;
    username: string;
    email: string;
    description: string;
  };
  miLicencia: {
    idLic: number;
    miPago: {
      nombre: string;
      idPago: number;
    };
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
