import React from "react";
import "./index.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
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
