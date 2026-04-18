
import { ICart } from './ICart ';
export interface ICartResponse {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: ICart;
}