import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full h-[5rem] flex bg-primario text-blanco px-4 fixed">
      <h1 className="w-1/4 font-miker flex items-center text-3xl ">Beat Hub</h1>
      <div className="w-full font-miker gap-8 flex justify-end items-center text-2xl">
        <Link className="hover:text-slate-200 duration-100 ease-out" href="/">
          Inicio
        </Link>
        <Link
          className="hover:text-slate-200 duration-100 ease-out"
          href="/perfil"
        >
          Perfil
        </Link>
        <Link
          className="hover:text-slate-200 duration-100 ease-out"
          href="/beats"
        >
          Beats
        </Link>
        <Link
          className="hover:text-slate-200 duration-100 ease-out"
          href="/feed"
        >
          Feed
        </Link>
        <Link
          className="hover:text-slate-200 duration-100 ease-out"
          href="/carrito"
        >
          Carrito
        </Link>
      </div>
    </header>
  );
};
