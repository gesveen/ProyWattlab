import React from 'react';
import i18n from '../i18next';

class Menu extends React.Component {
    
    render() {
        const { t } = this.props;

        return (
            <div class="container">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a class="navbar-header">
                        <img class="img-responsive" src="./logo.png"/>
                    </a>
                    <ul class = "navbar-nav ml-auto">
                    <button type="button" class="btn btn-light">
                        {i18n.t('login')}
                    </button>
                    </ul>
                </nav>
            </div>
            
        );
    }
}

export default Menu;