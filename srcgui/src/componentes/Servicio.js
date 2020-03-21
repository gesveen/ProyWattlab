import React from 'react';
import { useTranslation } from 'react-i18next'; 
 
function Servicio() {
    const i18n = useTranslation(); 
    
    return (
 
        <div className="container" style={{marginTop: '15px', marginBottom: "20px"}}>
 
            <div className="row">
                <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" src='../imagenes/Consultar.jpg' width="200" height="190" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"></img>
                    <h2>{i18n.t('consult_bill')}</h2>
                    <p>{i18n.t('consult_bill_text')}</p> 
                    <p><a className="btn btn-success" href="#" role="button" onClick={() => window.location = "/ConsultaFactura"}>{i18n.t('click_here')} &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" src='../imagenes/Informacion.jpg' width="200" height="190" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"></img>
                    <h2>{i18n.t('information')}</h2>
                    <p>{i18n.t('information_text')}</p>
                    <p><a className="btn btn-success" href="#" role="button" onClick={() => window.location = "/InformacionServicios"}>{i18n.t('click_here')} &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" src='../imagenes/PQRS.jpg' width="200" height="190" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"></img>
                    <h2>{i18n.t('pqrs')}</h2>
                    <p>{i18n.t('pqrs_text')}</p>
                    <p><a className="btn btn-success" href="#" role="button" onClick={() => window.location = "/PQRS"}>{i18n.t('click_here')} &raquo;</a></p>
                </div>
 
            </div>
 
        </div>
 
    )
    
}
 
export default Servicio;