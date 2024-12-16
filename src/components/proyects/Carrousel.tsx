"use client";

import Image, { StaticImageData } from "next/image";

// import required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";

interface Proyect {
  name: string;
  description: string;
  isActive: boolean;
  image: string | StaticImageData;
}

interface Props {
  proyects: Proyect[];
}

export const Carrousel = ({ proyects }: Props) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper rounded-lg shadow-lg fade-in"
    >
      {proyects.map((proyect) => (
        <SwiperSlide key={proyect.name}>
          <div className="flex flex-col gap-5">
            <Image src={proyect.image} alt={proyect.name} />
            <div className="flex flex-col px-5 justify-around h-full">
              <h2 className="text-black">{proyect.name}</h2>
              <div>
                <button
                  type="button"
                  className="justify-center bg-blue-700
                      w-full py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg 
                      text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                >
                  Ver Mas...
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
