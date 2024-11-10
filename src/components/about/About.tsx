import Image from 'next/image';
import image from '../../../public/img/WhatsApp Image 2021-07-10 at 2.54.23 PM.jpg'

export const About = () => {
  return (
    <div className="flex flex-col h-full">
      <div>
        <Image src={image} alt='' width={200} height={200} className='object-contain rounded-full' />
      </div>
      <div className='border mt-2' />
      <div className='mt-5 w-[200px]'>
        <p className='text-xl font-bold mb-4'>¡Hola!</p>
        <span>Soy Hesllar Linzmayer, y bienvenidos a mi blog. Aquí podrás conocer mis proyectos, los cuales he desarrollado con dedicación y pasión.</span>
      </div>
    </div>
  )
}
