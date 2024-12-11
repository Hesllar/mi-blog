"use client";

import { StaticImageData } from "next/image";
import { ActiveProyect } from "./ActiveProyect";
import { ListProyects } from "./ListProyects";
import { useEffect, useState } from "react";
import { useResize } from "@/hooks/useResize";
import { Carrousel } from "./Carrousel";

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
            proyects={proyects}
            setActiveProyecto={setActiveProyecto}
          />
          {proyectActive && <ActiveProyect {...proyectActive} />}
        </div>
      ) : (
        <div className="w-full mt-28 flex flex-col gap-5">
          <div className="inline-flex rounded-lg">
            <button
              type="button"
              className="
                py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg 
                text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 
                shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 
                disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white
              dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              Carrusel
            </button>
            <button
              type="button"
              className="
                py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10
                border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none
              focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900
              dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              Listado
            </button>
          </div>
          <div className="h-full w-full">
            <Carrousel proyects={proyects} />
          </div>
        </div>
      )}
    </>
  );
};
