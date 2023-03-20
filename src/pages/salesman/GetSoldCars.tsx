import React, {useState} from "react";
import {Car} from "../../types";

export default function GetSoldCars() {
    const [id, setSalesmanId] = useState('');
    const [cars, setCar] = useState([]);
    const url = 'http://localhost:5204/Salesman/GetSoldCars?salesmanId=';
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Submitted form with values: ${id}`);

        const customUrl = url.concat(id);
        const response = await fetch(customUrl);
        const data = await response.json();
        console.log(data);
        setCar(data);
    }
    const handleReset = () => {
        setSalesmanId('');
    };
    return (<div className="form-container">
        <h2> Sold cars </h2>
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <label htmlFor="id">Salesman ID:</label>
            <input type="text" id="id" name="id" maxLength={50} value={id}
                   onChange={(event) => setSalesmanId(event.target.value)} required/>
            <br/>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
        <ul>
            {cars && cars.length > 0 && cars.map((carObj: Car) => (
                <li>
                    {`${carObj.id} ${carObj.manufacturer} ${carObj.model} ${carObj.price} ${carObj.yearOfMake}`}
                </li>
            ))}
        </ul>
    </div>)
}