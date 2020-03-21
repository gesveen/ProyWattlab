import React from 'react'
import { useTranslation } from 'react-i18next'; 

function Language() {
    const { t, i18n } = useTranslation();
    function onLanguajeChange(lang) {
        i18n.changeLanguage(lang);
    }
    return(
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" onClick={() => { onLanguajeChange("es") }}>{i18n.t('spanish')}</a>
            <a className="dropdown-item" onClick={() => { onLanguajeChange("en") }}>{i18n.t('english')}</a>
            <a className="dropdown-item" onClick={() => { onLanguajeChange("pt") }}>{i18n.t('portuguese')}</a>
        </div>

    )
    
}

export default Language; 