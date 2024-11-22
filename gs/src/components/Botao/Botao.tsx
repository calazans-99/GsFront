interface BotaoProps {
  children: React.ReactNode;
  tipo: "button" | "submit" | "reset";
  className?: string;
}

export default function Botao({ children, tipo, className }: BotaoProps) {
  return (
    <button
      type={tipo}
      className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}
