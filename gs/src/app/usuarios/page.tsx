"use client";

import { useEffect, useState } from "react";

// Tipo do Usuário
type Usuario = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cargo: string;
  dataCadastro: string;
};

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const res = await fetch("/api/usuarios");
        if (!res.ok) throw new Error("Erro ao carregar usuários.");
        const data: Usuario[] = await res.json();
        setUsuarios(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message); // Define a mensagem de erro
        } else {
          setError("Erro desconhecido ao carregar os usuários.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsuarios();
  }, []);
  

  if (loading) return <p className="text-center text-gray-500">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Usuários Registrados
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usuarios.map((usuario) => (
          <div
            key={usuario.id}
            className="border border-gray-300 rounded shadow-md p-4"
          >
            <h2 className="text-2xl font-semibold text-blue-500">
              {usuario.nome}
            </h2>
            <p>
              <strong>Email:</strong> {usuario.email}
            </p>
            <p>
              <strong>Telefone:</strong> {usuario.telefone}
            </p>
            <p>
              <strong>Endereço:</strong> {usuario.endereco}
            </p>
            <p>
              <strong>Cargo:</strong> {usuario.cargo}
            </p>
            <p>
              <strong>Data de Cadastro:</strong> {usuario.dataCadastro}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
