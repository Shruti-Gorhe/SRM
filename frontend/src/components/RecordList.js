import { useEffect, useState } from "react";
import axios from "axios";

export default function RecordList() {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("You are not logged in.");
          return;
        }

        const res = await axios.get(
          "http://localhost:5000/api/records",
          {
            headers: {
              Authorization: token, // send JWT
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Fetched records:", res.data); // debug
        setRecords(res.data);

      } catch (err) {
        console.error("Error fetching records:", err.response?.data || err);
        setError("Failed to load records");
      }
    };

    fetchRecords();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Records</h2>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {records.length === 0 && !error && (
        <p style={{ textAlign: "center" }}>No records found.</p>
      )}

      {records.map((r) => (
        <div className="record-card" key={r._id}>
          <h3>{r.name}</h3>
          <p>{r.category}</p>
          <p className={`status ${r.status}`}>{r.status}</p>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
}
