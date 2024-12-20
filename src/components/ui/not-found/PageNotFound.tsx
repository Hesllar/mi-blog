import Image from "next/image";
import { pageNotFound } from "../../../../public/index";
import Link from "next/link";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center h-[800px] items-center">
      <Image src={pageNotFound} alt="not found" width={550} height={550} />

      <p className="text-white text-lg font-semibold">Página en contrucción</p>
      <Link
        href="/"
        className="mt-5 text-2xl font-semibold hover:underline transition-all"
      >
        Ir a la página principal
      </Link>
    </div>
  );
};
