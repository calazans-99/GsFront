import { NextResponse } from "next/server";

let simulacoes = [
  { id: 1, tipoEnergia: "solar", capacidade: 10, localizacao: "São Paulo" },
  { id: 2, tipoEnergia: "eolica", capacidade: 50, localizacao: "Curitiba" },
];

// GET: Retorna todas as simulações
export async function GET() {
  return NextResponse.json(simulacoes);
}

// POST: Cria uma nova simulação
export async function POST(req: Request) {
  const body = await req.json();
  const novaSimulacao = { id: simulacoes.length + 1, ...body };
  simulacoes.push(novaSimulacao);
  return NextResponse.json(novaSimulacao, { status: 201 });
}
