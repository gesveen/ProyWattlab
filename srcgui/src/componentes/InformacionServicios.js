import React from 'react';

import Menu from './Menu';
import { Layout } from 'antd';
import Footer from './Footer.js';
import i18n from '../i18next';
import Sidebar from './Sidebar';

class InformacionServicios extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <div>
                    <Menu />
                </div>
                <div>
                    <Sidebar/>
                </div>
                <div>
                    <Footer />
                </div>
                
            </Layout>
        );
    }
}

export default InformacionServicios;