export type Microgrid = {
    modelo: string; 
    capacidade: string; 
    localizacao: string; 
    status: string; 
    identificacao: string; 
  };
  
  export type MicrogridId = {
    idMicrogrid: number; 
    idUsuario: number; 
    idProjeto: number; 
  } & Microgrid;
  