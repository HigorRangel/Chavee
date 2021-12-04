import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./BotaoDelete.css";


const BotaoDelete = (props) => {
    return(
        <button style={{border: "none", backgroundColor: "transparent"}} onClick={props.click}><FontAwesomeIcon className="botaoAcaoTabela" icon={faTrash} size="lg" color="#0B2149"  opacity={0.5}/></button>
        
)
}
export default BotaoDelete;