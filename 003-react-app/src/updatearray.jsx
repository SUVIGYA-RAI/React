import { useState } from 'react';

function Items() {
    const [list, setList] = useState([]);

    function addItem() {
        setList([...list, `Item ${list.length + 1}`]);
    }

    return (
        <>
            {list.map((v,i) => (
                <p key={i}>{v}</p>
            ))}
            <button onClick={addItem}>Add Item</button>
        </>
    );
}

export default Items;