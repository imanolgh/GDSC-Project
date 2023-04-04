import logo from "./logo.svg";
import "./App.css";
import fapp from "./utils/firebase";
import React from "react";
import JobList from "./components/JobList";
import data from "./utils/mock-data.json";
import JobPanel from "./components/JobPanel";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <JobPanel />
    </div>
  );
}

export default App;
