import React from 'react'

import { useTranslation } from 'react-i18next';

function Card(props) {

 const{img, titulo, descripcion, ruta} = props;
 const i18n = useTranslation();
    return(
      <div className="col-lg-4">
         <img className="bd-placeholder-img rounded-circle" src={img} width="200" height="190" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"></img>
          <h2>{i18n.t(titulo)}</h2>
          <p>{i18n.t(descripcion)}</p>
          <p><a className="btn btn-success" href="#" role="button" onClick={ruta}>{i18n.t('click_here')} &raquo;</a></p>
           
       </div>
     )
    
}

export default Card;