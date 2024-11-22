"use client";

import { useEffect, useState } from "react";

type GeracaoConsumo = {
  id: number;
  mes: string;
  geracao: number;
  consumo: number;
};

export default function GeracaoConsumoMensal() {
  const [dados, setDados] = useState<GeracaoConsumo[]>([]);

  useEffect(() => {
    async function fetchDados() {
      const res = await fetch("/api/geracao-consumo-mensal");
      if (res.ok) {
        const data = await res.json();
        setDados(data);
      }
    }
    fetchDados();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Geração e Consumo Mensal
      </h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Mês</th>
            <th className="border px-4 py-2">Geração (kWh)</th>
            <th className="border px-4 py-2">Consumo (kWh)</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dado) => (
            <tr key={dado.id}>
              <td className="border px-4 py-2">{dado.mes}</td>
              <td className="border px-4 py-2">{dado.geracao}</td>
              <td className="border px-4 py-2">{dado.consumo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
