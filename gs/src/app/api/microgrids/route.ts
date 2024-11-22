import { NextResponse } from "next/server";

const baseUrl = "http://localhost:8080/microgrid"; // Substitua pelo URL correto do backend

// GET: Retorna todos os microgrids ou um específico pelo ID
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const url = id ? `${baseUrl}/${id}` : baseUrl;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar microgrid(s): ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no GET microgrid:", error);
    return NextResponse.json(
      { error: "Erro ao obter microgrid(s)." },
      { status: 500 }
    );
  }
}

// POST: Adiciona um novo microgrid
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro ao adicionar novo microgrid.");
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Erro no POST microgrid:", error);
    return NextResponse.json(
      { error: "Erro ao adicionar microgrid." },
      { status: 500 }
    );
  }
}

// PUT: Atualiza um microgrid existente pelo ID
export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID é obrigatório para atualizar um microgrid." },
        { status: 400 }
      );
    }

    const body = await req.json();

    const response = await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar microgrid.");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro no PUT microgrid:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar microgrid." },
      { status: 500 }
    );
  }
}

// DELETE: Remove um microgrid pelo ID
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID é obrigatório para remover um microgrid." },
        { status: 400 }
      );
    }

    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao remover microgrid.");
    }

    return NextResponse.json({ message: "Microgrid removido com sucesso." });
  } catch (error) {
    console.error("Erro no DELETE microgrid:", error);
    return NextResponse.json(
      { error: "Erro ao remover microgrid." },
      { status: 500 }
    );
  }
}
