"use client";

import { useEffect, useState } from "react";

export default function RelatorioConsumo() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchConsumo() {
      const res = await fetch("/api/relatorios/consumo");
      const data = await res.json();
      setDados(data);
    }
    fetchConsumo();
  }, []);

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
          {dados.map((item: any, index: number) => (
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
