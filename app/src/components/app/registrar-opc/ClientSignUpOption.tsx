"use client";
import Link from "next/link";
import RegisterComponent from "./registerComponent/RegisterComponent";
import { $IsProducer } from "@/stores/users";

const ClientSignUpOption = () => {
  return (
    <section className="w-[80%] mx-auto bg-black text-black m-20">
      <Link onClick={() => $IsProducer.set(false)} href="/registrar">
        <RegisterComponent title="Artista" />
      </Link>
      <Link onClick={() => $IsProducer.set(true)} href="/registrar">
        <RegisterComponent title="Productor" />
      </Link>
    </section>
  );
};

export default ClientSignUpOption;
