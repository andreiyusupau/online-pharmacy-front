import React, {SyntheticEvent, useState} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import {register} from "../../services/authService";

export default function Register(){
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event:SyntheticEvent) {
event.preventDefault();
        const result=await register(firstName,middleName,lastName,dateOfBirth,email,password,confirmPassword);
        console.log(result);
    }

    return    <div className="Register">
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="middleName">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                    autoFocus
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
            </Form.Group>
            <InputGroup className="mb-2 mr-sm-2">
                <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    autoFocus
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputGroup>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Register
            </Button>
        </Form>
    </div>
}