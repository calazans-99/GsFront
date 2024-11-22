import { NextResponse } from "next/server";

const baseUrl = "http://localhost:8080/estimativa-geracao"; // Substitua pelo URL correto do backend

// GET: Retorna todas as estimativas de geração
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const url = id ? `${baseUrl}/${id}` : baseUrl;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar estimativa(s) do backend: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no GET estimativa-geracao:", error);
    return NextResponse.json(
      { error: "Erro ao obter estimativa(s) de geração." },
      { status: 500 }
    );
  }
}

// POST: Adiciona uma nova estimativa de geração
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro ao adicionar nova estimativa.");
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Erro no POST estimativa-geracao:", error);
    return NextResponse.json(
      { error: "Erro ao adicionar estimativa de geração." },
      { status: 500 }
    );
  }
}

// PUT: Atualiza uma estimativa de geração
export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID é obrigatório para atualizar uma estimativa." },
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
      throw new Error("Erro ao atualizar estimativa.");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no PUT estimativa-geracao:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar estimativa de geração." },
      { status: 500 }
    );
  }
}

// DELETE: Remove uma estimativa de geração
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID é obrigatório para remover uma estimativa." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao remover estimativa.");
    }

    return NextResponse.json({ message: "Estimativa removida com sucesso." });
  } catch (error) {
    console.error("Erro no DELETE estimativa-geracao:", error);
    return NextResponse.json(
      { error: "Erro ao remover estimativa de geração." },
      { status: 500 }
    );
  }
}
