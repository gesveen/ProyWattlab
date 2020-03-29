import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="container" data-spy="scroll" style={{ marginTop: '20px', marginBottom: "20px", textAlign: "center", paddingBottom: "0px"}}>
                <div className="jumbotron jumbotron-fluid" style={{height: "230px", backgroundColor: "white"}}>
                    <div className="container">
                        <h1 className="display-4">Dashboard</h1>
                        <p className="lead">Seleccione una de las siguientes opciones</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="card" style={{width: "250px", backgroundColor: "#5fb677", marginTop: "10px", marginRight: "10px"}} onClick={() => window.location = "/ModuloAdministrador"}>
                            <div style={{textAlign: "center", marginTop: "20px"}}>
                                <svg fill="black" class="bi bi-house-fill" width="80px" height="80px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
                                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Inicio</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="card" style={{width: "250px", backgroundColor: "#91c470", marginTop: "10px", marginRight: "10px"}} onClick={() => window.location = "/ModuloAdministrador/Users"}>
                            <div style={{textAlign: "center", marginTop: "20px"}}>
                                <svg fill="black" class="bi bi-person-lines-fill" width="80px" height="80px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7 1.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm2 9a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Gestión de usuarios</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="card" style={{width: "250px", backgroundColor: "#bed57e", marginTop: "10px", marginRight: "10px"}} onClick={() => window.location = "/ModuloAdministrador/Transformadores"}>
                            <div style={{textAlign: "center", marginTop: "20px"}}>
                                <svg fill="black" id="Capa_1" enable-background="new 0 0 511.999 511.999" height="80px" viewBox="0 0 511.999 511.999" width="80px" xmlns="http://www.w3.org/2000/svg"><g><path d="m389.053 7.603c-2.666-4.703-7.647-7.603-13.052-7.603h-180c-6.885 0-12.876 4.688-14.546 11.367l-60 241c-1.128 4.482-.117 9.229 2.725 12.861 2.842 3.647 7.207 5.771 11.821 5.771h68.35l-82.397 220.727c-2.637 7.031.337 14.927 6.943 18.486 6.636 3.556 14.846 1.653 19.233-4.395l240-331c3.325-4.556 3.794-10.591 1.245-15.63-2.563-5.024-7.734-8.188-13.374-8.188h-63.501l76.362-128.28c2.784-4.643 2.857-10.414.191-15.116z"/></g></svg>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Gestión de activos</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="card" style={{width: "250px", backgroundColor: "#dddd95", marginTop: "10px"}} >
                            <div style={{textAlign: "center", marginTop: "20px"}}>
                                <svg fill="black" class="bi bi-tools" width="80px" height="80px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 01.419.815v.07a1 1 0 00.293.708L10.5 9.5l.914-.305a1 1 0 011.023.242l3.356 3.356a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0l-3.356-3.356a1 1 0 01-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 00-.707-.293h-.071a1 1 0 01-.814-.419L0 1zm11.354 9.646a.5.5 0 00-.708.708l3 3a.5.5 0 00.708-.708l-3-3z" clip-rule="evenodd"/>
                                    <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 01-3.679 3.674L5.878 12.15a3 3 0 11-2.027-2.027l6.252-6.341A3 3 0 0113.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Configuración del sistema</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;