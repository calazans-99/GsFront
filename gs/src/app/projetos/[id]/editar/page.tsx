"use client";

import { useEffect, useState } from "react";

export default function EditarProjeto({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    nome: "",
    tipo: "",
    capacidade: "",
    descricao: "",
  });

  useEffect(() => {
    async function fetchProjeto() {
      try {
        const res = await fetch(`/api/projetos?id=${params.id}`);
        if (!res.ok) throw new Error("Erro ao buscar dados do projeto.");
        const data = await res.json();
        setFormData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProjeto();
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/projetos`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, id: params.id }),
    });

    if (res.ok) {
      alert("Projeto atualizado com sucesso!");
    } else {
      alert("Erro ao atualizar projeto.");
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Editar Projeto #{params.id}
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Nome do Projeto:</label>
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
          <label className="block text-gray-700">Tipo de Projeto:</label>
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
          <label className="block text-gray-700">Descrição:</label>
          <textarea
            name="descricao"
            value={formData.descricao}
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
