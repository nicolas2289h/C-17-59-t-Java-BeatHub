import { atom } from "nanostores";
const beats = [
  {
    id: 1,
    name: "Crazy Duck",
    description: "loren ipsum dolor sit amet loren ipsum dolor sit amet",
    url: "viDyXXRwwL8",
    bpm: 120,
    key: "C",
    genre: "Trap",
    structure: [
      {
        name: "Intro",
        start: 0,
        end: 0.2,
      },
    ],
    featured: false,
    producer: {
      id: 4,
      name: "Trafalgar Beats",
    },
  },
  {
    id: 2,
    name: "Gansta Paradise",
    description: "loren ipsum dolor sit amet loren ipsum dolor sit amet",
    url: "ewvYDxeOhN4",
    bpm: 140,
    key: "Dm",
    genre: "Trap",
    structure: [
      {
        name: "Intro",
        start: 0,
        end: 0.2,
      },
    ],
    featured: true,
    producer: {
      id: 3,
      name: "Trafalgar Beats",
    },
  },
  {
    id: 3,
    name: "Laugh",
    description: "loren ipsum dolor sit amet loren ipsum dolor sit amet",
    url: "yJ4qaV-B22I",
    bpm: 145,
    key: "Em",
    genre: "Drill",
    structure: [
      {
        name: "Intro",
        start: 0,
        end: 0.2,
      },
    ],
    featured: true,
    producer: {
      id: 1,
      name: "Jhon Doe",
    },
  },
  {
    id: 4,
    name: "Me dice",
    description: "loren ipsum dolor sit amet loren ipsum dolor sit amet",
    url: "btsfpOe9NZo",
    bpm: 90,
    key: "Bm",
    genre: "Reggaeton",
    structure: [
      {
        name: "Intro",
        start: 0,
        end: 0.2,
      },
    ],
    featured: false,
    producer: {
      id: 1,
      name: "Jhon Doe",
    },
  },
  {
    id: 5,
    name: "China",
    description: "loren ipsum dolor sit amet loren ipsum dolor sit amet",
    url: "b2VXgrXi0yk",
    bpm: 95,
    key: "C#m",
    genre: "DanceHall",
    structure: [
      {
        name: "Intro",
        start: 0,
        end: 0.2,
      },
    ],
    featured: true,
    producer: {
      id: 2,
      name: "Dj Pablito",
    },
  },
];
interface Beat {
  id: number;
  name: string;
  description: string;
  url: string;
  bpm: number;
  key: string;
  genre: string;
  featured: boolean;
  structure: {
    name: string;
    start: number;
    end: number;
  }[];
  producer: {
    id: number;
    name: string;
  };
}
interface PlayList {
  name: string;
  beats: Beat[];
}
export type PropsPlayList = PlayList;
export type PropsBeat = Beat;
export const $Beats = atom<PropsBeat[]>(beats);
export const $SelectedBeat = atom<PropsBeat | null>(null);
export const $PlayList = atom<PropsPlayList>({
  name: "Todo el Catalogo",
  beats: beats,
});
