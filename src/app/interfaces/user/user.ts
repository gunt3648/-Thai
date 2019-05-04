import { AuthLevel } from './../auth-level/auth-level.enum';

export interface UserInformation {
  email: string;
  name: string;
  authLevel: AuthLevel;

  key?: string;
  uid?: string;

  createDate: Date;
  createBy?: string;
}
