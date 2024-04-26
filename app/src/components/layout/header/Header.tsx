/* eslint-disable @next/next/no-img-element */
"use client";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { NavBarButtonCart } from "./NavBarButtonCart";
import { useEffect } from "react";
import { getLocalStorage } from "@/components/utils/handleLocalStorage";
import { $IsLogged, $User } from "@/stores/users";
import { useStore } from "@nanostores/react";
import { useQuery } from "@tanstack/react-query";
import { fetchAPI } from "@/components/utils/fetchAPI";
import { $Beats } from "@/stores/beats";

export const Header = () => {
  const user = useStore($User);
  const isLogged = useStore($IsLogged);
  const { status, data, isLoading, refetch, error } = useQuery({
    queryKey: ["beats"],
    queryFn: async () =>
      await fetchAPI({
        url: `beat/beats`,
      }),
    retry: 2,
  });
  useEffect(() => {
    if (status === "success") {
      $Beats.set(data);
    }
  }, [status, data, error]);
  useEffect(() => {
    if (getLocalStorage("isLogged")) {
      $IsLogged.set(getLocalStorage("isLogged"));
    }
  }, []);

  return (
    <header className="z-50 w-full h-[3rem] bg-secundario text-primario fixed top-0 sm:px-[3rem] md:px-[10rem]">
      <nav className="w-full h-full sm:gap-8 flex place-content-evenly items-center text-sm md:text-base">
        <Link className="flex items-center justify-center z-50" href="/">
          <img
            src="/assets/imgs/beathub2-sin-fondo.png"
            alt="Beat Hub"
            height={40}
            width={40}
            className="rounded-none text-blanco"
          />
        </Link>
        <Link className="hover:text-slate-200 duration-100 ease-out hidden md:inline" href="/">
          Feed
        </Link>
        <Link className="hover:text-slate-200 duration-100 ease-out visi" href="/">
          Beats
        </Link>
        <Link className="hover:text-slate-200 duration-100 ease-out hidden md:inline" href="/">
          Info
        </Link>
        <Link
          className="hover:text-slate-200 duration-100 ease-out"
          href="/login"
        >
          <div className="flex gap-1 justify-center items-center">
            {isLogged && (
              <small className="bg-terciario h-6 w-6 rounded-full text-secundario/50 font-milker flex justify-center items-center overflow-hidden text-3xl">
                {user.username.slice(0, 1)}
              </small>
            )}
            <small className="text-base">
              {isLogged ? "Cerrar sesión" : "Iniciar sesión"}
            </small>
          </div>
        </Link>
        <Link className="hover:text-slate-200 duration-100 ease-out hidden md:inline" href="/">
          <IconSearch stroke={2} size={30} />
        </Link>
        <NavBarButtonCart />
      </nav>
    </header>
  );
};
