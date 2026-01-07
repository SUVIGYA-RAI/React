import { useState } from "react";

function SubmitForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop page reload
    alert("Email submitted: " + email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitForm;
