interface Projeto {
    id: number;
    nome: string;
    descricao: string;
  }
  
  interface TabelaProjetosProps {
    projetos: Projeto[];
  }
  
  export default function TabelaProjetos({ projetos }: TabelaProjetosProps) {
    return (
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nome</th>
            <th className="border p-2">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {projetos.map((projeto) => (
            <tr key={projeto.id}>
              <td className="border p-2">{projeto.id}</td>
              <td className="border p-2">{projeto.nome}</td>
              <td className="border p-2">{projeto.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  