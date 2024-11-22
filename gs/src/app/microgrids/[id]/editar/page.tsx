"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditarMicrogrid({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    nome: "",
    tipo: "",
    capacidade: "",
    localizacao: "",
  });
  const router = useRouter();

  useEffect(() => {
    async function fetchMicrogrid() {
      try {
        const res = await fetch(`/api/microgrid?id=${params.id}`);
        if (!res.ok) throw new Error("Erro ao carregar o microgrid.");
        const data = await res.json();
        setFormData(data);
      } catch (error) {
        console.error("Erro ao buscar microgrid:", error);
      }
    }
    fetchMicrogrid();
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/microgrid?id=${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Microgrid atualizado com sucesso!");
      router.push("/microgrid");
    } else {
      alert("Erro ao atualizar microgrid.");
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Editar Microgrid #{params.id}
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tipo:</label>
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          >
            <option value="">Selecione</option>
            <option value="solar">Solar</option>
            <option value="eolica">Eólica</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Capacidade (kW):</label>
          <input
            type="number"
            name="capacidade"
            value={formData.capacidade}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Localização:</label>
          <input
            type="text"
            name="localizacao"
            value={formData.localizacao}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Salvar
        </button>
      </form>
    </main>
  );
}