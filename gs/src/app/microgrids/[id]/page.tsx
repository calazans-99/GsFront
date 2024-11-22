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
      } finally {
        setLoading(false);
      }
    }
    fetchMicrogrid();
  }, [params.id]);

  if (loading) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!microgrid) {
    return (
      <p className="text-center text-gray-500">
        Microgrid não encontrado. Verifique o ID e tente novamente.
      </p>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Detalhes do Microgrid #{params.id}
      </h1>
      <section className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <p className="mb-4">
          <strong>Nome:</strong> {microgrid.nome}
        </p>
        <p className="mb-4">
          <strong>Tipo:</strong> {microgrid.tipo}
        </p>
        <p className="mb-4">
          <strong>Capacidade:</strong> {microgrid.capacidade} kW
        </p>
        <p className="mb-4">
          <strong>Localização:</strong> {microgrid.localizacao}
        </p>
      </section>
    </main>
  );
}
