import React, {useState} from "react";

export default function RemoveSoldCars() {
    const [id, setSalesmanId] = useState('');
    const [carId, setCarId] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Submitted form with values: salesman[ ${id} ] car[ ${carId}]`);
        const url = `http://localhost:5204/Salesman/RemoveSoldCar?&soldCarId=${carId}&salesmanId=${id}`;
        console.log(url);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(null)
        };
        await fetch(url, requestOptions);
    }
    const handleReset = () => {
        setSalesmanId('');
        setCarId('');
    };
    return (<div className="form-container">
        <h2>Remove Sold Cars</h2>
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <label htmlFor="carId">Car ID:</label>
            <input type="text" id="carId" name="carId" maxLength={50} value={carId}
                   onChange={(event) => setCarId(event.target.value)} required/>
            <br/>
            <label htmlFor="id">Salesman ID:</label>
            <input type="text" id="id" name="id" maxLength={50} value={id}
                   onChange={(event) => setSalesmanId(event.target.value)} required/>
            <br/>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
    </div>)
}