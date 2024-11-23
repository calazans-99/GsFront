interface CardUsuarioProps {
    nome: string;
    email: string;
    onDetalhes: () => void;
  }
  
  export default function CardUsuario({ nome, email, onDetalhes }: CardUsuarioProps) {
    return (
      <div className="border rounded p-4 shadow-md bg-white">
        <h2 className="text-xl font-bold">{nome}</h2>
        <p className="text-gray-600">{email}</p>
        <button
          className="bg-green-500 text-white py-2 px-4 mt-4 rounded"
          onClick={onDetalhes}
        >
          Ver Detalhes
        </button>
      </div>
    );
  }
  