import axios from "axios";

const API_URL = "http://localhost:8080/users";

export interface User{
    id:number,
    firstName:string,
    middleName:string,
    lastName:string,
    dateOfBirth:Date,
    email:string,
    role:string
}

export async function add(firstName: string, middleName: string, lastName: string, dateOfBirth: string, email: string, password: string, confirmPassword: string, role:string) {
    try {
        const response = await axios.post(API_URL, {
            firstName,
            middleName,
            lastName,
            dateOfBirth,
            email,
            password,
            confirmPassword,
            role
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
        const response = await axios.get(API_URL+`/${id}`)
        return response.data;
    } catch (e) {
        console.log(e);
    }
}