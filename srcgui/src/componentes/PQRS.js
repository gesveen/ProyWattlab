import React from 'react';
import { useTranslation } from 'react-i18next'; // Traducciones.
import { Layout } from 'antd';
import Footer from './Footer'
import Menu from './Menu'

function PQRS() {
    const i18n = useTranslation();

    return (
        <Layout className="layout">
            <div>
                <Menu/>
            </div>
                
            <div style={{marginTop: "80px", marginLeft: "0px", marginRight: "0px"}}>
                <img class="img-fluid" alt="Responsive image" src='../imagenes/Banner.jpg'></img>
            </div>
            
            <div className="container" style={{marginTop: "20px", marginBottom: "50px"}}>
                <div className="row" style={{marginTop: "20px"}}>
                    <div className="col-lg-7" style={{textAlign: "left"}}>
                        <h3>{i18n.t('pqrs_petition')}</h3>
                            <p>{i18n.t('pqrs_petition_text')}</p>
                            
                        <h3>{i18n.t('pqrs_complain')}</h3>
                            <p>{i18n.t('pqrs_complain_text')}</p>
                            
                        <h3>{i18n.t('pqrs_claim')}</h3>
                            <p>{i18n.t('pqrs_claim_text')}</p>
                            
                        <h3>{i18n.t('pqrs_suggestion')}</h3>
                            <p>{i18n.t('pqrs_suggestion_text')}</p>
                    </div>
                    
                    <div className="col-lg-5" style={{marginTop: "20px"}}>
                        <form>
                            <div>
                                <h3 style={{marginBottom: "20px"}}>{i18n.t('pqrs_send_request')}</h3>
                            </div>
                            
                            <div className="form-group">
                                <input className="form-control" placeholder={i18n.t('pqrs_subject')}></input>
                            </div>
                            
                            <div>
                                <input className="form-control" placeholder={i18n.t('pqrs_description')} style={{height: "200px", verticalAlign: "top"}}></input>
                            </div>
                            
                            <div style={{marginTop: "20px"}}>
                                <button type="button" className="btn btn-success btn-block">{i18n.t('send_button')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <div>
                <Footer/>
            </div>
        </Layout>
    );
}
export default PQRS;