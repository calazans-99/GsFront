"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Definição do tipo Simulação
type Simulacao = {
  id: string;
  tipoEnergia: string;
  capacidade: number;
  localizacao: string;
};

export default function Simulacoes() {
  const [simulacoes, setSimulacoes] = useState<Simulacao[]>([]);

  useEffect(() => {
    async function fetchSimulacoes() {
      try {
        const res = await fetch("/api/simulacoes");
        if (!res.ok) throw new Error("Erro ao buscar simulações.");
        const data = await res.json();
        setSimulacoes(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSimulacoes();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Simulações
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Visualize e gerencie suas simulações de energia sustentável.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {simulacoes.map((simulacao) => (
          <div
            key={simulacao.id}
            className="border border-gray-300 rounded shadow-md p-4"
          >
            <h2 className="text-2xl font-semibold text-blue-500">
              {simulacao.tipoEnergia}
            </h2>
            <p className="text-gray-600">
              <strong>Capacidade:</strong> {simulacao.capacidade} kW
            </p>
            <p className="text-gray-600">
              <strong>Localização:</strong> {simulacao.localizacao}
            </p>
            <Link
              href={`/simulacoes/${simulacao.id}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
