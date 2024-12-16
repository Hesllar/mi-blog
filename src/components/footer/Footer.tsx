import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="relative bg-gray-500 pt-8 pb-6 bor -mx-24 px-24 sm:px-10">
      <div className=" mx-auto">
        <div className=" w-full px-4 text-center">
          <h3 className="text-3xl fonat-semibold text-blueGray-700">
            Mis redes sociales
          </h3>
          <div className="flex justify-center gap-6 mt-6 lg:mb-0 mb-6">
            <a
              href="https://www.linkedin.com/in/hesllar-linzmayer-8665a31a0"
              target="_blank"
              className="shadow-lg align-center outline-none cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <IoLogoLinkedin size={40} />
            </a>
            <a
              href="https://wa.me/948166780"
              target="_blank"
              className="shadow-lg items-center justify-center align-center outline-none cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <IoLogoWhatsapp size={40} />
            </a>
            <a
              href="https://web.facebook.com/hesllarhenry/"
              target="_blank"
              className="shadow-lg items-center justify-center align-center outline-none cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <IoLogoFacebook size={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
