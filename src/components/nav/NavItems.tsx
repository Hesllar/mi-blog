"use client";

import { useContext } from "react";
import { UIContext } from "../ui/context/UIContext";

interface Props {
  flexDirection?: flexDirection;
}

type flexDirection = "flex-row" | "flex-col";

const navItems = [
  {
    name: "Incio",
  },
  // {
  //   name: "Mis proyectos",
  // },
  {
    name: "Contacto",
  },
];

export const NavItems = ({ flexDirection }: Props) => {
  const { onToggleMenu, isOpenMenu } = useContext(UIContext);

  const handleScroll = (name: string) => {
    window.scrollTo({
      top: name === "Contacto" ? document.body.scrollHeight : 0,
      behavior: "smooth",
    });
    if (isOpenMenu) {
      onToggleMenu();
    }
  };

  return (
    <div className={`flex ${flexDirection}`}>
      {navItems.map((item) => (
        <div
          className="py-2 sm:pr-4 sm:pl-3"
          key={item.name}
          onClick={() => handleScroll(item.name)}
        >
          <span className="hover:text-dark-primary dark:hover:text-primary cursor-pointer font-serif font-semibold sm:font-normal text-sm sm:text-xl">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};
