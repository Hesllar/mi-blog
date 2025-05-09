import clsx from "clsx";
import React from "react";
import { NavItems } from "../nav/NavItems";

interface Props {
  isSideMenuOpen: boolean;
}

export const Sidebar = ({ isSideMenuOpen }: Props) => {
  return (
    <nav
      className={clsx(
        "fixed p-5 left-0 top-0 w-[200px] h-52 bg-gray-500 z-20 shadow-2xl transform transition-all duration-300 dark:bg-gradient-space",
        {
          "translate-x-[-100%]": !isSideMenuOpen,
        }
      )}
    >
      <h1 className="font-bold text-lg text-white">Hesllar Linzmayer</h1>
      <NavItems flexDirection="flex-col" />
    </nav>
  );
};
