"use client";

import { useEffect, useState } from "react";

// Tipo de Simulação
type Simulacao = {
  id: number;
  tipoEnergia: string;
  capacidade: number;
  localizacao: string;
  economia: number;
  prazo: number;
  dataCriacao: string;
  status: string;
  co2Evitado: number;
  custoInstalacao: number;
  roi: string;
  descricao: string;
};

export default function SimulacoesPage() {
  const [simulacoes, setSimulacoes] = useState<Simulacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSimulacoes() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/simulacoes");
        if (!res.ok) {
          throw new Error("Erro ao carregar simulações");
        }

        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error("Resposta inválida da API");
        }

        setSimulacoes(data);
      } finally {
        setLoading(false);
      }
    }

    fetchSimulacoes();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        {error}. Tente novamente mais tarde.
      </p>
    );
  }

  if (!simulacoes.length) {
    return (
      <p className="text-center text-gray-500">
        Nenhuma simulação encontrada.
      </p>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
        Simulações
      </h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Tipo</th>
            <th className="border border-gray-300 px-4 py-2">Capacidade</th>
            <th className="border border-gray-300 px-4 py-2">Localização</th>
            <th className="border border-gray-300 px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {simulacoes.map((simulacao) => (
            <tr key={simulacao.id}>
              <td className="border border-gray-300 px-4 py-2">{simulacao.id}</td>
              <td className="border border-gray-300 px-4 py-2">{simulacao.tipoEnergia}</td>
              <td className="border border-gray-300 px-4 py-2">{simulacao.capacidade} kW</td>
              <td className="border border-gray-300 px-4 py-2">{simulacao.localizacao}</td>
              <td className="border border-gray-300 px-4 py-2">
                <details>
                  <summary className="text-blue-500 hover:underline cursor-pointer">
                    Ver detalhes
                  </summary>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>
                      <strong>Economia:</strong> R$ {simulacao.economia.toFixed(2)}
                    </p>
                    <p>
                      <strong>Prazo:</strong> {simulacao.prazo} anos
                    </p>
                    <p>
                      <strong>Status:</strong> {simulacao.status}
                    </p>
                    <p>
                      <strong>CO₂ Evitado:</strong> {simulacao.co2Evitado.toFixed(2)} toneladas
                    </p>
                    <p>
                      <strong>Custo de Instalação:</strong> R$ {simulacao.custoInstalacao.toFixed(2)}
                    </p>
                    <p>
                      <strong>ROI:</strong> {simulacao.roi}
                    </p>
                    <p>
                      <strong>Descrição:</strong> {simulacao.descricao}
                    </p>
                    <p>
                      <strong>Data de Criação:</strong> {simulacao.dataCriacao}
                    </p>
                  </div>
                </details>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
