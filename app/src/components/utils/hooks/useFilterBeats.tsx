import { $Beats, PropsBeat } from "@/stores/beats";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { PropsUseFilterBeats } from "./InterfaceUseFilterBeats";
import { NegativeBeatFilter, PositiveBeatFilter } from "../handleBeatFilters";

export const useFilterBeats = ({
  filtros,
  filtrosNegativos,
  cantidad,
}: PropsUseFilterBeats) => {
  const beatsRaw = useStore($Beats);
  const [beatsFiltrados, setBeatsFiltrados] = useState<PropsBeat[]>([]);

  useEffect(() => {
    if (beatsRaw && beatsRaw.length > 0) {
      filtrarCanciones({ beatsRaw });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beatsRaw]);

  const filtrarCanciones = ({ beatsRaw }: { beatsRaw: PropsBeat[] }) => {
    let beats: PropsBeat[] = beatsRaw;
    let beatsFiltradosTemp: PropsBeat[] = [];

    if (filtrosNegativos && filtrosNegativos.length > 0) {
      const negBets = NegativeBeatFilter({
        filtros: filtrosNegativos,
        beats: beatsRaw,
        cantidad,
      });
      beats = negBets;
      if (!filtros) {
        beatsFiltradosTemp = negBets;
      }
    }

    if (filtros && filtros.length > 0) {
      const positBeats = PositiveBeatFilter({ filtros, beats, cantidad });
      beatsFiltradosTemp = positBeats;
    }

    if (cantidad && cantidad < beatsFiltradosTemp.length) {
      // vuelve a seleccionar al azar la cantidad de elementos de beatsFiltradosTemp
      const beatsFiltradosTempTemp: PropsBeat[] = [];
      while (beatsFiltradosTempTemp.length < cantidad) {
        const cancionAleatoria =
          beatsFiltradosTemp[
            Math.floor(Math.random() * beatsFiltradosTemp.length)
          ];
        if (
          !beatsFiltradosTempTemp.find(
            (beat) => beat.name === cancionAleatoria.name
          )
        ) {
          beatsFiltradosTempTemp.push(cancionAleatoria);
        }
      }
      beatsFiltradosTemp = beatsFiltradosTempTemp;
    }
    while (beatsFiltradosTemp.length < cantidad!) {
      const cancionAleatoria =
        beats![Math.floor(Math.random() * beats!.length)];
      if (
        !beatsFiltradosTemp.find((beat) => beat.name === cancionAleatoria.name)
      ) {
        beatsFiltradosTemp.push(cancionAleatoria);
      }
    }

    setBeatsFiltrados(beatsFiltradosTemp);
  };

  return {
    beatsFiltrados,
  };
};
