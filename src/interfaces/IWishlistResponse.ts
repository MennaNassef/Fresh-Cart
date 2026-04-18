import { IWishlist } from "./IWishlist";

export interface IWishlistResponse {
  status: string;
  message: string;
  data: string[]; // array of product IDs
}