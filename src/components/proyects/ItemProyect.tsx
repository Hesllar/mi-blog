"use client";

import clsx from "clsx";

interface Props {
  name: string;
  setActiveProyecto: (name: string) => void;
  proyectCurrent: string;
}

export const ItemProyect = ({
  name,
  setActiveProyecto,
  proyectCurrent,
}: Props) => {
  const handleClick = () => {
    setActiveProyecto(name);
  };

  return (
    <li
      onClick={handleClick}
      key={name}
      className={clsx("mb-2 cursor-pointer font-semibold", {
        "text-black": proyectCurrent,
        "text-white": proyectCurrent && proyectCurrent === name,
      })}
    >
      {name}
    </li>
  );
};
