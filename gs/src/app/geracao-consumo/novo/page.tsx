"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NovoRegistroGeracaoConsumo() {
  const [formData, setFormData] = useState({
    mes: "",
    energiaGerada: "",
    energiaConsumida: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/geracao-consumo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          energiaGerada: Number(formData.energiaGerada),
          energiaConsumida: Number(formData.energiaConsumida),
        }),
      });
      if (res.ok) {
        alert("Registro criado com sucesso!");
        router.push("/geracao-consumo");
      } else {
        alert("Erro ao criar registro.");
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Novo Registro
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Mês:</label>
          <input
            type="text"
            name="mes"
            value={formData.mes}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
            placeholder="Ex: Janeiro"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Energia Gerada (kWh):</label>
          <input
            type="number"
            name="energiaGerada"
            value={formData.energiaGerada}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Energia Consumida (kWh):</label>
          <input
            type="number"
            name="energiaConsumida"
            value={formData.energiaConsumida}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Salvar
        </button>
      </form>
    </main>
  );
}
