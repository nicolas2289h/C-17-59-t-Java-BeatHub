"use client";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { NavBarButtonCart } from "./NavBarButtonCart";
import { useEffect } from "react";
import { getLocalStorage } from "@/components/utils/handleLocalStorage";
import { $IsLogged, $User } from "@/stores/users";
import { useStore } from "@nanostores/react";
import Image from "next/image";

export const Header = () => {
  const user = useStore($User);
  const isLogged = useStore($IsLogged);
  useEffect(() => {
    if (getLocalStorage("isLogged")) {
      $IsLogged.set(getLocalStorage("isLogged"));
    }
  }, []);
  return (
    <header className="z-50 w-full h-[3rem] flex bg-secundario text-primario fixed px-[10rem]">
      <nav className="w-full gap-8 flex justify-between items-center text-base">
        <Link
          className="hover:text-slate-200 text-xl duration-100 ease-out flex items-center justify-center gap-1"
          href="/"
        >
          <Image
            src={"/assets/imgs/imgBeatHub2B.png"}
            alt="Beat Hub"
            height={150}
            width={150}
          />
        </Link>
        <Link
          className="hover:text-slate-200 duration-100 ease-out"
          href="/feed"
        >
          Feed
        </Link>
        <Link
          className="hover:text-slate-200 duration-100 ease-out"
          href="/beats"
        >
          Beats
        </Link>
        <Link
          className="hover:text-slate-200 duration-100 ease-out"
          href="/info"
        >
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
        <Link
          className="hover:text-slate-200 duration-100 ease-out"
          href="/buscar"
        >
          <IconSearch stroke={2} size={30} />
        </Link>
        <NavBarButtonCart />
      </nav>
    </header>
  );
};
