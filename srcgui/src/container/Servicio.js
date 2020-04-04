import React, { Component } from 'react';
import Card from '../componentes/Card.js';

class Servicio extends Component {
    render() {
        return (
            <div className="container" style={{ marginTop: '15px', marginBottom: "20px", textAlign: "center"}}>
                <div className="row">

                    <Card
                        img='../imagenes/Consultar.jpg'
                        titulo='consult_bill'
                        descripcion='consult_bill_text'
                        urlRuta='/ConsultaFactura' />

                    <Card
                        img='../imagenes/Informacion.jpg'
                        titulo='information'
                        descripcion='information_text'
                        urlRuta='/InformacionServicios' />

                    <Card
                        img='../imagenes/PQRS.jpg'
                        titulo='pqrs'
                        descripcion='pqrs_text'
                        urlRuta='/PQRS' />
                </div>
            </div>
        )
    }
}

export default Servicio;