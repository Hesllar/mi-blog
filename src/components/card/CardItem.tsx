import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

interface Props {
  name: string;
  description: string;
  image: string | StaticImageData;
  url?: string;
}

export const CardItem = ({ description, image, name, url }: Props) => {
  return (
    <div className="max-w-[720px] mx-auto transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300">
      <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md dark:bg-gradient-dark-dawn">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border p-2">
          <Image
            src={image}
            className="object-contain border-4 border-black rounded dark:border-white dark:border-2"
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <h2 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-white">
            {name}
          </h2>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700 dark:text-white">
            {description}
          </p>
        </div>
        <div className="px-6">
          <div className="border-dashed border-2 rounded-md border-black p-4 dark:border-white">
            <h4 className="text-black text-xl dark:text-white">
              Desarrollado en:
            </h4>
            <div className="flex gap-8 mt-2 justify-center">
              <RiNextjsFill
                size={50}
                title="Next"
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-black dark:text-white"
              />
              <FaReact
                size={50}
                color="#61DAFB"
                title="React"
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <RiTailwindCssFill
                size={50}
                color="#38BDF8"
                title="Tailwind"
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
          </div>
        </div>
        <div className="flex p-6 justify-center">
          <Link
            href={url ?? "#"}
            className="
            w-full py-3 px-4 items-center text-center gap-x-2 text-lg  
            text-white font-medium rounded-lg border border-transparent bg-blue-700 
            dark:bg-white dark:text-black"
            target="_blank"
          >
            {`Ir a ${name}`}
          </Link>
        </div>
      </div>
    </div>
  );
};
