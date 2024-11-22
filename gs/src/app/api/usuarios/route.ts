import { NextResponse } from "next/server";

// Tipo do Usuário
type Usuario = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cargo: string;
  dataCadastro: string;
};

let usuarios: Usuario[] = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@exemplo.com",
    telefone: "123456789",
    endereco: "Rua A, 123, São Paulo, SP",
    cargo: "Administrador",
    dataCadastro: "2023-01-15",
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria@exemplo.com",
    telefone: "987654321",
    endereco: "Rua B, 456, Rio de Janeiro, RJ",
    cargo: "Usuário",
    dataCadastro: "2023-03-10",
  },
  {
    id: 3,
    nome: "Carlos Andrade",
    email: "carlos@exemplo.com",
    telefone: "999112233",
    endereco: "Avenida Central, 789, Belo Horizonte, MG",
    cargo: "Usuário",
    dataCadastro: "2023-05-20",
  },
  {
    id: 4,
    nome: "Ana Paula Souza",
    email: "ana@exemplo.com",
    telefone: "988776655",
    endereco: "Rua das Flores, 321, Porto Alegre, RS",
    cargo: "Administrador",
    dataCadastro: "2023-07-15",
  },
  {
    id: 5,
    nome: "Fernanda Lima",
    email: "fernanda@exemplo.com",
    telefone: "987333444",
    endereco: "Rua das Palmeiras, 1020, Recife, PE",
    cargo: "Usuário",
    dataCadastro: "2023-08-01",
  },
  {
    id: 6,
    nome: "Rafael Alves",
    email: "rafael@exemplo.com",
    telefone: "988445566",
    endereco: "Praça Verde, 150, Fortaleza, CE",
    cargo: "Administrador",
    dataCadastro: "2023-09-10",
  },
  {
    id: 7,
    nome: "Juliana Santos",
    email: "juliana@exemplo.com",
    telefone: "999223344",
    endereco: "Rua Rio Branco, 505, Curitiba, PR",
    cargo: "Usuário",
    dataCadastro: "2023-10-05",
  },
  {
    id: 8,
    nome: "Lucas Pereira",
    email: "lucas@exemplo.com",
    telefone: "977665544",
    endereco: "Avenida Paulista, 1500, São Paulo, SP",
    cargo: "Usuário",
    dataCadastro: "2023-11-11",
  },
  {
    id: 9,
    nome: "Gabriela Mendes",
    email: "gabriela@exemplo.com",
    telefone: "987554433",
    endereco: "Rua Vitória, 800, Salvador, BA",
    cargo: "Administrador",
    dataCadastro: "2023-12-02",
  },
  {
    id: 10,
    nome: "Marcos Silva",
    email: "marcos@exemplo.com",
    telefone: "999887766",
    endereco: "Praça da Liberdade, 101, Brasília, DF",
    cargo: "Usuário",
    dataCadastro: "2024-01-15",
  },
  {
    id: 11,
    nome: "Patrícia Costa",
    email: "patricia@exemplo.com",
    telefone: "987665544",
    endereco: "Rua Nova, 678, Vitória, ES",
    cargo: "Usuário",
    dataCadastro: "2024-02-10",
  },
  {
    id: 12,
    nome: "Ricardo Barbosa",
    email: "ricardo@exemplo.com",
    telefone: "988554433",
    endereco: "Avenida Beira Mar, 900, Florianópolis, SC",
    cargo: "Administrador",
    dataCadastro: "2024-03-01",
  }  
];

// GET: Retorna todos os usuários
export async function GET() {
  return NextResponse.json(usuarios);
}

// POST: Cria um novo usuário
export async function POST(req: Request) {
  const body = await req.json();
  const novoUsuario: Usuario = {
    id: usuarios.length + 1,
    nome: body.nome || "Nome não informado",
    email: body.email || "Email não informado",
    telefone: body.telefone || "Telefone não informado",
    endereco: body.endereco || "Endereço não informado",
    cargo: body.cargo || "Usuário",
    dataCadastro: new Date().toISOString().split("T")[0],
  };
  usuarios.push(novoUsuario);
  return NextResponse.json(novoUsuario, { status: 201 });
}

// PUT: Atualiza um usuário existente
export async function PUT(req: Request) {
  const body = await req.json();
  const usuarioIndex = usuarios.findIndex((u) => u.id === body.id);
  if (usuarioIndex === -1) {
    return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
  }
  usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...body };
  return NextResponse.json(usuarios[usuarioIndex]);
}

// DELETE: Remove um usuário
export async function DELETE(req: Request) {
  const { id } = await req.json();
  usuarios = usuarios.filter((u) => u.id !== id);
  return NextResponse.json({ message: "Usuário removido com sucesso" });
}
