export default function DetalhesProjeto({ params }: { params: { id: string } }) {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Detalhes do Projeto #{params.id}
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Informações detalhadas sobre o projeto.
      </p>

      {/* Placeholder para os detalhes */}
      <div className="text-center text-gray-500 italic">
        Dados do projeto ainda não disponíveis.
      </div>
    </main>
  );
}
