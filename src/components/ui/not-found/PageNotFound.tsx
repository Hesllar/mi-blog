import Image from "next/image";
import { pageNotFound } from "../../../../public/index";
import Link from "next/link";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <Image src={pageNotFound} alt="not found" width={550} height={550} />

      <p className="text-black text-lg font-semibold dark:text-white">
        Página en contrucción
      </p>
      <Link
        href="/"
        className=" text-black mt-5 text-2xl font-semibold hover:underline transition-all dark:text-white"
      >
        Ir a la página principal
      </Link>
    </div>
  );
};
