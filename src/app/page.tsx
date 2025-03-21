import { About } from "@/components/about/About";
import tecnogamerIMG from "../../public/img/tecnogamer.webp";
import { MyProyects } from "@/components/proyects/MyProyects";

const proyects = [
  {
    name: "Tecnogamer",
    description:
      "Proyecto que permite realizar ventas de producots de computadoras, tales como: tarjetas de video, procesadores, memorias ram, etc.",
    isActive: true,
    image: tecnogamerIMG,
    url: "https://tecnogamer-front-next.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className=" flex flex-col items-center my-32 justify-center mx-8 sm:mx-14 md:mx-24 gap-24">
      <About />
      <MyProyects proyects={proyects} />
    </main>
  );
}
