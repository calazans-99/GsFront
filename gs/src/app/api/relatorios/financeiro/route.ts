import { NextResponse } from "next/server";

// GET: Retorna relatório financeiro
export async function GET() {
  const dados = [
    { mes: "Janeiro", receita: 5000, despesa: 3000, lucro: 2000 },
    { mes: "Fevereiro", receita: 4500, despesa: 2800, lucro: 1700 },
    { mes: "Março", receita: 5200, despesa: 3100, lucro: 2100 },
    { mes: "Abril", receita: 5400, despesa: 3200, lucro: 2200 },
    { mes: "Maio", receita: 5300, despesa: 3300, lucro: 2000 },
  ];
  return NextResponse.json(dados);
}
