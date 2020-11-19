import React, {SyntheticEvent, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {add} from "../../services/productCategoryService";

export default function EditProduct(){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    function validateForm() {
        return name.length > 0 && description.length > 0;
    }

    async function handleSubmit(event:SyntheticEvent) {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            name: { value: string };
            description: { value: string };
        };
        const name = target.name.value;
        const description = target.description.value;
        const result=await add(name,description);
        console.log(result);
    }

    return    <div className="AddProductCategory">
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Add
            </Button>
        </Form>
    </div>
}