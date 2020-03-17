import React, { Component } from 'react'; 
import i18n from '../i18next';
import Sidebar from './Sidebar';
import { Layout } from 'antd';

class ModuloAdministrador extends Component {
    
    render() {
        
        return (
            <Layout className="layout">
                <div>
                    <Sidebar/>
                </div>
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>OHJASK</h1>
                                <p>asjkdsakljdnlkjasdnkjadskjkjnad</p>

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            
        );
    }

}

export default ModuloAdministrador;