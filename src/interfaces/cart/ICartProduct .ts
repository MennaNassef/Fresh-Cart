
import { ICategory } from './../ICategory';
import { IBrand } from './../IBrand';
import { ISubcategory } from './../ISubcategory';
export interface ICartProduct {
  count: number;
  _id: string;
  product: IProduct;
  price: number;
}
interface IProduct {
  _id: string;
  title: string;
  slug: string;
  quantity: number;
  imageCover: string;
  category: ICategory;
  brand: IBrand;
  subcategory: ISubcategory[];
  ratingsAverage: number;
  id: string;
}