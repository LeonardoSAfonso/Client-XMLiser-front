
export interface Client {
  id: number;
  name: string;
  cpf: string;
  marital_status: number;
  father: string;
  mother: string;
  partner: string;
  rg: string;
  salary: string;
  kind: string;
  electoral_card: string;
  gender: string;
  cellphone: string;
  zipcode: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  email: string;
  birthday: string;
  user_id: number;
  createdAt: string;
  updatedAt: string;
}


export interface InsertClient {
  id?: number;
  name: string;
  cpf: string;
  marital_status: number;
  father: string;
  mother: string;
  partner: string;
  rg: string;
  salary: string;
  kind: string;
  electoral_card: string;
  gender: string;
  cellphone: string;
  zipcode: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  email: string;
  birthday: string;
}


export interface FilteredCity {
  city: string;
  sumSalaries: number;
  totalElements: number;
}

export interface FilteredGender {
  gender: string;
  sumSalaries: number;
  totalElements: number;
}

export interface FilteredKind {
  kind: string;
  sumSalaries: number;
  totalElements: number;
}

export interface Filtered {
  [key: string]: string | number;
  sumSalaries: number;
  totalElements: number;
}

export interface ExportedClient {
  file: string
}



