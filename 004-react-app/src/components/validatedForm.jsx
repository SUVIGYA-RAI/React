import { useState } from "react";

function ValidationForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email === "") {
      setError("Email is required");
    } else if (!email.includes("@")) {
      setError("Invalid email format");
    } else {
      setError("");
      alert("Form submitted successfully!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationForm;
