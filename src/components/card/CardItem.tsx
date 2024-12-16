import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  description: string;
  image: string | StaticImageData;
}

export const CardItem = ({ description, image, name }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[720px] mx-auto">
        <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <Image
              src={image}
              className="object-contain"
              alt="ui/ux review check"
            />
          </div>
          <div className="p-6">
            <h2 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {name}
            </h2>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              {description}
            </p>
          </div>
          {/* Agregar Boton */}
          <div className="flex p-6 justify-center">
            <button
              type="button"
              className="w-full py-3 px-4 items-center gap-x-2 text-sm  text-white font-medium rounded-lg border border-transparent bg-blue-700 text-blue-800  disabled:opacity-50 disabled:pointer-events-none"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
