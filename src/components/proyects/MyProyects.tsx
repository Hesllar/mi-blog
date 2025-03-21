import { StaticImageData } from "next/image";
import { Cards } from "../card/Cards";

interface Proyect {
  name: string;
  description: string;
  isActive: boolean;
  image: string | StaticImageData;
  url?: string;
}

interface Props {
  proyects: Proyect[];
}

export const MyProyects = ({ proyects }: Props) => {
  return (
    <>
      <h2 className="text-3xl text-black font-bold dark:text-white">
        Mis Proyectos
      </h2>
      <Cards proyects={proyects} />
    </>
  );
};
