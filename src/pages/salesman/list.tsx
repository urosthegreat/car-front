import React, {useEffect, useState} from "react";
import {Salesman} from "../../types";

export default function ListPage() {
    const [salesmen, setSalesman] = useState([]);
    const fetchData = () => {
        return fetch("http://localhost:5204/Salesman/ViewSalesman")
            .then((response) => response.json())
            .then((data) => {
                setSalesman(data);
                console.log(data);
            });
        // return fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
    }
    useEffect(() => {
        fetchData()
    }, []);

    return (<main>
        <style jsx>{`
              div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
              }
            `}</style>
        <h2>Salesmen List</h2>
        <ul>
            {salesmen && salesmen.length > 0 && salesmen.map((salesmanObj: Salesman) => (
                <li>
                    {`${salesmanObj.id} ${salesmanObj.firstName} ${salesmanObj.lastName} ${salesmanObj.email} ${salesmanObj.position}`}
                </li>
            ))}
        </ul>
    </main>);
}