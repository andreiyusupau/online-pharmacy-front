import React, {useEffect, useState} from "react";
import {Table,Button} from "react-bootstrap";
import {get, User} from "../../services/userService";
import {useParams} from "react-router-dom";

//TODO:
export default function ShowUser(){
    const [user, setUser] = useState<User>({id:-1,firstName:'',middleName:'',lastName:'',dateOfBirth:new Date(),email:'',role:''});
    const {id}:any=useParams();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const data=await get(id);
            setUser(data);
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }

    return    <div className="User">
        <Table striped bordered hover variant="dark">

            <tbody>
          <tr>
              <td>Id</td>
              <td>{user.id}</td>
          </tr>
          <tr>
              <td>First Name</td>
              <td>{user.firstName}</td>
          </tr>
          <tr>
              <td>Middle Name</td>
              <td>{user.middleName}</td>
          </tr>
          <tr>
              <td>Last Name</td>
              <td>{user.lastName}</td>
          </tr>
          <tr>
              <td>Date of Birth</td>
              <td>{user.dateOfBirth}</td>
          </tr>
          <tr>
              <td>Email</td>
              <td>{user.email}</td>
          </tr>
          <tr>
              <td>Role</td>
              <td>{user.role.toLowerCase()}</td>
          </tr>
            </tbody>
        </Table>
        <Button href="/edit">Edit profile</Button>
        <Button href="/edit">Credit Cards</Button>
        <Button href="/edit">Orders</Button>
    </div>
}