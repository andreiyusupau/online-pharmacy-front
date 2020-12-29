import axios from "axios";
import {Product} from "./productService";
import {Position} from "../redux/reducer/cartSlice";

const API_URL = "http://localhost:8080/procurements";

export interface Procurement {
    id: number,
    date: Date,
    status: string,
    positions: ProcurementPosition[]
}

export interface ProcurementPosition {
    id: number,
    product: Product,
    quantity: number,
    procurementId: number
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
        const response = await axios.get(API_URL,
            {
                params:
                    {ownerId: ownerId}
            })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function get(procurementId: number) {
    try {
        const response = await axios.get(API_URL + `/${procurementId}`)
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function confirm(procurementId: number) {
    try {
        const response = await axios.patch(API_URL + `/${procurementId}/confirm`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function complete(procurementId: number) {
    try {
        const response = await axios.patch(API_URL + `/${procurementId}/complete`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function cancel(procurementId: number) {
    try {
        const response = await axios.patch(API_URL + `/${procurementId}/cancel`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}