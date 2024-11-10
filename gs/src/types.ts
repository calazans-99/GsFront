export type TipoProduto = {
    $id: number;
    nome: string;
    preco: number;
    estoque: number;
}

export type TipoEstrela = {
    codigo:number;
    nome:string;
    preco:number;
    dataDeValidade:string;
    dataDeFabricacao:string;
}