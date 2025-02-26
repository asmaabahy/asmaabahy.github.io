import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

// constants

export interface NavbarSection {
  id: string;
  label: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  companyWebsite: string;
  date: string;
  technologies: string[];
  description: string[];
}

// Components Props

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export interface ExperienceCardProps {
  experience: Experience;
}

export interface TagProps {
  skill: string;
}

export interface SectionTitleProps {
  label: string;
  className: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
  className: string;
}

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  name: string;
  className: string;
}
