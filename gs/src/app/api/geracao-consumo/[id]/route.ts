import { NextResponse } from "next/server";

const baseUrl = "http://localhost:8080/geracao-consumo-mensal"; // Substitua pelo URL correto do backend

// GET: Retorna todos os registros ou um específico pelo ID
export async function GET(req: Request, { params }: { params: { id?: string } }) {
  try {
    const url = params.id ? `${baseUrl}/${params.id}` : baseUrl;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar registro(s) de geração e consumo: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no GET geracao-consumo-mensal:", error);
    return NextResponse.json(
      { error: "Erro ao obter registro(s) de geração e consumo." },
      { status: 500 }
    );
  }
}

// POST: Adiciona um novo registro de geração e consumo
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro ao adicionar novo registro de geração e consumo.");
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Erro no POST geracao-consumo-mensal:", error);
    return NextResponse.json(
      { error: "Erro ao adicionar registro de geração e consumo." },
      { status: 500 }
    );
  }
}

// PUT: Atualiza um registro de geração e consumo existente pelo ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const response = await fetch(`${baseUrl}/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar registro de geração e consumo.");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no PUT geracao-consumo-mensal:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar registro de geração e consumo." },
      { status: 500 }
    );
  }
}

// DELETE: Remove um registro de geração e consumo pelo ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const response = await fetch(`${baseUrl}/${params.id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao remover registro de geração e consumo.");
    }

    return NextResponse.json({ message: "Registro removido com sucesso." });
  } catch (error) {
    console.error("Erro no DELETE geracao-consumo-mensal:", error);
    return NextResponse.json(
      { error: "Erro ao remover registro de geração e consumo." },
      { status: 500 }
    );
  }
}
