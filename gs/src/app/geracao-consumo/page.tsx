"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type GeracaoConsumo = {
  id: number;
  mes: string;
  energiaGerada: number;
  energiaConsumida: number;
};

export default function GeracaoConsumoList() {
  const [registros, setRegistros] = useState<GeracaoConsumo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRegistros() {
      try {
        const res = await fetch("/api/geracao-consumo");
        if (!res.ok) throw new Error("Erro ao buscar registros.");
        const data = await res.json();
        setRegistros(data);
      } catch (err) {
        setError("Erro ao carregar registros.");
      } finally {
        setLoading(false);
      }
    }
    fetchRegistros();
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
        Geração & Consumo
      </h1>
      <div className="text-right mb-4">
        <Link href="/geracao-consumo/novo">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Adicionar Registro
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {registros.map((registro) => (
          <div
            key={registro.id}
            className="border border-gray-300 rounded shadow-md p-4 bg-white"
          >
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">
              {registro.mes}
            </h2>
            <p>
              <strong>Energia Gerada:</strong> {registro.energiaGerada} kWh
            </p>
            <p>
              <strong>Energia Consumida:</strong> {registro.energiaConsumida} kWh
            </p>
            <p>
              <strong>Saldo:</strong> {registro.energiaGerada - registro.energiaConsumida} kWh
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
