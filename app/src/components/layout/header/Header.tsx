import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { NavBarButtonCart } from "./NavBarButtonCart";

export const Header = () => {
  return (
    <header className="z-50 w-full h-[3rem] flex bg-secundario text-primario fixed px-[10rem]">
      <nav className="w-full font-milker gap-8 flex justify-between items-center text-base">
        <Link
          className="hover:text-slate-200 text-xl duration-100 ease-out flex items-center justify-center gap-1"
          href="/"
        >
          <span className="bg-red-500 p-1 rounded-md">Beat </span>
          Hub
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
          Iniciar Sesion
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
