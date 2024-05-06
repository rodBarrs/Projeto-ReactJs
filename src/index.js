import React from "react";
import ReactDOM from 'react-dom';

class MeuComponente extends React.Component{

    render(){

        let cores = ['azul', 'Amarelo', 'Vermelho'];

        let listar = cores.map((cor, index) =>{
            return <li key={index}>{index} - {cor}</li>
        });

        return(
            <ul>
                {listar}
            </ul>
        );
    }

   
}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));
