// Stateless Component
export function Greeting ({name}) {
    return <h2>Hello, {name}</h2>
}

// Stateful Functional Component
import { useState } from "react";
function NameForm (){
    const[name, setName] = useState(" ");
    return (
        <div>
            <input value={name} onChange={e=>setName(e.target.value)} />
            <p>Your name : { name }</p>
        </div>
    )
}
export default NameForm;