"use client";

import { useEffect, useState } from "react";

// Definição do tipo Projeto
type Projeto = {
  id: number;
  nome: string;
  descricao: string;
  tipo: string;
  capacidade: number;
  localizacao: string;
  dataInicio: string;
  dataTermino: string | null;
  status: string;
  custo: number;
  retornoInvestimento: string;
};

export default function Projetos() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    async function fetchProjetos() {
      try {
        const res = await fetch("/api/projetos");
        if (!res.ok) throw new Error("Erro ao buscar projetos.");
        const data = await res.json();
        setProjetos(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProjetos();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Projetos
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Visualize e gerencie seus projetos de energia sustentável.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="border border-gray-300 rounded shadow-md p-4"
          >
            <h2 className="text-2xl font-semibold text-blue-500">{projeto.nome}</h2>
            <p className="text-gray-600">
              <strong>Descrição:</strong> {projeto.descricao}
            </p>
            <p className="text-gray-600">
              <strong>Tipo:</strong> {projeto.tipo}
            </p>
            <p className="text-gray-600">
              <strong>Capacidade:</strong> {projeto.capacidade} kW
            </p>
            <p className="text-gray-600">
              <strong>Localização:</strong> {projeto.localizacao}
            </p>
            <p className="text-gray-600">
              <strong>Data de Início:</strong> {projeto.dataInicio}
            </p>
            <p className="text-gray-600">
              <strong>Data de Término:</strong> {projeto.dataTermino || "Em andamento"}
            </p>
            <p className="text-gray-600">
              <strong>Status:</strong> {projeto.status}
            </p>
            <p className="text-gray-600">
              <strong>Custo:</strong> R$ {projeto.custo.toFixed(2)}
            </p>
            <p className="text-gray-600">
              <strong>Retorno sobre Investimento:</strong> {projeto.retornoInvestimento}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
