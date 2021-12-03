import React,{ useState, useEffect} from 'react';
export const ImobiliariasContext = React.createContext();

const ImobiliariasProvider = (props) =>{
    const [imobiliarias,setImobiliarias] = useState({});

    useEffect(()=>{
        setImobiliarias(
            [
                {
                    id: 0,
                    nome_fantasia:"IMOBILIÁRIA",
                    razao_social: "IMOBILIÁRIA",
                    CNPJ: "58740076000133",
                    data_cadastro: "01/01/1969",
                },
                {
                    id: 1,
                    nome_fantasia:"IMOBILIÁRIA",
                    razao_social: "IMOBILIÁRIA",
                    CNPJ: "58740076000133",
                    data_cadastro: "01/01/1969",
                },
                {
                    id: 2,
                    nome_fantasia:"IMOBILIÁRIA",
                    razao_social: "IMOBILIÁRIA",
                    CNPJ: "58740076000133",
                    data_cadastro: "01/01/1969",
                },
                {
                    id: 3,
                    nome_fantasia:"IMOBILIÁRIA",
                    razao_social: "IMOBILIÁRIA",
                    CNPJ: "58740076000133",
                    data_cadastro: "01/01/1969",
                },
            ]
        )
    }, [])
    
    // const onCargoSubmit = (event) =>{
    //     event.preventDefault();
    //     let newCargos = [...cargos,
    //     {
    //       id:cargos.length +1,
    //       descricao: event.target.cargoDescricao.value,
    //       nivel_acesso: event.target.cargoNivelAcesso.value,
    //     }
    //     ];
    //     console.log(newCargos);
    //     setCargos(newCargos);
    //   }

    return(
        <ImobiliariasContext.Provider value={{ imobiliarias: imobiliarias}}>
            {props.children}
        </ImobiliariasContext.Provider>
    )
};

export default ImobiliariasProvider
