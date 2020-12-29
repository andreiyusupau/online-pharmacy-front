import React, {useEffect, useState} from "react";
import { Table,Button } from "react-bootstrap";
import {getAll, Procurement} from "../../services/procurementService";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store/rootReducer";

export default function ListProcurements(){

    const [procurements, setProcurements] = useState([]);
    const user=useSelector((state:RootState)=> state.user);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data=await getAll(user.id);
            setProcurements(data)
        } catch (e) {
            console.error(e);
        }
    }

    return    <div className="ListProcurements">
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
                procurements.map((procurement:Procurement)=>{
                    return <tr>
                        <td>{procurement.id}</td>
                        <td>{procurement.date}</td>
                        <td>{procurement.status}</td>
                        <td>
                            {procurement.status==='PREPARATION' &&
                                <Button href={"procurements/"+procurement.id+"/edit"}>Edit</Button>
                            }
                            <Button href={"procurements/"+procurement.id}>Show</Button>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </Table>
    </div>
}