import React from "react";
import "./index.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App scrollbar">
      <Header />
      <div className="w-4/5 h-[160px] m-auto flex flex-col items-center justify-center mt-[505px] scrollbar">
        a
      </div>
    </div>
  );
}

export default App;
