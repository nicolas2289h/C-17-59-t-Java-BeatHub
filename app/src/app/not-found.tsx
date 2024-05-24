import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center p-24 min-h-screen gap-20">
      <div>
        <h2 className="mb-1 text-6xl font-bold">Oooops!</h2>
        <p className="text-secundario text-sm">algo salio mal</p>
      </div>
      <div>
        <Image
          src={"/assets/icons/icons-error.png"}
          alt="error"
          width={300}
          height={300}
        ></Image>
      </div>
    </div>
  );
}
