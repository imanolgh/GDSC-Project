import logo from "./logo.svg";
import "./App.css";
import fapp from "./utils/firebase";
import React from "react";
import SignIn from "./Auth/signin";
import Signup from "./Auth/signup";
import CheckUser from "./Auth/checkUser";

function App() {
  return (
    <div className="App">
      <SignIn/>
      <Signup/>
      <CheckUser/>
    </div>
  );
}

export default App;
