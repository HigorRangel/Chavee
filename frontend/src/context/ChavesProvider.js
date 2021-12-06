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

    const onChaveUpdateSubmit = (event) =>{
        event.preventDefault();
        let object = {
            proprietario: event.target.formProprietarioCad.value,
            contato: event.target.formContatoCad.value,
            rua: event.target.formLogradouroCad.value,
            bairro: event.target.formBairroCad.value,
            cidade: event.target.formCidadeCad.value,
            estado: event.target.formEstadoCad.value,
            numero: event.target.formNumeroCad.value,
            complemento: event.target.formComplementoCad.value,
            situacao: 1,
            finalidade: event.target.formFinalidadeImovelCad.value,
            categoria_imovel: event.target.formCategoriaImovelCad.value,
            cod_imovel: event.target.formCodigoImovelCad.value,
            observacao: event.target.formPontoReferenciaCad.value,
        }
        axios
            .put("http://localhost:3003/chave/atualizar/"+event.target.chaveID.value,object,{
                headers: {
                  Authorization: token.token,
                }
            })
            .then((response) => {
                history.push("/chaves");
            });
    }

    const deleteChaveHandler = (chave) =>{
        let object = {
            proprietario: chave.proprietario,
            contato: chave.contato,
            rua: chave.rua,
            bairro: chave.bairro,
            cidade: chave.cidade,
            estado: chave.estado,
            numero: chave.numero,
            complemento: chave.complemento,
            situacao: 0,
            finalidade: chave.finalidade,
            categoria_imovel: chave.categoria_imovel,
            cod_imovel: chave.cod_imovel,
            observacao: chave.observacao,
            usuario: chave.usuario
        }
        axios
            .put("http://localhost:3003/chave/atualizar/"+chave.id,object,{
                headers: {
                  Authorization: token.token,
                }
            })
            .then((response) => {
                history.push("/chaves");
            });
    }
    return(
        <ChavesContext.Provider value={{chaves: chaves, chavesFormatadas:chavesFormatadas, onChaveSubmit:onChaveSubmit, deleteChaveHandler:deleteChaveHandler, onChaveUpdateSubmit:onChaveUpdateSubmit}}>
            {props.children}
        </ChavesContext.Provider>
    )
};

export default ChavesProvider
