import React from 'react';
import { Layout } from 'antd';

import Footer from './Footer'
import Menu from './Menu'

function PQRS() {

        return (
            <Layout className="layout">
                <div>
                    <Menu/>
                </div>
                <div style={{marginTop: "80px", marginLeft: "0px", marginRight: "0px"}}>
                    <img class="img-fluid" alt="Responsive image" src='../imagenes/Banner.jpg'></img>
                </div>
                <div className="container" style={{marginTop: "20px", marginBottom: "50px"}}>
                    <div className="row" style={{marginTop: "20px"}}>
                        <div className="col-lg-7" style={{textAlign: "left"}}>
                            <h3>Petición</h3>
                            <p>Es el derecho fundamental que tiene toda persona a presentar solicitudes respetuosas a las autoridades por motivos de interés general o particular y a obtener su pronta resolución.</p>
                            <h3>Queja</h3>
                            <p>Es la manifestación de protesta, censura, descontento, inconformidad o insatisfacción que formula una persona a causa del incumplimiento de una norma legal vigente.</p>
                            <h3>Reclamo</h3>
                            <p>Es el derecho que tiene toda persona de exigir, reivindicar o demandar una solución o atención satisfactoria, ya sea por motivo general o particular, referente a la prestación indebida de un servicio o a la falta de atención de una solicitud.</p>
                            <h3>Sugerencia</h3>
                            <p>Es la manifestación de ideas o propuestas tendientes al mejoramiento de un servicio o la gestión de la misma entidad.</p>
                        </div>
                        <div className="col-lg-5" style={{marginTop: "20px"}}>
                            <form>
                                <div>
                                    <h3 style={{marginBottom: "20px"}}>Para enviar su solicitud, rellene los siguientes campos</h3>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Asunto"></input>
                                </div>
                                <div>
                                    <input className="form-control" placeholder="Descripción" style={{height: "200px", verticalAlign: "top"}}></input>
                                </div>
                                <div style={{marginTop: "20px"}}>
                                    <button type="button" className="btn btn-success btn-block">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </Layout>
        );
}
export default PQRS;