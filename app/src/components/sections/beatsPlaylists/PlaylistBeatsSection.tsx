/* eslint-disable @next/next/no-img-element */
import { MusicPlayerButtonAddToCart } from "@/components/layout/musicPlayer/MusicPlayerButtonAddToCart";
import { setLocalStorage } from "@/components/utils/handleLocalStorage";
import { $PlayList, PropsBeat } from "@/stores/beats";
import { $SelectedBeat } from "@/stores/beats";
import { useStore } from "@nanostores/react";
import styles from "./PlaylistBeatsSection.module.css";
import { Image } from "@nextui-org/react";

export const PlaylistBeatsSection = ({
  beats,
  PlayListName,
}: {
  beats: PropsBeat[];
  PlayListName: string;
}) => {
  const playList = useStore($PlayList);
  const selectedBeat = useStore($SelectedBeat);

  const handleSelectedSong = (beatIndex: number) => {
    const selectedBeat = beats[beatIndex];
    $SelectedBeat.set(selectedBeat);
    $PlayList.set({ name: PlayListName, beats });
    setLocalStorage(`localSelectedBeat`, selectedBeat);
    setLocalStorage(`localPlayList`, { name: PlayListName, beats });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {beats.map((beat, index) => (
        <div
          onClick={() => handleSelectedSong(index)}
          key={beat.idBeat}
          className={`shadow-md hover:shadow-lg ${
            selectedBeat?.idBeat === beat.idBeat &&
            playList.name === PlayListName &&
            "shadow ring-1 ring-secundario/10 scale-105"
          } bg-blanco w-[19rem] h-[17rem] relative cursor-pointer flex flex-col justify-center gap-1 p-4 rounded-xl transition-all duration-300 ease-in-out overflow-hidden z-0`}
        >
          <div className="flex items-center justify-center h-[4rem]">
            <div className="w-1/2">
              <h3 className=" text-xs font-bold text-black uppercase leading-none">
                {beat.productor.username}
              </h3>
              <small className="text-zinc-500 text-[12.80px] leading-tight">
                {beat.genero}, {beat.tiempoBpm}bpm, {beat.tonalidad}
              </small>
              <h4 className="text-secundario font-bold text-lg leading-7">
                {beat.nombre}
              </h4>
            </div>
            <div className={`w-1/2 flex items-center justify-end`}>
              <MusicPlayerButtonAddToCart beat={beat} />
            </div>
          </div>
          <div className=" mt-2">
            <Image
              isBlurred
              src={`https://img.youtube.com/vi/${beat.url}/mqdefault.jpg`}
              alt={`imagen de ${beat.nombre}`}
              className="rounded-[10px] w-full h-[10rem] object-cover z-0"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
