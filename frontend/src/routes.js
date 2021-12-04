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
import Login from "./components/Login/Login";
import CadastroChave from "./components/CadastroChave/CadastroChave";
import CadastroOperacao from "./components/CadastroOperacao/CadastroOperacao";

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

        <Route path="/cadastro-imobiliaria/:id" exact>
            <CadastroImobiliaria/>
        </Route>

        <Route path="/cadastro-cargo" exact>
            <CadastroCargo/>
        </Route>

        <Route path="/cadastro-cargo/:id" exact>
            <CadastroCargo/>
        </Route>

        <Route path="/cadastro-usuario" exact>
            <CadastroUsuario/>
        </Route>

        <Route path="/cadastro-chave/:id" exact>
            <CadastroChave/>
        </Route>

        <Route path="/cadastro-chave" exact>
            <CadastroChave/>
        </Route>

        <Route path="/cadastro-operacao/:id" exact>
            <CadastroOperacao/>
        </Route>

        <Route path="/cadastro-operacao" exact>
            <CadastroOperacao/>
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