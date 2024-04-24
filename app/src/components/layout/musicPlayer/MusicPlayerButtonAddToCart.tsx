import { formatNumber } from "@/components/utils/dataFormat";
import {
  getLocalStorage,
  setLocalStorage,
} from "@/components/utils/handleLocalStorage";
import { $ShoppingCart, PropsBeat } from "@/stores/beats";
import { useStore } from "@nanostores/react";
import { Button, Tooltip } from "@nextui-org/react";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const MusicPlayerButtonAddToCart = ({ beat }: { beat: PropsBeat }) => {
  const shoppingCart = useStore($ShoppingCart);
  const handleAddBeatToCart = () => {
    if (shoppingCart && shoppingCart.find((b) => b.idBeat === beat.idBeat))
      return;
    if (shoppingCart && shoppingCart.length >= 5) {
      return toast.error("Máximo 5 beats en el carrito", {
        position: "top-center",
        duration: 3000,
      });
    }
    if (!shoppingCart) {
      $ShoppingCart.set([
        {
          idBeat: beat.idBeat,
          nombre: beat.nombre,
          precio: beat.precio,
          url: beat.url,
        },
      ]);
    } else {
      $ShoppingCart.set([
        ...shoppingCart,
        {
          idBeat: beat.idBeat,
          nombre: beat.nombre,
          precio: beat.precio,
          url: beat.url,
        },
      ]);
    }
    toast.success(`"${beat.nombre}" agregado al carrito`, {
      position: "top-center",
      duration: 3000,
    });
  };
  useEffect(() => {
    if (shoppingCart) {
      return setLocalStorage(`localShoppingCart`, shoppingCart);
    } else if (
      shoppingCart === null &&
      localStorage.getItem(`localShoppingCart`)
    ) {
      return $ShoppingCart.set(getLocalStorage(`localShoppingCart`));
    }
  }, [shoppingCart]);
  return (
    <Tooltip content="Licencia exclusiva">
      <Button
        disabled={
          shoppingCart === null
            ? false
            : shoppingCart.find((b) => b.idBeat === beat.idBeat)
            ? true
            : false
        }
        className="disabled:opacity-65 border border-neutral-400 disabled:hover:opacity-65 disabled:scale-100 disabled:shadow-md disabled:active:scale-100 w-[5rem] h-[2.7rem] px-2 py-8 flex items-center justify-center gap-1 rounded-[5px] shadow-md ring-1 bg-slate-50 text-secundario ring-secundario/5 active:scale-95 duration-100 ease-out hover:shadow-lg hover:scale-105 text-lg"
        onClick={handleAddBeatToCart}
      >
        {/* <IconShoppingCartPlus
          className="w-1/4 flex justify-center items-center text-red-500"
          size={30}
        /> */}

        <div className="flex flex-col items-center justify-center gap-1 w-3/4 rounded-r-lg text-zinc-500 ">
          <span className="text-sm font-normal">Comprar</span>
          <small className="text-sm p-0 m-0 font-normal">
            $ {formatNumber(beat.precio)}
          </small>
        </div>
      </Button>
    </Tooltip>
  );
};
