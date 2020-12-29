import React, {SyntheticEvent, useEffect, useState} from "react";
import {Button, Col, Form} from "react-bootstrap";
import {getAll, Product} from "../../services/productService";
import {add} from "../../services/procurementService";
import {Position} from "../../redux/reducer/cartSlice";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store/rootReducer";

export default function AddProduct() {
    const [products, setProducts] = useState<Product[]>([]);
    const [positions, setPositions] = useState<Position[]>([{productId: 0, quantity: 0}]);
    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data = await getAll();
            setProducts(data);
        } catch (e) {
            console.error(e);
        }
    }

    const handleProductIdChange = (e: any, index: number) => {
        const list = [...positions];
        list[index].productId = e.target.value;
        setPositions(list);
    };

    const handleQuantityChange = (e: any, index: number) => {
        const list = [...positions];
        list[index].quantity = e.target.value;
        setPositions(list);
    };

    const handleRemoveClick = (index: number) => {
        const list = [...positions];
        list.splice(index, 1);
        setPositions(list);
    };

    const handleAddClick = () => {
        setPositions([...positions, {productId: 0, quantity: 0}]);
    };

    function validateForm() {
        return true;
    }

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        const result = await add(user.id, positions);
        console.log(result);
    }

    return <div className="AddProcurement">
        <Form onSubmit={handleSubmit}>
            {positions.map((position, i) => {
                return <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Product</Form.Label>
                        <Form.Control as="select"
                                      onChange={e => handleProductIdChange(e, i)}>
                            {products.map((product: Product) => {
                                return <option value={product.id}>{product.name}</option>;
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            autoFocus
                            type="number"
                            value={position.quantity}
                            onChange={e => handleQuantityChange(e, i)}
                        />
                    </Form.Group>
                    {positions.length !== 1 &&
                    <Col>
                        <Button block size="lg" onClick={() => handleRemoveClick(i)}>
                            Remove
                        </Button>
                    </Col>}
                </Form.Row>
            })
            }
            <Button block size="lg" onClick={handleAddClick}>
                Add Position
            </Button>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Add Procurement
            </Button>
        </Form>
    </div>;
}