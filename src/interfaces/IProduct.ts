
import { ISubcategory } from './ISubcategory';
import { ICategory } from './ICategory';
import { IBrand } from './IBrand';
export interface IProduct{
    sold:number;
    images:string[];
    subcategory:ISubcategory[];
    _id:string;
    id:string;
    title:string;
    slug:string;
    description:string;
    quantity:number;
    price:number;
    imageCover:string;
    category:ICategory;
    brand:IBrand;
    ratingsAverage:number;
    ratingsQuantity:number;
    createdAt:string;
    updateAt:string
    priceAfterDiscount:number
}