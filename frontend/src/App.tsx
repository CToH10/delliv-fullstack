import React from "react";
import logo from "./logo.svg";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" />
        <br />
        <br />
        <button className="btn-big btn-brand-opacity  ">Clique</button>
        <p className="text-complement-3">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-brand-4"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
