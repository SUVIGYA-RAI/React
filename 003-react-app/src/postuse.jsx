import { useState } from "react";

function CreateUser (){
    const[name, setName] = useState("");

    function handleSubmit(){
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify ({name})
        })
        .then (res => res.json())
        .then(data => {
            console.log("User created: ", data);
        });
    }

    return (
        <>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSubmit}>Create</button>
        </>
    )
}

export default CreateUser;