import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from 'antd';

import Footer from './Footer';
import Menu from './Menu';
import Recaptcha from 'react-recaptcha';
import './style/recaptcha.css';

import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

let valido;

//FUNCIONES DEL CAPTCHA
var callback = function () {
    console.log('Done!');
};

var verifyCallback = function (response) {
    valido = response;
};

const handleFormSubmit = (e, onAuth) => {
    e.preventDefault();

    if (valido != null) {
        window.location = "/ModuloAdministrador";
        //onAuth(e.target.elements.password.value);
    } else {
        alert("Debes confirmar el captcha antes de iniciar sesión.")
    }
}


function Login(props) {
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
                            <form onSubmit={(event) => handleFormSubmit(event, props.onAuth)} style={{ marginTop: '20px' }}>
                                <div>
                                    <h1>WATTLAB</h1>
                                    <p>{i18n.t('info_login')}</p>
                                </div>

                                <div className="form-group">
                                    <input name="username" className="form-control" placeholder={i18n.t('login_document')}></input>
                                </div>

                                <div className="form-group">
                                    <input name="password" type="password" className="form-control" placeholder={i18n.t('login_password')}></input>
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
                                    <button type="submit" className="btn btn-success btn-block">{i18n.t('click_here')}</button>
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

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth(username, password) {
            dispatch(actions.authLogin(username, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
