import { useEffect, useRef } from "react"
function PrevCounter ({count}) {
    const prevRef = useRef(count)

    useEffect(() => {
        prevRef.current = count;
    }, [count])

    return (
        <div>
            <p>Current : {count}</p>
            <p>Previous : {prevRef.current}</p>
        </div>
    )
}

export default PrevCounter;