import React from 'react';
import Footer from './Footer';
import { useTranslation } from 'react-i18next'; 
import Menu from './Menu';
import ReCAPTCHA from "react-google-recaptcha";
import './style/recaptcha.css';
import { Layout} from 'antd';

function onChange(value) {
    console.log("Captcha value:", value);
}

function Login(){    
    const i18n = useTranslation(); 
        return (
            <Layout className="layout">
                <div>
                    <Menu/>
                </div>
                <main role="main" className="flex-shrink-0 mt-5">
                    <div className="row">
                        <div className="col-lg-7">
                            <img src="../imagenes/Bombillo.jpg" className="img-fluid" alt="Responsive image" width="auto" height="auto"></img>
                        </div>
                        <div className="col-lg-5">
                            <div className="container" style={{marginTop: 80, marginBottom: 70}}>
                                <form style={{marginTop: '20px'}}>
                                    <div>
                                        <h1>WATTLAB</h1>
                                        <p>{i18n.t('info_login')}</p>
                                    </div>
                                    
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Número de documento"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Contraseña"></input>
                                    </div>
                                    <div className="recaptcha">
                                        <ReCAPTCHA size="normal" badge="inline" sitekey="6Ld-P9wUAAAAAJe-rewj_A9_m2B-X6B3YsVMvK5i" onChange={onChange} />
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-success btn-block" onClick={() => window.location = "/ModuloAdministrador"}>{i18n.t('click_here')}</button>
                                    </div>
                                    <div style={{marginTop: 15}}>
                                        <a href="#" className="text-decoration-none">¿Has olvidado tu contraseña?</a>
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

export default Login;