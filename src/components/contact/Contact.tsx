"use client";

export const Contact = () => {
  return (
    <div className="flex justify-center items-center w-[500px] h-[800px]">
      <div className="flex flex-col gap-8 shadow-lg w-full p-8 sm:border sm:border-black  rounded-md">
        <div className="flex flex-col w-full justify-between gap-4">
          <label htmlFor="" className="text-black font-semibold">
            Correo Electronico:
          </label>
          <input
            type="email"
            className="border border-black rounded-md h-[40px]"
            placeholder=" ejemplo@gmail.com"
          />
        </div>
        <div className="flex flex-col justify-between w-full gap-4">
          <label htmlFor="" className="text-black font-semibold">
            Mensaje:
          </label>
          <textarea className="border border-black rounded-md h-[400px]"></textarea>
        </div>
        <div className="flex justify-center w-full">
          <button className="bg-black text-white rounded-md px-4 py-2 w-[250px]">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
