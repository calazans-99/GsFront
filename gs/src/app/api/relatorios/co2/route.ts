import { NextResponse } from "next/server";

// GET: Retorna relatório de emissões de CO₂
export async function GET() {
  const dados = [
    {
      mes: "Janeiro",
      co2: 50,
      energiaLimpaUsada: "35%",
      co2Evitado: 20,
      projetosAtivos: 2,
      maiorEmissor: "Indústria A",
    },
    {
      mes: "Fevereiro",
      co2: 48,
      energiaLimpaUsada: "40%",
      co2Evitado: 22,
      projetosAtivos: 3,
      maiorEmissor: "Residencial B",
    },
    {
      mes: "Março",
      co2: 55,
      energiaLimpaUsada: "38%",
      co2Evitado: 25,
      projetosAtivos: 4,
      maiorEmissor: "Comercial C",
    },
    {
      mes: "Abril",
      co2: 53,
      energiaLimpaUsada: "42%",
      co2Evitado: 28,
      projetosAtivos: 5,
      maiorEmissor: "Residencial D",
    },
    {
      mes: "Maio",
      co2: 51,
      energiaLimpaUsada: "45%",
      co2Evitado: 30,
      projetosAtivos: 6,
      maiorEmissor: "Indústria E",
    },
  ];
  return NextResponse.json(dados);
}