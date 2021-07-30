import React from 'react';
import '../Inicio/inicio.css';
import restaurante from "../../utils/images/restaurante.jpg"

const LinksInicio = () => {
    return (
        <div>
            <div className="oficial">
                <img src={restaurante} alt="restaurant" />
                <a href="https://lenosycarbon.com.co/">PAGIANA OFCIAL</a>
            </div>
            <div className="historia">
                <h1>NUESTRA HISTORIA</h1>
                <p>En Leños & Carbón, junto a las Fundaciones Best Buddies y RECA, brindamos
                    oportunidades de trabajo a personas con discapacidad intelectual, por que
                    creemos que nuestros espacios de trabajo son más sanos cuando se enriquecen
                    con la diversidad; y por que creemos que es responsabilidad de todos lograr
                    una sociedad más incluyente. El aporte que ellos hacen con su trabajo brinda
                    a nuestros invitados mejores experiencias, mas humanas y cercanas. Buscamos
                    que al SER ELLOS MISMOS crezcan con nuestra organización y se sientan incluidos,
                    aportando a sus familias y a la sociedad. <br />
                    QUEREMOS QUE EN NUESTROS RESTAURANTES HAGAMOS INDIFERENTE LA DIFERENCIA.
                </p>
            </div>
        </div>

    );
};

export default LinksInicio;