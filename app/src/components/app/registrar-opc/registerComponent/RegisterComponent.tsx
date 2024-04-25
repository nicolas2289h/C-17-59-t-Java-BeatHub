/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
interface Props {
  title: string;
  image: string;
  rol: string;
  regInfo1: string;
  regInfo2: string;
  regInfo3: string;
  regInfo4: string;
}

const RegisterComponent = ({
  title,
  image,
  rol,
  regInfo1,
  regInfo2,
  regInfo3,
  regInfo4,
}: Props) => {
  return (
    <div className="bg-blanco mb-11 md:grid grid-cols-5 gap-4  rounded-[5px] font-medium w-full hover:scale-105 duration-100 ease-in active:scale-90">
      <figure className="w-[100%] h-[100%] col-span-2">
        <img
          alt={rol}
          src={image}
          className="object-cover w-full md:h-full"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </figure>
      <div className="col-span-3">
        <h3 className="my-5 mx-10">{title}</h3>
        <ul className="list-disc mx-10">
          <li>{regInfo1}</li>
          <li>{regInfo2}</li>
          <li>{regInfo3}</li>
          <li>{regInfo4}</li>
        </ul>
      </div>
    </div>
  );
};

export default RegisterComponent;
