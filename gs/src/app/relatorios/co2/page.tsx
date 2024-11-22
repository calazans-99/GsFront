"use client";

import { useEffect, useState } from "react";

type EmissaoCO2 = {
  mes: string;
  co2: number;
  energiaLimpaUsada: string;
  co2Evitado: number;
  projetosAtivos: number;
  maiorEmissor: string;
};

export default function RelatorioCO2() {
  const [dados, setDados] = useState<EmissaoCO2[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCO2() {
      try {
        const res = await fetch("/api/relatorios/co2");
        if (!res.ok) throw new Error("Erro ao carregar dados de emissões de CO₂.");
        const data: EmissaoCO2[] = await res.json();
        setDados(data);
      } catch (err: any) {
        setError(err.message || "Erro inesperado.");
      } finally {
        setLoading(false);
      }
    }
    fetchCO2();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
        Relatório de Emissões de CO₂
      </h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Mês</th>
            <th className="border border-gray-300 px-4 py-2">Emissão CO₂ (t)</th>
            <th className="border border-gray-300 px-4 py-2">% Energia Limpa</th>
            <th className="border border-gray-300 px-4 py-2">CO₂ Evitado (t)</th>
            <th className="border border-gray-300 px-4 py-2">Projetos Ativos</th>
            <th className="border border-gray-300 px-4 py-2">Maior Emissor</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.mes}</td>
              <td className="border border-gray-300 px-4 py-2">{item.co2}</td>
              <td className="border border-gray-300 px-4 py-2">{item.energiaLimpaUsada}</td>
              <td className="border border-gray-300 px-4 py-2">{item.co2Evitado}</td>
              <td className="border border-gray-300 px-4 py-2">{item.projetosAtivos}</td>
              <td className="border border-gray-300 px-4 py-2">{item.maiorEmissor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
