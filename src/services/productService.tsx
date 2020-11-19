import axios from "axios";
import {ProductCategory} from "./productCategoryService";

const API_URL = "http://localhost:8080/products";

export interface Product{
    id:number,
    name:string,
    price:string,
    productCategory:ProductCategory,
    recipeRequired:boolean
}

export async function add(name: string, price: string,productCategoryId: number, recipeRequired:boolean) {
    try {
        const response = await axios.post(API_URL, {
            name,
            price,
            productCategoryId,
            recipeRequired
        })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function getAll() {
    try {
        const response = await axios.get(API_URL)
        return response.data;
    } catch (e) {
        console.log(e);
    }
}