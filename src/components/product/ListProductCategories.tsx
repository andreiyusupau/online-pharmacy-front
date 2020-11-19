import React, {useEffect, useState} from "react";
import { Table } from "react-bootstrap";
import {getAll, ProductCategory} from "../../services/productCategoryService";

export default function ListProductCategories(){

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

    return    <div className="ListProductCategories">
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {
                productCategories.map((productCategory:ProductCategory)=>{
                 return <tr>
                        <td>{productCategory.id}</td>
                        <td>{productCategory.name}</td>
                        <td>{productCategory.description}</td>
                    </tr>
                })
            }
            </tbody>
        </Table>
    </div>
}