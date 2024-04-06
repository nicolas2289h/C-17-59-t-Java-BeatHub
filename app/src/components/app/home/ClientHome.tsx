/* eslint-disable @next/next/no-img-element */
"use client";

import { $Beats, $SelectedBeat } from "@/stores/beats";
import { useStore } from "@nanostores/react";

export const ClientHome = () => {
  const beats = useStore($Beats);
  const selectedBeat = useStore($SelectedBeat);
  const handleSelectedSong = (beatIndex: number) => {
    const selectedBeat = beats[beatIndex];
    $SelectedBeat.set(selectedBeat);
  };
  return (
    <section>
      <h2 className="font-milker text-3xl mb-4">Destacados</h2>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {beats.map((beat, index) => (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <div
            onClick={() => handleSelectedSong(index)}
            key={beat.id}
            className={`${
              selectedBeat?.id === beat.id && "border border-red-200 scale-105"
            } w-[20rem] relative cursor-pointer flex flex-col items-center gap-1 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden`}
          >
            <img
              src={`https://img.youtube.com/vi/${beat.url}/mqdefault.jpg`}
              alt={`imagen de ${beat.name}`}
              className="rounded-xl w-full h-[10rem] object-cover"
            />
            <h3>{beat.name}</h3>
            <div className="flex absolute bg-secundario/10 text-slate-200 gap-2 justify-center p-1 rounded-xl right-4">
              <p>{beat.bpm}bpm,</p>
              <p>{beat.key}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
