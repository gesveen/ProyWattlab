import React, { Component } from 'react'; 
import i18n from '../i18next';
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
import Dashboard from '../componentes/Dashboard'

class MADashboard extends Component {
    
    render() {
        
        return (
            <Layout className="layout">
                <div>
                    <Sidebar/>
                </div>
                <div className="container" style={{marginTop: "20px", paddingLeft: "60px", paddingRight: "70px", textAlign: "center"}}>
                    <Dashboard/>
                </div>
            </Layout>
            
        );
    }

}

export default MADashboard;