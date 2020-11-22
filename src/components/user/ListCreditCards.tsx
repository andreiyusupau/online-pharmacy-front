import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";

//TODO:
export default function ListCreditCards(){
        const [creditCards, setCreditCards] = useState([]);

        useEffect(() => {
            fetchData();
        }, []);

        async function fetchData() {
            try {
             //   const data=await getAll();
           //     setCreditCards(data)
            } catch (e) {
                console.error(e);
            }
        }

        return    <div className="ListCreditCards">
        </div>
    }
