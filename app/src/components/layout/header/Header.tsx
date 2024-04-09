"use client";
import { $ShoppingCart } from "@/stores/beats";
import { useStore } from "@nanostores/react";
import { IconSearch, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export const Header = () => {
  const shoppingCart = useStore($ShoppingCart);
  const total = shoppingCart?.reduce((acc, beat) => acc + beat.price, 0);
  const cuentaBeats = shoppingCart?.length;
  return (
    <header className="z-50 w-full h-[3rem] flex bg-secundario text-primario fixed px-[10rem]">
      <nav className="w-full font-milker gap-8 flex justify-between items-center text-base">
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
        <div className="relative">
          {cuentaBeats && (
            <small className=" z-50 flex items-center justify-center text-xs bg-red-500 text-primario w-[2rem] h-[2rem] p-[2px] rounded-full absolute top-[.4rem] right-[-1rem]">
              {cuentaBeats}
            </small>
          )}
          <Link
            className="hover:text-slate-200 duration-100 ease-out"
            href="/carrito"
          >
            <IconShoppingCart stroke={3} size={30} />
          </Link>
        </div>
      </nav>
    </header>
  );
};
