import axios from "axios";

const API_URL = "http://localhost:8080/authentication";

export async function register(firstName: string, middleName: string, lastName: string, dateOfBirth: string, email: string, password: string, confirmPassword: string) {
    try {
        const response = await axios.post(API_URL + "/register", {
            firstName,
            middleName,
            lastName,
            dateOfBirth,
            email,
            password,
            confirmPassword
        })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function login(email: string, password: string) {
    try {
        const response = await axios.post(API_URL + "/login", {
            email,
            password,
        });
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

