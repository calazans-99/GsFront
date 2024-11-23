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
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchMicrogrid() {
      try {
        const res = await fetch(`/api/microgrid?id=${params.id}`);
        if (!res.ok) throw new Error("Erro ao carregar o microgrid.");
        const data = await res.json();
        setFormData(data);
      } catch (error) {
        setError("Erro ao buscar microgrid.");
        console.error("Erro ao buscar microgrid:", error);
      }
    }
    fetchMicrogrid();
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null); // Limpa erros ao editar os campos
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação dos campos
    if (!formData.nome || !formData.tipo || !formData.capacidade || !formData.localizacao) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    try {
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
        throw new Error("Erro ao atualizar microgrid.");
      }
    } catch (err) {
      setError("Erro ao atualizar microgrid.");
      console.error("Erro ao atualizar microgrid:", err);
    }
  };

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
          Editar Microgrid #{params.id}
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
          <div className="mb-4">
            <label className="block text-gray-700">Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite o nome do microgrid"
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
              placeholder="Digite a capacidade em kW"
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
              placeholder="Digite a localização"
              required
              className="w-full border rounded p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
          >
            Salvar
          </button>
        </form>
      </div>
    </main>
  );
}
