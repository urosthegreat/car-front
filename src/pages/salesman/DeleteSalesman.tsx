import {useState} from "react";

export default function DeleteSalesman() {
    const [id, setSalesmanId] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Submitted form with values: ${id}`);
        const formData = {id}
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        };
        const response = await fetch('http://localhost:5204/Salesman/DeleteSalesman', requestOptions);
        const data = await response.json();
        console.log(data);
    }
    const handleReset = () => {
        setSalesmanId('');
    };
    return (
        <div className="form-container">
            <h2>Delete Salesman</h2>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <label htmlFor="id">Salesman ID:</label>
                <input type="text" id="id" name="id" maxLength={50} value={id}
                       onChange={(event) => setSalesmanId(event.target.value)} required/>
                <br/>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    )
}