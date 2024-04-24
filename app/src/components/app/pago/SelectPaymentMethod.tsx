import { Dispatch, SetStateAction, use, useState } from "react";
import { Input, RadioGroup } from "@nextui-org/react";
import { CustomRadio } from "./CustomRadio";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { $Beats, $ShoppingCart } from "@/stores/beats";
import { useStore } from "@nanostores/react";
export const SelectPaymentMethod = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const beats = useStore($Beats);
  const shoppingCart = useStore($ShoppingCart);
  const [realizandoPago, setRealizandoPago] = useState(false);
  const [form, setForm] = useState({
    cardNumber: "",
    cardName: "",
    cardMonthOfExpiration: "",
    cardCvv: "",
    cardYearOfExpiration: "",
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleInputChange = (event: any) => {
    if (event.target.name === "cardNumber") {
      const inputcardNumber = event.target.value
        .replace(/\D/g, "")
        .slice(0, 16);
      setForm({ ...form, [event.target.name]: inputcardNumber });
    } else if (event.target.name !== "cardName") {
      const InputNumber = event.target.value.replace(/\D/g, "");
      setForm({ ...form, [event.target.name]: InputNumber });
    } else {
      const input = event.target.value;
      setForm({ ...form, [event.target.name]: input });
    }
  };

  const handlePayment = () => {
    if (form.cardCvv.length < 3) {
      toast.error("El código de seguridad debe tener 3 dígitos");
      return;
    }
    if (form.cardMonthOfExpiration.length < 2) {
      toast.error("El mes de vencimiento debe tener 2 dígitos");
      return;
    }
    if (form.cardYearOfExpiration.length < 2) {
      toast.error("El año de vencimiento debe tener 2 dígitos");
      return;
    }
    if (form.cardNumber.length < 16) {
      toast.error("El número de tarjeta debe tener 16 dígitos");
      return;
    }
    if (form.cardName.length === 0) {
      toast.error("El nombre de la tarjeta no puede estar vacío");
      return;
    }
    toast.loading("Realizando pago...");
    setRealizandoPago(true);
    setTimeout(() => {
      setRealizandoPago(false);
      toast.dismiss();
      toast.success("Pago realizado con éxito");
      setStep(3);
      localStorage.removeItem("localShoppingCart");
      // crea un nuevo array de beats con los beats que no estan en el carrito
      const newBeats = beats.filter(
        (beat) => !shoppingCart?.find((item) => item.idBeat === beat.idBeat)
      );

      $ShoppingCart.set(null);
      $Beats.set(newBeats);
      onOpenChange();
    }, 5000);
  };
  return (
    <section className="w-3/5 flex fle-col items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-xl mb-8">¿Cómo querés pagar?</h1>
        <h2 className="my-4">Con crédito o débito</h2>
        <RadioGroup defaultValue="nuevaTarjetaCredito">
          <CustomRadio value="nuevaTarjetaCredito">
            <div className="flex gap-3 items-center justify-center">
              <Image
                src={"/assets/icons/icons-credito.png"}
                alt="agregar tarjeta de credito"
                width={30}
                height={30}
              />
              <small className="text-base">Nueva tarjeta de crédito</small>
            </div>
          </CustomRadio>
          <CustomRadio value="nuevaTarjetaDebito">
            <div className="flex gap-3 items-center justify-center">
              <Image
                src={"/assets/icons/icons-debito.png"}
                alt="agregar tarjeta de credito"
                width={30}
                height={30}
              />
              <small className="text-base">Nueva tarjeta de débito</small>
            </div>
          </CustomRadio>
          <h2 className="my-4">Billetera Virtual</h2>
          <CustomRadio isDisabled description value="paypal">
            <div className="flex gap-3 items-center justify-center">
              <Image
                src={"/assets/icons/icons-virtual.png"}
                alt="agregar tarjeta de credito"
                width={30}
                height={30}
              />
              <small className="text-base">Paypal</small>
            </div>
          </CustomRadio>
        </RadioGroup>
        <div className="flex justify-end mt-8">
          <Button
            type="button"
            variant="solid"
            className=" bg-secundario text-primario px-8"
            onPress={onOpen}
          >
            Continuar
          </Button>
        </div>
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3 ">
                  <Image
                    className="my-0 mx-auto"
                    src={"/assets/imgs/imgTarjeta.webp"}
                    alt="tarjeta"
                    width={200}
                    height={200}
                  />
                  <Input
                    classNames={{
                      inputWrapper:
                        "bg-blanco border-1 border-secundario rounded-md",
                    }}
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleInputChange}
                    maxLength={16}
                    placeholder="XXXX XXXX XXXX XXXX"
                    type="text"
                    label="Numero de tarjeta"
                    labelPlacement="outside"
                  />
                  <Input
                    classNames={{
                      inputWrapper:
                        "bg-blanco border-1 border-secundario rounded-md",
                    }}
                    name="cardName"
                    value={form.cardName}
                    onChange={handleInputChange}
                    placeholder="Nombre de Usuario"
                    type="text"
                    label="Nombre como aparece en la tarjeta"
                    labelPlacement="outside"
                  />
                  <div className="flex gap-1 items-center justify-center mt-5">
                    <Input
                      classNames={{
                        inputWrapper:
                          "bg-blanco border-1 border-secundario rounded-md",
                      }}
                      name="cardMonthOfExpiration"
                      value={form.cardMonthOfExpiration}
                      onChange={handleInputChange}
                      placeholder="01"
                      type="text"
                      label="Mes de vencimiento"
                      labelPlacement="outside"
                      maxLength={2}
                    />
                    <Input
                      classNames={{
                        inputWrapper:
                          "bg-blanco border-1 border-secundario rounded-md",
                      }}
                      name="cardYearOfExpiration"
                      value={form.cardYearOfExpiration}
                      onChange={handleInputChange}
                      placeholder="26"
                      type="text"
                      label="Año de vencimiento"
                      labelPlacement="outside"
                      maxLength={2}
                    />
                    <Input
                      classNames={{
                        inputWrapper:
                          "bg-blanco border-1 border-secundario rounded-md",
                      }}
                      name="cardCvv"
                      value={form.cardCvv}
                      onChange={handleInputChange}
                      placeholder="CCV"
                      type="text"
                      label="Código de seguridad"
                      labelPlacement="outside"
                      maxLength={3}
                      endContent={
                        <Image
                          src={"/assets/icons/icons-ccv.png"}
                          alt="CCV"
                          width={20}
                          height={20}
                        />
                      }
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  isDisabled={realizandoPago}
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Cerrar
                </Button>
                <Button
                  isLoading={realizandoPago}
                  type="button"
                  variant="solid"
                  className=" bg-secundario text-primario px-8"
                  onPress={handlePayment}
                >
                  Comprar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};
