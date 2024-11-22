export default function RelatorioConsumo() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Relatório de Consumo
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Dados detalhados sobre o consumo de energia ao longo do tempo.
      </p>

      {/* Placeholder para os dados */}
      <section className="text-center text-gray-500 italic">
        Nenhum dado disponível no momento.
      </section>
    </main>
  );
}
