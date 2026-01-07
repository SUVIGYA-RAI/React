import { useState } from 'react';

function Toggle() {
    const [visible, setVisible] = useState(true);

    return (
        <>
            {visible && <h2>Hello</h2>}
            <button onClick={() => setVisible(!visible)}>Toggle</button>
        </>
    );
}

export default Toggle;
