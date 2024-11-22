"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Definição do tipo Usuário
type Usuario = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
};

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const res = await fetch("/api/usuarios");
        if (!res.ok) throw new Error("Erro ao buscar usuários.");
        const data = await res.json();
        setUsuarios(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsuarios();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Usuários
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        Visualize e gerencie os usuários registrados.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usuarios.map((usuario) => (
          <div
            key={usuario.id}
            className="border border-gray-300 rounded shadow-md p-4"
          >
            <h2 className="text-2xl font-semibold text-blue-500">
              {usuario.nome}
            </h2>
            <p className="text-gray-600">
              <strong>Email:</strong> {usuario.email}
            </p>
            <p className="text-gray-600">
              <strong>Telefone:</strong> {usuario.telefone}
            </p>
            <Link
              href={`/usuarios/${usuario.id}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
