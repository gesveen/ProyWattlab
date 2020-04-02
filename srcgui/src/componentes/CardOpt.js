import React from 'react'

import { useTranslation } from 'react-i18next';

function CardOpt(props) {

 const{urlRuta, modulo, d, d1, d2, color, icono, informacion} = props;
 const i18n = useTranslation();
    return(
        <div className="col-lg-3 col-sm-6 col-xs-12" style={{textAlign: "center", cursor: "pointer"}}>
            <div className="card" style={{width: "230px", marginTop: "10px", marginRight: "10px"}} onClick={() => window.location = urlRuta}>
                <div style={{textAlign: "center", marginTop: "0", backgroundColor: color, height:"120px"}}>
                    <div style={{marginTop: "20px", marginBottom: "20px"}}>
                    <svg fill="black" class={icono} width="80px" height="80px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d={d}/>
                        <path fill-rule="evenodd" d={d1} clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d={d2} clip-rule="evenodd"/>
                    </svg>
                    </div>
                </div>
                <div className="card-body">
                    <h5 style={{fontWeight: "bold"}} class="card-title">{modulo}</h5>
                    <p className="card-text">{informacion}</p>
                </div>
            </div>
        </div>
     )
    
}

export default CardOpt;