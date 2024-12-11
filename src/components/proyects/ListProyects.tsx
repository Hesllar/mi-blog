import { StaticImageData } from "next/image"
import { ItemProyect } from "./ItemProyect"

interface Proyect {
  name: string,
  description: string,
  isActive: boolean,
  image: string | StaticImageData,
}

interface Props {
  proyects: Proyect[],
  setActiveProyecto: (name: string) => void
}

export const ListProyects = ({ proyects, setActiveProyecto }: Props) => {
  return (
    <div className="h-full max-[1401px]:w-1/3">
      <h1 className='mb-4'>Mis Proyectos</h1>
      <ul className='list-disc pl-4'>
        {
          proyects.map(proyect => (
            <ItemProyect key={proyect.name} {...proyect} setActiveProyecto={setActiveProyecto} />
          ))
        }
      </ul>
    </div>
  )
}
