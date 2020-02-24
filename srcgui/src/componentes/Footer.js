import React from 'react';
import i18n from '../i18next';

class Footer extends React.Component {

    render() {

        return (

            <footer style={{backgroundColor: 'black', color: 'white', position: 'fixed', left: '0px', bottom: '0px', right: '0px', width: '100%', textAlign: 'center'}}>
                <p>&copy; {(new Date().getFullYear())} wattlab, Inc.</p>         
            </footer>

        );
    }
}

export default Footer;