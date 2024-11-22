import { NextResponse } from "next/server";

// GET: Retorna relatório de emissões de CO₂
export async function GET() {
  const dados = [
    { mes: "Janeiro", co2: 50 },
    { mes: "Fevereiro", co2: 40 },
  ];
  return NextResponse.json(dados);
}
