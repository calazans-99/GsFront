import { NextResponse } from "next/server";

let usuarios = [
  { id: 1, nome: "João Silva", email: "joao@exemplo.com", telefone: "123456789" },
  { id: 2, nome: "Maria Oliveira", email: "maria@exemplo.com", telefone: "987654321" },
];

// GET: Retorna todos os usuários
export async function GET() {
  return NextResponse.json(usuarios);
}

// POST: Cria um novo usuário
export async function POST(req: Request) {
  const body = await req.json();
  const novoUsuario = { id: usuarios.length + 1, ...body };
  usuarios.push(novoUsuario);
  return NextResponse.json(novoUsuario, { status: 201 });
}

// PUT: Atualiza um usuário existente
export async function PUT(req: Request) {
  const body = await req.json();
  const usuarioIndex = usuarios.findIndex((u) => u.id === body.id);
  if (usuarioIndex === -1) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });

  usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...body };
  return NextResponse.json(usuarios[usuarioIndex]);
}

// DELETE: Remove um usuário
export async function DELETE(req: Request) {
  const { id } = await req.json();
  usuarios = usuarios.filter((u) => u.id !== id);
  return NextResponse.json({ message: "Usuário removido com sucesso" });
}
