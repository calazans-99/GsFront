import { NextResponse } from "next/server";

// GET: Retorna relatório de consumo
export async function GET() {
  const dados = [
    { mes: "Janeiro", consumo: 300 },
    { mes: "Fevereiro", consumo: 250 },
  ];
  return NextResponse.json(dados);
}
