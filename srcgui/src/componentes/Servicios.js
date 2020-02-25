import React from 'react';
//import './Slider.css';
import i18n from 'i18next';
 
class Servicios extends React.Component {
 
  render() {
 
    return (
 
        <div className="container servicios" style={{marginTop: '15px'}}>
 
            <div className="row">
 
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>{i18n.t('consult_bill')}</h2>
                    <p>Si deseas consultar tu extrato</p>
                    <p><a className="btn btn-success" href="#" role="button">{i18n.t('click_here')} &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>{i18n.t('information')}</h2>
                    <p>Información acerca de productos, precios, etc...</p>
                    <p><a className="btn btn-success" href="#" role="button" onClick={() => window.location = "/InformacionServicios"}>{i18n.t('click_here')} &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>{i18n.t('pqrs')}</h2>
                    <p>Sección para que descarguen todo lo que tienen</p>
                    <p><a className="btn btn-success" href="#" role="button">{i18n.t('click_here')} &raquo;</a></p>
                </div>
 
            </div>
 
        </div>
 
    )
    
  }
 
}
 
export default Servicios;