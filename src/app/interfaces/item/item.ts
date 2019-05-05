export interface Item {
  key?: string;
  name: string;
  price: number;
  stock: string;
  createBy: string;
  lastUpdate: Date;
}

export interface QuantityBySize {
  itemKey?: string;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
}
