export default function Event() {
    function handleClick(e){
        e.preventDefault();
        alert("Button clicked !")
    }

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>

            <form onSubmit={(e)=>{e.preventDefault(); alert("submitted"); }}>
                <input placeholder="TYPE.." />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
