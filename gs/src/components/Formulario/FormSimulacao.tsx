import React, { useState } from "react";

interface FormSimulacaoProps {
  onSubmit: (data: SimulacaoFormData) => void;
}

interface SimulacaoFormData {
  nome: string;
  tipoFonte: string;
  potencia: number;
  duracao: number; // duração da simulação em meses
}

export default function FormSimulacao({ onSubmit }: FormSimulacaoProps) {
  const [formData, setFormData] = useState<SimulacaoFormData>({
    nome: "",
    tipoFonte: "",
    potencia: 0,
    duracao: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "potencia" || name === "duracao" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow-md">
      <div>
        <label htmlFor="nome" className="block font-bold text-gray-700">
          Nome da Simulação:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="border rounded w-full p-2 mt-2"
        />
      </div>

      <div>
        <label htmlFor="tipoFonte" className="block font-bold text-gray-700">
          Tipo de Fonte de Energia:
        </label>
        <select
          id="tipoFonte"
          name="tipoFonte"
          value={formData.tipoFonte}
          onChange={handleChange}
          required
          className="border rounded w-full p-2 mt-2"
        >
          <option value="">Selecione uma opção</option>
          <option value="solar">Solar</option>
          <option value="eolica">Eólica</option>
          <option value="hidrica">Hídrica</option>
        </select>
      </div>

      <div>
        <label htmlFor="potencia" className="block font-bold text-gray-700">
          Potência Estimada (kW):
        </label>
        <input
          type="number"
          id="potencia"
          name="potencia"
          value={formData.potencia}
          onChange={handleChange}
          required
          className="border rounded w-full p-2 mt-2"
          min={0}
        />
      </div>

      <div>
        <label htmlFor="duracao" className="block font-bold text-gray-700">
          Duração da Simulação (meses):
        </label>
        <input
          type="number"
          id="duracao"
          name="duracao"
          value={formData.duracao}
          onChange={handleChange}
          required
          className="border rounded w-full p-2 mt-2"
          min={1}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Simular
      </button>
    </form>
  );
}
