import { NextResponse } from "next/server";

const baseUrl = "http://localhost:8080/geracao-consumo"; // Substitua pelo URL correto do backend

// GET: Retorna todos os registros ou um específico pelo ID
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const url = id ? `${baseUrl}/${id}` : baseUrl;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar geração e consumo: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no GET geração-consumo:", error);
    return NextResponse.json(
      { error: "Erro ao obter geração e consumo." },
      { status: 500 }
    );
  }
}

// POST: Adiciona um novo registro
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro ao adicionar novo registro.");
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Erro no POST geração-consumo:", error);
    return NextResponse.json(
      { error: "Erro ao adicionar geração e consumo." },
      { status: 500 }
    );
  }
}

// PUT: Atualiza um registro existente pelo ID
export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID é obrigatório para atualizar um registro." },
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
      throw new Error("Erro ao atualizar registro.");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no PUT geração-consumo:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar geração e consumo." },
      { status: 500 }
    );
  }
}

// DELETE: Remove um registro pelo ID
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID é obrigatório para remover um registro." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao remover registro.");
    }

    return NextResponse.json({ message: "Registro removido com sucesso." });
  } catch (error) {
    console.error("Erro no DELETE geração-consumo:", error);
    return NextResponse.json(
      { error: "Erro ao remover geração e consumo." },
      { status: 500 }
    );
  }
}
