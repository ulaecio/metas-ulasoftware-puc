//LISTA DE VENDAS
export type sales = {
  id: number;
  empresa: number;
  setor: String;
  rota: number;
  vlr_venda: number;
  qtde_venda: number;
  produto: String;
  tipo_bebida: String;
  familia: String;
  data_vendas: Date;
};

//PAGINAÇÃO DAS VENDAS
export type salePage = {
  content?: sales[];
  empty?: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements?: number;
  totalElements: number;
  totalPages: number;
  size?: number;
};
export type Venda = {
  id: number;
  value: number;
  user: {
    name: String;
  };
};
