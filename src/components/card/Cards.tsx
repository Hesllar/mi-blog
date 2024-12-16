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
    <div className="flex flex-col items-center gap-12 fade-in">
      {proyects.map((proyect) => (
        <CardItem key={proyect.name} {...proyect} />
      ))}
    </div>
  );
};
