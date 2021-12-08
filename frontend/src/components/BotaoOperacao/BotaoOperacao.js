import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';



const BotaoOperacao = (props) => {
    return(
        <Link  className={!props.blocked ? "botaoAcaoTabela d-none me-3" : "botaoAcaoTabela me-3"} to={props.link}><FontAwesomeIcon  icon={faKey} size="lg" color="#0B2149"  opacity={0.5}/></Link>
)
}
export default BotaoOperacao;