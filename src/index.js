import React from "react";
import ReactDOM from 'react-dom';



class Componente extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.informacoes.nome}</p>
                <p>{this.props.informacoes.idade}</p>
            </div>
        );
    }
}

var dados = {nome:"Rodrigo", idade: 25};
ReactDOM.render(<Componente informacoes={dados}/>,document.getElementById('root'));