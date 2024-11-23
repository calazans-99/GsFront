"use client";

import { useEffect, useState } from "react";

type Microgrid = {
  id: number;
  nome: string;
  tipo: string;
  capacidade: number;
  localizacao: string;
  status: string;
};

export default function MicrogridList() {
  const [microgrids, setMicrogrids] = useState<Microgrid[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMicrogrids = async () => {
      try {
        const res = await fetch("/api/microgrids");
        if (!res.ok) {
          throw new Error(`Erro ao buscar microgrids: ${res.statusText}`);
        }
        const data = await res.json();

        // Log para verificar os dados recebidos
        console.log("Dados recebidos:", data);

        setMicrogrids(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido ao carregar microgrids.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMicrogrids();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("Deseja realmente excluir este microgrid?")) {
      try {
        const res = await fetch(`/api/microgrid?id=${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Erro ao excluir microgrid.");

        // Atualiza o estado local após exclusão
        setMicrogrids((prev) => prev.filter((microgrid) => microgrid.id !== id));
      } catch (err) {
        if (err instanceof Error) {
          alert(`Erro ao excluir microgrid: ${err.message}`);
        } else {
          alert("Erro desconhecido ao excluir microgrid.");
        }
      }
    }
  };

  // Renderização enquanto os dados estão sendo carregados
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Carregando...</p>
      </div>
    );
  }

  // Renderização caso haja erro na API
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}. Tente novamente mais tarde.</p>
      </div>
    );
  }

  // Renderização caso a lista esteja vazia
  if (microgrids.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Nenhum microgrid encontrado.</p>
      </div>
    );
  }

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-6">
          Microgrids
        </h1>
        <div className="text-right mb-4">
          <button
            onClick={() => alert("Função Adicionar Microgrid ainda não implementada.")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Adicionar Microgrid
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {microgrids.map((microgrid) => (
            <div
              key={microgrid.id}
              className="border border-gray-300 bg-white rounded shadow-md p-6"
            >
              <h2 className="text-2xl font-semibold text-green-600 mb-2">
                {microgrid.nome}
              </h2>
              <p className="text-gray-700 mb-1">
                <strong>Tipo:</strong> {microgrid.tipo}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Capacidade:</strong> {microgrid.capacidade} kW
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Localização:</strong> {microgrid.localizacao}
              </p>
              <p className="text-gray-700">
                <strong>Status:</strong> {microgrid.status}
              </p>
              <div className="mt-4 text-center">
                <button
                  onClick={() => handleDelete(microgrid.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
