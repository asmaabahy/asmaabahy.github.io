import { motion } from "motion/react";

interface SwitchTabProps {
  currentTab: string;
  tabs: { id: string; label: string }[];
  onSwitch: (id: string) => void;
}

function SwitchTab({ currentTab, tabs, onSwitch }: SwitchTabProps) {
  return (
    <ul className="flex flex-row justify-around w-[70rem] bg-neutral-50/5 rounded-full px-1 py-1">
      {tabs.map((item) => (
        <motion.li
          key={item.id}
          className="relative flex-1/3 py-2 cursor-pointer "
          onClick={() => onSwitch(item.id)}
        >
          {currentTab === item.id && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-neutral-50 border-2"
              style={{ borderRadius: "9999px" }}
            />
          )}
          <motion.span className="relative z-50 mix-blend-exclusion">
            {item.label}
          </motion.span>
        </motion.li>
      ))}
    </ul>
  );
}

export default SwitchTab;
