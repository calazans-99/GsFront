import { client } from "@/lib/appwrite_client";
import { TipoProduto } from "@/types";
import { Databases } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);

//GET BY ID
export async function GET(request: Request, { params }: { params: { id: number } }) {
    try {
        const response = await database.getDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string, params.id.toString());

        return NextResponse.json(response);

    } catch (error) {
        console.error("Falha na leitura do produto: ", error);
        return NextResponse.json({ error: "Erro ao selecionar produto!: " + error });
    }
}

// export async function GET(request: Request, { params }: { params: { id: number } }) {
//     try {
    
//         const produto = await getProdutosById(params.id);

//         return NextResponse.json(produto);

//     } catch (error) {
//         return NextResponse.json({ error: "Erro ao selecionar produto!: " + error });
//     }
// }
//GET BY ID

//DELETE
export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    try {
        await database.deleteDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string, params.id.toString());
        return NextResponse.json({ msg: "Produto removido com sucesso!" });

    } catch (error) {
        console.error("Falha na exclusão do produto: ", error);
        return NextResponse.json({ error: "Erro ao excluir produto!: " + error });
    }
}

// export async function DELETE(request: Request, { params }: { params: { id: number } }) {
//     try {
//         await deleteProduto(params.id);
//         return NextResponse.json({ msg: "Produto removido com sucesso!" });
//     } catch (error) {
//         return NextResponse.json({ error: "Erro ao excluir produto!: " + error });
//     }
// }
//DELETE

//PUT
export async function PUT(request: Request, { params }: { params: { id: number } }) {
    try {
        const {nome, preco, estoque} = await request.json();
        const produto = {nome, preco, estoque} as TipoProduto;

        await database.updateDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string, params.id.toString(), produto);

        return NextResponse.json({ msg: "Produto atualizado com sucesso!" });

    } catch (error) {
        console.error("Falha na atualização do produto: ", error);
        return NextResponse.json({ error: "Erro ao atualizar produto!: " + error });
    }
}
// export async function PUT(request: Request, { params }: { params: { id: number } }) {
//     try {
//         const {nome, preco, estoque} = await request.json();
//         const produto = {nome, preco, estoque} as TipoProduto;
//         await atualizaProduto(produto,params.id);
        
//         return NextResponse.json({ msg: "Produto atualizado com sucesso!" });
//     } catch (error) {
//         return NextResponse.json({ error: "Erro ao atualizar produto!: " + error });
//     }
// }
