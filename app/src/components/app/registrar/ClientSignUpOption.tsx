"use client";

import { fetchAPI } from "@/components/utils/fetchAPI";
import { setLocalStorage } from "@/components/utils/handleLocalStorage";
import { $IsProducer } from "@/stores/users";
import { useStore } from "@nanostores/react";
import { Button } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ClientSignUp = () => {
  const isProducer = useStore($IsProducer);
  const [checkInput, setCheckInput] = useState({
    passwordOk: true,
    emailOk: true,
  });
  const { status, error, data, mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (dataUser: object) =>
      await fetchAPI({
        url: isProducer ? `productor/register` : `artista/register`,
        method: "POST",
        body: dataUser,
      }),
  });
  useEffect(() => {
    if (status === "success") {
      toast.success("Usuario creado con éxito");
      setLocalStorage("isProducer", isProducer ? "true" : "false");
      redirect("/login");
    }
    if (status === "error") {
      toast.error("Error al crear usuario");
    }
  }, [status, data, error, isProducer]);

  const handleSignUp = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = data.get("name");
    const lastname = data.get("lastname");
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    const passwordConfirm = data.get("passwordConfirm");
    if (password !== passwordConfirm) {
      toast.error("Las contraseñas no coinciden");
      setCheckInput({ ...checkInput, passwordOk: false });
      return;
    }
    //email regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email !== null && !emailRegex.test(email as string)) {
      toast.error("Correo electrónico inválido");
      setCheckInput({ ...checkInput, emailOk: false });
      return;
    }
    const dataUser = {
      email,
      password,
      name,
      lastname,
      username,
    };
    mutate(dataUser);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          BeatHub
        </h1>
        <div className="w-[150px] h-[75px] mx-auto bg-black"></div>
        <h2 className="text-center">Continuar con</h2>
        <form
          className="space-y-4 md:space-y-6"
          method="POST"
          onSubmit={handleSignUp}
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingrese su nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre"
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingrese su apellido
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Apellido"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingrese su nombre de {isProducer ? "productor" : "artista"}
            </label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`Nombre de ${isProducer ? "productor" : "artista"}`}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingrese su correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Crear contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="new-password"
              placeholder="Introduce tu contraseña"
              className={`bg-gray-50 border  ${
                !checkInput.passwordOk ? "border-red-500" : "border-gray-300"
              } text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="passwordConfirm"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              autoComplete="new-password"
              placeholder="Introduce tu contraseña nuevamente"
              className={`bg-gray-50 border  ${
                !checkInput.passwordOk ? "border-red-500" : "border-gray-300"
              } text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              required
            />
          </div>
          <input type="checkbox" name="" id="" required className="mr-3" />
          <p className="inline text-sm font-light text-gray-500 dark:text-gray-400">
            He leido y estoy de acuerdo con{" "}
            <a
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="*"
            >
              Términos de servicio
            </a>{" "}
            y{" "}
            <a
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="*"
            >
              Políticas de privacidad
            </a>{" "}
            de BeatHub
          </p>

          <Button
            type="submit"
            isLoading={status === "pending"}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Continuar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ClientSignUp;
