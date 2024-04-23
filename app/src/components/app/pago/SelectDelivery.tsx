import { $User } from "@/stores/users";
import { useStore } from "@nanostores/react";
import { Button } from "@nextui-org/react";
import { IconMailFilled } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

export const SelectDelivery = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const user = useStore($User);
  return (
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
          onClick={() => setStep(2)}
        >
          Continuar
        </Button>
      </div>
    </section>
  );
};
