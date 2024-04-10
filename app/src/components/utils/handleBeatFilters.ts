import { PropsBeat } from "@/stores/beats";
import {
  PropsBeatUseFilterBeats,
  PropsFiltroUseFilterBeats,
} from "./hooks/InterfaceUseFilterBeats";

export const PositiveBeatFilter = ({
  filtros,
  beats,
  cantidad,
}: {
  filtros: PropsFiltroUseFilterBeats[];
  beats: PropsBeat[];
  cantidad?: number;
}) => {
  let beatsFiltradosTemp: PropsBeat[] = [];

  filtros.forEach((filtro) => {
    const keys = Object.keys(filtro);
    let ArrayBusqueda: PropsBeat[] = [];

    keys.forEach((key) => {
      ArrayBusqueda = beats.filter((beat: PropsBeatUseFilterBeats) => {
        // Si la clave tiene un punto, significa que es una propiedad anidada
        if (key.includes(".")) {
          const [propiedad, subpropiedad] = key.split(".");
          return beat[propiedad][subpropiedad] === filtro[key];
        } else {
          return beat[key] === filtro[key];
        }
      });
    });
    beatsFiltradosTemp.push(...ArrayBusqueda);
  });
  if (cantidad && beatsFiltradosTemp.length > cantidad) {
    const ArrayBusquedaTemp: PropsBeat[] = [];
    while (ArrayBusquedaTemp.length < cantidad) {
      const cancionAleatoria = randomBeat(beatsFiltradosTemp);
      if (!ArrayBusquedaTemp.find((beat) => beat.id === cancionAleatoria.id)) {
        ArrayBusquedaTemp.push(cancionAleatoria);
      }
    }
    beatsFiltradosTemp.push(...ArrayBusquedaTemp);
  }

  return deleteDuplicatedBeats(beatsFiltradosTemp);
};
export const NegativeBeatFilter = ({
  filtros,
  beats,
  cantidad,
}: {
  filtros: PropsFiltroUseFilterBeats[];
  beats: PropsBeat[];
  cantidad?: number;
}) => {
  let beatsFiltradosTemp: PropsBeat[] = [];

  filtros.forEach((filtro) => {
    const keys = Object.keys(filtro);
    let ArrayBusqueda: PropsBeat[] = [];
    if (beatsFiltradosTemp.length === 0) {
      keys.forEach((key) => {
        ArrayBusqueda = beats.filter((beat: PropsBeatUseFilterBeats) => {
          // Si la clave tiene un punto, significa que es una propiedad anidada
          if (key.includes(".")) {
            const [propiedad, subpropiedad] = key.split(".");
            return beat[propiedad][subpropiedad] !== filtro[key];
          } else {
            return beat[key] !== filtro[key];
          }
        });
      });
      beatsFiltradosTemp.push(...ArrayBusqueda);
    } else {
      keys.forEach((key) => {
        ArrayBusqueda = beatsFiltradosTemp.filter(
          (beat: PropsBeatUseFilterBeats) => {
            // Si la clave tiene un punto, significa que es una propiedad anidada
            if (key.includes(".")) {
              const [propiedad, subpropiedad] = key.split(".");
              return beat[propiedad][subpropiedad] !== filtro[key];
            } else {
              return beat[key] !== filtro[key];
            }
          }
        );
      });
      beatsFiltradosTemp = ArrayBusqueda;
    }
  });
  if (cantidad && beatsFiltradosTemp.length > cantidad) {
    const ArrayBusquedaTemp: PropsBeat[] = [];
    while (ArrayBusquedaTemp.length < cantidad) {
      const cancionAleatoria = randomBeat(beatsFiltradosTemp);
      if (!ArrayBusquedaTemp.find((beat) => beat.id === cancionAleatoria.id)) {
        ArrayBusquedaTemp.push(cancionAleatoria);
      }
    }
    beatsFiltradosTemp.push(...ArrayBusquedaTemp);
  }
  return deleteDuplicatedBeats(beatsFiltradosTemp);
};

export const randomBeat = (beats: PropsBeat[]) => {
  return beats[Math.floor(Math.random() * beats.length)];
};

export const deleteDuplicatedBeats = (beats: PropsBeat[]) => {
  return Array.from(new Set(beats));
};
