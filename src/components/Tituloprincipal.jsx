// RSC ES PARA CREAR COMPONENTES FUNCIONALES

import React from 'react';

const Tituloprincipal = (props) => {
    // aqui va la logica
    return (
        <div>
            {/* aqui va el maquetado y poca logica*/}
            <h1>Proyecto contador - {props.codigoComision}</h1>
            <hr />
        </div>
    );
};

export default Tituloprincipal;