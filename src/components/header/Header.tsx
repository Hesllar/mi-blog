"use client";

import { UIProvider } from "../ui/context/UIProvider";
import { Nav } from "../nav/Nav";

export const Header = () => {
  return (
    <UIProvider>
      <header className="flex justify-center">
        <Nav />
      </header>
    </UIProvider>
  );
};
