import { IUser } from "../services/IUser";

export interface IDevopsReactProps {
  description: string;
  user: IUser;
  mathValue: number;
  addNumbers: (x: number, y :number) => number;
}
