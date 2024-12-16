"use client";

import { StaticImageData } from "next/image";
import { ActiveProyect } from "./ActiveProyect";
import { ListProyects } from "./ListProyects";
import { useEffect, useState } from "react";
import { useResize } from "@/hooks/useResize";
import { Carrousel } from "./Carrousel";
import { Cards } from "../card/Cards";
import clsx from "clsx";

interface Proyect {
  name: string;
  description: string;
  isActive: boolean;
  image: string | StaticImageData;
}

interface Props {
  proyects: Proyect[];
}

export const MyProyects = ({ proyects }: Props) => {
  const { width } = useResize();

  const [proyectActive, setProyectActive] = useState<null | Proyect>(null);

  const [isActiveCarrousel, setIsActiveCarrousel] = useState(true);

  const checkProyectActive = (activeProyect: Proyect | undefined) => {
    if (activeProyect) {
      setProyectActive(activeProyect);
      return;
    }

    setProyectActive(null);
  };

  const setActiveProyecto = (name: string) => {
    const activeProyect = proyects.find((proyect) => proyect.name === name);

    checkProyectActive(activeProyect);
  };

  useEffect(() => {
    const activeProyect = proyects.find((proyect) => proyect.isActive);
    checkProyectActive(activeProyect);
  }, []);

  return (
    <>
      {width > 870 ? (
        <div className="flex flex-row w-full justify-between max-[1401px]:mt-28">
          <ListProyects
            proyectActive={proyectActive}
            proyects={proyects}
            setActiveProyecto={setActiveProyecto}
          />
          {proyectActive && <ActiveProyect {...proyectActive} />}
        </div>
      ) : (
        <div className="w-full mt-28 flex flex-col gap-20">
          <div className="inline-flex rounded-lg justify-center">
            <button
              type="button"
              className={clsx(
                `py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg 
                text-sm font-medium focus:z-10 border shadow-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none`,
                {
                  "bg-blue-700": isActiveCarrousel,
                  "border-blue-700": isActiveCarrousel,
                  "text-white": isActiveCarrousel,
                  "bg-white": !isActiveCarrousel,
                  "border-gray-200": !isActiveCarrousel,
                  "text-gray-800": !isActiveCarrousel,
                }
              )}
              onClick={() => setIsActiveCarrousel(true)}
            >
              Carrusel
            </button>
            <button
              type="button"
              className={clsx(
                `py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10
                border  shadow-sm  focus:outline-none
               disabled:opacity-50 disabled:pointer-events-none`,
                {
                  "bg-blue-700": !isActiveCarrousel,
                  "border-blue-700": !isActiveCarrousel,
                  "text-white": !isActiveCarrousel,
                  "bg-white": isActiveCarrousel,
                  "border-gray-200": isActiveCarrousel,
                  "text-gray-800": isActiveCarrousel,
                }
              )}
              onClick={() => setIsActiveCarrousel(false)}
            >
              Listado
            </button>
          </div>
          <div className="w-full">
            {isActiveCarrousel ? (
              <Carrousel proyects={proyects} />
            ) : (
              <Cards proyects={proyects} />
            )}
          </div>
        </div>
      )}
    </>
  );
};
