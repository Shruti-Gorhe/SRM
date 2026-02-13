import { useState } from "react";
import axios from "axios";

export default function Login({ setToken }) {
  // Store email & password input
  const [form, setForm] = useState({ email: "", password: "" });

  const login = async (e) => {
    e.preventDefault(); // stop page refresh

    // Send login data to backend
    const res = await axios.post("http://localhost:5000/api/auth/login", form);

    // Save token in browser
    localStorage.setItem("token", res.data.token);

    // Update App state
    setToken(res.data.token);
  };

  return (
    <form onSubmit={login}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button>Login</button>
    </form>
  );
}
