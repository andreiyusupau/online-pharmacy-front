import React, {SyntheticEvent, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {add} from "../../services/creditCardService";

export default function AddCreditCard() {
    const [cardNumber, setCardNumber] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [validThru, setValidThru] = useState("");
    const [cvv, setCvv] = useState("");
    const {ownerId}: any = useParams();


    function validateForm() {
        return true;
        //return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            cardNumber: { value: string };
            ownerName: { value: string };
            validThru: { value: Date };
            cvv: { value: string };
            ownerId: { value: number };
        };
        const cardNumber = target.cardNumber.value;
        const ownerName = target.ownerName.value;
        const validThru = target.validThru.value;
        const cvv = target.cvv.value;
        const result = await add(cardNumber, ownerName, validThru, cvv, ownerId);
        console.log(result);
    }

    return <div className="AddCreditCard">
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="cardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="ownerName">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="validThru">
                <Form.Label>Valid Thru</Form.Label>
                <Form.Control
                    autoFocus
                    type="date"
                    value={validThru}
                    onChange={(e) => setValidThru(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="cvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                    autoFocus
                    type="string"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Add
            </Button>
        </Form>
    </div>
}