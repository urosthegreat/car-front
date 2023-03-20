import { useState } from 'react';

export default function CarForm() {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState(0);
    const [yearOfMake, setYear] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Submitted form with values: ${manufacturer}, ${model}, ${price}, ${yearOfMake}`);

        const formData = {
            manufacturer,
            model,
            price,
            yearOfMake
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        const response = await fetch('http://localhost:5204/Car/InsertCar', requestOptions);
        const data = await response.json();
        console.log(data);
    };

    const handleReset = () => {
        setManufacturer('');
        setModel('');
        setPrice(0);
        setYear('');
    };

    const maxDate = new Date().toISOString().split('T')[0];

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <label htmlFor="manufacturer">Manufacturer:</label>
                <input type="text" id="manufacturer" name="manufacturer" maxLength={50} value={manufacturer} onChange={(event) => setManufacturer(event.target.value)} required />
<br/>
                <label htmlFor="model">Model:</label>
                <input type="text" id="model" name="model" maxLength={50} value={model} onChange={(event) => setModel(event.target.value)} required />
                <br/>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" min="0" value={price} onChange={(event) => setPrice(Number(event.target.value))} required />
                <br/>
                <label htmlFor="yearOfMake">Year of make:</label>
                <input type="date" id="yearOfMake" name="yearOfMake" max={maxDate} value={yearOfMake} onChange={(event) => setYear(event.target.value)} required />
                <br/>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
}
