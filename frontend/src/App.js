import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";

function App() {
  // Store login token (means user logged in)
  const [token, setToken] = useState(localStorage.getItem("token"));

  // If no token, show login page only
  if (!token) {
    return <Login setToken={setToken} />;
  }

  // If logged in, show main app
  return (
    <div>
      {/* Logout button */}
      <button
        onClick={() => {
          localStorage.removeItem("token"); // remove token
          setToken(null); // update state → back to login page
        }}
      >
        Logout
      </button>

      <Dashboard />
      <RecordForm />
      <RecordList />
    </div>
  );
}

export default App;
