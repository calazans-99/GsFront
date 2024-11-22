"use client";

import { useEffect, useState } from "react";

// Definição do tipo para Relatório de Consumo
type RelatorioConsumo = {
  mes: string;
  consumo: number;
};

export default function RelatorioConsumo() {
  const [dados, setDados] = useState<RelatorioConsumo[]>([]);

  useEffect(() => {
    async function fetchConsumo() {
      try {
        const res = await fetch("/api/relatorios/consumo");
        if (!res.ok) throw new Error("Erro ao buscar dados do consumo.");
        const data: RelatorioConsumo[] = await res.json();
        setDados(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchConsumo();
  }, []);

  if (dados.length === 0) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Relatório de Consumo
      </h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Mês</th>
            <th className="border border-gray-300 px-4 py-2">Consumo (kWh)</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.mes}</td>
              <td className="border border-gray-300 px-4 py-2">{item.consumo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
