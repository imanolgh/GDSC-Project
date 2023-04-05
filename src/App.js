import "./App.css";

import React from "react";
import SignIn from "./Auth/signin";
import { UserProvider } from "./Auth/userContext";
import Chats from "./Social/chats";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import JobPanel from "./components/JobPanel";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Avenir" }}>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/jobs" element={<JobPanel />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
