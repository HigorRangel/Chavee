import { BrowserRouter } from "react-router-dom";
import React from "react";
import './App.css';

import Routes from "./routes";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
