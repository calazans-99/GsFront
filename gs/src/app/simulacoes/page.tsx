export default function Simulacoes() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Simulações
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Visualize as simulações realizadas ou crie uma nova simulação.
      </p>

      {/* Botão para criar uma nova simulação */}
      <div className="flex justify-center mb-10">
        <a
          href="/simulacoes/nova"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Nova Simulação
        </a>
      </div>

      {/* Placeholder para lista de simulações */}
      <section className="text-center text-gray-500 italic">
        Nenhuma simulação disponível no momento.
      </section>
    </main>
  );
}
