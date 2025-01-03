import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  description: string;
  image: string | StaticImageData;
}

export const CardItem = ({ description, image, name }: Props) => {
  return (
    <div className="max-w-[720px] mx-auto transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300">
      <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <Image
            src={image}
            className="object-contain"
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <h2 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h2>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
        {/* Agregar Boton */}
        <div className="flex p-6 justify-center">
          <Link
            href={`/proyect/${name}`}
            className="w-full py-3 px-4 items-center text-center gap-x-2 text-sm  text-white font-medium rounded-lg border border-transparent bg-blue-700"
          >
            Ver Mas...
          </Link>
        </div>
      </div>
    </div>
  );
};
