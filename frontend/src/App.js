import { BrowserRouter } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/style.scss';

import Routes from "./routes";
import HeaderLateral from "./components/HeaderLateral/HeaderLateral";
import Header from "./components/Header/Header";
import CargosProvider from "./context/CargosProvider";
import ChavesProvider from "./context/ChavesProvider";
import ImobiliariasProvider from "./context/ImobiliariasProvider";
import EmprestimosProvider from "./context/EmprestimosProvider";
import UsuariosProvider from "./context/UsuariosProvider";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <HeaderLateral/>
      <CargosProvider>
        <ChavesProvider>
          <ImobiliariasProvider>
            <EmprestimosProvider>
              <UsuariosProvider>
                <Routes/>
                </UsuariosProvider>
            </EmprestimosProvider>
          </ImobiliariasProvider>
        </ChavesProvider>
      </CargosProvider>
    </BrowserRouter>
  );
}

export default App;
