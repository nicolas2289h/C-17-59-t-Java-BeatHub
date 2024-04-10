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

    // si ArrayBusqueda es mayor que cantidad, selecciona al azar la cantidad de elementos y los almacena en otra variable
    if (cantidad && ArrayBusqueda.length > cantidad) {
      const ArrayBusquedaTemp: PropsBeat[] = [];
      while (ArrayBusquedaTemp.length < cantidad) {
        const cancionAleatoria =
          ArrayBusqueda[Math.floor(Math.random() * ArrayBusqueda.length)];
        if (
          !ArrayBusquedaTemp.find((beat) => beat.name === cancionAleatoria.name)
        ) {
          ArrayBusquedaTemp.push(cancionAleatoria);
        }
      }
      ArrayBusqueda = ArrayBusquedaTemp;
    }
    beatsFiltradosTemp.push(...ArrayBusqueda);
  });
  return beatsFiltradosTemp;
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
      ArrayBusqueda = beats.filter((cancion) => {
        return keys.every(
          (key) => cancion[key as keyof PropsBeat] !== filtro[key]
        );
      });
      beatsFiltradosTemp.push(...ArrayBusqueda);
    } else {
      ArrayBusqueda = beatsFiltradosTemp.filter((cancion) => {
        return keys.every(
          (key) => cancion[key as keyof PropsBeat] !== filtro[key]
        );
      });
      beatsFiltradosTemp = ArrayBusqueda;
    }

    /* keys.forEach((key) => {
      ArrayBusqueda = beats.filter((beat: PropsBeatUseFilterBeats) => {
        // Si la clave tiene un punto, significa que es una propiedad anidada
        if (key.includes(".")) {
          const [propiedad, subpropiedad] = key.split(".");
          return beat[propiedad][subpropiedad] !== filtro[key];
        } else {
          return beat[key] !== filtro[key];
        }
      });
    }); */

    // si ArrayBusqueda es mayor que cantidad, selecciona al azar la cantidad de elementos
  });
  if (cantidad && beatsFiltradosTemp.length > cantidad) {
    const ArrayBusquedaTemp: PropsBeat[] = [];
    while (ArrayBusquedaTemp.length < cantidad) {
      const cancionAleatoria =
        beatsFiltradosTemp[
          Math.floor(Math.random() * beatsFiltradosTemp.length)
        ];
      if (!ArrayBusquedaTemp.find((beat) => beat.id === cancionAleatoria.id)) {
        ArrayBusquedaTemp.push(cancionAleatoria);
      }
    }
    return ArrayBusquedaTemp;
  }
  return beatsFiltradosTemp;
};
