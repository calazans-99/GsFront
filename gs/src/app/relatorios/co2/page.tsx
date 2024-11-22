"use client";

import { useEffect, useState } from "react";

export default function RelatorioFinanceiro() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchFinanceiro() {
      const res = await fetch("/api/relatorios/financeiro");
      const data = await res.json();
      setDados(data);
    }
    fetchFinanceiro();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Relatório Financeiro
      </h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Mês</th>
            <th className="border border-gray-300 px-4 py-2">Receita (R$)</th>
            <th className="border border-gray-300 px-4 py-2">Despesa (R$)</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item: any, index: number) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.mes}</td>
              <td className="border border-gray-300 px-4 py-2">{item.receita}</td>
              <td className="border border-gray-300 px-4 py-2">{item.despesa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
