"use client";

import clsx from "clsx";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Toast } from "../ui/toast/Toast";
import { UIContext } from "../ui/context/UIContext";
import { UIProvider } from "../ui/context/UIProvider";

const Contact = () => {
  const { isOpenToast, onToggleToast } = useContext(UIContext);

  const [initialForm, setInitialForm] = useState(true);

  const [errorSubmited, setErrorSubmited] = useState(false);

  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const [errorForm, setErrorForm] = useState({
    errorEmail: false,
    errorMessage: false,
  });

  const validatorEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  };

  const validatorMessage = (message: string) => {
    return message.length >= 10;
  };

  const resetForm = () => {
    setForm({
      email: "",
      message: "",
    });

    setErrorForm({
      errorEmail: false,
      errorMessage: false,
    });
  };
  const handleOnChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInitialForm(false);
    setForm({
      ...form,
      [target.name]: target.value,
    });

    if (target.name === "email") {
      setErrorForm({
        ...errorForm,
        errorEmail: !validatorEmail(target.value),
      });
    }

    if (target.name === "message") {
      setErrorForm({
        ...errorForm,
        errorMessage: !validatorMessage(target.value),
      });
    }
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInitialForm(false);
    try {
      if (!validatorEmail(form.email)) {
        setErrorForm({
          ...errorForm,
          errorEmail: true,
        });

        return;
      }

      if (!validatorMessage(form.message)) {
        setErrorForm({
          ...errorForm,
          errorMessage: true,
        });

        return;
      }
      resetForm();
      setErrorSubmited(false);
      onToggleToast();
    } catch (error) {
      setErrorSubmited(true);
      onToggleToast();
    }
  };

  useEffect(() => {
    let timeOut = undefined;
    if (isOpenToast) {
      timeOut = setTimeout(() => {
        onToggleToast();
      }, 2000);
    }
    return () => clearTimeout(timeOut);
  }, [isOpenToast]);

  return (
    <div className="flex flex-col justify-center items-center w-full p-12 md:p-0 md:w-[500px] gap-8">
      {isOpenToast && (
        <Toast
          message="Correo enviado correctamente"
          className="w-full"
          type={!errorSubmited ? "success" : "error"}
        />
      )}

      <form
        onSubmit={handleOnSubmit}
        className="flex justify-center items-center w-full"
      >
        <div className="flex flex-col gap-8 w-full p-8 border border-black sm:shadow-lg rounded-md">
          <div className="flex flex-col w-full justify-between gap-4">
            <label htmlFor="" className="text-black font-semibold">
              Correo Electronico:
            </label>
            <input
              type="email"
              className={clsx("border rounded-md h-[40px] p-2 text-black", {
                "border-black": initialForm || !errorForm.errorEmail,
                "border-red-500": !initialForm && errorForm.errorEmail,
              })}
              placeholder=" ejemplo@gmail.com"
              onChange={handleOnChange}
              name="email"
              value={form.email}
            />
            {!initialForm && errorForm.errorEmail && (
              <span className="text-red-500 font-semibold">
                Ingrese un correo válido
              </span>
            )}
          </div>
          <div className="flex flex-col justify-between w-full gap-4">
            <label htmlFor="" className="text-black font-semibold">
              Mensaje:
            </label>
            <textarea
              onChange={handleOnChange}
              className={clsx("border rounded-md h-[400px] p-2 text-black", {
                "border-black": initialForm || !errorForm.errorMessage,
                "border-red-500": !initialForm && errorForm.errorMessage,
              })}
              name="message"
              value={form.message}
            ></textarea>
            {!initialForm && errorForm.errorMessage && (
              <span className="text-red-500 font-semibold">
                El mensaje debe tener al menos 10 caracteres
              </span>
            )}
          </div>
          <div className="flex justify-center w-full">
            <button className="bg-black text-white rounded-md px-4 py-2 w-[250px]">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export const ContactProvider = () => {
  return (
    <UIProvider>
      <Contact />
    </UIProvider>
  );
};
