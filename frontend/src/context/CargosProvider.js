import React,{ useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { LoginContext } from './LoginProvider';
export const CargosContext = React.createContext();

const CargosProvider = (props) =>{
    const [cargos,setCargos] = useState({});
    const {token} = useContext(LoginContext);

    let id = "";
    if(token){
        id = token.id_imobiliaria
    }

    useEffect(()=>{
        axios
            .get('http://localhost:3003/cargo/listar/'+id)
            .then((response) => {
                setCargos(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    
    const onCargoSubmit = (event) =>{
        event.preventDefault();
        let newCargos = [...cargos,
        {
          id:cargos.length,
          descricao: event.target.cargoDescricao.value,
          nivel_acesso: event.target.cargoNivelAcesso.value,
        }
        ];
        setCargos(newCargos);
      }

    
    const deleteCargoHandler = (cargo) =>{
        let object = {
            descricao:cargo.descricao,
            nivel_acesso:cargo.nivel_acesso,
            situacao:0
        }
        axios
            .put("http://localhost:3003/cargo/atualizar/"+cargo.id,object,{
                headers: {
                  Authorization: token.token,
                }
            })
            .then((response) => {
            console.log(response.data);
            });
    }

    
    return(
        <CargosContext.Provider value={{ cargos: cargos, onCargoSubmit:onCargoSubmit, deleteCargoHandler:deleteCargoHandler}}>
            {props.children}
        </CargosContext.Provider>
    )
};

export default CargosProvider
