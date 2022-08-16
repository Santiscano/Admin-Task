import React from 'react';
import ReactDOM from 'react-dom';

function Modal({children}){
    return ReactDOM.createPortal(
        // parametro 1 es algun item como parrafos, textos, formularios, etc y hasta importar componentes
        props.children,
        // segundo argumento es el nodo donde se enviaran
        document.getElementById('modal')
    )
}

export { Modal }