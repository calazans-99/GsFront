"use client";
import { TipoProduto } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineDeleteForever as Excluir } from "react-icons/md";
import { GrEdit as Editar} from "react-icons/gr";

export default function Produtos() {

    const navigate = useRouter();

    const [lista, setLista] = useState<TipoProduto[]>([])

    useEffect(() => {
        const chamadaApi = async () => {
            
            const response = await fetch("/api/base-produtos");
            const data = await response.json();
            console.log(data);
            setLista(data);
        }
        chamadaApi();
    }, []);

    const handleDelete = async (id:number)=>{

        try {
            const response = await fetch( `/api/base-produtos/${id}`,{
                method: 'DELETE',
            });
            
            if(response.ok){
                alert("Produto removido com sucesso!")
                navigate.push("/");
            }

        } catch (error) {
            console.error("Falha ao remover produto.", error);
        }

    }


    return (
        <div>
            <h1>Produtos</h1>
            <table className="tabelaProd">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Editar|Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((produto) => (
                        <tr key={produto.$id}>
                            <td>{produto.$id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.estoque}</td>
                            <td> <Link href={`/produtos/produto/${produto.$id}`}><Editar className="inline"/> </Link> |
                             <Link href="#" onClick={()=> handleDelete(produto.$id)}> <Excluir className="inline"/> </Link> </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>Total de produtos: {lista.length}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
