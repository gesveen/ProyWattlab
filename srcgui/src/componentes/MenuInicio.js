import React, { Component } from 'react'
import Slides from './Slides.js';
import Servicios from './Servicios';
import Menu from './Menu';
import i18n from '../i18next';

import { Layout } from 'antd';
import Footer from './Footer.js';
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
                    <Content style={{ padding: '0 0px', marginTop: 70 }}>
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