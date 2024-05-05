//Importar Módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente

class MeuComponente extends React.Component{
    render(){
        return <h1>Meu primeiro Componente</h1>
    }
}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));