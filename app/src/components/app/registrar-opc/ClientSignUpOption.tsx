"use client";
import Link from "next/link";
import RegisterComponent from "./registerComponent/RegisterComponent";
import { $IsProducer } from "@/stores/users";

const ClientSignUpOption = () => {
  return (
    <section className="w-[80%] mx-auto bg-black text-black mt-10 rounded-[5px] px-10 pt-10 md:flex  flex-col items-center justify-between max-md:pb-3 max-md:w-full">
      <Link onClick={() => $IsProducer.set(true)} href="/registrar">
        <RegisterComponent
          title="Productor"
          image="/assets/imgs/imgProducorRegistro.webp"
          rol="productor"
          regInfo1="Ofrece tus beats sin limitaciones."
          regInfo2="Relaciónate con artistas para generar conexiones."
          regInfo3="Experiencia de venta perfecta."
          regInfo4="Una comunidad que te entiende."
        />
      </Link>
      <Link onClick={() => $IsProducer.set(false)} href="/registrar">
        <RegisterComponent
          title="Artista"
          image="/assets/imgs/imgArtistaRegistro.webp"
          rol="artista"
          regInfo1="Beats únicos y originales."
          regInfo2="Experiencia de compra perfecta."
          regInfo3="Una comunidad que te entiende."
          regInfo4="Crea tu próximo hit."
        />
      </Link>
    </section>
  );
};

export default ClientSignUpOption;
