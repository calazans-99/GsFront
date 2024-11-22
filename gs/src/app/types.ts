// Definição do tipo Microgrid básico
export type Microgrid = {
  modelo: string; 
  capacidade: string; 
  localizacao: string; 
  status: string; 
  identificacao: string; 
};

// Definição do tipo Microgrid com IDs adicionais
export type MicrogridId = {
  idMicrogrid: number; 
  idUsuario: number; 
  idProjeto: number; 
} & Microgrid;

// Definição do tipo para Geração e Consumo
export type GeracaoConsumo = {
  ano: number;
  idEstimativa: number;
  idMicrogrid: number;
  mes: number;
  wattsEstimados: number;
};

// Definição do tipo para Estimativas de Energia
export type EstimativaEnergia = {
  ano: number;
  idEstimativa: number;
  idMicrogrid: number;
  mes: number;
  wattsEstimados: number;
};

// Lista de estimativas
export type ListaEstimativas = EstimativaEnergia[];

// Definição do tipo para Fonte de Energia
export type FonteEnergia = {
  capacidadeInstalada: number;
  dataInstalacao: string;
  idFonte: number;
  idMicrogrid: number;
  status: string;
  tipo: string;
  unidadeCapacidade: string;
};

// Detalhamento adicional do Microgrid com novos campos
export type DetalhesMicrogrid = {
  endereco: string;
  idMicrogrid: number;
  nome: string;
  totalHabitantes: number;
  totalResidencias: number;
};
