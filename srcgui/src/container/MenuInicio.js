import React, { Component } from 'react'
import Slides from '../componentes/Slides.js';
import Servicio from './Servicio.js';
import Menu from '../componentes/Menu.js';
///PARA DISEÑO 
import { Layout } from 'antd';
import Footer from '../componentes/Footer.js';
const { Content } = Layout;

class MenuInicio extends Component {
    render() {
        return (

            <Layout className="layout">
                <div>
                    <Menu />
                </div>

                <div>
                    <Content style={{ padding: '0px 40px', marginTop: 70 }}>
                        <Slides />
                    </Content>
                </div>

                <div>
                    <Servicio />
                </div>

                <div>
                    <Footer />
                </div>
            </Layout>
        );
    }
}

export default MenuInicio;