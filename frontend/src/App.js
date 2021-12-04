import { BrowserRouter, useLocation } from "react-router-dom";
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
import LoginProvider from "./context/LoginProvider";

function App() {

  return (
    <BrowserRouter>
      <LoginProvider>
        <UsuariosProvider>
          <CargosProvider>
            <ChavesProvider>
              <ImobiliariasProvider>
                <EmprestimosProvider>
                  <Header/>
                  <HeaderLateral/>
                  <Routes/>
                </EmprestimosProvider>
              </ImobiliariasProvider>
            </ChavesProvider>
          </CargosProvider>
        </UsuariosProvider>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
