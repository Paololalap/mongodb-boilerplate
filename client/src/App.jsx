// client/src/App.jsx

import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./assets/Users";
import CreateUser from "./assets/CreateUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/create' element={<CreateUser />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

