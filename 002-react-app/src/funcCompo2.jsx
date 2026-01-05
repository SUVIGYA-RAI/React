import { useState } from "react";
function WelcomeMessage({name}) {
    const[likes, setLikes] = useState(0);

    return (
        <div>
            <h2>Welcome, { name }</h2>
            <p>Likes : { likes }</p>
            <button onClick={()=>setLikes(likes+1)}>Like</button>
        </div>
    );
}
export default WelcomeMessage;