import { useEffect, useState } from "react";

function Example1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect ran (no dependancy array)");
    });

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Increase</button>
        </div>
    );
}

export default Example1;