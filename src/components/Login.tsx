import React, {SyntheticEvent, useState} from "react";
import { Form,Button } from 'react-bootstrap';
import {login} from "../services/auth.service"
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event:SyntheticEvent) {
        console.log("EVENT LOGIN");
        event.preventDefault();
        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
       const result=await login(email,password);
        console.log(result);
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}