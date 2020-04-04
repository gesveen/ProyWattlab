import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Language from './Language';

function Transformador() {
    const i18n = useTranslation();
    return (
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label for="inputEmail4">ID Transformador</label>
                    <input type="text" className="form-control" id="inputEmail4"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">Subestación</label>
                        <select id="inputState" className="form-control">
                            <option selected>Sub1</option>
                            <option>Sub2</option>
                            <option>Sub3</option>
                            <option>Sub4</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">Grupo de conexión</label>
                        <select id="inputState" class="form-control">
                            <option selected>Estrella</option>
                            <option>Triángulo</option>
                            <option>Zig Zag</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label for="inputEmail4">Tensión primaria</label>
                    <input type="text" className="form-control" id="inputEmail4"></input>
                    </div>
                    <div className="form-group col-md-4">
                    <label for="inputPassword4">Tensión máxima</label>
                    <input type="text" className="form-control" id="inputPassword4"></input>
                    </div>
                    <div className="form-group col-md-4">
                    <label for="inputPassword4">Tensión secundaria</label>
                    <input type="text" className="form-control" id="inputPassword4"></input>
                    </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-4">
                    <label for="inputEmail4">Potencia nominal</label>
                    <input type="text" className="form-control" id="inputEmail4"></input>
                    </div>
                    <div className="form-group col-md-4">
                    <label for="inputPassword4">Intensidad nominal</label>
                    <input type="text" className="form-control" id="inputPassword4"></input>
                    </div>
                    <div className="form-group col-md-4">
                    <label for="inputPassword4">Tensión cortocircuito</label>
                    <input type="text" className="form-control" id="inputPassword4"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputEmail4">Relación de transformador</label>
                    <input type="text" className="form-control" id="inputEmail4"></input>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="inputPassword4">Ubicación</label>
                    <button type="submit" className="btn btn-danger btn-block">
                        <svg className="bi bi-geo-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                        </svg>
                        &nbsp; Seleccionar en el mapa</button>
                    </div>
                </div>
                <button type="submit" className="btn btn-success btn-block">Añadir</button>
            </form>
        </div>
    );
}

export default Transformador;