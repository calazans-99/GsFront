"use client";

import { useEffect, useState } from "react";

type Microgrid = {
  id: number;
  nome: string;
  tipo: string;
  capacidade: number;
  localizacao: string;
};

export default function DetalhesMicrogrid({ params }: { params: { id: string } }) {
  const [microgrid, setMicrogrid] = useState<Microgrid | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMicrogrid() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/microgrid?id=${params.id}`);
        if (!res.ok) {
          const errorMsg = await res.text();
          throw new Error(errorMsg || "Erro ao carregar o microgrid.");
        }
        const data: Microgrid = await res.json();
        setMicrogrid(data);
      } catch (err: any) {
        setError(err.message || "Erro inesperado ao carregar o microgrid.");
      } finally {
        setLoading(false);
      }
    }
    fetchMicrogrid();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!microgrid) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">
          Microgrid não encontrado. Verifique o ID e tente novamente.
        </p>
      </div>
    );
  }

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-green-500 text-white p-6">
          <h1 className="text-4xl font-bold text-center">
            Detalhes do Microgrid #{params.id}
          </h1>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <p className="mb-4 text-gray-700">
            <strong>Nome:</strong> {microgrid.nome}
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Tipo:</strong> {microgrid.tipo}
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Capacidade:</strong> {microgrid.capacidade} kW
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Localização:</strong> {microgrid.localizacao}
          </p>
        </div>
      </div>
    </main>
  );
}
