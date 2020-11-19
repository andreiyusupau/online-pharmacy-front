import axios from "axios";

const API_URL = "http://localhost:8080/creditcards";

export async function add(cardNumber:string,ownerName:string,validThru:Date,cvv:String,ownerId:number) {
    try {
        const response = await axios.post(API_URL, {
            cardNumber,
            ownerName,
            validThru,
            cvv,
            ownerId
        })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}