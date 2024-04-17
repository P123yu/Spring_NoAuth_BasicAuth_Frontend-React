// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function User() {
//   const [user, setUser] = useState("");
//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/user")
//       .then((res) => {
//         console.log(res.data);
//         setUser(res.data);
//       })
//       .catch((err) => {
//         setUser("not allowed");
//         console.log("not allowed");
//       });
//   }, []);
//   return <div>{user}</div>;
// }

// export default User;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  console.log(data);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get("http://localhost:8080/user", {
        auth: {
          username: username,
          password: password,
        },
      })
      .then((response) => {
        setData(response.data);
        navigate("/next");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogout = () => {
    // Send a request to the logout endpoint on the server
    axios
      .post("http://localhost:8080/logout")
      .then((response) => {
        // If logout is successful, redirect the user to the login page or perform any other action
        window.location.href = "/"; // Redirect to the login page
      })
      .catch((error) => {
        // Handle logout failure, if necessary
        console.error("Logout failed:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <button type="submit">Fetch User Data</button>
        <button onClick={handleLogout}>Logout</button>
      </form>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>User Data</h2>
          <p>Username: {data}</p>
          {/* Render other user data as needed */}
        </div>
      )}
    </div>
  );
}

export default User;
