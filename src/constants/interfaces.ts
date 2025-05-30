import { TargetAndTransition, VariantLabels } from "motion/react";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  whileHover?: TargetAndTransition | VariantLabels
  onClick?: (e: any) => void;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string; // e.g., 'text', 'email', 'password', etc.
}

export interface navbarItem {
  path: string;
  label: string;
}

export interface SideMenuProps {
  navbarItems: navbarItem[];
}

export interface Tabs {
  id: string;
  label: string;
  component?: React.JSX.Element;
}

export interface SwitchTabProps {
  currentTab: string;
  tabs: Tabs[];
  onSwitch: (id: string) => void;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  companyWebsite: string;
  date: string;
  description: string[];
}

export interface Skill {
  id: string;
  label: string;
  path: string;
}
