import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newErrors = {};

    if (formData.name === "") newErrors.name = "Name required";
    if (formData.email === "") newErrors.email = "Email required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be 6 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration Successful");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <input name="email" onChange={handleChange} placeholder="Email" />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
