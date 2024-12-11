import { About } from "@/components/about/About";
import image1 from "../../public/img/WhatsApp Image 2021-07-10 at 2.54.23 PM.jpg";
import image2 from "../../public/img/image-not-found-scaled-1150x647.png";
import { MyProyects } from "@/components/proyects/MyProyects";

const proyects = [
  {
    name: "Proyecto 1",
    description: "Lorem ipsum dolor sit amet.",
    isActive: true,
    image: image2,
  },
  {
    name: "Proyecto 2",
    description: "Lorem ipsum dolor sit amet.",
    isActive: false,
    image: image2,
  },
  {
    name: "Proyecto 3",
    description: "Lorem ipsum dolor sit amet.",
    isActive: false,
    image: image1,
  },
  {
    name: "Proyecto 4",
    description: "Lorem ipsum dolor sit amet.",
    isActive: false,
    image: image2,
  },
];

export default function Home() {
  return (
    <main>
      <div className="w-full h-full flex flex-row max-[1401px]:flex-col-reverse max-[1401px]:h-full items-center my-32  justify-center">
        <MyProyects proyects={proyects} />
        <About />
      </div>
    </main>
  );
}
