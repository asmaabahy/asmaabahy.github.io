interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="px-6 py-3 text-xl tracking-widest font-semibold bg-gradient-to-r from-vibrant-pink to-vibrant-purple rounded-full transition cursor-pointer hover:scale-110"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
