import { use, useEffect, useState } from "react";

function Example2() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("Effect ran because COUNT changed");
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count+1)} >Increase Count</button>

            <input type="text" placeholder="Type something..." onChange={e => setName(e.target.value)} />
            <h2>Your name is: {name}</h2>
        </div>
    )
}

export default Example2;