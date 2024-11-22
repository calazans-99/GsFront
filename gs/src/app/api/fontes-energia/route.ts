import { NextResponse } from "next/server";

const baseUrl = "http://localhost:8080/fonte-energia"; // Substitua pelo URL correto do backend

// GET: Retorna todas as fontes ou uma específica pelo ID
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const url = id ? `${baseUrl}/${id}` : baseUrl;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar fontes de energia: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no GET fontes de energia:", error);
    return NextResponse.json(
      { error: "Erro ao obter fontes de energia." },
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
    console.error("Erro no POST fonte de energia:", error);
    return NextResponse.json(
      { error: "Erro ao adicionar fonte de energia." },
      { status: 500 }
    );
  }
}

// PUT: Atualiza uma fonte de energia existente pelo ID
export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID é obrigatório para atualizar uma fonte de energia." },
      { status: 400 }
    );
  }

  try {
    const body = await req.json();
    const response = await fetch(`${baseUrl}/${id}`, {
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
    console.error("Erro no PUT fonte de energia:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar fonte de energia." },
      { status: 500 }
    );
  }
}

// DELETE: Remove uma fonte de energia pelo ID
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID é obrigatório para remover uma fonte de energia." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao remover fonte de energia.");
    }

    return NextResponse.json({ message: "Fonte de energia removida com sucesso." });
  } catch (error) {
    console.error("Erro no DELETE fonte de energia:", error);
    return NextResponse.json(
      { error: "Erro ao remover fonte de energia." },
      { status: 500 }
    );
  }
}
