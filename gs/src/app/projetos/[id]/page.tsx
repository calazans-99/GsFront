"use client";

import { useEffect, useState } from "react";

// Definição do tipo Projeto
type Projeto = {
  id: string;
  nome: string;
  tipo: string;
  capacidade: number;
  descricao: string;
};

export default function DetalhesProjeto({ params }: { params: { id: string } }) {
  const [projeto, setProjeto] = useState<Projeto | null>(null);

  useEffect(() => {
    async function fetchProjeto() {
      try {
        const res = await fetch(`/api/projetos?id=${params.id}`);
        if (!res.ok) throw new Error("Erro ao buscar dados do projeto.");
        const data: Projeto = await res.json();
        setProjeto(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProjeto();
  }, [params.id]);

  if (!projeto) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Detalhes do Projeto #{params.id}
      </h1>
      <section className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Nome:</span> {projeto.nome}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Tipo:</span> {projeto.tipo}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Capacidade:</span> {projeto.capacidade} kW
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Descrição:</span> {projeto.descricao}
          </p>
        </div>
      </section>
    </main>
  );
}
