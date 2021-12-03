import React,{ useState, useEffect} from 'react';
export const ChavesContext = React.createContext();

const ChavesProvider = (props) =>{
    const [chaves,setChaves] = useState({});

    useEffect(()=>{
        setChaves(
            [
                {
                    id:0,
                    imovel: "V345",
                    endereco:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana",
                    situacao:"ATIVO",
                    funcionario:"HIGOR",
                },
                {
                    id:1,
                    imovel: "V345",
                    endereco:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana",
                    situacao:"ATIVO",
                    funcionario:"HIGOR",
                },
                {
                    id:2,
                    imovel: "V345",
                    endereco:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana",
                    situacao:"ATIVO",
                    funcionario:"HIGOR",
                },
                {
                    id:3,
                    imovel: "V345",
                    endereco:"Rua Antônio Meneghel, 123 - Jardim São Luiz - Americana",
                    situacao:"ATIVO",
                    funcionario:"HIGOR",
                },
            ]
        )
    }, [])
    
    return(
        <ChavesContext.Provider value={{chaves: chaves}}>
            {props.children}
        </ChavesContext.Provider>
    )
};

export default ChavesProvider
