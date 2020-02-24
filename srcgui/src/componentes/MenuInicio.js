import React, { Component } from 'react'
import Slides from './Slides.js';
import Servicios from './Servicios';
import i18n from '../i18next';

import { Layout } from 'antd';
const { Content} = Layout;

class MenuInicio extends Component {
    render() {
        const { t } = this.props;

        return (
            <Layout className="layout">
                <div className="container">
                    <header >
                        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-ligth" style={{background:'white'}}>
                            <a class="navbar-header">
                                <img class="img-responsive" src="../logoTransparente.png" style={{ height: 'auto', width: 'auto', maxWidth: '200px' }} />
                            </a>

                            <div class="btn-group">
                                <button class="btn btn-ligth dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {i18n.t('language')}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="/?lng=es#">{i18n.t('spanish')}</a>
                                    <a class="dropdown-item" href="(?lng=en#">{i18n.t('english')}</a>
                                    <a class="dropdown-item" href="/?lng=pt#">{i18n.t('portuguese')}</a>
                                </div>
                            </div>

                            <ul class="navbar-nav ml-auto">
                                <button type="button" class="btn btn-success">
                                    {i18n.t('login')}
                                </button>
                            </ul>
                        </nav>
                    </header>
                </div>
                
                <div>
                    <Content style={{ padding: '0 50px', marginTop: 70 }}>
                        <Slides /> 
                    </Content>
                </div>

                <div>
                    <Servicios/>
                </div>

            </Layout>

        );
    }

}

export default MenuInicio;