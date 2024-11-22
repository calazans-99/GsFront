interface CardProjetoProps {
    titulo: string;
    descricao: string;
    onDetalhes: () => void;
  }
  
  export default function CardProjeto({ titulo, descricao, onDetalhes }: CardProjetoProps) {
    return (
      <div className="border rounded p-4 shadow-md bg-white">
        <h2 className="text-xl font-bold">{titulo}</h2>
        <p className="text-gray-600">{descricao}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
          onClick={onDetalhes}
        >
          Ver Detalhes
        </button>
      </div>
    );
  }
  