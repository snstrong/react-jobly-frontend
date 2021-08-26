import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";
import JoblyApi from "./api";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Jobly</h1>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
