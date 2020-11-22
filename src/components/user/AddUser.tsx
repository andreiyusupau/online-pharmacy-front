import React, {SyntheticEvent, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {add} from "../../services/userService";

//TODO:
export default function AddUser(){
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role,setRole] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event:SyntheticEvent) {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            firstName: { value: string };
            middleName: { value: string };
            lastName: { value: string };
            dateOfBirth: { value:string };
            email: { value: string };
            password: { value: string };
            confirmPassword: { value: string };
            role:{value:string};
        };
        const email = target.email.value;
        const password = target.password.value;
        const result=await add(firstName,middleName,lastName,dateOfBirth,email,password,confirmPassword,role);
        console.log(result);
    }

    return    <div className="AddUser">
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
            <Form.Group controlId="confirmPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select"
                              onChange={(e) => setRole(e.target.value)}>
                    <option value="CONSUMER">Consumer</option>
                    <option value="PROCUREMENT_SPECIALIST">Procurement Specialist</option>
                    <option value="MODERATOR">Moderator</option>
                    <option value="ADMINISTRATOR">Administrator</option>
                </Form.Control>
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Register
            </Button>
        </Form>
    </div>
}