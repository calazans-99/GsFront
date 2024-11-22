"use client";

import { useState } from "react";

type SimulacaoForm = {
  tipoEnergia: string;
  capacidade: number;
  localizacao: string;
  prazo: number;
  descricao: string; // Adicionado o campo descrição
};

export default function NovaSimulacao() {
  const [formData, setFormData] = useState<SimulacaoForm>({
    tipoEnergia: "",
    capacidade: 0,
    localizacao: "",
    prazo: 5,
    descricao: "", // Inicializa descrição como string vazia
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/simulacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Simulação criada com sucesso!");
    } else {
      alert("Erro ao criar simulação.");
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Nova Simulação</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <label className="block font-medium">Tipo de Energia:</label>
          <select
            name="tipoEnergia"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Selecione</option>
            <option value="solar">Solar</option>
            <option value="eolica">Eólica</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Capacidade (kW):</label>
          <input
            type="number"
            name="capacidade"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Localização:</label>
          <input
            type="text"
            name="localizacao"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Prazo (anos):</label>
          <input
            type="number"
            name="prazo"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Descrição:</label>
          <textarea
            name="descricao"
            onChange={handleChange}
            placeholder="Descreva brevemente o projeto"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Criar Simulação
        </button>
      </form>
    </main>
  );
}
