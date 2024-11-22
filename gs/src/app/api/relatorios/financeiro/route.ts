import { NextResponse } from "next/server";

// GET: Retorna relatório financeiro
export async function GET() {
  const dados = [
    { mes: "Janeiro", receita: 5000, despesa: 3000 },
    { mes: "Fevereiro", receita: 4500, despesa: 2800 },
  ];
  return NextResponse.json(dados);
}
