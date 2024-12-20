import Image from "next/image";
import { image } from "../../../public/index";

export const About = () => {
  return (
    <div className="flex flex-col h-full max-[1401px]:flex-row max-[1401px]:w-full max-[600px]:flex-col justify-center">
      <div className="max-[600px]:flex max-[600px]:justify-center">
        <Image
          src={image}
          alt=""
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="min-[1402px]:border mt-2" />
      <div
        className="
        p-10
        mt-5 w-[200px] max-[1401px]:w-full 
        max-[1401px]:content-center max-[1401px]:ml-6 
        max-[1401px]:mt-0 max-[1401px]:shadow-2xl max-[1401px]:rounded-lg
        max-[600px]:ml-0 max-[600px]:mt-10 max-[600px]:p-8
        "
      >
        <p className="text-xl font-bold mb-4">¡Hola!</p>
        <span>
          Soy Hesllar Linzmayer, y bienvenidos a mi blog. Aquí podrás conocer
          mis proyectos, los cuales he desarrollado con dedicación y pasión.
        </span>
      </div>
    </div>
  );
};
