import React from 'react'
import CardNoticia from '../componentes/CardNoticia'

function Noticias() {
    return (
        <div className="container" style={{ marginTop: '15px', marginBottom: "20px", textAlign: "center"}}>
            <div style={{marginBottom: "20px", marginTop: "20px"}}>
                <h1>Noticias y novedades</h1>
            </div>
            <div>
                <p>Aquí va la sección de noticias</p>
            </div>
        </div>
    )
}

export default Noticias;