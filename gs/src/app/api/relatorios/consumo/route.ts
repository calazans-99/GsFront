import { NextResponse } from "next/server";

// GET: Retorna relatório de consumo
export async function GET() {
  const dados = [
    {
      mes: "Janeiro",
      consumo: 300,
      custoMedio: 150,
      picoConsumo: 50,
      menorConsumo: 10,
      consumoMedioDiario: 10,
      diasAcimaMedia: 12,
    },
    {
      mes: "Fevereiro",
      consumo: 280,
      custoMedio: 140,
      picoConsumo: 45,
      menorConsumo: 8,
      consumoMedioDiario: 9.3,
      diasAcimaMedia: 10,
    },
    {
      mes: "Março",
      consumo: 320,
      custoMedio: 160,
      picoConsumo: 55,
      menorConsumo: 15,
      consumoMedioDiario: 10.3,
      diasAcimaMedia: 14,
    },
    {
      mes: "Abril",
      consumo: 350,
      custoMedio: 175,
      picoConsumo: 60,
      menorConsumo: 20,
      consumoMedioDiario: 11.6,
      diasAcimaMedia: 15,
    },
    {
      mes: "Maio",
      consumo: 340,
      custoMedio: 170,
      picoConsumo: 58,
      menorConsumo: 18,
      consumoMedioDiario: 11.3,
      diasAcimaMedia: 13,
    },
  ];
  return NextResponse.json(dados);
}
