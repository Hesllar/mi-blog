import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="relative bg-gray-500 pt-8 pb-6 px-24 sm:px-10 bottom-0">
      <div className="flex flex-col w-full px-4 items-center">
        <h3 className="text-3xl fonat-semibold text-blueGray-700">Contacto</h3>
        <span>Email:</span>
        <a
          href="mailto:hesllar.linzmayer@gmail.com"
          className="cursor-pointer text-[#EDEDED]  hover:text-blue-400"
        >
          <strong>hesllar.linzmayer@gmail.com</strong>
        </a>
        <div className="flex gap-6 mt-2 lg:mb-0 mb-6">
          <a
            href="https://www.linkedin.com/in/hesllar-linzmayer-8665a31a0"
            target="_blank"
            className="shadow-lg align-center outline-none cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <IoLogoLinkedin size={25} />
          </a>
          <a
            href="#"
            target="_blank"
            className="shadow-lg items-center justify-center align-center outline-none cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <IoLogoWhatsapp size={25} />
          </a>
          <a
            href="https://web.facebook.com/hesllarhenry/"
            target="_blank"
            className="shadow-lg items-center justify-center align-center outline-none cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <IoLogoFacebook size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};
