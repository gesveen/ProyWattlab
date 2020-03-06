import React from 'react';
import i18n from 'i18next';
 
class Servicios extends React.Component {
 
  render() {
 
    return (
 
        <div className="container servicios" style={{marginTop: '15px'}}>
 
            <div className="row">
                <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" src='../Consultar.jpg' width="160" height="150" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"></img>
                    <h2>{i18n.t('consult_bill')}</h2>
                    <p>{i18n.t('consult_bill_text')}</p>
                    <p><a className="btn btn-success" href="#" role="button">{i18n.t('click_here')} &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" src='../Informacion.jpg' width="160" height="150" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"></img>
                    <h2>{i18n.t('information')}</h2>
                    <p>{i18n.t('information_text')}</p>
                    <p><a className="btn btn-success" href="#" role="button" onClick={() => window.location = "/InformacionServicios"}>{i18n.t('click_here')} &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" src='../PQRS.jpg' width="160" height="150" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"></img>
                    <h2>{i18n.t('pqrs')}</h2>
                    <p>{i18n.t('pqrs_text')}</p>
                    <p><a className="btn btn-success" href="#" role="button">{i18n.t('click_here')} &raquo;</a></p>
                </div>
 
            </div>
 
        </div>
 
    )
    
  }
 
}
 
export default Servicios;