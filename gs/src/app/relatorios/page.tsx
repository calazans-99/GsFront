export default function Relatorios() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
        Relatórios
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Escolha um tipo de relatório para visualizar os dados.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="/relatorios/consumo"
          className="bg-blue-500 text-white text-center py-4 px-6 rounded shadow-md hover:bg-blue-600"
        >
          Relatório de Consumo
        </a>
        <a
          href="/relatorios/co2"
          className="bg-green-500 text-white text-center py-4 px-6 rounded shadow-md hover:bg-green-600"
        >
          Relatório de CO₂
        </a>
        <a
          href="/relatorios/financeiro"
          className="bg-yellow-500 text-white text-center py-4 px-6 rounded shadow-md hover:bg-yellow-600"
        >
          Relatório Financeiro
        </a>
      </div>
    </main>
  );
}
