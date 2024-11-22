export type TipoProduto = {
    id: number; 
    nome: string; 
    descricao: string; 
    preco: number; 
    estoque: number; 
    categoria: string; 
};

export type TipoEquipamento = {
    id: number; 
    nome: string; 
    preco: number; 
    dataDeValidade: string; 
    dataDeFabricacao: string; 
    fornecedor: string; 
    tipo: string; 
};
