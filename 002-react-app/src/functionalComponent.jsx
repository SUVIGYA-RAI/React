import { useState } from 'react'
function CounterFunction (){
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Functional Counter: {count}</h2>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    );
}
export default CounterFunction;