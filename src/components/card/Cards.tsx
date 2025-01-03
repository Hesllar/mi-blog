import { StaticImageData } from "next/image";
import { CardItem } from "./CardItem";

interface Proyect {
  name: string;
  description: string;
  isActive: boolean;
  image: string | StaticImageData;
}

interface Props {
  proyects: Proyect[];
}

export const Cards = ({ proyects }: Props) => {
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 fade-in gap-4">
      {proyects.map((proyect) => (
        <CardItem key={proyect.name} {...proyect} />
      ))}
    </div>
  );
};
