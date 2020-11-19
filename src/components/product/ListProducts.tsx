import React, {useEffect, useState} from "react";
import { Table } from "react-bootstrap";
import {getAll, Product} from "../../services/productService";

export default function ListProducts(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data=await getAll();
            setProducts(data)
        } catch (e) {
            console.error(e);
        }
    }

    return    <div className="ListProducts">
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {
                products.map((product:Product)=>{
                    return <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                })
            }
            </tbody>
        </Table>
    </div>
}