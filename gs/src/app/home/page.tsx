export default function Home() {
  return (
    <main className="p-8">
      {/* Cabeçalho da Página */}
      <div className="bg-blue-500 text-white text-center py-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">Bem-vindo ao Flex Energy</h1>
        <p className="mt-4 text-lg">
          A plataforma inteligente para monitorar, planejar e reduzir seu consumo de energia.
        </p>
      </div>

      {/* Seções Informativas */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">O que oferecemos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-500">Monitoramento</h3>
            <p className="mt-2 text-gray-600">
              Monitore em tempo real o consumo de energia e identifique áreas para melhorias.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-500">Soluções Sustentáveis</h3>
            <p className="mt-2 text-gray-600">
              Simule projetos de energia renovável, como painéis solares e turbinas eólicas.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-500">Relatórios Detalhados</h3>
            <p className="mt-2 text-gray-600">
              Receba relatórios detalhados para tomar decisões baseadas em dados reais.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Chamadas para Ação */}
      <section className="mt-12 bg-gray-100 py-8 px-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-gray-800">Comece Agora</h2>
        <p className="mt-4 text-gray-600">
          Explore nossas funcionalidades e descubra como o Flex Energy pode transformar sua gestão de energia.
        </p>
        <div className="mt-6">
          <a
            href="/projetos"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            Ver Projetos
          </a>
          <a
            href="/simulacoes"
            className="bg-green-500 text-white py-2 px-6 ml-4 rounded-lg hover:bg-green-600"
          >
            Criar Simulação
          </a>
        </div>
      </section>
    </main>
  );
}
