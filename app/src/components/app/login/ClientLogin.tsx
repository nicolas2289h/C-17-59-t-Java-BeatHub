"use client";

import { fetchAPI } from "@/components/utils/fetchAPI";
import {
  getLocalStorage,
  setLocalStorage,
} from "@/components/utils/handleLocalStorage";
import { $IsLogged, $IsProducer } from "@/stores/users";
import { useStore } from "@nanostores/react";
import { Button } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

export const ClientLogin = () => {
  const router = useRouter();
  const isProducer = useStore($IsProducer);
  const isLogged = useStore($IsLogged);
  useEffect(() => {
    if (getLocalStorage("isProducer"))
      $IsProducer.set(getLocalStorage("isProducer"));
  }, []);
  useEffect(() => {
    if (getLocalStorage("isLogged")) $IsLogged.set(getLocalStorage("isLogged"));
  }, []);

  const { status, error, data, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (dataUser: object) =>
      await fetchAPI({
        url: isProducer ? `productor/login` : `artista/login`,
        method: "POST",
        body: dataUser,
      }),
  });
  useEffect(() => {
    if (status === "success") {
      toast.success("Sesión iniciada con éxito");
      setLocalStorage("isLogged", true);
      $IsLogged.set(true);
      router.push("/");
    }
    if (status === "error") {
      toast.error("Error al iniciar sesión");
    }
  }, [status, data, error, router]);

  const handleLogin = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const username = data.get("username");
    const password = data.get("password");

    const dataUser = {
      username,
      password,
    };
    mutate(dataUser);
  };
  return (
    <div className="w-full bg-secundario rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      {isLogged ? (
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="mb-10 text-xl text-center font-bold leading-tight tracking-tight text-gray-100 md:text-2xl dark:text-white">
            Ya has iniciado sesión
          </h1>
          <Button href="/" as={Link}>
            Ir a la página principal
          </Button>
          <span>o</span>
          <Button
            color="danger"
            onPress={() => {
              setLocalStorage("isLogged", false);
              $IsLogged.set(false);
            }}
          >
            Cerrar sesión
          </Button>
        </div>
      ) : (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <figure className="w-full text-center">
            <Image
              src="/assets/imgs/imgBeathub2B.png"
              alt="beathub-image-2b"
              width={330}
              height={76}
            />
          </figure>
          <h1 className="text-2x1 text-center leading-tight tracking-tight text-blanco md:text-2xl dark:text-white">
            Iniciar sesión
          </h1>
          <option value=""></option>
          <form
            className="space-y-4 md:space-y-6"
            method="POST"
            onSubmit={handleLogin}
          >
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-light text-blanco dark:text-white"
              >
                Ingrese su nombre de usuario
              </label>
              <input
                type="username"
                name="username"
                id="username"
                autoComplete="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nombre de Usuario"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-light text-blanco"
              >
                Ingrese su contraseña
              </label>
              <input
                autoComplete="current-password"
                type="password"
                name="password"
                id="password"
                placeholder="Introduce tu contraseña"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <p className="inline text-sm font-light text-gray-500 dark:text-gray-400">
              ¿Olvidaste tu contraseña?{" "}
              <a
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                href="*"
              >
                Haz clic aquí
              </a>{" "}
            </p>

            <Button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continuar
            </Button>
          </form>
          <p className="inline text-sm font-light text-blanco">
            ¿No tienes una cuenta BeatHub?{" "}
          </p>

          <Button
            href="/registrar-opc"
            as={Link}
            className="w-full  text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Regístrate
          </Button>
        </div>
      )}
    </div>
  );
};
