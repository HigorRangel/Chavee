import React,{ useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { LoginContext } from './LoginProvider';
import { useHistory } from 'react-router';
export const CargosContext = React.createContext();

const CargosProvider = (props) =>{
    const [cargos,setCargos] = useState([]);
    const {token} = useContext(LoginContext);
    let history = useHistory();

    let id = "";
    if(token){
        id = token.id_imobiliaria
    }

    useEffect(()=>{
        if(token){
            const intervalId = setInterval(() => {
                axios
                .get('http://localhost:3003/cargo/listar/'+id)
                .then((response) => {
                    setCargos(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            }, 1000)

            return () => clearInterval(intervalId);
        }
    });
    
    const onCargoSubmit = (event) =>{
        event.preventDefault();
        let object = {
          descricao: event.target.cargoDescricao.value,
          nivel_acesso: event.target.cargoNivelAcesso.value,
          id_imobiliaria:id
        }

        axios
            .post("http://localhost:3003/cargo/inserir",object,{
                headers: {
                  Authorization: token.token,
                }
            })
            .then((response) => {
                history.push("/cargos");
            });
    }

    const onCargoUpdateSubmit = (event) =>{
        event.preventDefault();
        let object = {
            descricao:event.target.cargoDescricao.value,
            nivel_acesso:event.target.cargoNivelAcesso.value,
            situacao:1
        }
        axios
            .put("http://localhost:3003/cargo/atualizar/"+event.target.cargoID.value,object,{
                headers: {
                  Authorization: token.token,
                }
            })
            .then((response) => {
                history.push("/cargos");
            });
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
                history.push("/cargos");
            });
    }

    
    return(
        <CargosContext.Provider value={{ cargos: cargos, onCargoSubmit:onCargoSubmit,onCargoUpdateSubmit:onCargoUpdateSubmit, deleteCargoHandler:deleteCargoHandler}}>
            {props.children}
        </CargosContext.Provider>
    )
};

export default CargosProvider
