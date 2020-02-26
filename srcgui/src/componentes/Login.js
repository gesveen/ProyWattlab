import React from 'react';
import Footer from './Footer';
import Menu from './Menu';
import i18n from '../i18next';
import ReCAPTCHA from "react-google-recaptcha";
import './style/recaptcha.css';

import { Layout, AutoComplete } from 'antd';
const { Content} = Layout;

function onChange(value) {
    console.log("Captcha value:", value);
}

class Login extends React.Component {
    
    render() {
        return (
            <Layout className="layout">
                <main role="main" className="flex-shrink-0 mt-5">
                    <div class="row">
                        <div class="col-lg-8">
                            <img src="../Bombillo.jpg" class="img-fluid" alt="Responsive image"></img>
                        </div>
                        <div class="col-lg-4">
                            <div class="container" style={{marginTop: 70, marginBottom: 70}}>
                                <form>
                                    <div>
                                        <h1>WATTLAB</h1>
                                        <p>Ingresa con tus datos a la zona de empleados, aquí puedes realizar más acciones y conocer los movimientos de los usuarios.</p>
                                    </div>
                                    
                                    <div class="form-group">
                                        <input class="form-control" placeholder="Número de documento"></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Contraseña"></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Repetir contraseña"></input>
                                    </div>
                                    <div class="recaptcha">
                                        <ReCAPTCHA size="normal" badge="inline" sitekey="6Ld-P9wUAAAAAJe-rewj_A9_m2B-X6B3YsVMvK5i" onChange={onChange} />
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-success btn-block">Enviar</button>
                                    </div>
                                    <div style={{marginTop: 15}}>
                                        <a href="#" class="text-decoration-none">¿Has olvidado tu contraseña?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <div>
                    <Footer/>
                </div>
            </Layout>
        );
    }
}

export default Login;