import Image from "next/image";
import { image } from "../../../public/index";

export default function AboutPage() {
  return (
    <div className="h-full lg:h-screen fade-in lg:content-center">
      <div className="flex justify-center m-6 lg:my-0">
        <div className="flex flex-col items-center lg:flex-row lg:w-1/2 w-full p-6 shadow-xl gap-4 lg:items-stretch ">
          <Image
            src={image}
            alt=""
            width={200}
            height={200}
            className="rounded-md object-fill text-center"
          />
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            praesentium, obcaecati doloribus enim animi excepturi soluta, et
            labore doloremque molestias quasi optio libero eos voluptatum
            repellendus culpa, iste deleniti quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Harum praesentium, obcaecati doloribus
            enim animi excepturi soluta, et labore doloremque molestias quasi
            optio libero eos voluptatum repellendus culpa, iste deleniti quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            praesentium, obcaecati doloribus enim animi excepturi soluta, et
            labore doloremque molestias quasi optio libero eos voluptatum
            repellendus culpa, iste deleniti quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Harum praesentium, obcaecati doloribus
            enim animi excepturi soluta, et labore doloremque molestias quasi
            optio libero eos voluptatum repellendus culpa, iste deleniti quos.
          </p>
        </div>
      </div>
    </div>
  );
}
