import { NextResponse } from "next/server";

// GET: Retorna relatório de consumo
export async function GET() {
  const dados = [
    { mes: "Janeiro", consumo: 300 },
    { mes: "Fevereiro", consumo: 250 },
    { mes: "Março", consumo: 280 },
    { mes: "Abril", consumo: 350 },
    { mes: "Maio", consumo: 330 },
  ];
  return NextResponse.json(dados);
}
