import React, { useState, useEffect } from "react";
import axios from "axios";

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
  const [token, setToken] = useState(getAuthUser());

  const authUser = (token) => {
    let data = {
      auth: token.auth,
      id: token.id,
      email: token.email,
      primeiro_nome: token.primeiro_nome,
      nomes_meio: token.nomes_meio,
      ultimo_nome: token.ultimo_nome,
      contato: token.contato,
      cod_cargo: token.cod_cargo,
      nivel_acesso: token.nivel_acesso,
      id_imobiliaria: token.id_imobiliaria,
      token: token.token,
    };

    sessionStorage.setItem("token", JSON.stringify(data));
    setToken(token);
  };

  function getAuthUser() {
    const auth = sessionStorage.getItem("token");
    if (!auth) {
      return;
    }
    return JSON.parse(auth);
  }

  return (
    <LoginContext.Provider
      value={{
        token: token,
        authUser: authUser,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;