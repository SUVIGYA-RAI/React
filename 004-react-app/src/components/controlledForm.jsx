import { useState } from 'react'

function ControlledForm() {
    const [name, setName] = useState("");

    return (
        <div>
            <h2>Controlled Form</h2>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

            <p>You typed: {name}</p>
        </div>
    )
}

export default ControlledForm;