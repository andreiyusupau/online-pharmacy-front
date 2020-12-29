import React, {SyntheticEvent, useEffect, useState} from "react";
import {Badge, Button, Table} from "react-bootstrap";
import {cancel, complete, confirm, get, Procurement, ProcurementPosition} from "../../services/procurementService";
import {useParams} from "react-router-dom";

export default function ShowProcurement() {

    const [procurement, setProcurement] = useState<Procurement>({
        id: 0,
        date: new Date(),
        status: '',
        positions: []
    });
    const {id}: any = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data = await get(id);
            console.log(data);
            setProcurement(data);
        } catch (e) {
            console.error(e);
        }
    }

    async function handleConfirm(event: SyntheticEvent) {
        event.preventDefault();
        const result = await confirm(procurement.id);
        const updatedStatus = result.status;
        setProcurement({...procurement, status: updatedStatus});
        console.log(result);
    }

    async function handleComplete(event: SyntheticEvent) {
        event.preventDefault();
        const result = await complete(procurement.id);
        const updatedStatus = result.status;
        setProcurement({...procurement, status: updatedStatus});
        console.log(result);
    }

    async function handleCancel(event: SyntheticEvent) {
        event.preventDefault();
        const result = await cancel(procurement.id);
        const updatedStatus = result.status;
        setProcurement({...procurement, status: updatedStatus});
        console.log(result);
    }

    return <div className="ShowProcurement">
        <p>STATUS: {procurement.status}</p>
        <p>DATE: {procurement.date}</p>
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
                procurement.positions.map((procurementPosition: ProcurementPosition) => {
                    const product = procurementPosition.product;
                    return <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.recipeRequired ?
                            <Badge variant="primary">Required</Badge> :
                            <Badge variant="secondary">Not Required</Badge>
                        }</td>
                        <td>{procurementPosition.quantity}</td>
                        <td>{product.price * procurementPosition.quantity}</td>
                    </tr>
                })
            }
            </tbody>
        </Table>
        <p>Total:{procurement.positions.reduce<number>((accumulator: number, position: ProcurementPosition) => accumulator +
            position.quantity * position.product.price, 0)}</p>
        {
            procurement.status === 'PREPARATION' &&
            <Button onClick={handleConfirm}>Approve</Button>
        }
        {
            procurement.status === 'APPROVED' &&
            <Button onClick={handleComplete}>Complete</Button>
        }
        {
            !(procurement.status === 'COMPLETE' || procurement.status === 'CANCELED') &&
            <Button onClick={handleCancel}>Cancel</Button>
        }
    </div>
}