"use client";

import { useEffect, useState } from "react";

// Definição do tipo Usuário
type Usuario = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
};

export default function DetalhesUsuario({ params }: { params: { id: string } }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    async function fetchUsuario() {
      try {
        const res = await fetch(`/api/usuarios?id=${params.id}`);
        if (!res.ok) throw new Error("Erro ao buscar dados do usuário.");
        const data = await res.json();
        setUsuario(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsuario();
  }, [params.id]);

  if (!usuario) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Detalhes do Usuário #{params.id}
      </h1>
      <section className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Nome:</span> {usuario.nome}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Email:</span> {usuario.email}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Telefone:</span> {usuario.telefone}
          </p>
        </div>
      </section>
    </main>
  );
}
