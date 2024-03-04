//client/src/assets/CreateUser.jsx

import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <form action='' onSubmit={Submit}>
          <h2>Add User</h2>
          <div>
            <label htmlFor=''>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor=''>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Submit </button>
        </form>
      </div>
    </div>
  );
}
export default Create;
