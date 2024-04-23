"use client";
import { formatNumber } from "@/components/utils/dataFormat";
import { $ShoppingCart, PropsShoppingCartBeat } from "@/stores/beats";
import { $IsLogged } from "@/stores/users";
import { useStore } from "@nanostores/react";
import Link from "next/link";
import { useState } from "react";
import { SelectDelivery } from "./SelectDelivery";
import { SelectPaymentMethod } from "./SelectPaymentMethod";
const ClientBuy = () => {
  const shoppingCart = useStore($ShoppingCart);
  const total = shoppingCart?.reduce((acc, item) => acc + item.price, 0);
  const isLogged = useStore($IsLogged);
  const [step, setStep] = useState(1);
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
      {step === 1 && <SelectDelivery setStep={setStep} />}
      {step === 2 && <SelectPaymentMethod setStep={setStep} />}
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
