import Image from "next/image";
import { image2, image3 } from "../../../public/index";

export default function AboutPage() {
  return (
    <div className="h-full xl:h-screen fade-in lg:content-center">
      <div className="flex justify-center m-6 lg:my-6">
        <div className="flex flex-col lg:w-1/2 w-full p-6 shadow-xl bg-white rounded-md gap-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-stretch">
            <Image
              src={image2}
              alt=""
              width={200}
              height={200}
              className="rounded-md object-contain text-center"
            />
            <div className="flex flex-col gap-4">
              <p className="text-black">
                En este apartado te contaré un poco más sobre mí. Actualmente
                tengo 28 años y vivo con mi pareja e hijo. Llevo alrededor de
                cinco años ejerciendo como programador, un camino en el que he
                aprendido y mejorado constantemente.
              </p>
              <p className="text-black">
                No ha sido fácil, ya que requiere tiempo y dedicación, pero lo
                gratificante de esta profesión es que cada logro alcanzado
                representa una gran satisfacción. En mi tiempo libre —que es muy
                poco, jejeje— intento seguir aprendiendo y manteniéndome
                actualizado sobre las novedades en mi área, explorando nuevas
                tecnologías, mejores prácticas y tendencias del sector.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-4 items-center lg:items-stretch">
            <p className="text-black content-center">
              En cuanto a mi formación, soy Analista Programador, graduado de
              DuocUC, donde adquirí una sólida base en programación y lógica de
              desarrollo. Más allá del conocimiento técnico, destaco mi
              capacidad para el trabajo en equipo y la resolución de problemas,
              habilidades que he perfeccionado con el tiempo.
            </p>
            <Image
              src={image3}
              alt=""
              width={200}
              height={200}
              className="rounded-md object-contain text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
