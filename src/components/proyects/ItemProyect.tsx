"use client"

interface Props {
  name: string,
  setActiveProyecto: (name: string) => void
}


export const ItemProyect = ({ name, setActiveProyecto }: Props) => {

  const handleClick = () => {
    setActiveProyecto(name)
  }

  return (
    <li
      onClick={handleClick}
      key={name}
      className="mb-2 cursor-pointer"
    >
      {name}
    </li>
  )
}
