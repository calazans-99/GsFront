import { NextResponse } from "next/server";

const baseUrl = "http://localhost:8080/fonte-energia"; // Substitua pelo URL correto do backend

// GET: Retorna todas as fontes de energia ou uma específica pelo ID
export async function GET(req: Request, { params }: { params: { id?: string } }) {
  try {
    const url = params.id ? `${baseUrl}/${params.id}` : baseUrl;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar fonte(s) de energia do backend: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no GET fonte-energia:", error);
    return NextResponse.json(
      { error: "Erro ao obter fonte(s) de energia." },
      { status: 500 }
    );
  }
}

// POST: Adiciona uma nova fonte de energia
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro ao adicionar nova fonte de energia.");
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Erro no POST fonte-energia:", error);
    return NextResponse.json(
      { error: "Erro ao adicionar fonte de energia." },
      { status: 500 }
    );
  }
}

// PUT: Atualiza uma fonte de energia existente pelo ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const response = await fetch(`${baseUrl}/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar fonte de energia.");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no PUT fonte-energia:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar fonte de energia." },
      { status: 500 }
    );
  }
}

// DELETE: Remove uma fonte de energia existente pelo ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const response = await fetch(`${baseUrl}/${params.id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao remover fonte de energia.");
    }

    return NextResponse.json({ message: "Fonte de energia removida com sucesso." });
  } catch (error) {
    console.error("Erro no DELETE fonte-energia:", error);
    return NextResponse.json(
      { error: "Erro ao remover fonte de energia." },
      { status: 500 }
    );
  }
}
