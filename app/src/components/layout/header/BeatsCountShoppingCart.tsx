import { getLocalStorage } from "@/components/utils/handleLocalStorage";
import { $ShoppingCart } from "@/stores/beats";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

export const BeatsCountShoppingCart = () => {
  const shoppingCart = useStore($ShoppingCart);
  const total = shoppingCart?.reduce((acc, beat) => acc + beat.price, 0) || 0;
  const cuentaBeats = shoppingCart?.length;

  useEffect(() => {
    if (getLocalStorage("localShoppingCart")) {
      $ShoppingCart.set(getLocalStorage("localShoppingCart"));
    }
  }, []);

  return (
    <>
      {total > 0 && (
        <small className=" pointer-events-none z-50 flex items-center justify-center text-xs bg-red-500 text-primario w-[1.3rem] h-[1.3rem] p-[1px] rounded-full absolute top-[1rem] right-[-.4rem]">
          {cuentaBeats}
        </small>
      )}
    </>
  );
};
