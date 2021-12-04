import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import './BotaoUpdate.css'

const BotaoUpdate = (props) => {
    console.log(props);
    return(
       <Link lassName="botaoAcaoTabela" to={props.link}><FontAwesomeIcon  c icon={faTools} size="lg" color="#0B2149"  opacity={0.5}/></Link>
        
)
}
export default BotaoUpdate;