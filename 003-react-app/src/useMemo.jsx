import { useState, useMemo } from "react"

function AppMemo(){
    const [num, setNum] = useState(0)
    const [text, setText] = useState("")

    const square = useMemo(()=>{
        console.log("Calculating...")
        return num*num;
    }, [num])

    return (
        <>
        <p>Square: {square}</p>
        <button onClick={() =>setNum(num+1)}>+</button>
        </>
    )
}
export default AppMemo;