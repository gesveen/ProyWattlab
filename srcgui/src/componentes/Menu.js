import React, { Component } from 'react'; 
import i18n from '../i18next';

class Menu extends Component {
    
    render() {
        
        return (

            <div className="container">
                    <header >
                        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-ligth" style={{background:'white'}}>
                            <a className="navbar-header">
                                <img className="img-responsive" src="../imagenes/logoTransparente.png" style={{ height: 'auto', width: 'auto', maxWidth: '200px' }} onClick={() => window.location = "/"} />
                            </a>
                            <div className="btn-group">
                                <button className="btn btn-ligth dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {i18n.t('language')}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href={window.location.href + "?lng=es"}> {i18n.t('spanish')}</a>
                                <a className="dropdown-item" href={window.location.href + "?lng=en"}>{i18n.t('english')}</a>
                                <a className="dropdown-item" href={window.location.href + "?lng=pt"}>{i18n.t('portuguese')}</a>
                                </div>
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

}

export default Menu;