"use client";

import { useResize } from "@/hooks/useResize";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { NavItems } from "./NavItems";
import { IoMenu } from "react-icons/io5";
import { Sidebar } from "../sidebar/Sidebar";
import { UIContext } from "../ui/context/UIContext";

export const Nav = () => {
  const { onToggleMenu, isOpenMenu } = useContext(UIContext);

  const { width } = useResize();

  useEffect(() => {
    if (isOpenMenu && width > 640) {
      onToggleMenu();
    }
  });
  return (
    <nav className=" h-[40px] border-gray-200 text-text dark:text-dark-text bg-secondary/90 dark:bg-dark-secondary/90 top-0 w-full mx-auto drop-shadow-lg z-50 fixed px-10 bg-gray-500 content-center">
      <div className="flex flex-wrap  justify-between items-center w-full">
        <Link href="/" className="flex items-center">
          {/* <Image src='/Logo.png' height={500} width={500} className="mr-3 size-11 " alt="Icon" /> */}
          <h1 className="block self-center text-xl font-serif font-normal whitespace-nowrap">
            Hesllar Linzmayer
          </h1>
        </Link>
        {width > 640 ? (
          <NavItems />
        ) : (
          <IoMenu
            size={30}
            onClick={() => onToggleMenu()}
            className="cursor-pointer"
          />
        )}
      </div>
      {isOpenMenu && <Sidebar isSideMenuOpen={isOpenMenu} />}
    </nav>
  );
};
