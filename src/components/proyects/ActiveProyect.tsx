import Image, { StaticImageData } from "next/image"

interface Props {
  name: string,
  description: string,
  isActive: boolean,
  image: string | StaticImageData,
}

export const ActiveProyect = ({ name, description, image }: Props) => {

  return (
    <div className=" flex h-full min-[1720px]:w-3/4 max-[1720px]:w-auto justify-around">
      <div className="border-r border-dashed" />
      <div key={name} className="flex flex-col gap-8">
        <div className="w-[500px] h-[280px]">
          <Image src={image} alt="" className="shadow-lg rounded-lg w-full h-full" />
        </div>
        <span>{name}</span>
        <p> {description}</p>
      </div>
      <div className="border-r border-dashed" />
    </div>
  )
}
