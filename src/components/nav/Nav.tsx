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
    <>
      {/* Diseño Blur para cuando se habrá el menu lateral */}
      {isOpenMenu && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          onClick={onToggleMenu}
        />
      )}

      <nav className=" h-14 text-text top-0 w-full mx-auto drop-shadow-lg z-50 fixed px-10 bg-gray-500 content-center dark:bg-gradient-space">
        <div className="flex flex-wrap justify-between items-center w-full">
          <Link href="/" className="flex items-center">
            {/* <Image src='/Logo.png' height={500} width={500} className="mr-3 size-11 " alt="Icon" /> */}
            <h1 className="block self-center text-2xl font-serif font-bold whitespace-nowrap text-white">
              Hesllar Linzmayer
            </h1>
          </Link>
          {width > 640 ? (
            <NavItems />
          ) : (
            <IoMenu
              size={30}
              onClick={() => onToggleMenu()}
              className="cursor-pointer text-white"
            />
          )}
        </div>
        <Sidebar isSideMenuOpen={isOpenMenu} />
      </nav>
    </>
  );
};
