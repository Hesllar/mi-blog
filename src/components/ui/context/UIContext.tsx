import { createContext } from "react";
import { UIContextProps } from "../interfaces";

export const UIContext = createContext<UIContextProps>({} as UIContextProps);
