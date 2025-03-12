import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

// constants

export interface Experience {
  id: number;
  position: string;
  company: string;
  companyWebsite: string;
  date: string;
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

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  id: string;
  name: string;
  className?: string;
}

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  id: string;
  name: string;
  className?: string;
}

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  className?: string;
  onClose: () => void;
}

export interface SmallHeadingProps {
  children: ReactNode;
}

// State

export interface ContactFormStatus {
  submitted: boolean;
  submitting: boolean;
  error: unknown;
}
