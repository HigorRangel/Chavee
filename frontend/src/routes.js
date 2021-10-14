import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Chaves from "./components/Chaves/Chaves";
import Emprestimos from "./components/Emprestimos/Emprestimos";
import Cargos from "./components/Cargos/Cargos";
import CadastroImobiliaria from "./components/CadastroImobiliaria/CadastroImobiliaria";
import CadastroCargo from "./components/CadastroCargo/CadastroCargo";
import CadastroUsuario from "./components/CadastroUsuario/CadastroUsuario";
import Usuarios from "./components/Usuarios/Usuarios";
import Imobiliarias from "./components/Imobiliarias/Imobiliarias";
import Login from "./components/Login/Login"

const routes = () => {
    return (
      <Switch>
        <Redirect from="/" to="/dashboard" exact />
        <Route path="/dashboard" exact>
            <Dashboard/>
        </Route>
            
        <Route path="/chaves" exact>
            <Chaves/>
        </Route>
        
        <Route path="/emprestimos" exact>
            <Emprestimos/>
        </Route>

        <Route path="/cargos" exact>
            <Cargos/>
        </Route>

        <Route path="/cadastro-imobiliaria" exact>
            <CadastroImobiliaria/>
        </Route>

        <Route path="/cadastro-cargos" exact>
            <CadastroCargo/>
        </Route>

        <Route path="/cadastro-usuario" exact>
            <CadastroUsuario/>
        </Route>

        <Route path="/usuarios" exact>
            <Usuarios/>
        </Route>

        <Route path="/imobiliarias" exact>
            <Imobiliarias/>
        </Route>

        <Route path="/login" exact>
            <Login/>
        </Route>

        <Route render={()=> <div> Pagina não encontrada </div>}/>
      </Switch>
    );
  };
  
  export default routes;