import React from 'react';
import i18n from '../i18next';

class Footer extends React.Component {
    render() {
        return (
            <footer className="navbar navbar-expand-md navbar-dark fixed-buttom" style={{ backgroundColor: 'black', color: 'white'}}>
                <p>&copy; {(new Date().getFullYear())} wattlab, Inc.</p>
            </footer>
        );
    }
}

export default Footer;