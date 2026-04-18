
import { IProduct } from '@/interfaces/IProduct';
import { IMetadata } from './../interfaces/IMetadata';
export type ResponseType<t>={
    results:number;
    metadata:IMetadata;
    data:t[];
}