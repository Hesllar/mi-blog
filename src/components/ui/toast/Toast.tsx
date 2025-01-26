"use client";

import { useContext } from "react";
import { UIContext } from "../context/UIContext";
import clsx from "clsx";

interface Props {
  message: string;
  className?: string;
  type?: "success" | "error";
}

export const Toast = ({ message, className, type = "success" }: Props) => {
  const { onToggleToast } = useContext(UIContext);

  return (
    <div
      className={clsx(
        className,
        type === "success"
          ? "bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg"
          : "bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg"
      )}
      role="alert"
      tabIndex={-1}
      aria-labelledby={
        type === "success"
          ? "hs-toast-soft-color-teal-label"
          : "hs-toast-soft-color-red-label"
      }
    >
      <div
        id={
          type === "success"
            ? "hs-toast-soft-color-teal-label"
            : "hs-toast-soft-color-red-label"
        }
        className="flex p-4"
      >
        <span className="text-lg">{message}</span>
        <div className="ms-auto">
          <button
            type="button"
            className={clsx(
              "inline-flex shrink-0 justify-center items-center size-5 rounded-lg opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100",
              type === "success"
                ? "text-teal-800 dark:text-dark-200"
                : "text-red-800 dark:text-red-200"
            )}
            aria-label="Close"
            onClick={onToggleToast}
          >
            <span className="sr-only">Close</span>
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
