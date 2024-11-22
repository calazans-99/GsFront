"use client";

import { useEffect, useState } from "react";

type Financeiro = {
  mes: string;
  receita: number;
  despesaFixa: number;
  despesaVariavel: number;
  despesaTotal: number;
  lucro: number;
  margemLucro: string;
  crescimento: string;
};

export default function RelatorioFinanceiro() {
  const [dados, setDados] = useState<Financeiro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    async function fetchFinanceiro() {
      try {
        const res = await fetch("/api/relatorios/financeiro");
        if (!res.ok) throw new Error("Erro ao carregar dados financeiros.");
        const data: Financeiro[] = await res.json();
        setDados(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message); // Atualiza o estado com a mensagem do erro
        } else {
          setError("Erro desconhecido ao carregar os dados financeiros.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchFinanceiro();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-yellow-600 text-center mb-6">
        Relatório Financeiro
      </h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Mês</th>
            <th className="border border-gray-300 px-4 py-2">Receita (R$)</th>
            <th className="border border-gray-300 px-4 py-2">Despesas Fixas</th>
            <th className="border border-gray-300 px-4 py-2">Despesas Variáveis</th>
            <th className="border border-gray-300 px-4 py-2">Despesas Totais</th>
            <th className="border border-gray-300 px-4 py-2">Lucro (R$)</th>
            <th className="border border-gray-300 px-4 py-2">Margem de Lucro</th>
            <th className="border border-gray-300 px-4 py-2">Crescimento (%)</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.mes}</td>
              <td className="border border-gray-300 px-4 py-2">{item.receita}</td>
              <td className="border border-gray-300 px-4 py-2">{item.despesaFixa}</td>
              <td className="border border-gray-300 px-4 py-2">{item.despesaVariavel}</td>
              <td className="border border-gray-300 px-4 py-2">{item.despesaTotal}</td>
              <td className="border border-gray-300 px-4 py-2">{item.lucro}</td>
              <td className="border border-gray-300 px-4 py-2">{item.margemLucro}</td>
              <td className="border border-gray-300 px-4 py-2">{item.crescimento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
