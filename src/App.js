import "./App.css";
import fapp from "./utils/firebase";
import React from "react";

import JobPanel from "./components/JobPanel";

function App() {
  return (
    <div class="App">
      <JobPanel />
    </div>
  );
}

export default App;
