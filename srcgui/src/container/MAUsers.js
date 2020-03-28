import React, { Component } from 'react'; 
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';

class MAUsers extends Component {
    
    render() {
        
        return (
            <Layout className="layout">
                <div>
                    <Sidebar/>
                </div>
                <div className="container" style={{marginTop: "20px"}}>
                    <h1>Sección para Users</h1>
                </div>
            </Layout>
            
        );
    }

}

export default MAUsers;