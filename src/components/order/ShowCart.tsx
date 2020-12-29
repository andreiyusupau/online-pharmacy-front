import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store/rootReducer";
import {Button, Table} from "react-bootstrap";
import {Position} from "../../redux/reducer/cartSlice";
import {add} from "../../services/orderService";

export default function ShowCart() {

    const cartPositions = useSelector((state: RootState) => state.cart.positions);
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    async function handleCreateOrder() {
        const result = await add(user.id, cartPositions);
        console.log(result);
    }

    return <div className="ShowCart">
        {cartPositions.length>0?
            <>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    cartPositions.map((position: Position) => {
                        return <tr>
                            <td>{position.productId}</td>
                            <td>{position.quantity}</td>
                            <td>
                                <Button onClick={() => dispatch({
                                    type: 'cart/add',
                                    payload: position.productId
                                })}>+</Button>
                                <Button
                                    onClick={() => dispatch({
                                        type: 'cart/remove',
                                        payload: position.productId
                                    })}>-</Button>
                                <Button onClick={() => dispatch({
                                    type: 'cart/removeAll',
                                    payload: position.productId
                                })}>X</Button>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
            <Button onClick={handleCreateOrder}>Create Order</Button>
            <Button onClick={() => dispatch({type: 'cart/clean'})}>Clear Cart</Button>
            </>
            :
            <p>You cart is empty. Let's make shopping!</p>
        }
    </div>;
}