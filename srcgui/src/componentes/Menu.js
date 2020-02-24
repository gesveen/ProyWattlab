import React from 'react';
import i18n from '../i18next';

class Menu extends React.Component {
    
    render() {
        const { t } = this.props;

        return (
            
            <div class="container">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-ligth">
                    <a class="navbar-header">
                        <img class="img-responsive" src="../logoTransparente.png" style={{height: 'auto', width: 'auto', maxWidth: '200px'}}/>
                    </a>
                    <ul class = "navbar-nav ml-auto">
                    <button type="button" class="btn btn-success">
                        {i18n.t('login')}
                    </button>
                    </ul>
                </nav>
            </div>
            
        );
    }
}

export default Menu;