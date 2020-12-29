import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import {getAll} from "../../services/stockService";

export default function ListStockPositions(){

    const [stockPositions, setStockPositions] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data = await getAll();
            console.log(data);
            setStockPositions(data)
        } catch (e) {
            console.error(e);
        }
    }

// TODO:
    return <div className="ListStockPositions">
        {stockPositions.length>0?
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{*/}
                    {/*    cartPositions.map((position: Position) => {*/}
                    {/*        return <tr>*/}
                    {/*            <td>{position.productId}</td>*/}
                    {/*            <td>{position.quantity}</td>*/}
                    {/*        </tr>*/}
                    {/*    })*/}
                    {/*}*/}
                    </tbody>
                </Table>
            :
            <p>Stock is empty.</p>
        }
    </div>;
}