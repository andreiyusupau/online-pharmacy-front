import axios from "axios";

const API_URL = "http://localhost:8080/stock";

export async function getAll() {
    try {
        const response = await axios.get(API_URL)
        return response.data;
    } catch (e) {
        console.log(e);
    }
}