import clsx from "clsx";
import React from "react";
import { NavItems } from "../nav/NavItems";

interface Props {
  isSideMenuOpen: boolean;
}

export const Sidebar = ({ isSideMenuOpen }: Props) => {
  return (
    <div>
      <nav
        className={clsx(
          "fixed p-5 left-0 top-0 w-[200px] h-screen bg-gray-500 z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <h1>Hesllar Linzmayer</h1>
        <NavItems flexDirection="flex-col" />
      </nav>
    </div>
  );
};
