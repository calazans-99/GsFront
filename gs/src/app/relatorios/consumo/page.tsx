"use client";

import { useEffect, useState } from "react";

type Consumo = {
  mes: string;
  consumo: number;
  custoMedio: number;
  picoConsumo: number;
  menorConsumo: number;
  consumoMedioDiario: number;
  diasAcimaMedia: number;
};

export default function RelatorioConsumo() {
  const [dados, setDados] = useState<Consumo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchConsumo() {
      try {
        const res = await fetch("/api/relatorios/consumo");
        if (!res.ok) throw new Error("Erro ao carregar dados do consumo.");
        const data: Consumo[] = await res.json();
        setDados(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message); // Atualiza o estado de erro
        } else {
          setError("Erro desconhecido ao carregar os dados.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchConsumo();
  }, []);
  
  if (loading) return <p className="text-center text-gray-500">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

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
            <th className="border border-gray-300 px-4 py-2">Custo Médio (R$)</th>
            <th className="border border-gray-300 px-4 py-2">Pico de Consumo</th>
            <th className="border border-gray-300 px-4 py-2">Menor Consumo</th>
            <th className="border border-gray-300 px-4 py-2">Consumo Médio Diário</th>
            <th className="border border-gray-300 px-4 py-2">Dias Acima da Média</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.mes}</td>
              <td className="border border-gray-300 px-4 py-2">{item.consumo}</td>
              <td className="border border-gray-300 px-4 py-2">{item.custoMedio}</td>
              <td className="border border-gray-300 px-4 py-2">{item.picoConsumo}</td>
              <td className="border border-gray-300 px-4 py-2">{item.menorConsumo}</td>
              <td className="border border-gray-300 px-4 py-2">{item.consumoMedioDiario}</td>
              <td className="border border-gray-300 px-4 py-2">{item.diasAcimaMedia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
