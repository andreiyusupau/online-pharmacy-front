import React, {SyntheticEvent, useState} from "react";
import {Form, Button, InputGroup} from 'react-bootstrap';
import {login} from "../../services/authService";
import {useDispatch} from "react-redux";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event:SyntheticEvent) {
        console.log("EVENT LOGIN");
        event.preventDefault();
       const result=await login(email,password);
        console.log(result);
        dispatch({type: 'user/save', payload: result});
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-2 mr-sm-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        required
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputGroup>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
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