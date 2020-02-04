import React from "react";
import "./App.css";
import Section from "./assets/section";
import Logo from "./assets/Netflix.svg";
import data from "./data.json";

function App() {
  return (
    <div className="app">
      <img className="logo" src={Logo} alt="logo" />
      {data.map((obj, index) => {
        return (
          <div key={index}>
            <Section className="category" object={obj} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
