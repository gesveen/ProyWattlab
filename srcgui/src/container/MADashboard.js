import React, { Component } from 'react'; 
import i18n from '../i18next';
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';

class MADashboard extends Component {
    
    render() {
        
        return (
            <Layout className="layout">
                <div>
                    <Sidebar/>
                </div>
                <div className="container" style={{marginTop: "20px"}}>
                    <h1>Sección para dashboard</h1>
                </div>
            </Layout>
            
        );
    }

}

export default MADashboard;