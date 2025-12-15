import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user"); // default
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    // for this assignment, no real password check – just set session storage
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("role", role); // "admin" or "user"

    // optional: store username just to display somewhere
    sessionStorage.setItem("username", username);

    navigate("/"); // go to home
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("username");
    navigate("/login");
  };

  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="px-4 mt-6 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {isLoggedIn ? "You are logged in" : "Login"}
      </h1>

      {!isLoggedIn && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Username</label>
            <input
              type="text"
              className="border rounded px-2 py-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="mt-2 bg-gray-800 text-white rounded px-3 py-1"
          >
            Login
          </button>
        </form>
      )}

      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white rounded px-3 py-1 mt-4"
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Login;

