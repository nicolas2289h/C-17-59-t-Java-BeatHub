"use client";
import { formatNumber } from "@/components/utils/dataFormat";
import { $ShoppingCart, PropsShoppingCartBeat } from "@/stores/beats";
import { $IsLogged, $User } from "@/stores/users";
import { useStore } from "@nanostores/react";
import { Button } from "@nextui-org/react";
import { IconMailFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
const ClientBuy = () => {
  const shoppingCart = useStore($ShoppingCart);
  const total = shoppingCart?.reduce((acc, item) => acc + item.price, 0);
  const isLogged = useStore($IsLogged);
  const user = useStore($User);
  if (!isLogged) {
    return (
      <div className="">
        <h2 className="">Iniciá sesión</h2>
        <p className="">
          Para poder pagar, tenés que iniciar sesión con tu cuenta de usuario,
          ademas tener al menos un beat en el carrito.
        </p>
        <Link href="/login" className="">
          <button className="">Iniciar sesión</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-start gap-4 w-full">
      <section className="w-3/5 h-full">
        <h2 className="mb-4 text-xl ">Elegí una forma de entrega</h2>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 border-1 rounded-md h-[9rem]">
            <div className="h-1/2 p-3 flex gap-1">
              <IconMailFilled size={24} />
              <div className="flex flex-col gap-1">
                <h3 className="">e-mail vinculado</h3>
                <p className="text-sm text-secundario/35">{user.email}</p>
              </div>
            </div>
            <div className="h-1/2 p-3 border-t-1 flex items-center ">
              <p className="text-primary hover:underline cursor-pointer">
                Editar o elegir otro e-mail
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm text-secundario/50 mt-4">
          Se te entregará vía e-mail un archivo .rar con el/los contenidos
          comprados.
        </p>
        <div className="flex justify-end mt-8">
          <Button
            type="button"
            variant="solid"
            className=" bg-secundario text-primario px-8"
          >
            Continuar
          </Button>
        </div>
      </section>
      <section className="w-2/5 bg-blanco rounded-md h-full flex flex-col items-center justify-center">
        <div className=" h-full p-4 w-[20rem]">
          <h2 className="text-xl mb-4">Resumen de compra</h2>
          <hr />
          <div className="my-8">
            {shoppingCart?.map((item: PropsShoppingCartBeat) => (
              <div
                key={item.id}
                className="flex gap-2 justify-between text-secundario/75"
              >
                <p className="">{item.name}</p>
                <span className="">$ {formatNumber(item.price)}</span>
              </div>
            ))}
          </div>
          <hr />
          <div className="flex gap-2 justify-between mt-4">
            <p className="text-secundario/75">Pagás</p>
            <span className="text-xl font-semibold">
              $ {total && formatNumber(total)}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientBuy;
