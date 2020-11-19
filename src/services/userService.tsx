import axios from "axios";

const API_URL = "http://localhost:8080/users";

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