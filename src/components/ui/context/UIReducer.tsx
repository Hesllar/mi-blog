type TodoAction = { type: "onToggleMenu" | "onToggleToast" };

interface Props {
  isOpenMenu: boolean;
  sectionRef: React.RefObject<HTMLElement>;
  isOpenToast: boolean;
}

export const UIReducer = (state: Props, action: TodoAction) => {
  switch (action.type) {
    case "onToggleMenu":
      return {
        ...state,
        isOpenMenu: !state.isOpenMenu,
      };
    case "onToggleToast":
      return {
        ...state,
        isOpenToast: !state.isOpenToast,
      };
    default:
      return state;
  }
};
