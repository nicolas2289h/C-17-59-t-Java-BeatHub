/* eslint-disable @next/next/no-img-element */
import { formatNumber } from "@/components/utils/dataFormat";
import { setLocalStorage } from "@/components/utils/handleLocalStorage";
import { PropsUseFilterBeats } from "@/components/utils/hooks/InterfaceUseFilterBeats";
import { useFilterBeats } from "@/components/utils/hooks/useFilterBeats";
import { mainPlayListName } from "@/constants";
import {
  $Beats,
  $PlayList,
  $SelectedBeat,
  $ShoppingCart,
  PropsBeat,
} from "@/stores/beats";
import { useStore } from "@nanostores/react";
import { Button } from "@nextui-org/react";
import { IconPlayerPlay } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export const RecommendedBeatsShopingCart = ({
  filtros,
  cantidad,
}: PropsUseFilterBeats) => {
  const shoppingCart = useStore($ShoppingCart);
  const { beatsFiltrados } = useFilterBeats({
    cantidad,
    filtros,
  });
  //funcion para eliminar un beat del array beatsFiltrados si este esta en el array shoppingCart
  /*   const [beatsFiltradosTemp, setBeatsFiltradosTemp] = useState<PropsBeat[]>(
    shoppingCart || []
  ); */
  /*   const beats = useStore($Beats);
  useEffect(() => {
    const dfdf = beatsFiltrados?.filter(
      (beat) => !shoppingCart?.find((beatCart) => beatCart.id === beat.id)
    );
    setBeatsFiltradosTemp(dfdf);
  }, [shoppingCart, beatsFiltrados]); */
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 relative">
      {/* {beatsFiltradosTemp &&
        beatsFiltradosTemp.map((beat: PropsBeat) => (
          <div
            key={beat.id}
            className=" w-[6rem] h-[10rem] flex flex-col gap-1 justify-center items-center rounded-md p-4 bg-blanco shadow-md hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
          >
            <div className="h-2/5 flex justify-center items-center">
              <h3 className="text-sm text-center">{beat.name}</h3>
            </div>
            <div className="h-2/5">
              <button
                onClick={() => {
                  $SelectedBeat.set(beat);
                  $PlayList.set({ name: mainPlayListName, beats });
                  setLocalStorage(`localSelectedBeat`, beat);
                  setLocalStorage(`localPlayList`, {
                    name: mainPlayListName,
                    beats,
                  });
                }}
                className="relative"
              >
                <img
                  src={`https://img.youtube.com/vi/${beat.url}/mqdefault.jpg`}
                  alt={`imagen de ${beat.name}`}
                  className="w-[4rem] h-[3rem] object-cover rounded-md"
                />
                <IconPlayerPlay
                  className="absolute text-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  size={30}
                />
              </button>
            </div>
            <div className="h-1/5">
              <Button
                variant="light"
                color="primary"
                onPress={() => {
                  $ShoppingCart.set([...(shoppingCart || []), beat]);
                  setLocalStorage(`localShoppingCart`, [
                    ...(shoppingCart || []),
                    beat,
                  ]);
                }}
              >
                Agregar
              </Button>
            </div>
          </div>
        ))} */}
    </div>
  );
};
