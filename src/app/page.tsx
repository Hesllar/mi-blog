import { About } from "@/components/about/About";
import image1 from '../../public/img/WhatsApp Image 2021-07-10 at 2.54.23 PM.jpg'
import image2 from '../../public/img/image-not-found-scaled-1150x647.png'
import { MyProyects } from "@/components/proyects/MyProyects";

const proyects = [
  {
    name: "Proyecto 1",
    description: "",
    isActive: true,
    image: image2,
  },
  {
    name: "Proyecto 2",
    description: "",
    isActive: false,
    image: image2,
  },
  {
    name: "Proyecto 3",
    description: "",
    isActive: false,
    image: image1,
  },
  {
    name: "Proyecto 4",
    description: "",
    isActive: false,
    image: image2,
  },
]


export default function Home() {
  return (
    <main>
      <div className="w-full h-[470px] flex md:flex-row flex-col justify-between items-center mt-32 px-40">
        <MyProyects proyects={proyects} />
        <About />
      </div>
    </main>
  );
}
