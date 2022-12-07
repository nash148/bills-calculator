
export interface IField {
  label: string;
  name: string;
  value: number;
}

export interface ITenant {
  fields: IField[];
  result: number;
  numOfPersons: number;
}

export interface ITenantsDetails { 
  [name: string]: ITenant;
}