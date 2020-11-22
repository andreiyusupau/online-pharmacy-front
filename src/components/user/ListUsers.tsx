import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import {getAll, User} from "../../services/userService";

export default function ListUsers(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data=await getAll();
            setUsers(data)
        } catch (e) {
            console.error(e);
        }
    }

    return    <div className="ListUsers">
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Date Of Birth</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user:User)=>{
                    return <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.middleName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.dateOfBirth}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                })
            }
            </tbody>
        </Table>
    </div>
}


