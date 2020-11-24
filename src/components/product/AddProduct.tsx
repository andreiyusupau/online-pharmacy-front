import React, {SyntheticEvent, useEffect, useState} from "react";
import {Button, ButtonGroup, Form, ToggleButton} from "react-bootstrap";
import {getAll, ProductCategory} from "../../services/productCategoryService";
import {add} from "../../services/productService";

export default function AddProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [productCategoryId, setProductCategoryId] = useState(0);
    const [recipeRequired, setRecipeRequired] = useState(false);
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data=await getAll();
            setProductCategories(data)
        } catch (e) {
            console.error(e);
        }
    }

    function validateForm() {
        return true;
    }

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        const result = await add(name, price,productCategoryId,recipeRequired);
        console.log(result);
    }

    return <div className="AddProduct">
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
            <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    autoFocus
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="productCategory">
                <Form.Label>Product Category</Form.Label>
                <Form.Control as="select"
                              onChange={(e) => setProductCategoryId(parseInt(e.target.value))}>
                    {productCategories.map((productCategory: ProductCategory) => {
                        return <option value={productCategory.id}>{productCategory.name}</option>;
                    })}
                </Form.Control>
            </Form.Group>
            <ButtonGroup toggle>
                <ToggleButton
                    key="1"
                    type="radio"
                    variant="primary"
                    name="radio"
                    value="true"
                    checked={recipeRequired}
                    onChange={(e) => setRecipeRequired(!recipeRequired)}
                >
                    YES
                </ToggleButton>
                <ToggleButton
                    key="2"
                    type="radio"
                    variant="primary"
                    name="radio"
                    value="false"
                    checked={!recipeRequired}
                    onChange={(e) => setRecipeRequired(!recipeRequired)}
                >
                    NO
                </ToggleButton>
            </ButtonGroup>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Add
            </Button>
        </Form>
    </div>;
}