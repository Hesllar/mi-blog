import { About } from "@/components/about/About";
import { imageNotFound } from "../../public/index";
import { MyProyects } from "@/components/proyects/MyProyects";

const proyects = [
  {
    name: "Proyecto 1",
    description: "Lorem ipsum dolor sit amet.",
    isActive: true,
    image: imageNotFound,
  },
  {
    name: "Proyecto 2",
    description: "Lorem ipsum dolor sit amet.",
    isActive: false,
    image: imageNotFound,
  },
  {
    name: "Proyecto 3",
    description: "Lorem ipsum dolor sit amet.",
    isActive: false,
    image: imageNotFound,
  },
  {
    name: "Proyecto 4",
    description: "Lorem ipsum dolor sit amet.",
    isActive: false,
    image: imageNotFound,
  },
];

export default function Home() {
  return (
    <main className="h-screen flex flex-row max-[1401px]:flex-col-reverse max-[1401px]:h-full items-center my-14 justify-center mx-24">
      <MyProyects proyects={proyects} />
      <About />
    </main>
  );
}
