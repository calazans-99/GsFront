"use client";

import { useEffect, useState } from "react";

type Microgrid = {
  id: number;
  nome: string;
  localizacao: string;
  capacidade: number;
};

export default function Microgrids() {
  const [microgrids, setMicrogrids] = useState<Microgrid[]>([]);

  useEffect(() => {
    async function fetchMicrogrids() {
      const res = await fetch("/api/microgrid");
      if (res.ok) {
        const data = await res.json();
        setMicrogrids(data);
      }
    }
    fetchMicrogrids();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Microgrids
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {microgrids.map((microgrid) => (
          <div key={microgrid.id} className="border border-gray-300 rounded p-4">
            <h2 className="text-2xl font-semibold">{microgrid.nome}</h2>
            <p><strong>Localização:</strong> {microgrid.localizacao}</p>
            <p><strong>Capacidade:</strong> {microgrid.capacidade} kW</p>
          </div>
        ))}
      </div>
    </main>
  );
}
