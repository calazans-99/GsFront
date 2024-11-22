import { NextResponse } from "next/server";

// GET: Retorna relatório financeiro
export async function GET() {
  const dados = [
    {
      mes: "Janeiro",
      receita: 5000,
      despesaFixa: 1500,
      despesaVariavel: 1500,
      despesaTotal: 3000,
      lucro: 2000,
      margemLucro: "40%",
      crescimento: "N/A",
    },
    {
      mes: "Fevereiro",
      receita: 5500,
      despesaFixa: 1600,
      despesaVariavel: 1200,
      despesaTotal: 2800,
      lucro: 2700,
      margemLucro: "49.09%",
      crescimento: "10%",
    },
    {
      mes: "Março",
      receita: 6200,
      despesaFixa: 1700,
      despesaVariavel: 1400,
      despesaTotal: 3100,
      lucro: 3100,
      margemLucro: "50%",
      crescimento: "12.73%",
    },
    {
      mes: "Abril",
      receita: 7000,
      despesaFixa: 1800,
      despesaVariavel: 1400,
      despesaTotal: 3200,
      lucro: 3800,
      margemLucro: "54.29%",
      crescimento: "12.90%",
    },
    {
      mes: "Maio",
      receita: 7500,
      despesaFixa: 1900,
      despesaVariavel: 1400,
      despesaTotal: 3300,
      lucro: 4200,
      margemLucro: "56%",
      crescimento: "7.14%",
    },
  ];
  return NextResponse.json(dados);
}
