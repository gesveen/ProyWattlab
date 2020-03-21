import React from 'react'; 
import { useTranslation } from 'react-i18next'; 
import {Link } from 'react-router-dom';

import Language from './Language';

function Menu() {
        const i18n = useTranslation(); 
            return (
                <div className="container">
                        <header>
                            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-ligth" style={{background:'white'}}>
                                
                                <Link to="/" className="navbar-header">
                                    <img className="img-responsive" src="../imagenes/logoTransparente.png" style={{ height: 'auto', width: 'auto', maxWidth: '200px' }}/>
                                </Link>

                                <div className="btn-group">
                                    <button className="btn btn-ligth dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {i18n.t('language')}
                                    </button>

                                    <Language/>
                                </div>

                                <ul className="navbar-nav ml-auto">
                                    <button type="button" className="btn btn-success" onClick={() => window.location = "/Login"}>
                                        {i18n.t('login')}                                
                                    </button>
                                </ul>
                            </nav>
                        </header>
                    </div>
     );
}

export default Menu;