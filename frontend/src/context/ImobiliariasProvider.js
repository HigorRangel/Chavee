import React,{ useState, useEffect} from 'react';
export const ImobiliariasContext = React.createContext();

const ImobiliariasProvider = (props) =>{
    const [imobiliarias,setImobiliarias] = useState({});

    useEffect(()=>{
        setImobiliarias(
            [
                {
                    codigo: 0,
                    nome_fantasia:"IMOBILIÁRIA",
                    razao_social: "IMOBILIÁRIA",
                    CNPJ: "58740076000133",
                    data_cadastro: "01/01/1969",
                },
                {
                    codigo: 1,
                    nome_fantasia:"IMOBILIÁRIA",
                    razao_social: "IMOBILIÁRIA",
                    CNPJ: "58740076000133",
                    data_cadastro: "01/01/1969",
                },
                {
                    codigo: 2,
                    nome_fantasia:"IMOBILIÁRIA",
                    razao_social: "IMOBILIÁRIA",
                    CNPJ: "58740076000133",
                    data_cadastro: "01/01/1969",
                },
                {
                    codigo: 3,
                    nome_fantasia:"IMOBILIÁRIA",
                    razao_social: "IMOBILIÁRIA",
                    CNPJ: "58740076000133",
                    data_cadastro: "01/01/1969",
                },
            ]
        )
    }, [])
    
    return(
        <ImobiliariasContext.Provider value={{ imobiliarias: imobiliarias}}>
            {props.children}
        </ImobiliariasContext.Provider>
    )
};

export default ImobiliariasProvider
