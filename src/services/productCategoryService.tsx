import axios from "axios";

const API_URL = "http://localhost:8080/productcategories";

export interface ProductCategory{
    id:number,
    name:string,
    description:string
}

export async function add(name: string, description: string) {
    try {
        const response = await axios.post(API_URL, {
            name,
            description
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

export async function get(id:number) {
    try {
        const response = await axios.get(API_URL+'/'+id)
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function update(id:number, name: string, description: string) {
    try {
        const response = await axios.put(API_URL+`/${id}`, {
            name,
            description
        })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}