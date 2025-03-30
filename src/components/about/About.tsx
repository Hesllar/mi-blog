"use client";

import Image from "next/image";
import { image, hiAnimation } from "../../../public/index";
import { useState, useRef } from "react";
import clsx from "clsx";
import { MoreAbout } from "./MoreAbout";

export const About = () => {
  const sectionMoreRef = useRef<HTMLDivElement>(null);

  const [showMore, setShowMore] = useState(false);

  const [isElementFocused, setIsElementFocused] = useState(false);

  const handleOnMouseEnter = () => setIsElementFocused(true);

  const handleOnMouseLeave = () => setIsElementFocused(false);

  const scrollToSectionMore = () => {
    if (!sectionMoreRef.current) return;
    sectionMoreRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleOnClick = () => {
    if (!showMore) {
      scrollToSectionMore();
    }
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="flex flex-col h-1/4 w-full gap-8 md:flex-row">
        <div className="w-full flex justify-center md:w-auto">
          <Image
            src={image}
            alt=""
            width={200}
            height={200}
            className="rounded-lg hover:skew-y-3"
          />
        </div>
        <div
          className="
        shadow-2xl
        bg-gradient-to-r from-purple-500 to-pink-500
        hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500
        p-10
        rounded-lg
        w-full 
        max-[1401px]:content-center
        max-[1401px]:mt-0 max-[1401px]:shadow-2xl 
        max-[600px]:mt-10 max-[600px]:p-8
        dark:bg-gradient-ocean
        dark:hover:bg-gradient-electric"
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <p className="text-3xl font-bold text-white">¡Hola!</p>
              <Image
                src={hiAnimation}
                alt="Hola animado"
                width={50}
                height={50}
              />
            </div>
            <span className="font-semibold text-lg text-white">
              Soy Hesllar Linzmayer, y bienvenidos a mi blog. Aquí podrás
              conocer mis proyectos, los cuales he desarrollado con dedicación y
              pasión.
            </span>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleOnClick}
                className={clsx(
                  "w-full sm:w-1/2 xl:w-1/6 p-3 rounded-lg hover:shadow-2xl",
                  {
                    "bg-gradient-to-r from-purple-500 to-pink-500 dark:bg-gradient-ocean":
                      isElementFocused,
                    " bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-electric":
                      !isElementFocused,
                  }
                )}
              >
                <span className="font-semibold text-lg text-white">
                  Más sobre mi
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={sectionMoreRef} className={!showMore ? "py-0" : "py-4"} />
      {showMore && <MoreAbout />}
    </>
  );
};
