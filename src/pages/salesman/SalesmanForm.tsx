import { useState } from 'react';

export default function SalesmanForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`Submitted form with values: ${firstName}, ${lastName}, ${email}, ${position}`);

        const formData = {
            firstName,
            lastName,
            email,
            position
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        const response = await fetch('http://localhost:5204/Salesman/InsertSalesman', requestOptions);
        const data = await response.json();
        console.log(data);
    };

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPosition('');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" maxLength={50} value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
                <br/>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" maxLength={50} value={lastName} onChange={(event) => setLastName(event.target.value)} required />
                <br/>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" maxLength={50} value={email} onChange={(event) => setEmail((event.target.value))} required />
                <br/>
                <label htmlFor="position">Position:</label>
                <input type="text" id="position" name="position" maxLength={50} value={position} onChange={(event) => setPosition((event.target.value))} required />
                <br/>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
}
