import { NextResponse } from "next/server";

let projetos = [
  { id: 1, nome: "Projeto Solar", descricao: "Energia solar para residências", tipo: "solar", capacidade: 10 },
  { id: 2, nome: "Projeto Eólico", descricao: "Energia eólica para empresas", tipo: "eolica", capacidade: 50 },
];

// GET: Retorna todos os projetos
export async function GET() {
  return NextResponse.json(projetos);
}

// POST: Cria um novo projeto
export async function POST(req: Request) {
  const body = await req.json();
  const novoProjeto = { id: projetos.length + 1, ...body };
  projetos.push(novoProjeto);
  return NextResponse.json(novoProjeto, { status: 201 });
}

// PUT: Atualiza um projeto existente
export async function PUT(req: Request) {
  const body = await req.json();
  const projetoIndex = projetos.findIndex((p) => p.id === body.id);
  if (projetoIndex === -1) return NextResponse.json({ error: "Projeto não encontrado" }, { status: 404 });

  projetos[projetoIndex] = { ...projetos[projetoIndex], ...body };
  return NextResponse.json(projetos[projetoIndex]);
}

// DELETE: Remove um projeto
export async function DELETE(req: Request) {
  const { id } = await req.json();
  projetos = projetos.filter((p) => p.id !== id);
  return NextResponse.json({ message: "Projeto removido com sucesso" });
}
