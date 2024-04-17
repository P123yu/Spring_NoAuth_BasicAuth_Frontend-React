import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hello from "./Component/Hello";
import Next from "./Component/Next";
import User from "./Component/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/next" element={<Next />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
