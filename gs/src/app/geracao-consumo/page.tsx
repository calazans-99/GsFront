"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type GeracaoConsumo = {
  id: number;
  mes: string | number;
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
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Erro desconhecido ao carregar registros.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchRegistros();
  }, []);

  const formatarMes = (mes: string | number) => {
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    if (typeof mes === "number" && mes >= 1 && mes <= 12) {
      return meses[mes - 1];
    }
    return mes;
  };

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
        <p className="text-red-500">{error}. Tente novamente mais tarde.</p>
      </div>
    );
  }

  if (registros.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Nenhum registro encontrado.</p>
      </div>
    );
  }

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
          Geração & Consumo
        </h1>
        <div className="text-right mb-4">
          <Link href="/geracao-consumo/novo">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
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
              <h2 className="text-2xl font-semibold text-green-600 mb-2">
                {formatarMes(registro.mes)}
              </h2>
              <p className="text-gray-700">
                <strong>Energia Gerada:</strong> {registro.energiaGerada} kWh
              </p>
              <p className="text-gray-700">
                <strong>Energia Consumida:</strong> {registro.energiaConsumida} kWh
              </p>
              <p className="text-gray-700 font-bold">
                <strong>Saldo:</strong>{" "}
                {registro.energiaGerada - registro.energiaConsumida} kWh
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
