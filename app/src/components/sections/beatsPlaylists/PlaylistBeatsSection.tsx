/* eslint-disable @next/next/no-img-element */
import { formatNumber } from "@/components/utils/dataFormat";
import { setLocalStorage } from "@/components/utils/handleLocalStorage";
import { $PlayList, PropsBeat } from "@/stores/beats";
import { $SelectedBeat } from "@/stores/beats";
import { useStore } from "@nanostores/react";
import { Tooltip } from "@nextui-org/react";
import { IconShoppingCartPlus } from "@tabler/icons-react";

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
          key={beat.id}
          className={`shadow-md hover:shadow-lg ${
            selectedBeat?.id === beat.id &&
            playList.name === PlayListName &&
            "shadow-xl ring-1 ring-secundario/10 scale-105"
          } bg-blanco w-[20rem] relative cursor-pointer flex flex-col gap-1 p-4 rounded-xl transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <img
            src={`https://img.youtube.com/vi/${beat.url}/mqdefault.jpg`}
            alt={`imagen de ${beat.name}`}
            className="rounded-xl w-full h-[10rem] object-cover"
          />
          <div className="flex items-center justify-center">
            <div className="w-1/2">
              <h3 className="text-secundario/80 font-semibold text-lg">
                {beat.name}
              </h3>
              <h4 className="text-sm text-secundario/50">
                {beat.producer.name}
              </h4>
            </div>
            <div
              className={`${
                selectedBeat?.id === beat.id ? "visible" : "invisible"
              } w-1/2 flex items-center justify-end`}
            >
              <Tooltip content={`Agregar ${beat.license.name} al Carrito`}>
                <button
                  className="w-[7rem] flex items-center justify-center gap-2 bg-terciario rounded-lg shadow-sm ring-1 ring-secundario/5 p-1 active:scale-95 duration-75 ease-out hover:shadow-lg text-lg"
                  onClick={() => console.log("Agregar al carrito")}
                >
                  <IconShoppingCartPlus size={18} />
                  <small className="">
                    $ {formatNumber(beat.license.price)}
                  </small>
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="flex absolute bg-secundario/10 text-slate-200 gap-2 justify-center p-1 rounded-xl right-4">
            <small>{beat.bpm}bpm,</small>
            <small>{beat.key}</small>
          </div>
          <small className="flex absolute bg-secundario/10 text-slate-200 gap-2 justify-center p-1 rounded-xl left-4">
            {beat.genre}
          </small>
        </div>
      ))}
    </div>
  );
};
