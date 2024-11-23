interface Usuario {
    id: number;
    nome: string;
    email: string;
    telefone?: string;
  }
  
  interface TabelaUsuariosProps {
    usuarios: Usuario[];
    onEditar: (id: number) => void;
    onExcluir: (id: number) => void;
  }
  
  export default function TabelaUsuarios({
    usuarios,
    onEditar,
    onExcluir,
  }: TabelaUsuariosProps) {
    return (
      <table className="table-auto w-full border-collapse border border-gray-300 shadow-md bg-white">
        <thead>
          <tr>
            <th className="border p-2 text-left">ID</th>
            <th className="border p-2 text-left">Nome</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Telefone</th>
            <th className="border p-2 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id} className="hover:bg-gray-100">
              <td className="border p-2">{usuario.id}</td>
              <td className="border p-2">{usuario.nome}</td>
              <td className="border p-2">{usuario.email}</td>
              <td className="border p-2">{usuario.telefone || "N/A"}</td>
              <td className="border p-2">
                <button
                  className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 mr-2"
                  onClick={() => onEditar(usuario.id)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  onClick={() => onExcluir(usuario.id)}
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
  