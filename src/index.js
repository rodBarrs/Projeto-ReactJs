import React from "react";
import ReactDOM from 'react-dom';

class MeuComponente extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {nome:'Rodrigo'};
    }

    mensagem(nome){
        alert('Ola ' + nome);
        console.log(this)
    }

    render(){
        return <button onClick={this.mensagem.bind(this,'Rodrigo')}>Clique aqui</button>;
    }

   
}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));
