"use client";

import { useEffect, useState } from "react";

type FonteEnergia = {
  id: number;
  tipo: string;
  descricao: string;
};

export default function FontesEnergia() {
  const [fontes, setFontes] = useState<FonteEnergia[]>([]);

  useEffect(() => {
    async function fetchFontes() {
      const res = await fetch("/api/fonte-energia");
      if (res.ok) {
        const data = await res.json();
        setFontes(data);
      }
    }
    fetchFontes();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Fontes de Energia
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fontes.map((fonte) => (
          <div key={fonte.id} className="border border-gray-300 rounded p-4">
            <h2 className="text-2xl font-semibold">{fonte.tipo}</h2>
            <p>{fonte.descricao}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
