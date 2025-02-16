"use client";

import Link from "next/link";
import { useContext } from "react";
import { UIContext } from "../ui/context/UIContext";

interface Props {
  flexDirection?: flexDirection;
}

type flexDirection = "flex-row" | "flex-col";

const navItems = [
  {
    name: "Incio",
    path: "/",
  },
  {
    name: "Sobre mi",
    path: "/about",
  },
  {
    name: "Contacto",
    path: "contact",
  },
];

export const NavItems = ({ flexDirection }: Props) => {
  const { onToggleMenu, isOpenMenu } = useContext(UIContext);

  const handleOnClick = () => {
    if (isOpenMenu) {
      onToggleMenu();
    }
  };

  return (
    <div className={`flex ${flexDirection}`}>
      {navItems.map((item) => (
        <Link
          href={item.path}
          className="py-2 sm:pr-4 sm:pl-3 hover:text-dark-primary dark:hover:text-primary cursor-pointer font-serif font-semibold sm:font-normal text-sm sm:text-xl"
          key={item.name}
          onClick={handleOnClick}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
