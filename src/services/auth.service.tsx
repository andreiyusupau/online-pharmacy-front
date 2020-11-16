import axios from "axios";

const API_URL = "http://localhost:8080/authentication";

export function register(firstName:string,middleName:string,lastName:string,dateOfBirth:string, email:string, password:string,confirmPassword:string) {
    return axios.post(API_URL + "/register", {
        firstName,
        middleName,
        lastName,
        dateOfBirth,
        email,
        password,
        confirmPassword
    })
        .then((response) =>  response.data,
            (error) => console.log(error));
}

export function login (email:string, password:string){
    return axios
        .post(API_URL + "/login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
}

