
export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export interface navbarItem {
  path: string;
  label: string;
  underConstruction: boolean
};

export interface SideMenuProps {
  navbarItems: navbarItem[];
}
