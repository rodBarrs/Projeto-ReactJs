import React from "react";
import ReactDOM from 'react-dom';
import './estilos.css';

class MeuComponente extends React.Component{

    render(){

       const estilo = {
        color : 'blue',
        borderBottom: 'solid 5px green'
       }
      

        return(
          <div>
            <h1 style={{color:'red', backgroundColor:'yellow'}}>CSS interno (inline)</h1>
            <h1 style={estilo}>CSAS atraves de variaveis e constantes</h1>
            <h1 className='minhaClasse'>CSS Atraves de classes</h1>
          </div>
        );
    }

   
}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));
