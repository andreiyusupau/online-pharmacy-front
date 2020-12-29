import axios from "axios";
import {Position} from "../redux/reducer/cartSlice";
import {Product} from "./productService";
import store from "../redux/store/store";

const API_URL = 'http://localhost:8080/orders';

export interface Order {
    id: number,
    date: Date,
    status: string,
    orderPositions: OrderPosition[]
}

export interface OrderPosition {
    id: number,
    product: Product,
    quantity: number,
    orderId: number
}

export async function add(ownerId: number, positions: Position[]) {
    try {
        const response = await axios.post(API_URL, {
            ownerId,
            positions
        })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function getAll(ownerId: number) {
    try {
        const jwtToken = store.getState()
            .user
            .jwt;
        const response = await axios.get(API_URL,
            {
                headers: {
                    Authorization: "Bearer " + jwtToken
                },
                params: {
                    ownerId: ownerId
                }
            })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function getPositions(orderId: number) {
    try {
        const response = await axios.get(API_URL + `/${orderId}/positions`)
        return response.data;
    } catch (e) {
        console.log(e);
    }
}