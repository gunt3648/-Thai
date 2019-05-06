export interface Item {
  key?: string | any;
  name: string;
  price: number;
  stock: string;
  createdBy: string;
  createdDate: Date | string;
  size: QuantityBySize;
}

export enum Size {
  s = 1,
  m = 2,
  l = 3,
  xl = 4,
  xxl = 5
}

export interface QuantityBySize {
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface QuantityWithKey {
  key: string;
  quantity: QuantityBySize;
}
