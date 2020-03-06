import React, { Component } from 'react'
import Slides from '../componentes/Slides.js';
import Servicios from '../componentes/Servicios.js';
import Menu from '../componentes/Menu.js';
import i18n from '../i18next';

import { Layout } from 'antd';
import Footer from '../componentes/Footer.js';
const { Content} = Layout;

class MenuInicio extends Component {
    render() {
        const { t } = this.props;

        return (
            <Layout className="layout">
                <div>
                    <Menu/>
                </div>
                
                <div>
                    <Content style={{ padding: '0px 40px', marginTop: 70 }}>
                        <Slides /> 
                    </Content>
                </div>

                <div>
                    <Servicios/>
                </div>

                <div>
                    <Footer/>
                </div>

            </Layout>

        );
    }

}

export default MenuInicio;