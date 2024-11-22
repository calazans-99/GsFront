import React from "react";

interface BotaoProps {
  children: React.ReactNode; 
  tipo: "button" | "submit" | "reset"; 
  onClick?: () => void; 
  className?: string; 
}

export default function Botao({ children, tipo, onClick, className }: BotaoProps) {
  return (
    <button
      type={tipo}
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}
