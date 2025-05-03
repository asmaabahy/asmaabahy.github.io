import { motion } from "motion/react";

interface SwitchTabProps {
  currentTab: string;
  tabs: { id: string; path: string; label: string }[];
  onSwitch: (id: string) => void;
}

function SwitchTab({ currentTab, tabs, onSwitch }: SwitchTabProps) {
  return (
    <ul className="flex flex-row justify-around w-[70rem] bg-neutral-50/10 rounded-full px-1 py-1">
      {tabs.map((item) => (
        <motion.li
          key={item.id}
          className="relative flex-1/3 py-2 cursor-pointer "
          onClick={() => onSwitch(item.id)}
        >
          {currentTab === item.id && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-neutral-600"
              style={{ borderRadius: "9999px" }}
            />
          )}
          <span className="relative text-white z-50">{item.label}</span>
        </motion.li>
      ))}
    </ul>
  );
}

export default SwitchTab;
