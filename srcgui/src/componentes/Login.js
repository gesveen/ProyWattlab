import React from 'react';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import Menu from './Menu';
import Recaptcha from 'react-recaptcha';
import './style/recaptcha.css';
import { Layout } from 'antd';
let valido; 

//FUNCIONES DEL CAPTCHA
var callback = function () {
    console.log('Done!!!!');
};

var verifyCallback = function (response) {
     valido = response; 
};

const handleFormSubmit = () => {
    if(valido != null){
        window.location = "/ModuloAdministrador";
    }else{
        alert("Debes confirmar el captcha antes de iniciar sesión.")
    }
    
}

function Login() {
    const i18n = useTranslation();

    return (
        <Layout className="layout">
            <div>
                <Menu />
            </div>

            <main role="main" className="flex-shrink-0 mt-5">
                <div className="row">
                    <div className="col-lg-7">
                        <img src="../imagenes/Bombillo.jpg" className="img-fluid" alt="Responsive image" width="auto" height="auto"></img>
                    </div>
                    <div className="col-lg-5">
                        <div className="container" style={{ marginTop: 80, marginBottom: 70, textAlign: "center" }}>
                            <form style={{ marginTop: '20px' }}>
                                <div>
                                    <h1>WATTLAB</h1>
                                    <p>{i18n.t('info_login')}</p>
                                </div>

                                <div className="form-group">
                                    <input className="form-control" placeholder={i18n.t('login_document')}></input>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder={i18n.t('login_password')}></input>
                                </div>
                                <div className="recaptcha ">
                                    <Recaptcha
                                        sitekey="6LdoWeUUAAAAAElS6IhF9lP_W6DbxqWTUDB-o-mL"
                                        render="explicit"
                                        verifyCallback={verifyCallback}
                                        onloadCallback={callback}
                                    />
                                </div>
                                <div>
                                    <button type="button" className="btn btn-success btn-block" onClick={handleFormSubmit}>{i18n.t('click_here')}</button>
                                </div>
                                <div style={{ marginTop: 15 }}>
                                    <a href="#" className="text-decoration-none">{i18n.t('login_password_forget')}</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <div>
                <Footer />
            </div>
        </Layout>
    );
}

export default Login;
