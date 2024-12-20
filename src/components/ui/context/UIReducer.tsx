type TodoAction = { type: "onToggleMenu" };

interface Props {
  isOpenMenu: boolean;
  sectionRef: React.RefObject<HTMLElement>;
}

export const UIReducer = (state: Props, action: TodoAction) => {
  switch (action.type) {
    case "onToggleMenu":
      return {
        ...state,
        isOpenMenu: !state.isOpenMenu,
      };

    default:
      return state;
  }
};
