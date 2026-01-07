import { useState } from "react";

function HandleForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Name: {name}</p>
    </div>
  );
}

export default HandleForm;
