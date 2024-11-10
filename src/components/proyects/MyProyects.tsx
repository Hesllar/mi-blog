'use client'

import { StaticImageData } from 'next/image'
import { ActiveProyect } from './ActiveProyect'
import { ListProyects } from './ListProyects'
import { useEffect, useState } from 'react'

interface Proyect {
  name: string,
  description: string,
  isActive: boolean,
  image: string | StaticImageData,
}

interface Props {
  proyects: Proyect[]
}


export const MyProyects = ({ proyects }: Props) => {

  const [proyectActive, setProyectActive] = useState<null | Proyect>(null);

  const checkProyectActive = (activeProyect: Proyect | undefined) => {

    if (activeProyect) {
      setProyectActive(activeProyect)
      return;
    }

    setProyectActive(null)
  }

  const setActiveProyecto = (name: string) => {

    const activeProyect = proyects.find(proyect => proyect.name === name)

    checkProyectActive(activeProyect)
  }

  useEffect(() => {
    const activeProyect = proyects.find(proyect => proyect.isActive)
    checkProyectActive(activeProyect)
  }, [])

  return (
    <>
      <ListProyects proyects={proyects} setActiveProyecto={setActiveProyecto} />
      {proyectActive && <ActiveProyect {...proyectActive} />}
    </>
  )
}
