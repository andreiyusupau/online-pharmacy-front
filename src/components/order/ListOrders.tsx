import React, {useEffect, useState} from "react";
import { Table,Button } from "react-bootstrap";
import {getAll, Order} from "../../services/orderService";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store/rootReducer";

export default function ListOrders(){

    const [orders, setOrders] = useState([]);
    const user=useSelector((state:RootState)=> state.user);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data=await getAll(user.id);
            setOrders(data)
        } catch (e) {
            console.error(e);
        }
    }

    return    <div className="ListOrders">
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>id</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                orders.map((order:Order)=>{
                    return <tr>
                        <td>{order.id}</td>
                        <td>{order.date}</td>
                        <td>{order.status}</td>
                        <td>
                        {order.status==='PREPARATION' ? (
                            <Button href={"orders/"+order.id+"/edit"}>Edit</Button>
                        ) : (
                            <Button href={"orders/"+order.id}>Show</Button>
                        )}
                        </td>
                    </tr>
                })
            }
            </tbody>
        </Table>
    </div>
}