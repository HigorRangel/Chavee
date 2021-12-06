import React,{ useState, useEffect, useContext} from 'react';
import { LoginContext } from './LoginProvider';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
export const ChavesContext = React.createContext();

const ChavesProvider = (props) =>{
    const [chaves,setChaves] = useState([]);
    const [chavesFormatadas,setChavesFormatadas] = useState([]);

    const {token} = useContext(LoginContext);

    let id = "";
    if(token){
        id = token.id_imobiliaria
    }
    
    let history = useHistory();
    
    useEffect(()=>{
        if(token){
            const intervalId = setInterval(() => {
                axios
                .get('http://localhost:3003/chave/listar/'+id)
                .then((response) => {
                    setChaves(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });

                
            }, 1000)

            return () => clearInterval(intervalId);
            }
    });
    
    useEffect(()=>{
        let chavesNovas = []
        for(let i = 0; i<chaves.length;i++){
            chavesNovas.push({
                id:chaves[i].id,
                imovel:chaves[i].cod_imovel,
                endereco:chaves[i].rua+" "+chaves[i].numero+", "+chaves[i].bairro+ " "+ chaves[i].cidade,
                situacao:chaves[i].situacao,
                funcionario:chaves[i].funcionario
            })
        }
        setChavesFormatadas(chavesNovas)
    },[chaves]);

    const onChaveSubmit = (event) =>{
        event.preventDefault();
        let object = {
            rua:event.target.formLogradouroCad.value,
            bairro:event.target.formBairroCad.value,
            cidade:event.target.formCidadeCad.value,
            estado:event.target.formEstadoCad.value,
            numero:event.target.formNumeroCad.value,
            complemento:event.target.formComplementoCad.value,
            finalidade:event.target.formFinalidadeImovelCad.value,
            categoria_imovel:event.target.formCategoriaImovelCad.value,
            cod_imovel:event.target.formCodigoImovelCad.value,
            observacao:event.target.formObservacaoCad.value,
            usuario:token.id,
            proprietario:event.target.formProprietarioCad.value,
            contato:event.target.formContatoCad.value,
          }

          axios
          .post("http://localhost:3003/chave/inserir",object,{
              headers: {
                Authorization: token.token,
              }
          })
          .then((response) => {
              history.push("/chaves");
          });
    }
    return(
        <ChavesContext.Provider value={{chaves: chaves, chavesFormatadas:chavesFormatadas, onChaveSubmit:onChaveSubmit}}>
            {props.children}
        </ChavesContext.Provider>
    )
};

export default ChavesProvider
