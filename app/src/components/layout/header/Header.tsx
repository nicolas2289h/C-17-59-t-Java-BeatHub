import { IconSearch, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="z-50 w-full h-[3rem] flex bg-secundario text-primario fixed px-[10rem]">
      <nav className="w-full font-milker gap-8 flex justify-between items-center text-xl">
        <Link className="hover:text-slate-200 duration-100 ease-out" href="/">
          Beat Hub
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
          <IconSearch stroke={3} size={30} />
        </Link>
        <Link
          className="hover:text-slate-200 duration-100 ease-out"
          href="/carrito"
        >
          <IconShoppingCart stroke={3} size={30} />
        </Link>
      </nav>
    </header>
  );
};
