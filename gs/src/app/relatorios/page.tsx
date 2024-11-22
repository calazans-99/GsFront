export default function Relatorios() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Relatórios
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Visualize relatórios detalhados sobre consumo de energia, emissões de CO₂
        e desempenho financeiro.
      </p>

      <section className="flex flex-wrap justify-center gap-6">
        {/* Relatório de Consumo */}
        <a
          href="/relatorios/consumo"
          className="bg-blue-500 text-white py-4 px-6 rounded shadow-md hover:bg-blue-600"
        >
          Relatório de Consumo
        </a>

        {/* Relatório de CO₂ */}
        <a
          href="/relatorios/co2"
          className="bg-green-500 text-white py-4 px-6 rounded shadow-md hover:bg-green-600"
        >
          Relatório de CO₂
        </a>

        {/* Relatório Financeiro */}
        <a
          href="/relatorios/financeiro"
          className="bg-yellow-500 text-white py-4 px-6 rounded shadow-md hover:bg-yellow-600"
        >
          Relatório Financeiro
        </a>
      </section>
    </main>
  );
}
