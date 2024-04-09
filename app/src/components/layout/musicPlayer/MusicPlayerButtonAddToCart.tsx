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
    if (shoppingCart && shoppingCart.find((b) => b.id === beat.id)) return;
    if (!shoppingCart) {
      $ShoppingCart.set([beat]);
    } else {
      $ShoppingCart.set([...shoppingCart, beat]);
    }
    toast.success(`"${beat.name}" agregado al carrito`, {
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
            : shoppingCart.find((b) => b.id === beat.id)
            ? true
            : false
        }
        className="disabled:opacity-65 disabled:hover:opacity-65 disabled:scale-100 disabled:shadow-md disabled:active:scale-100 w-[7rem] h-[2.7rem] p-1 flex items-center justify-center gap-1 rounded-lg shadow-md ring-1 bg-red-500 text-terciario ring-secundario/5 active:scale-95 duration-100 ease-out hover:shadow-lg hover:scale-105 text-lg"
        onClick={handleAddBeatToCart}
      >
        <IconShoppingCartPlus
          className="w-1/4 flex justify-center items-center text-terciario"
          size={30}
        />

        <div className="flex flex-col items-center justify-center gap-1 w-3/4 rounded-r-lg">
          <span className="text-sm">Comprar</span>
          <small className="text-sm p-0 m-0 font-bold">
            $ {formatNumber(beat.price)}
          </small>
        </div>
      </Button>
    </Tooltip>
  );
};
