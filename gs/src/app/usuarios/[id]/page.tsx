export default function DetalhesUsuario({ params }: { params: { id: string } }) {
  return (
    <main className="p-8">
      {/* Título */}
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Detalhes do Usuário #{params.id}
      </h1>

      {/* Descrição */}
      <p className="text-lg text-gray-700 text-center mb-10">
        Visualize as informações detalhadas do usuário.
      </p>

      {/* Placeholder para os dados do usuário */}
      <section className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Nome:</span> Usuário Exemplo
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">E-mail:</span> usuario@exemplo.com
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Telefone:</span> (11) 1234-5678
          </p>
        </div>
      </section>

      {/* Botão de Voltar */}
      <div className="flex justify-center mt-8">
        <a
          href="/usuarios"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Voltar para Usuários
        </a>
      </div>
    </main>
  );
}