export default function Usuarios() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Usuários
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Gerencie os usuários cadastrados no sistema.
      </p>

      {/* Botão para adicionar novo usuário */}
      <div className="flex justify-center mb-10">
        <a
          href="/usuarios/novo"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Adicionar Novo Usuário
        </a>
      </div>

      {/* Placeholder para a lista de usuários */}
      <section className="text-center text-gray-500 italic">
        Nenhum usuário encontrado.
      </section>
    </main>
  );
}
