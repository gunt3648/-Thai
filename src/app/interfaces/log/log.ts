import { Action } from './../action/action.enum';
export interface Log {
  act: Action;
  actor: string;
  time: Date;
  msg?: string;
}
