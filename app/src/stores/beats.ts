import { atom } from "nanostores";
const beats = [
  {
    id: 1,
    name: "beat 1",
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
  },
  {
    id: 2,
    name: "beat 2",
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
  },
  {
    id: 3,
    name: "beat 3",
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
  },
  {
    id: 4,
    name: "beat 4",
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
  },
  {
    id: 5,
    name: "beat 5",
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
  structure: {
    name: string;
    start: number;
    end: number;
  }[];
}
export type PropsBeat = Beat;
export const $Beats = atom<PropsBeat[]>(beats);
export const $SelectedBeat = atom<PropsBeat | null>(null);
