import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="relative bg-gray-500 pt-8 pb-6 px-0 md:px-10 bottom-0">
      <div className="flex flex-col md:flex-row w-full px-0 md:px-4 i items-center md:justify-around gap-2 md:gap-0">
        <div className="flex flex-col ">
          <h3 className="text-3xl fonat-semibold text-blueGray-700">
            Contacto
          </h3>
          <span>Email Contacto:</span>
          <a
            href="mailto:hesllar.linzmayer@gmail.com"
            className="cursor-pointer text-[#EDEDED]  hover:text-blue-400"
          >
            <strong>hesllar.linzmayer@gmail.com</strong>
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl fonat-semibold text-blueGray-700">
            Redes Sociales
          </h3>
          <div className="flex justify-between">
            <a
              href="https://www.linkedin.com/in/hesllar-linzmayer-8665a31a0"
              target="_blank"
              className="shadow-lg align-center outline-none cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <IoLogoLinkedin size={35} />
            </a>
            <a
              href="#"
              target="_blank"
              className="shadow-lg items-center justify-center align-center outline-none cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <IoLogoWhatsapp size={35} />
            </a>
            <a
              href="https://web.facebook.com/hesllarhenry/"
              target="_blank"
              className="shadow-lg items-center justify-center align-center outline-none cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <IoLogoFacebook size={35} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
