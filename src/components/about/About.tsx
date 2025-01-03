import Image from "next/image";
import { image } from "../../../public/index";

export const About = () => {
  return (
    <div className="flex flex-col h-1/4 w-full gap-8 md:flex-row">
      <div className="w-full flex justify-center md:w-auto">
        <Image
          src={image}
          alt=""
          width={200}
          height={200}
          className="rounded-full hover:skew-y-3"
        />
      </div>
      <div
        className="
        bg-gradient-to-r from-purple-500 to-pink-500
        p-10
        rounded-lg
        w-full 
        max-[1401px]:content-center
        max-[1401px]:mt-0 max-[1401px]:shadow-2xl 
       max-[600px]:mt-10 max-[600px]:p-8
        "
      >
        <p className="text-2xl font-bold mb-4">¡Hola!</p>
        <span className="font-medium">
          Soy Hesllar Linzmayer, y bienvenidos a mi blog. Aquí podrás conocer
          mis proyectos, los cuales he desarrollado con dedicación y pasión.
        </span>
      </div>
    </div>
  );
};
