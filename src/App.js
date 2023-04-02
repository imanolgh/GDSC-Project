import "./App.css";

import React from "react";
import SignIn from "./Auth/signin";
import { UserProvider } from "./Auth/userContext";
import Chats from "./Social/chats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

      <div style={{ fontFamily: "Avenir" }}>
        <Router>
          <UserProvider>
          <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/social" element={<Chats/>} />
          </Routes>
          </UserProvider>
        </Router>
      </div>
  );
}

export default App;
