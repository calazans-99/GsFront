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

export default function DetalhesSimulacao({ params }: { params: { id: string } }) {
  const [simulacao, setSimulacao] = useState<Simulacao | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSimulacao() {
      try {
        const res = await fetch(`/api/simulacoes/${params.id}`);
        if (!res.ok) throw new Error("Erro ao carregar a simulação.");
        const data: Simulacao = await res.json();
        setSimulacao(data);
      } catch (err: any) {
        setError(err.message || "Erro inesperado.");
      } finally {
        setLoading(false);
      }
    }

    fetchSimulacao();
  }, [params.id]);

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

  if (!simulacao) {
    return (
      <p className="text-center text-gray-500">
        Simulação não encontrada. Verifique o ID e tente novamente.
      </p>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Detalhes da Simulação #{simulacao.id}
      </h1>
      <section className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <p>
          <strong>Tipo de Energia:</strong> {simulacao.tipoEnergia}
        </p>
        <p>
          <strong>Capacidade:</strong> {simulacao.capacidade} kW
        </p>
        <p>
          <strong>Localização:</strong> {simulacao.localizacao}
        </p>
        <p>
          <strong>Economia Estimada:</strong> R$ {simulacao.economia.toFixed(2)}
        </p>
        <p>
          <strong>Emissões Evitadas:</strong> {simulacao.co2Evitado.toFixed(2)} toneladas
        </p>
        <p>
          <strong>Custo de Instalação:</strong> R$ {simulacao.custoInstalacao.toFixed(2)}
        </p>
        <p>
          <strong>Retorno sobre Investimento (ROI):</strong> {simulacao.roi}
        </p>
        <p>
          <strong>Prazo Estimado:</strong> {simulacao.prazo} anos
        </p>
        <p>
          <strong>Data de Criação:</strong> {simulacao.dataCriacao}
        </p>
        <p>
          <strong>Status:</strong> {simulacao.status}
        </p>
        <p>
          <strong>Descrição:</strong> {simulacao.descricao}
        </p>
      </section>
    </main>
  );
}
