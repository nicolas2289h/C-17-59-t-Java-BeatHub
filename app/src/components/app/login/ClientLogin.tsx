"use client";

import Link from "next/link";

export const ClientLogin = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Iniciar sesión
        </h1>
        <form className="space-y-4 md:space-y-6" method="POST">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingrese su correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="name"
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
              Ingrese su contraseña
            </label>
            <input
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
          <Link href="/">
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continuar
            </button>
          </Link>
        </form>
        <p className="inline text-sm font-light text-gray-500 dark:text-gray-400">
          ¿Eres nuevo?{" "}
        </p>
        <Link href="/registrar-opc">
          <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Regístrate
          </button>
        </Link>
      </div>
    </div>
  );
};
