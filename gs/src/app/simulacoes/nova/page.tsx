"use client";

import { useState } from "react";

export default function NovaSimulacao() {
  const [formData, setFormData] = useState({
    tipoEnergia: "",
    capacidade: "",
    localizacao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados da Simulação:", formData);
    // Adicione a lógica para enviar os dados para a API
  };

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Nova Simulação
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Configure os parâmetros para realizar uma nova simulação.
      </p>

      {/* Formulário para nova simulação */}
      <form
        className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleSubmit}
      >
        {/* Tipo de Energia */}
        <div className="mb-4">
          <label
            htmlFor="tipoEnergia"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tipo de Energia
          </label>
          <select
            id="tipoEnergia"
            name="tipoEnergia"
            value={formData.tipoEnergia}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Selecione o tipo de energia</option>
            <option value="solar">Solar</option>
            <option value="eolica">Eólica</option>
            <option value="hidraulica">Hidráulica</option>
          </select>
        </div>

        {/* Capacidade de Geração */}
        <div className="mb-4">
          <label
            htmlFor="capacidade"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Capacidade de Geração (kW)
          </label>
          <input
            type="text"
            id="capacidade"
            name="capacidade"
            value={formData.capacidade}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ex: 5"
            required
          />
        </div>

        {/* Localização */}
        <div className="mb-6">
          <label
            htmlFor="localizacao"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Localização
          </label>
          <input
            type="text"
            id="localizacao"
            name="localizacao"
            value={formData.localizacao}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Digite a localização"
            required
          />
        </div>

        {/* Botão de Submissão */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Realizar Simulação
          </button>
        </div>
      </form>
    </main>
  );
}
