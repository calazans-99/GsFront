export default function EditarProjeto({ params }: { params: { id: string } }) {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Editar Projeto #{params.id}
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Atualize as informações do projeto.
      </p>

      {/* Placeholder para o formulário de edição */}
      <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-4">
          <label
            htmlFor="nome"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nome do Projeto
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Digite o nome do projeto"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="descricao"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Descrição
          </label>
          <textarea
            id="descricao"
            name="descricao"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Atualize a descrição do projeto"
            rows={4}
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Salvar Alterações
          </button>
        </div>
      </form>
    </main>
  );
}
