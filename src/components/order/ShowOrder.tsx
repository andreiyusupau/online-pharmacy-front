import React, {useEffect, useState} from "react";
import {Table, Badge} from "react-bootstrap";
import {getPositions, OrderPosition} from "../../services/orderService";
import {useParams} from "react-router-dom";

export default function ShowOrder(){

    const [orderPositions, setOrderPositions] = useState([]);
    const {id}: any = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data=await getPositions(id);
            console.log(data);
            setOrderPositions(data);
        } catch (e) {
            console.error(e);
        }
    }

    return    <div className="ListOrderPositions">
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Product</th>
                <th>Price per Unit</th>
                <th>Recipe</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
            {
                orderPositions.map((orderPosition:OrderPosition)=>{
                    return <tr>
                        <td>{orderPosition.product.name}</td>
                        <td>{orderPosition.product.price}</td>
                        <td>{orderPosition.product.recipeRequired?
                            <Badge variant="primary">Required</Badge>:
                            <Badge variant="secondary">Not Required</Badge>
                        }</td>
                        <td>{orderPosition.quantity}</td>
                        <td>{orderPosition.product.price*orderPosition.quantity}</td>
                    </tr>
                })
            }
            </tbody>
        </Table>
        <p>Total:{orderPositions.reduce<number>((accumulator:number, position:OrderPosition) => accumulator +
            position.quantity*position.product.price,0)}</p>
    </div>
}