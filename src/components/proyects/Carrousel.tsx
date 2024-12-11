"use client";

import Image, { StaticImageData } from "next/image"

interface Proyect {
  name: string,
  description: string,
  isActive: boolean,
  image: string | StaticImageData,
}

interface Props {
  proyects: Proyect[]
}

export const Carrousel = ({ proyects }: Props) => {
  return (
    <div data-hs-carousel='{
    "loadingclassNamees": "opacity-0",
    "dotsItemclassNamees": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
    "isAutoPlay": true
  }' className="relative w-full h-[450px]">
      <div className="hs-carousel relative overflow-hidden w-full h-full bg-white rounded-lg">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          {
            proyects.map(proyect => (
              <div className="flex flex-col gap-5 bg-[#8ab492]" key={proyect.name} >
                <div key={proyect.name} className="hs-carousel-slide w-full">
                  <Image src={proyect.image} alt="" className="h-[318px]" />
                </div>
                <div className="flex flex-col gap-5 px-5">
                  <div>
                    <h2>{proyect.name}</h2>
                  </div>
                  <div>
                    <button type="button" className="justify-center bg-[#818181]
                      w-full py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg 
                      text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Saber Mas...
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
        <span className="text-2xl" aria-hidden="true">
          <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
    </div>
  )
}
