interface Relatorio {
    id: number;
    titulo: string;
    tipo: string;
    dataGeracao: string;
  }
  
  interface TabelaRelatoriosProps {
    relatorios: Relatorio[];
    onVisualizar: (id: number) => void;
    onExcluir: (id: number) => void;
  }
  
  export default function TabelaRelatorios({
    relatorios,
    onVisualizar,
    onExcluir,
  }: TabelaRelatoriosProps) {
    return (
      <table className="table-auto w-full border-collapse border border-gray-300 shadow-md bg-white">
        <thead>
          <tr>
            <th className="border p-2 text-left">ID</th>
            <th className="border p-2 text-left">Título</th>
            <th className="border p-2 text-left">Tipo</th>
            <th className="border p-2 text-left">Data de Geração</th>
            <th className="border p-2 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {relatorios.map((relatorio) => (
            <tr key={relatorio.id} className="hover:bg-gray-100">
              <td className="border p-2">{relatorio.id}</td>
              <td className="border p-2">{relatorio.titulo}</td>
              <td className="border p-2">{relatorio.tipo}</td>
              <td className="border p-2">{relatorio.dataGeracao}</td>
              <td className="border p-2">
                <button
                  className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 mr-2"
                  onClick={() => onVisualizar(relatorio.id)}
                >
                  Visualizar
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  onClick={() => onExcluir(relatorio.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  