import React, {useEffect, useState} from "react";
import {Button, Card, CardDeck} from "react-bootstrap";
import pillsImg from "../images/pills.jpg"
import {getAll, Product} from "../services/productService";
import {useDispatch} from "react-redux";

export default function Home() {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data = await getAll();
            setProducts(data)
        } catch (e) {
            console.error(e);
        }
    }

    return <div>
        <CardDeck>
            {products.map((product: Product) => {
                return <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={pillsImg}/>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.price} $
                        </Card.Text>
                        <Button variant="primary"
                                onClick={() => dispatch({type: 'cart/add', payload: product.id})}>
                            Add to cart
                        </Button>
                    </Card.Body>
                </Card>
            })
            }
        </CardDeck>
    </div>;
}