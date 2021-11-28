import { BrowserRouter } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/style.scss';

import Routes from "./routes";
import HeaderLateral from "./components/HeaderLateral/HeaderLateral";
import Header from "./components/Header/Header";
import CargosProvider from "./context/CargosProvider";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <HeaderLateral/>
      <CargosProvider>
      <Routes/>
      </CargosProvider>
    </BrowserRouter>
  );
}

export default App;
