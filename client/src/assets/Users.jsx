//client/src/assets/Users.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([
    { email: "paolo@gmail.com", password: "shadahala" },
  ]);
  return (
    <div>
      <div>
        <Link to='/create'>Add +</Link>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.email}>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Users;
