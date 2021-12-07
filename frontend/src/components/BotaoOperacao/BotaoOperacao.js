import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';



const BotaoUpdate = (props) => {
    return(
        <Link  className={!props.blocked ? "botaoAcaoTabela d-none" : "botaoAcaoTabela"} to={props.link}><FontAwesomeIcon  icon={faKey} size="lg" color="#0B2149"  opacity={0.5}/></Link>
)
}
export default BotaoUpdate;