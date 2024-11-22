"use client";

import { useEffect, useState } from "react";

type Estimativa = {
  id: number;
  tipoEnergia: string;
  capacidade: number;
  estimativaGeracao: number;
};

export default function EstimativasGeracao() {
  const [estimativas, setEstimativas] = useState<Estimativa[]>([]);

  useEffect(() => {
    async function fetchEstimativas() {
      const res = await fetch("/api/estimativa-geracao");
      if (res.ok) {
        const data = await res.json();
        setEstimativas(data);
      }
    }
    fetchEstimativas();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Estimativas de Geração
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estimativas.map((estimativa) => (
          <div key={estimativa.id} className="border border-gray-300 rounded p-4">
            <h2 className="text-2xl font-semibold">{estimativa.tipoEnergia}</h2>
            <p>
              <strong>Capacidade:</strong> {estimativa.capacidade} kW
            </p>
            <p>
              <strong>Estimativa de Geração:</strong> {estimativa.estimativaGeracao} kWh
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
