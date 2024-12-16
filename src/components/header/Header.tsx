import Link from "next/link";

import { NavItems } from "../nav/NavItems";

export const Header = () => {
  return (
    <header className="flex justify-center">
      <nav className="border-gray-200 text-text dark:text-dark-text bg-secondary/90 dark:bg-dark-secondary/90 top-0 w-full mx-auto drop-shadow-lg z-50 fixed px-10 bg-gray-500">
        <div className="flex flex-wrap justify-center sm:justify-between items-center ">
          <Link href="/" className="flex items-center">
            {/* <Image src='/Logo.png' height={500} width={500} className="mr-3 size-11 " alt="Icon" /> */}
            <span className="hidden sm:block self-center text-sm sm:text-xl font-serif font-normal whitespace-nowrap">
              Nombre de Pagina
            </span>
          </Link>
          <NavItems />
        </div>
      </nav>
    </header>
  );
};
