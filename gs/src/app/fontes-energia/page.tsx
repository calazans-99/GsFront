"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type FonteEnergia = {
  id: number;
  nome: string;
  tipo: string;
  descricao: string;
};

export default function FontesEnergiaList() {
  const [fontes, setFontes] = useState<FonteEnergia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFontes() {
      try {
        const res = await fetch("/api/fontes-energia");
        if (!res.ok) throw new Error("Erro ao buscar fontes de energia.");
        
        const data = await res.json();
        setFontes(data);
      } catch (error: unknown) {
        // Lidando com o erro usando um tipo mais específico
        if (error instanceof Error) {
          setError(error.message || "Erro ao carregar fontes de energia.");
        } else {
          setError("Erro desconhecido ao carregar fontes de energia.");
        }
      } finally {
        setLoading(false);
      }
    }
  
    fetchFontes();
  }, []);
  

  if (loading) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Fontes de Energia
      </h1>
      <div className="text-right mb-4">
        <Link href="/fontes-energia/novo">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Adicionar Fonte
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fontes.map((fonte) => (
          <div
            key={fonte.id}
            className="border border-gray-300 rounded shadow-md p-4 bg-white"
          >
            <p>
              <strong>Descrição:</strong> {fonte.descricao}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
