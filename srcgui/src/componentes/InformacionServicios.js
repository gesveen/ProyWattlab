import React from 'react';

import Menu from './Menu';
import { Layout } from 'antd';
import Footer from './Footer.js';
import i18n from '../i18next';


class InformacionServicios extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Menu />
 
                <main role="main" className="flex-shrink-0 mt-5">

                <section className="text-center">
                    <div className="container" style={{marginTop: 70, padding: '0px'}}>
                    <h1 className="jumbotron-heading">{i18n.t('information')} - {i18n.t('service_portal')}</h1>
                        <p className="lead text-muted">{i18n.t('service_portal_text')}</p>				      
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <img src="../imagenes/Productos_Servicios.jpg" alt="" width="100%" height="225" title="Bootstrap"></img>
                                    <div className="card-body">
                                        <p className="card-text">{i18n.t('products_and_services')}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-success">Leer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                        <img src="../imagenes/Precios.jpg" alt="" width="100%" height="225" title="Bootstrap"></img>
                                    <div className="card-body">
                                        <p className="card-text">{i18n.t('prices')}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-success">Leer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 3">
                                        <title>Servicio 3</title>
                                        <rect width="100%" height="100%" fill="#55595c"/>
                                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 3</text>
                                    </svg>
                                    <div className="card-body">
                                        <p className="card-text">Servicio 3</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-success">Leer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
                <Footer />
            </Layout>
        );
    }
}

export default InformacionServicios;