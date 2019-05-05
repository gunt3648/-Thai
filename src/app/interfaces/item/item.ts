export interface Item {
  key?: string;
  name: string;
  price: number;
  stock: string;
  createdBy: string;
  createdDate: Date | string;
}

export interface QuantityBySize {
  itemKey?: string;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
}
