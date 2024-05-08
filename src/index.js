import React from "react";
import ReactDOM from 'react-dom';
import  './estilos.css';

import Formulario from './formulario';
import Tabela from "./tabela";




class Principal extends React.Component{

 
    render(){
        return(
         <div>
          <Formulario/>
          <Tabela/>
         </div>
        );
    }

   
}


ReactDOM.render(<Principal />, document.getElementById('root'));
