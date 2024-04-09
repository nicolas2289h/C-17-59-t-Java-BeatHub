import { formatNumber } from "@/components/utils/dataFormat";
import { $ShoppingCart, PropsBeat } from "@/stores/beats";
import { useStore } from "@nanostores/react";
import { Tooltip } from "@nextui-org/react";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import toast from "react-hot-toast";

export const MusicPlayerButtonAddToCart = ({ beat }: { beat: PropsBeat }) => {
  const shoppingCart = useStore($ShoppingCart);
  const handleAddBeatToCart = () => {
    if (shoppingCart && shoppingCart.find((b) => b.id === beat.id)) return;
    if (!shoppingCart) {
      $ShoppingCart.set([beat]);
      toast.success(`${beat.name} agregado al carrito`, {
        position: "top-center",
        duration: 3000,
        icon: "🛒",
      });
    } else {
      $ShoppingCart.set([...shoppingCart, beat]);
      toast.success(`${beat.name} agregado al carrito`, {
        position: "top-center",
        duration: 3000,
        icon: "🛒",
      });
    }
  };
  return (
    <Tooltip content="Licencia exclusiva">
      <button
        className="w-[9rem] flex items-center justify-center gap-1 rounded-lg shadow-md ring-1 bg-red-500 ring-secundario/5 active:scale-95 duration-100 ease-out hover:shadow-lg hover:scale-105 text-lg"
        onClick={handleAddBeatToCart}
      >
        <IconShoppingCartPlus
          className="w-1/3 flex justify-center items-center text-terciario"
          size={30}
        />

        <div className="scale-105 flex flex-col items-center justify-center gap-1 w-2/3 bg-terciario text-secundario rounded-lg">
          <span className="text-sm">Comprar</span>
          <small className="text-sm p-0 m-0 font-bold">
            $ {formatNumber(beat.price)}
          </small>
        </div>
      </button>
    </Tooltip>
  );
};
