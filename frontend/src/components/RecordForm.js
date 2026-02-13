import { useState } from "react";
import axios from "axios";

export default function RecordForm() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    status: "Active",
    description: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      // If token missing, stop
      if (!token) {
        alert("You are not logged in!");
        return;
      }

      console.log("Sending data:", form); // debug

      const res = await axios.post(
        "http://localhost:5000/api/records",
        form,
        {
          headers: {
            Authorization: token, // send JWT token
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", res.data); // debug
      alert("Record added successfully!");

      window.location.reload();

    } catch (error) {
      console.error("Error adding record:", error.response?.data || error);
      alert("Error: " + (error.response?.data?.message || "Check backend"));
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Add Record</h2>

      <input
        placeholder="Name"
        required
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Category"
        required
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option>Active</option>
        <option>Pending</option>
        <option>Completed</option>
      </select>

      <textarea
        placeholder="Description"
        required
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button>Add</button>
    </form>
  );
}
