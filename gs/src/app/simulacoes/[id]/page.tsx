"use client";

import { useEffect, useState } from "react";

type Simulacao = {
  id: string;
  tipoEnergia: string;
  capacidade: number;
  localizacao: string;
  resultado: string;
};

export default function DetalhesSimulacao({ params }: { params: { id: string } }) {
  const [simulacao, setSimulacao] = useState<Simulacao | null>(null);

  useEffect(() => {
    async function fetchSimulacao() {
      try {
        const res = await fetch(`/api/simulacoes?id=${params.id}`);
        if (!res.ok) throw new Error("Erro ao buscar simulação.");
        const data: Simulacao = await res.json();
        setSimulacao(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSimulacao();
  }, [params.id]);

  if (!simulacao) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Detalhes da Simulação #{params.id}
      </h1>
      <section className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Tipo de Energia:</span> {simulacao.tipoEnergia}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Capacidade:</span> {simulacao.capacidade} kW
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Localização:</span> {simulacao.localizacao}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">
            <span className="font-bold">Resultado:</span> {simulacao.resultado}
          </p>
        </div>
      </section>
    </main>
  );
}
