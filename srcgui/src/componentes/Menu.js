import React, { Component } from 'react'; 
import i18n from '../i18next';

import { Layout } from 'antd';
const { Content} = Layout;

class Menu extends Component {
    render() {
        const { t } = this.props;

        return (

            <div className="container">
                    <header >
                        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-ligth" style={{background:'white'}}>
                            <a class="navbar-header">
                                <img class="img-responsive" src="../logoTransparente.png" style={{ height: 'auto', width: 'auto', maxWidth: '200px' }} onClick={() => window.location = "/home"} />
                            </a>
                            <div class="btn-group">
                                <button class="btn btn-ligth dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {i18n.t('language')}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href={window.location.href} href={window.location.href+"/?lng=es"}> {i18n.t('spanish')}</a>
                                    <a class="dropdown-item" href={window.location.href+"/?lng=en"}>{i18n.t('english')}</a>
                                    <a class="dropdown-item" href={window.location.href+"/?lng=pt"}>{i18n.t('portuguese')}</a>
                                </div>
                            </div>

                            <ul class="navbar-nav ml-auto">
                                <button type="button" class="btn btn-success" onClick={() => window.location = "/Login"}>
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