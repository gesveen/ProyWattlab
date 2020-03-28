import React, { Component } from 'react'; 
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
import Maps from '../componentes/Maps'

class MATransformadores extends Component {
    
    render() {
        
        return (
            <Layout className="layout">
                <div>
                    <Sidebar/>
                </div>
                <div className="container" style={{marginTop: "0px"}}>
                    <div style={{backgroundColor: "black", margin: "1em auto"}}>
                        <Maps/>
                    </div>
                    <div>
                        <h1>Longitud</h1>
                        <input placeholder=""></input>
                        <h1>Latitud</h1>
                        <input></input>
                    </div>
                </div>
            </Layout>
            
        );
    }

}

export default MATransformadores;