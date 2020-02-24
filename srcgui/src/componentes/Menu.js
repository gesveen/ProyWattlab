import React, { Component } from 'react'
import Slides from './Slides.js';
import Footer from './Footer.js'; 
import i18n from '../i18next';

import { Layout } from 'antd';
const { Content} = Layout;

class Menu extends Component {
    render() {
        const { t } = this.props;

        return (
            <Layout className="layout">
                <div className="container">
                    <header >
                        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-ligth">
                            <a class="navbar-header">
                                <img class="img-responsive" src="../logoTransparente.png" style={{ height: 'auto', width: 'auto', maxWidth: '200px' }} />
                            </a>
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
                   
                <Footer/>

            </Layout>

        );
    }

}

export default Menu;