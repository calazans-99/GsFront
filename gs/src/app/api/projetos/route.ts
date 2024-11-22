import { NextResponse } from "next/server";

// Estrutura dos projetos
type Projeto = {
  id: number;
  nome: string;
  descricao: string;
  tipo: string;
  capacidade: number;
  localizacao: string;
  dataInicio: string;
  dataTermino: string | null; // Pode ser nulo se o projeto ainda não foi concluído
  status: string;
  custo: number;
  retornoInvestimento: string; // Exemplo: "5 anos"
};

let projetos: Projeto[] = [
  {
    id: 1,
    nome: "Projeto Solar",
    descricao: "Energia solar para residências",
    tipo: "solar",
    capacidade: 10,
    localizacao: "São Paulo",
    dataInicio: "2024-01-15",
    dataTermino: null,
    status: "Em andamento",
    custo: 25000,
    retornoInvestimento: "4 anos",
  },
  {
    id: 2,
    nome: "Projeto Eólico",
    descricao: "Energia eólica para empresas",
    tipo: "eolica",
    capacidade: 50,
    localizacao: "Curitiba",
    dataInicio: "2023-06-10",
    dataTermino: "2024-01-01",
    status: "Concluído",
    custo: 100000,
    retornoInvestimento: "6 anos",
  },
  {
    id: 3,
    nome: "Projeto Eólico",
    descricao: "Geração de energia por meio de microturbinas em rios.",
    tipo: "hidroeletrica",
    capacidade: 20,
    localizacao: "Belo Horizonte",
    dataInicio: "2024-02-01",
    dataTermino: null,
    status: "Em andamento",
    custo: 40000,
    retornoInvestimento: "5 anos",
  },
  {
    id: 4,
    nome: "Projeto Solar",
    descricao: "Aproveitamento de resíduos orgânicos para geração de energia.",
    tipo: "biomassa",
    capacidade: 15,
    localizacao: "Porto Alegre",
    dataInicio: "2023-03-15",
    dataTermino: "2023-12-20",
    status: "Concluído",
    custo: 35000,
    retornoInvestimento: "3 anos",
  },
  {
    id: 5,
    nome: "Projeto Solar",
    descricao: "Aproveitamento de calor da Terra para geração de energia.",
    tipo: "geotermica",
    capacidade: 25,
    localizacao: "Recife",
    dataInicio: "2024-04-10",
    dataTermino: null,
    status: "Em andamento",
    custo: 75000,
    retornoInvestimento: "6 anos",
  },
  {
    id: 6,
    nome: "Projeto Solar Comunitário",
    descricao: "Energia solar compartilhada para comunidades rurais.",
    tipo: "solar",
    capacidade: 30,
    localizacao: "Manaus",
    dataInicio: "2023-09-01",
    dataTermino: "2024-05-15",
    status: "Concluído",
    custo: 90000,
    retornoInvestimento: "7 anos",
  },
  {
    id: 7,
    nome: "Projeto Eólico",
    descricao: "Instalação de turbinas eólicas no oceano.",
    tipo: "eolica",
    capacidade: 100,
    localizacao: "Fortaleza",
    dataInicio: "2024-06-01",
    dataTermino: null,
    status: "Planejado",
    custo: 300000,
    retornoInvestimento: "10 anos",
  },
  {
    id: 8,
    nome: "Projeto Solar Residencial Premium",
    descricao: "Sistemas de energia solar com alta eficiência para residências de luxo.",
    tipo: "solar",
    capacidade: 5,
    localizacao: "Florianópolis",
    dataInicio: "2023-07-20",
    dataTermino: "2024-02-10",
    status: "Concluído",
    custo: 20000,
    retornoInvestimento: "3 anos",
  },
  {
    id: 9,
    nome: "Projeto Híbrido Solar e Eólico",
    descricao: "Combinação de sistemas solares e eólicos para maior eficiência.",
    tipo: "hibrido",
    capacidade: 60,
    localizacao: "Salvador",
    dataInicio: "2024-03-01",
    dataTermino: null,
    status: "Em andamento",
    custo: 150000,
    retornoInvestimento: "8 anos",
  },
];

// GET: Retorna todos os projetos
export async function GET() {
  return NextResponse.json(projetos);
}

// POST: Cria um novo projeto
export async function POST(req: Request) {
  const body = await req.json();

  const novoId = projetos.length ? projetos[projetos.length - 1].id + 1 : 1;

  const novoProjeto: Projeto = {
    id: novoId,
    nome: body.nome || "Sem nome",
    descricao: body.descricao || "Sem descrição",
    tipo: body.tipo || "indefinido",
    capacidade: body.capacidade || 0,
    localizacao: body.localizacao || "Local não especificado",
    dataInicio: body.dataInicio || new Date().toISOString().split("T")[0],
    dataTermino: body.dataTermino || null,
    status: body.status || "Pendente",
    custo: body.custo || 0,
    retornoInvestimento: body.retornoInvestimento || "Desconhecido",
  };

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
