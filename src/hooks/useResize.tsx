"use client"

import { useEffect, useState } from "react";

export const useResize = () => {

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Agrega el event listener para detectar cambios de tamaño
    window.addEventListener('resize', handleResize);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleInitSize = () => {
      setWidth(window.innerWidth);
    };

    handleInitSize()
  }, []);

  return {
    width
  }
}
