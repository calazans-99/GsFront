export default function Sobre() {
  return (
    <main className="p-8">
      {/* Título */}
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Sobre o Flex Energy
      </h1>

      {/* Descrição */}
      <p className="text-lg text-gray-700 text-center mb-10">
        O Flex Energy é uma solução inovadora que utiliza tecnologia para
        promover o uso eficiente de energia sustentável, ajudando empresas e
        residências a monitorar, planejar e reduzir seus impactos ambientais.
      </p>

      {/* Seção de Missão */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">
          Nossa Missão
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Nossa missão é facilitar o acesso a soluções de energia sustentável,
          promovendo uma transição energética que impacte positivamente o
          meio ambiente e traga benefícios financeiros aos nossos clientes.
        </p>
      </section>

      {/* Seção de Visão */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">
          Nossa Visão
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Acreditamos em um futuro onde cada residência e empresa possa gerar e
          utilizar sua própria energia de forma eficiente, com baixo impacto
          ambiental e alta acessibilidade tecnológica.
        </p>
      </section>

      {/* Seção de Valores */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">
          Nossos Valores
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 text-lg">
          <li>Inovação tecnológica constante</li>
          <li>Compromisso com a sustentabilidade</li>
          <li>Transparência em todas as interações</li>
          <li>Foco na experiência do cliente</li>
        </ul>
      </section>

      {/* Imagem ou Gráfico (Opcional) */}
      <section className="flex justify-center mt-10">
        <img
          src="/img/king.webp"
          alt="Energia Sustentável"
          className="rounded-lg shadow-md w-full max-w-4xl"
        />
      </section>
    </main>
  );
}
