export interface Store {
  name: string;
  location: string;
  contact: string;

  key?: string;

  createdDate: Date | string;
  createdBy?: string;
}
