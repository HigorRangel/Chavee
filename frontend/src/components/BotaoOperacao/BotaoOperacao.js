import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'


const BotaoUpdate = (props) => {
    console.log(props);
    return(
        <a  className="me-4" href="www.google.com"><FontAwesomeIcon icon={faKey}  className="botaoAcaoTabela" size="lg" color="#0B2149" opacity={0.5}/></a>
        
)
}
export default BotaoUpdate;