import React, {useEffect, useState} from "react";
import {Car} from "../../types";

export default function ListPage() {
    const [cars, setCar] = useState([]);
    const fetchData = () => {
        return fetch("http://localhost:5204/Car/ViewCars")
            .then((response) => response.json())
            .then((data) => {
                setCar(data);
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
        <h2>Car List</h2>
        <ul>
            {cars && cars.length > 0 && cars.map((carObj: Car) => (
                <li>
                    {`${carObj.id} ${carObj.manufacturer} ${carObj.model} ${carObj.price} ${carObj.yearOfMake}`}
                </li>
            ))}
        </ul>
    </main>);
}