export interface UIContextProps {
  isOpenMenu: boolean;
  onToggleMenu: () => void;
  sectionRef: React.RefObject<HTMLElement>;
}
