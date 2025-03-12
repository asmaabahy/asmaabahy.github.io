import { ReactNode } from "react";
import SmallHeading from "./SmallHeading";

export default function AboutMeFrame({ children, label }: { children: ReactNode, label: string }) {
  return (
    <div
      id={label.replace(/\s+/g, "").toLowerCase()}
      className="flex flex-col items-start gap-7 w-full"
    >
      <SmallHeading>{label}</SmallHeading>
      {children}
    </div>
  );
}
