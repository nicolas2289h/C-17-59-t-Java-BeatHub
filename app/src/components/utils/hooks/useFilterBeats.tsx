import { $Beats, PropsBeat } from "@/stores/beats";
import { useStore } from "@nanostores/react";
import { use, useEffect, useState } from "react";
import { PropsUseFilterBeats } from "./InterfaceUseFilterBeats";
import {
  NegativeBeatFilter,
  PositiveBeatFilter,
  deleteDuplicatedBeats,
  randomBeat,
} from "../handleBeatFilters";

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
  useEffect(() => {
    console.log(filtros);
  }, [filtros]);
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
      const beatsFiltradosTempTemp: PropsBeat[] = [];
      while (beatsFiltradosTempTemp.length < cantidad) {
        const cancionAleatoria = randomBeat(beatsFiltradosTemp);
        if (
          !beatsFiltradosTempTemp.find(
            (beat) => beat.name === cancionAleatoria.name
          )
        ) {
          beatsFiltradosTempTemp.push(cancionAleatoria);
        }
      }
      beatsFiltradosTemp = beatsFiltradosTempTemp;

      //Rellenar con bets random si no hay suficientes
    } else if (cantidad && cantidad > beatsFiltradosTemp.length) {
      let relleno: PropsBeat[] = [];
      while (relleno.length < cantidad - beatsFiltradosTemp.length) {
        const BeatsToFill = beats.length < cantidad! ? beatsRaw : beats;
        const cancionAleatoria = randomBeat(BeatsToFill);
        if (
          !beatsFiltradosTemp.find((beat) => beat.id === cancionAleatoria.id) &&
          !relleno.find((beat) => beat.id === cancionAleatoria.id)
        ) {
          relleno.push(cancionAleatoria);
        }
      }

      beatsFiltradosTemp.push(...relleno);
    }

    setBeatsFiltrados(deleteDuplicatedBeats(beatsFiltradosTemp));
  };

  return {
    beatsFiltrados,
  };
};
