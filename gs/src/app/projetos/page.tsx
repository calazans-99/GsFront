export default function Projetos() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Projetos
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Visualize e gerencie seus projetos de energia sustentável.
      </p>

      {/* Placeholder para listagem */}
      <div className="text-center text-gray-500 italic">
        Nenhum projeto encontrado. Comece criando um novo projeto.
      </div>

      {/* Botão para Criar Novo Projeto */}
      <div className="flex justify-center mt-10">
        <a
          href="/projetos/novo"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Criar Novo Projeto
        </a>
      </div>
    </main>
  );
}
