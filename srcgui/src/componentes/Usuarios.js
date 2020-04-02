import React, { Component } from 'react';
import Encabezado from './Encabezado';

function Usuarios() {
    return (
        <div className="container-fluid" style={{backgroundColor: "white", position: "absolute", top: "70px", left: "0px"}}>
            <Encabezado
            titulo = "Panel de usuarios"
            descripcion = "A continuación, encontrará el listado de usuarios"/>
            <div className="container" style={{justifyContent: "center"}}>
                <form>
                    <div className="form-row justify-content-between">
                        <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12" style={{marginBottom: "10px"}}>
                            <div className="input-group">
                                <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required></input>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend2">
                                    <svg class="bi bi-search" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-auto mr-auto">
                            <button className="btn btn-success" type="button">Buscar</button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-danger" type="button">
                            <svg class="bi bi-person-plus-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7.5-3a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clip-rule="evenodd"/>
                            </svg>
                                &nbsp; Nuevo
                            </button>
                        </div>
                    </div>
                    <div className="container pre-scrollable" style={{marginTop: "10px", maxHeight: "350px", marginBottom: "20px"}}>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Fecha inicio</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1111111</th>
                                    <td>Mark Otto</td>
                                    <td>Operador</td>
                                    <td>Activo</td>
                                    <td>21-03-2020</td>
                                    <td>
                                        <button type="button" className="btn btn-success" style={{marginBottom: "10px", width: "130px"}}>
                                            <svg class="bi bi-pencil-square" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
                                            </svg>
                                            &nbsp; Modificar
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger" style={{marginBottom: "10px", width: "130px"}}>
                                            <svg class="bi bi-eye-slash-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 01-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 002.79-.588zM5.21 3.088A7.028 7.028 0 018 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 00-4.474-4.474L5.21 3.089z"/>
                                                <path d="M5.525 7.646a2.5 2.5 0 002.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 012.829 2.829z"/>
                                                <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z" clip-rule="evenodd"/>
                                            </svg>
                                            &nbsp; Inactivar
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1111111</th>
                                    <td>Mark Otto</td>
                                    <td>Operador</td>
                                    <td>Activo</td>
                                    <td>21-03-2020</td>
                                    <td>
                                        <button type="button" className="btn btn-success" style={{marginBottom: "10px", width: "130px"}}>
                                            <svg class="bi bi-pencil-square" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
                                            </svg>
                                            &nbsp; Modificar
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger" style={{marginBottom: "10px", width: "130px"}}>
                                            <svg class="bi bi-eye-slash-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 01-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 002.79-.588zM5.21 3.088A7.028 7.028 0 018 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 00-4.474-4.474L5.21 3.089z"/>
                                                <path d="M5.525 7.646a2.5 2.5 0 002.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 012.829 2.829z"/>
                                                <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z" clip-rule="evenodd"/>
                                            </svg>
                                            &nbsp; Inactivar
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Usuarios;