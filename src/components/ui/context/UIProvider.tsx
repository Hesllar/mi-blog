import { useReducer } from "react";
import { UIContext } from "./UIContext";
import { UIReducer } from "./UIReducer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const init = {
  isOpenMenu: false,
  sectionRef: { current: null },
  isOpenToast: false,
};

export const UIProvider = ({ children }: Props) => {
  const [UIState, dispatch] = useReducer(UIReducer, init);

  const onToggleMenu = () => {
    dispatch({ type: "onToggleMenu" });
  };

  const onToggleToast = () => {
    dispatch({ type: "onToggleToast" });
  };

  return (
    <UIContext.Provider value={{ ...UIState, onToggleMenu, onToggleToast }}>
      {children}
    </UIContext.Provider>
  );
};
