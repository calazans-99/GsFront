"use client";
import { TipoProduto } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Produto({ params }: { params: { id: number } }) {

  const navigate = useRouter();

  const [produto, setProduto] = useState<TipoProduto>({
    $id: 0,
    nome: "",
    preco: 0,
    estoque: 0
  })

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch(`/api/base-produtos/${params.id}`);
      const data = await response.json();
      console.log(data);
      setProduto(data);
    }
    chamadaApi();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    try {
      const response = await fetch(`/api/base-produtos/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
      });

      if (response.ok) {
        alert("Produto atualizado com sucesso!");
        //Resetando os campos após o envio:
        setProduto({
          $id: 0,
          nome: "",
          preco: 0,
          estoque: 0
        });

        navigate.push("/produtos");
      }
    } catch (error) {
      console.error("Erro ao atualizar produto: ", error);
    }

  }

  return (
    <div>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="idNome">Nome produto</label>
            <input type="text"
              name="nome"
              id="idNome"
              value={produto?.nome}
              placeholder="Digite o nome do produto"
              required onChange={(e) => setProduto({ ...produto, nome: e.target.value })} />
          </div>
          <div>
            <label htmlFor="idPreco">Preço produto</label>
            <input type="number"
              name="preco"
              id="idPreco"
              value={produto?.preco}
              placeholder="Digite o preço do produto"
              required onChange={(e) => setProduto({ ...produto, preco: parseFloat(e.target.value) })} />
          </div>
          <div>
            <label htmlFor="idEstoque">Estoque produto</label>
            <input type="number"
              name="estoque"
              id="idEstoque"
              value={produto?.estoque}
              placeholder="Digite o estoque do produto"
              required onChange={(e) => setProduto({ ...produto, estoque: parseInt(e.target.value) })} />
          </div>
          <div>
            <button type="submit">Atualizar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
