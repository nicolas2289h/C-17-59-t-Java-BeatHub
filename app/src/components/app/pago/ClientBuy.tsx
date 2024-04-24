"use client";
import { formatNumber } from "@/components/utils/dataFormat";
import {
  $SelectedBeat,
  $ShoppingCart,
  PropsShoppingCartBeat,
} from "@/stores/beats";
import { $IsLogged } from "@/stores/users";
import { useStore } from "@nanostores/react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { SelectDelivery } from "./SelectDelivery";
import { SelectPaymentMethod } from "./SelectPaymentMethod";
import Image from "next/image";
const ClientBuy = () => {
  const shoppingCart = useStore($ShoppingCart);
  const total = shoppingCart?.reduce((acc, item) => acc + item.precio, 0);
  const isLogged = useStore($IsLogged);
  const [step, setStep] = useState(1);
  const handleDownloadClick = () => {
    // Crear un enlace temporal
    const link = document.createElement("a");

    // Establecer la URL del archivo .rar que está en la carpeta public
    link.href = "/Exclusive-Beat.zip"; // Reemplaza 'nombre_del_archivo.rar' con el nombre de tu archivo .rar

    // Establecer el atributo 'download' para indicar que es una descarga
    link.download = `Exclusive-Beat.zip`; // Nombre con el que se descargará el archivo

    // Hacer clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Eliminar el enlace temporal
    document.body.removeChild(link);
  };
  useEffect(() => {
    if (step === 3) {
      setTimeout(() => {
        handleDownloadClick();
      }, 2000);
    }
  }, [step]);

  useEffect(() => {
    $SelectedBeat.set(null);
  }, []);
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
      {step === 3 && (
        <div className="flex flex-col justify-center items-center w-2/5">
          <div className="flex gap-2 items-center mb-10">
            <Image
              src={"/assets/imgs/tick-square.png"}
              alt="check"
              width={50}
              height={50}
            />
            <h3 className="text-xl">Tu compra ha sido un éxito</h3>
          </div>
          <p>
            Se ha iniciado la descarga, si no comienza automáticamente,{" "}
            <span
              className="text-primary hover:font-bold cursor-pointer"
              onClick={handleDownloadClick}
            >
              haz clic
            </span>{" "}
            o ve al mail seleccionado para descargar tu compra. La operación
            puede tardar unos minutos. Por cualquier inconveniente comunicarte
            con ayuda al cliente.
          </p>
        </div>
      )}
      {step !== 3 && (
        <section className="w-2/5 bg-blanco rounded-md h-full flex flex-col items-center justify-center">
          <div className=" h-full p-4 w-[20rem]">
            <h2 className="text-xl mb-4">Resumen de compra</h2>
            <hr />
            <div className="my-8">
              {shoppingCart?.map((item: PropsShoppingCartBeat) => (
                <div
                  key={item.idBeat}
                  className="flex gap-2 justify-between text-secundario/75"
                >
                  <p className="">{item.nombre}</p>
                  <span className="">$ {formatNumber(item.precio)}</span>
                </div>
              ))}
            </div>
            <hr />
            <div className="flex gap-2 justify-between mt-4">
              <p className="text-secundario/75">
                {step !== 3 ? "Pagás" : "Has pagado"}
              </p>
              <span className="text-xl font-semibold">
                $ {total && formatNumber(total)}
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ClientBuy;
