import { About } from "@/components/about/About";
import { imageNotFound } from "../../public/index";
import { MyProyects } from "@/components/proyects/MyProyects";

const proyects = [
  {
    name: "Proyecto_1",
    description: "Lorem ipsum dolor sit amet.",
    isActive: true,
    image: imageNotFound,
  },
  {
    name: "Proyecto_2",
    description: "Lorem ipsum dolor sit amet.",
    isActive: false,
    image: imageNotFound,
  },
  {
    name: "Proyecto_3",
    description: "Lorem ipsum dolor sit amet.",
    isActive: false,
    image: imageNotFound,
  },
  {
    name: "Proyecto_4",
    description: "Lorem ipsum dolor sit amet.",
    isActive: false,
    image: imageNotFound,
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
