import React, {SyntheticEvent, useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {add, get, ProductCategory} from "../../services/productCategoryService";
import {useParams} from "react-router-dom";

export default function EditProductCategory(){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const {id}:any=useParams();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data:ProductCategory=await get(id);
            setName(data.name);
            setDescription(data.description);
        } catch (e) {
            console.error(e);
        }
    }
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

    return    <div className="EditProductCategory">
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <br/>
                <Form.Control
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <br/>
                <Form.Control
                    autoFocus
                    as="textarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Update
            </Button>
        </Form>
    </div>
}