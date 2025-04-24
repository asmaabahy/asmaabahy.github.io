
export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export interface navbarItem {
  path: string;
  label: string;
};

export interface SideMenuProps {
  navbarItems: navbarItem[];
  onHideMenu: () => void;
}
