import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    type?: string;
  };

function Input({ type, ...props }: InputProps) {
  if (type === "textarea") {
    return (
      <textarea
        {...props}
        className="w-80 md:w-96 bg-foreground/10 rounded-lg px-3 py-3 h-[7rem]  resize-none"
      />
    );
  } else {
    return (
      <input
        type={type}
        {...props}
        className="w-80 md:w-96 bg-foreground/10  rounded-lg px-3 py-3"
      />
    );
  }
}

export default Input;
